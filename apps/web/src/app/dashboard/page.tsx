import { Suspense } from 'react';
import { DashboardContent } from '@/components/dashboard/DashboardContent';
import { DashboardSkeleton } from '@/components/dashboard/DashboardSkeleton';

export const metadata = {
  title: 'Daily Sales Dashboard | Jaime Demo',
  description: 'Owner dashboard showing daily sales statistics',
};

export default function DashboardPage() {
  return (
    <main className="min-h-screen bg-[#0a0a0b] p-6">
      <Suspense fallback={<DashboardSkeleton />}>
        <DashboardContent />
      </Suspense>
    </main>
  );
}
