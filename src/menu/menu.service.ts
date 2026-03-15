import { Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateMenuItemDto } from './dto/create-menu-item.dto';
import { UpdateMenuItemDto } from './dto/update-menu-item.dto';
import { MenuItem } from '@prisma/client';

@Injectable()
export class MenuService {
  constructor(private readonly prisma: PrismaService) {}

  async findAll(): Promise<MenuItem[]> {
    return this.prisma.menuItem.findMany({
      where: { archived: false },
      orderBy: [
        { category: 'asc' },
        { position: 'asc' },
      ],
    });
  }

  async findOne(id: string): Promise<MenuItem> {
    const item = await this.prisma.menuItem.findUnique({
      where: { id },
    });

    if (!item || item.archived) {
      throw new NotFoundException(`Menu item with ID ${id} not found`);
    }

    return item;
  }

  async create(dto: CreateMenuItemDto): Promise<MenuItem> {
    const maxPosition = await this.prisma.menuItem.aggregate({
      where: { category: dto.category, archived: false },
      _max: { position: true },
    });

    const position = dto.position ?? ((maxPosition._max.position ?? -1) + 1);

    return this.prisma.menuItem.create({
      data: {
        name: dto.name,
        description: dto.description,
        priceCents: dto.priceCents,
        category: dto.category,
        position,
      },
    });
  }

  async update(id: string, dto: UpdateMenuItemDto): Promise<MenuItem> {
    await this.findOne(id);

    return this.prisma.menuItem.update({
      where: { id },
      data: {
        ...(dto.name !== undefined && { name: dto.name }),
        ...(dto.description !== undefined && { description: dto.description }),
        ...(dto.priceCents !== undefined && { priceCents: dto.priceCents }),
        ...(dto.category !== undefined && { category: dto.category }),
        ...(dto.position !== undefined && { position: dto.position }),
      },
    });
  }

  async remove(id: string): Promise<MenuItem> {
    await this.findOne(id);

    return this.prisma.menuItem.update({
      where: { id },
      data: { archived: true },
    });
  }
}
