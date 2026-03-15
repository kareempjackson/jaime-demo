'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { ReactNode } from 'react';

interface NavLinkProps {
  href: string;
  children: ReactNode;
  icon?: ReactNode;
}

export function NavLink({ href, children, icon }: NavLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;

  return (
    <Link
      href={href}
      className={`
        flex items-center gap-3 px-4 py-3 rounded-xl font-medium transition-colors
        min-h-[48px]
        ${isActive
          ? 'bg-[#22c55e] text-[#0a0a0b]'
          : 'text-[#a1a1a6] hover:bg-[#1c1c1f] hover:text-[#fafafa]'
        }
      `}
    >
      {icon && <span className="w-6 h-6">{icon}</span>}
      {children}
    </Link>
  );
}
