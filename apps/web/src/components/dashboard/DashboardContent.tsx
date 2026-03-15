'use client';

import { useState, useEffect, useCallback } from 'react';
import { StatsCards } from './StatsCards';
import { TopItemsChart } from './TopItemsChart';
import { OrdersTable } from './OrdersTable';
import { DatePicker } from './DatePicker';
import { DashboardSkeleton } from './DashboardSkeleton';

export interface DailyReport {
  date: string;
  total_revenue_cents: number;
  order_count: number;
  completed_count: number;
  average_order_cents: number;
  top_items: TopItem[];
}

export interface TopItem {
  menu_item_id: string;
  name: string;
  quantity_sold: number;
  revenue_cents: number;
}

export interface Order {
  id: string;
  order_number: string;
  status: 'PENDING' | 'COMPLETED';
  total_cents: number;
  created_at: string;
  completed_at: string | null;
  items: OrderItem[];
}

export interface OrderItem {
  id: string;
  menu_item_id: string;
  name: string;
  quantity: number;
  unit_price_cents: number;
  subtotal_cents: number;
}

function formatDateForAPI(date: Date): string {
  return date.toISOString().split('T')[0];
}

export function DashboardContent() {
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [report, setReport] = useState<DailyReport | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboardData = useCallback(async (date: Date) => {
    setLoading(true);
    setError(null);
    
    const dateStr = formatDateForAPI(date);
    
    try {
      const [reportRes, ordersRes] = await Promise.all([
        fetch(`/api/reports/daily?date=${dateStr}`, {
          headers: {
            'Authorization': `Bearer ${getAuthToken()}`,
          },
        }),
        fetch(`/api/orders?date=${dateStr}`, {
          headers: {
            'Authorization': `Bearer ${getAuthToken()}`,
          },
        }),
      ]);

      if (!reportRes.ok) {
        throw new Error('Failed to fetch daily report');
      }
      if (!ordersRes.ok) {
        throw new Error('Failed to fetch orders');
      }

      const reportData = await reportRes.json();
      const ordersData = await ordersRes.json();

      setReport(reportData);
      setOrders(ordersData.orders || ordersData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDashboardData(selectedDate);
  }, [selectedDate, fetchDashboardData]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  if (loading) {
    return <DashboardSkeleton />;
  }

  if (error) {
    return (
      <div className="flex flex-col items-center justify-center min-h-[400px] gap-4">
        <div className="text-red-400 text-lg">{error}</div>
        <button
          onClick={() => fetchDashboardData(selectedDate)}
          className="px-6 py-3 bg-[#22c55e] text-white rounded-xl font-semibold hover:bg-[#1ea550] transition-colors"
        >
          Retry
        </button>
      </div>
    );
  }

  return (
    <div className="max-w-7xl mx-auto space-y-6">
      <header className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-[#fafafa]">Daily Sales Dashboard</h1>
          <p className="text-[#a1a1a6] mt-1">Track your juice bar performance</p>
        </div>
        <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
      </header>

      {report && (
        <>
          <StatsCards
            totalRevenue={report.total_revenue_cents}
            orderCount={report.order_count}
            averageOrder={report.average_order_cents}
          />

          <TopItemsChart items={report.top_items} />
        </>
      )}

      <OrdersTable orders={orders} />
    </div>
  );
}

function getAuthToken(): string {
  if (typeof window !== 'undefined') {
    return localStorage.getItem('auth_token') || '';
  }
  return '';
}
