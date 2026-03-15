import { NavLink } from './NavLink';
import {
  QueueListIcon,
  Squares2X2Icon,
  ChartBarIcon,
  Cog6ToothIcon,
} from '@heroicons/react/24/outline';

export function Sidebar() {
  return (
    <aside className="w-64 bg-[#141416] min-h-screen p-4 flex flex-col">
      <div className="mb-8">
        <h1 className="text-xl font-bold text-[#fafafa]">Jaime Demo</h1>
        <p className="text-sm text-[#6b6b70]">Juice Bar POS</p>
      </div>

      <nav className="space-y-2 flex-1">
        <NavLink href="/" icon={<Squares2X2Icon />}>
          Menu
        </NavLink>
        <NavLink href="/orders" icon={<QueueListIcon />}>
          Order Queue
        </NavLink>
        <NavLink href="/reports" icon={<ChartBarIcon />}>
          Reports
        </NavLink>
      </nav>

      <nav className="pt-4 border-t border-[#232326]">
        <NavLink href="/settings" icon={<Cog6ToothIcon />}>
          Settings
        </NavLink>
      </nav>
    </aside>
  );
}
