import { Suspense } from 'react';
import { MenuManagement } from '@/components/admin/MenuManagement';
import { getMenuItems, getCategories } from '@/lib/api/menu';

export const metadata = {
  title: 'Menu Management | Jaime Demo',
  description: 'Manage your juice bar menu items',
};

export default async function AdminMenuPage() {
  const [menuItems, categories] = await Promise.all([
    getMenuItems(),
    getCategories(),
  ]);

  return (
    <main className="min-h-screen bg-[#0a0a0b] p-6">
      <Suspense fallback={<MenuManagementSkeleton />}>
        <MenuManagement initialItems={menuItems} initialCategories={categories} />
      </Suspense>
    </main>
  );
}

function MenuManagementSkeleton() {
  return (
    <div className="animate-pulse space-y-6">
      <div className="h-10 w-64 bg-[#1c1c1f] rounded-lg" />
      <div className="space-y-4">
        {[1, 2, 3].map((i) => (
          <div key={i} className="h-24 bg-[#141416] rounded-xl" />
        ))}
      </div>
    </div>
  );
}
