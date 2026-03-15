'use client';

import { useState, useEffect, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { StatsCard } from './StatsCard';
import { TopItemsChart } from './TopItemsChart';
import { OrdersTable } from './OrdersTable';
import { DatePicker } from './DatePicker';

interface DailyReport {
  date: string;
  total_revenue_cents: number;
  order_count: number;
  completed_count: number;
  avg_order_value_cents: number;
  top_items: Array<{
    menu_item_id: string;
    name: string;
    quantity_sold: number;
    revenue_cents: number;
  }>;
}

interface OrderItem {
  id: string;
  menu_item_id: string;
  name: string;
  quantity: number;
  unit_price_cents: number;
  subtotal_cents: number;
}

interface Order {
  id: string;
  order_number: string;
  created_at: string;
  completed_at: string | null;
  total_cents: number;
  items: OrderItem[];
}

export function DailySalesDashboard() {
  const router = useRouter();
  const [selectedDate, setSelectedDate] = useState<Date>(new Date());
  const [report, setReport] = useState<DailyReport | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const formatDateParam = (date: Date): string => {
    return date.toISOString().split('T')[0];
  };

  const fetchData = useCallback(async (date: Date) => {
    setLoading(true);
    setError(null);

    const token = localStorage.getItem('auth_token');
    if (!token) {
      router.push('/login');
      return;
    }

    const dateParam = formatDateParam(date);

    try {
      const [reportRes, ordersRes] = await Promise.all([
        fetch(`/api/reports/daily?date=${dateParam}`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
        fetch(`/api/orders?date=${dateParam}`, {
          headers: { Authorization: `Bearer ${token}` },
        }),
      ]);

      if (reportRes.status === 401 || ordersRes.status === 401) {
        localStorage.removeItem('auth_token');
        router.push('/login');
        return;
      }

      if (reportRes.status === 403) {
        setError('Access denied. Owner privileges required.');
        setLoading(false);
        return;
      }

      if (!reportRes.ok || !ordersRes.ok) {
        throw new Error('Failed to fetch data');
      }

      const reportData = await reportRes.json();
      const ordersData = await ordersRes.json();

      setReport(reportData);
      setOrders(ordersData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, [router]);

  useEffect(() => {
    fetchData(selectedDate);
  }, [selectedDate, fetchData]);

  const handleDateChange = (date: Date) => {
    setSelectedDate(date);
  };

  const formatCurrency = (cents: number): string => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
    }).format(cents / 100);
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center">
        <div className="flex flex-col items-center gap-4">
          <div className="w-12 h-12 border-4 border-[#22c55e] border-t-transparent rounded-full animate-spin" />
          <p className="text-[#a1a1a6] text-lg">Loading dashboard...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center p-6">
        <div className="bg-[#141416] rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-500/20 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-[#fafafa] text-xl font-semibold mb-2">Access Denied</h2>
          <p className="text-[#a1a1a6] mb-6">{error}</p>
          <button
            onClick={() => router.push('/login')}
            className="bg-[#22c55e] text-[#0a0a0b] font-semibold px-6 py-3 rounded-xl hover:bg-[#16a34a] transition-colors"
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  const isToday = formatDateParam(selectedDate) === formatDateParam(new Date());

  return (
    <div className="min-h-screen bg-[#0a0a0b] p-6">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
          <div>
            <h1 className="text-[#fafafa] text-3xl font-bold">
              {isToday ? "Today's Sales" : 'Sales Report'}
            </h1>
            <p className="text-[#a1a1a6] mt-1">
              {selectedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
          <DatePicker selectedDate={selectedDate} onChange={handleDateChange} />
        </div>

        {/* Stats Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
          <StatsCard
            label="Total Revenue"
            value={formatCurrency(report?.total_revenue_cents ?? 0)}
            isPrimary
          />
          <StatsCard
            label="Orders"
            value={String(report?.order_count ?? 0)}
            subtitle={`${report?.completed_count ?? 0} completed`}
          />
          <StatsCard
            label="Avg Order Value"
            value={formatCurrency(report?.avg_order_value_cents ?? 0)}
          />
        </div>

        {/* Top Items Chart */}
        <div className="bg-[#141416] rounded-2xl p-6 mb-8">
          <h2 className="text-[#fafafa] text-xl font-semibold mb-6">Top Selling Items</h2>
          <TopItemsChart items={report?.top_items ?? []} />
        </div>

        {/* Orders Table */}
        <div className="bg-[#141416] rounded-2xl p-6">
          <h2 className="text-[#fafafa] text-xl font-semibold mb-6">
            Orders ({orders.length})
          </h2>
          <OrdersTable orders={orders} />
        </div>
      </div>
    </div>
  );
}
