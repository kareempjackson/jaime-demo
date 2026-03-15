import { Test, TestingModule } from '@nestjs/testing';
import { ReportsService } from './reports.service';
import { PrismaService } from '../prisma/prisma.service';

describe('ReportsService', () => {
  let service: ReportsService;
  let prisma: PrismaService;

  const mockPrismaService = {
    order: {
      findMany: jest.fn(),
    },
  };

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        ReportsService,
        { provide: PrismaService, useValue: mockPrismaService },
      ],
    }).compile();

    service = module.get<ReportsService>(ReportsService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('getDailyReport', () => {
    it('should return correct report for a date with completed orders', async () => {
      const mockOrders = [
        {
          id: '1',
          status: 'COMPLETED',
          totalCents: 1000,
          createdAt: new Date('2024-01-15T10:00:00Z'),
          orderItems: [
            {
              menuItemId: 'item1',
              quantity: 2,
              priceCents: 500,
              menuItem: { name: 'Green Juice' },
            },
          ],
        },
        {
          id: '2',
          status: 'COMPLETED',
          totalCents: 750,
          createdAt: new Date('2024-01-15T11:00:00Z'),
          orderItems: [
            {
              menuItemId: 'item1',
              quantity: 1,
              priceCents: 500,
              menuItem: { name: 'Green Juice' },
            },
            {
              menuItemId: 'item2',
              quantity: 1,
              priceCents: 250,
              menuItem: { name: 'Berry Smoothie' },
            },
          ],
        },
        {
          id: '3',
          status: 'CANCELLED',
          totalCents: 500,
          createdAt: new Date('2024-01-15T12:00:00Z'),
          orderItems: [],
        },
      ];

      mockPrismaService.order.findMany.mockResolvedValue(mockOrders);

      const result = await service.getDailyReport('2024-01-15');

      expect(result.date).toBe('2024-01-15');
      expect(result.order_count).toBe(3);
      expect(result.completed_count).toBe(2);
      expect(result.cancelled_count).toBe(1);
      expect(result.total_revenue_cents).toBe(1750);
      expect(result.average_order_cents).toBe(875);
      expect(result.top_items).toHaveLength(2);
      expect(result.top_items[0].name).toBe('Green Juice');
      expect(result.top_items[0].quantity_sold).toBe(3);
    });

    it('should return zeros for a date with no orders', async () => {
      mockPrismaService.order.findMany.mockResolvedValue([]);

      const result = await service.getDailyReport('2024-01-15');

      expect(result.date).toBe('2024-01-15');
      expect(result.order_count).toBe(0);
      expect(result.completed_count).toBe(0);
      expect(result.cancelled_count).toBe(0);
      expect(result.total_revenue_cents).toBe(0);
      expect(result.average_order_cents).toBe(0);
      expect(result.top_items).toHaveLength(0);
    });
  });
});
