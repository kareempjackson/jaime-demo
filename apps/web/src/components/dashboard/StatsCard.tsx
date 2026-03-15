'use client';

interface StatsCardProps {
  label: string;
  value: string;
  subtitle?: string;
  isPrimary?: boolean;
}

export function StatsCard({ label, value, subtitle, isPrimary = false }: StatsCardProps) {
  return (
    <div
      className={`rounded-2xl p-6 ${
        isPrimary
          ? 'bg-[#22c55e]/10 border-2 border-[#22c55e]/30'
          : 'bg-[#141416]'
      }`}
    >
      <p className="text-[#a1a1a6] text-sm font-medium mb-2">{label}</p>
      <p
        className={`font-bold ${
          isPrimary ? 'text-[#22c55e] text-4xl' : 'text-[#fafafa] text-3xl'
        }`}
      >
        {value}
      </p>
      {subtitle && <p className="text-[#6b6b70] text-sm mt-1">{subtitle}</p>}
    </div>
  );
}
