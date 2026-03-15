'use client';

import { useEffect, useState, useCallback } from 'react';
import { useRouter } from 'next/navigation';
import { DashboardStats } from '@/components/dashboard/DashboardStats';
import { TopItemsChart } from '@/components/dashboard/TopItemsChart';
import { OrdersTable } from '@/components/dashboard/OrdersTable';
import { DatePicker } from '@/components/dashboard/DatePicker';

interface DailyReport {
  date: string;
  total_revenue_cents: number;
  order_count: number;
  completed_count: number;
  average_order_cents: number;
  top_items: Array<{
    menu_item_id: string;
    name: string;
    quantity_sold: number;
    revenue_cents: number;
  }>;
}

interface Order {
  id: string;
  order_number: string;
  status: string;
  total_cents: number;
  created_at: string;
  completed_at: string | null;
  items: Array<{
    id: string;
    menu_item_id: string;
    name: string;
    quantity: number;
    unit_price_cents: number;
    subtotal_cents: number;
  }>;
}

export default function DashboardPage() {
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
      setOrders(ordersData.orders || ordersData);
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

  if (error) {
    return (
      <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center p-6">
        <div className="bg-[#141416] rounded-2xl p-8 max-w-md w-full text-center">
          <div className="w-16 h-16 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8 text-red-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
          </div>
          <h2 className="text-xl font-semibold text-[#fafafa] mb-2">Access Denied</h2>
          <p className="text-[#a1a1a6] mb-6">{error}</p>
          <button
            onClick={() => router.push('/login')}
            className="bg-[#22c55e] text-[#0a0a0b] font-semibold px-6 py-3 rounded-xl hover:bg-[#16a34a] transition-colors"
          >
            Back to Login
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0b] p-6">
      <div className="max-w-7xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-[#fafafa]">Sales Dashboard</h1>
            <p className="text-[#a1a1a6] mt-1">
              {selectedDate.toLocaleDateString('en-US', {
                weekday: 'long',
                year: 'numeric',
                month: 'long',
                day: 'numeric',
              })}
            </p>
          </div>
          <DatePicker selectedDate={selectedDate} onDateChange={handleDateChange} />
        </header>

        {loading ? (
          <div className="flex items-center justify-center h-96">
            <div className="w-12 h-12 border-4 border-[#22c55e] border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <>
            <DashboardStats
              totalRevenue={report?.total_revenue_cents ?? 0}
              orderCount={report?.order_count ?? 0}
              averageOrder={report?.average_order_cents ?? 0}
            />

            <div className="mt-8">
              <TopItemsChart items={report?.top_items ?? []} />
            </div>

            <div className="mt-8">
              <OrdersTable orders={orders} />
            </div>
          </>
        )}
      </div>
    </div>
  );
}
