'use client';

import { useState, useEffect, useCallback } from 'react';
import { StatsCards } from './StatsCards';
import { TopItemsChart } from './TopItemsChart';
import { OrdersTable } from './OrdersTable';
import { DatePicker } from './DatePicker';
import { DailyReport, Order } from '@/types/dashboard';

export function DashboardScreen() {
  const [selectedDate, setSelectedDate] = useState<string>(
    new Date().toISOString().split('T')[0]
  );
  const [report, setReport] = useState<DailyReport | null>(null);
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  const fetchDashboardData = useCallback(async () => {
    setIsLoading(true);
    setError(null);

    try {
      const token = localStorage.getItem('auth_token');
      const headers: HeadersInit = {
        'Content-Type': 'application/json',
      };
      if (token) {
        headers['Authorization'] = `Bearer ${token}`;
      }

      const [reportResponse, ordersResponse] = await Promise.all([
        fetch(`/api/reports/daily?date=${selectedDate}`, { headers }),
        fetch(`/api/orders?date=${selectedDate}`, { headers }),
      ]);

      if (!reportResponse.ok) {
        throw new Error('Failed to fetch daily report');
      }
      if (!ordersResponse.ok) {
        throw new Error('Failed to fetch orders');
      }

      const reportData = await reportResponse.json();
      const ordersData = await ordersResponse.json();

      setReport(reportData);
      setOrders(ordersData);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  }, [selectedDate]);

  useEffect(() => {
    fetchDashboardData();
  }, [fetchDashboardData]);

  const isToday = selectedDate === new Date().toISOString().split('T')[0];

  return (
    <div className="min-h-screen bg-[#0a0a0b] p-6">
      <header className="mb-8 flex items-center justify-between">
        <div>
          <h1 className="text-3xl font-bold text-[#fafafa]">
            {isToday ? "Today's Sales" : 'Sales Report'}
          </h1>
          <p className="mt-1 text-[#a1a1a6]">
            {new Date(selectedDate).toLocaleDateString('en-US', {
              weekday: 'long',
              year: 'numeric',
              month: 'long',
              day: 'numeric',
            })}
          </p>
        </div>
        <DatePicker
          selectedDate={selectedDate}
          onDateChange={setSelectedDate}
        />
      </header>

      {isLoading ? (
        <div className="flex h-64 items-center justify-center">
          <div className="h-8 w-8 animate-spin rounded-full border-2 border-[#22c55e] border-t-transparent" />
        </div>
      ) : error ? (
        <div className="rounded-xl bg-[#141416] p-8 text-center">
          <p className="text-red-400">{error}</p>
          <button
            onClick={fetchDashboardData}
            className="mt-4 rounded-lg bg-[#22c55e] px-6 py-3 font-semibold text-[#0a0a0b] transition-colors hover:bg-[#1ea550]"
          >
            Retry
          </button>
        </div>
      ) : (
        <>
          <StatsCards report={report} />
          <div className="mt-8">
            <TopItemsChart topItems={report?.top_items || []} />
          </div>
          <div className="mt-8">
            <OrdersTable orders={orders} />
          </div>
        </>
      )}
    </div>
  );
}
