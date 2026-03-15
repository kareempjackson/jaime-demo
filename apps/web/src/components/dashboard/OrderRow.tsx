import { Order } from '@/types/dashboard';
import { formatPrice } from '@/utils/formatPrice';

interface OrderRowProps {
  order: Order;
  isExpanded: boolean;
  onToggle: () => void;
}

export function OrderRow({ order, isExpanded, onToggle }: OrderRowProps) {
  const orderTime = new Date(order.created_at).toLocaleTimeString('en-US', {
    hour: 'numeric',
    minute: '2-digit',
    hour12: true,
  });

  const totalItems = order.items.reduce((sum, item) => sum + item.quantity, 0);

  return (
    <>
      <tr
        onClick={onToggle}
        className="cursor-pointer border-b border-[#1c1c1f] transition-colors hover:bg-[#1c1c1f]"
      >
        <td className="px-4 py-4 font-mono text-sm font-semibold text-[#fafafa]">
          #{order.order_number}
        </td>
        <td className="px-4 py-4 text-sm text-[#a1a1a6]">{orderTime}</td>
        <td className="px-4 py-4 text-sm text-[#a1a1a6]">
          {totalItems} {totalItems === 1 ? 'item' : 'items'}
        </td>
        <td className="px-4 py-4">
          <span
            className={`inline-flex rounded-full px-2 py-1 text-xs font-medium ${
              order.status === 'completed'
                ? 'bg-[#22c55e]/10 text-[#22c55e]'
                : 'bg-[#eab308]/10 text-[#eab308]'
            }`}
          >
            {order.status === 'completed' ? 'Completed' : 'Pending'}
          </span>
        </td>
        <td className="px-4 py-4 text-right font-semibold text-[#fafafa]">
          {formatPrice(order.total_cents)}
        </td>
        <td className="px-4 py-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className={`text-[#6b6b70] transition-transform ${isExpanded ? 'rotate-180' : ''}`}
          >
            <polyline points="6 9 12 15 18 9" />
          </svg>
        </td>
      </tr>
      {isExpanded && (
        <tr className="bg-[#1c1c1f]">
          <td colSpan={6} className="px-4 py-4">
            <div className="ml-4 space-y-2">
              {order.items.map((item, index) => (
                <div
                  key={index}
                  className="flex items-center justify-between text-sm"
                >
                  <div className="flex items-center gap-3">
                    <span className="flex h-6 w-6 items-center justify-center rounded bg-[#232326] text-xs font-medium text-[#a1a1a6]">
                      {item.quantity}x
                    </span>
                    <span className="text-[#fafafa]">{item.name}</span>
                  </div>
                  <span className="text-[#a1a1a6]">
                    {formatPrice(item.unit_price_cents * item.quantity)}
                  </span>
                </div>
              ))}
            </div>
          </td>
        </tr>
      )}
    </>
  );
}
