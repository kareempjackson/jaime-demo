import { Suspense } from 'react';
import { OrderQueueContainer } from '@/components/orders/OrderQueueContainer';
import { OrderQueueSkeleton } from '@/components/orders/OrderQueueSkeleton';

export const metadata = {
  title: 'Order Queue | Jaime Demo',
  description: 'View and manage today\'s orders',
};

export default function OrdersPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] p-6">
      <header className="mb-6">
        <h1 className="text-3xl font-bold text-[#fafafa]">Order Queue</h1>
        <p className="text-[#a1a1a6] mt-1">Today's orders</p>
      </header>
      <Suspense fallback={<OrderQueueSkeleton />}>
        <OrderQueueContainer />
      </Suspense>
    </main>
  );
}
