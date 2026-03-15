'use client';

import { useState, useCallback } from 'react';
import { MenuPanel } from './MenuPanel';
import { OrderPanel } from './OrderPanel';
import { SuccessModal } from './SuccessModal';
import { OrderItem, MenuItem } from '@/types/order';

export function OrderScreen() {
  const [orderItems, setOrderItems] = useState<OrderItem[]>([]);
  const [showSuccess, setShowSuccess] = useState(false);
  const [orderNumber, setOrderNumber] = useState<string>('');
  const [isSubmitting, setIsSubmitting] = useState(false);

  const addItem = useCallback((menuItem: MenuItem) => {
    setOrderItems((prev) => {
      const existing = prev.find((item) => item.menuItemId === menuItem.id);
      if (existing) {
        return prev.map((item) =>
          item.menuItemId === menuItem.id
            ? { ...item, quantity: item.quantity + 1 }
            : item
        );
      }
      return [
        ...prev,
        {
          menuItemId: menuItem.id,
          name: menuItem.name,
          priceCents: menuItem.priceCents,
          quantity: 1,
        },
      ];
    });
  }, []);

  const updateQuantity = useCallback((menuItemId: string, delta: number) => {
    setOrderItems((prev) =>
      prev
        .map((item) =>
          item.menuItemId === menuItemId
            ? { ...item, quantity: item.quantity + delta }
            : item
        )
        .filter((item) => item.quantity > 0)
    );
  }, []);

  const removeItem = useCallback((menuItemId: string) => {
    setOrderItems((prev) => prev.filter((item) => item.menuItemId !== menuItemId));
  }, []);

  const completeOrder = useCallback(async () => {
    if (orderItems.length === 0 || isSubmitting) return;

    setIsSubmitting(true);
    try {
      const response = await fetch('/api/orders', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          items: orderItems.map((item) => ({
            menuItemId: item.menuItemId,
            quantity: item.quantity,
          })),
        }),
      });

      if (!response.ok) {
        throw new Error('Failed to create order');
      }

      const data = await response.json();
      setOrderNumber(data.orderNumber || data.order_number || `#${String(data.id).padStart(3, '0')}`);
      setShowSuccess(true);
    } catch (error) {
      console.error('Error creating order:', error);
      alert('Failed to create order. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  }, [orderItems, isSubmitting]);

  const handleSuccessClose = useCallback(() => {
    setShowSuccess(false);
    setOrderItems([]);
    setOrderNumber('');
  }, []);

  return (
    <div className="flex h-screen bg-[#0a0a0b]">
      <div className="w-[70%] h-full overflow-hidden">
        <MenuPanel onAddItem={addItem} />
      </div>
      <div className="w-[30%] h-full border-l border-[#232326]">
        <OrderPanel
          items={orderItems}
          onUpdateQuantity={updateQuantity}
          onRemoveItem={removeItem}
          onCompleteOrder={completeOrder}
          isSubmitting={isSubmitting}
        />
      </div>
      {showSuccess && (
        <SuccessModal orderNumber={orderNumber} onClose={handleSuccessClose} />
      )}
    </div>
  );
}
