'use client';

import { useState, useEffect, useCallback } from 'react';
import { OrderColumn } from './OrderColumn';
import { OrderDetailModal } from './OrderDetailModal';
import { Order, OrderStatus } from '@/types/order';
import { fetchTodaysOrders, markOrderComplete, cancelOrder } from '@/lib/api/orders';

const POLL_INTERVAL_MS = 30000;

export function OrderQueueContainer() {
  const [orders, setOrders] = useState<Order[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [selectedOrder, setSelectedOrder] = useState<Order | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [isActionLoading, setIsActionLoading] = useState(false);
  const [lastUpdated, setLastUpdated] = useState<Date | null>(null);

  const loadOrders = useCallback(async () => {
    try {
      const data = await fetchTodaysOrders();
      setOrders(data);
      setLastUpdated(new Date());
      setError(null);
    } catch (err) {
      setError('Failed to load orders. Retrying...');
      console.error('Error fetching orders:', err);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    loadOrders();
    const interval = setInterval(loadOrders, POLL_INTERVAL_MS);
    return () => clearInterval(interval);
  }, [loadOrders]);

  const pendingOrders = orders.filter(
    (order) => order.status === OrderStatus.PENDING
  );
  const completedOrders = orders.filter(
    (order) => order.status === OrderStatus.COMPLETED
  );

  const handleOrderClick = (order: Order) => {
    if (order.status === OrderStatus.PENDING) {
      setSelectedOrder(order);
      setIsModalOpen(true);
    }
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
    setSelectedOrder(null);
  };

  const handleMarkComplete = async () => {
    if (!selectedOrder) return;
    setIsActionLoading(true);
    try {
      await markOrderComplete(selectedOrder.id);
      await loadOrders();
      handleCloseModal();
    } catch (err) {
      console.error('Error completing order:', err);
      setError('Failed to complete order');
    } finally {
      setIsActionLoading(false);
    }
  };

  const handleCancelOrder = async () => {
    if (!selectedOrder) return;
    setIsActionLoading(true);
    try {
      await cancelOrder(selectedOrder.id);
      await loadOrders();
      handleCloseModal();
    } catch (err) {
      console.error('Error canceling order:', err);
      setError('Failed to cancel order');
    } finally {
      setIsActionLoading(false);
    }
  };

  if (isLoading) {
    return (
      <div className="flex items-center justify-center h-[60vh]">
        <div className="w-12 h-12 border-4 border-[#22c55e] border-t-transparent rounded-full animate-spin" />
      </div>
    );
  }

  return (
    <div className="space-y-4">
      {error && (
        <div className="bg-[#7f1d1d] border border-[#dc2626] text-[#fafafa] px-4 py-3 rounded-xl">
          {error}
        </div>
      )}

      <div className="flex items-center justify-between text-[#6b6b70] text-sm">
        <span>
          {pendingOrders.length} pending · {completedOrders.length} completed
        </span>
        {lastUpdated && (
          <span>Last updated: {lastUpdated.toLocaleTimeString()}</span>
        )}
      </div>

      <div className="grid grid-cols-2 gap-6">
        <OrderColumn
          title="Pending"
          orders={pendingOrders}
          onOrderClick={handleOrderClick}
          emptyMessage="No pending orders"
          accentColor="#f59e0b"
        />
        <OrderColumn
          title="Completed"
          orders={completedOrders}
          onOrderClick={handleOrderClick}
          emptyMessage="No completed orders yet"
          accentColor="#22c55e"
        />
      </div>

      <OrderDetailModal
        order={selectedOrder}
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        onMarkComplete={handleMarkComplete}
        onCancelOrder={handleCancelOrder}
        isLoading={isActionLoading}
      />
    </div>
  );
}
