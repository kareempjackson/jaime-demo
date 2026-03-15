'use client';

import { useState, useEffect, useCallback } from 'react';
import { MenuItem, MenuItemsByCategory } from '@/types/menu';
import { MenuCategorySection } from './MenuCategorySection';
import { ArchivedItemsSection } from './ArchivedItemsSection';
import { MenuItemModal } from './MenuItemModal';
import { ConfirmDialog } from './ConfirmDialog';

export function AdminMenuScreen() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [archiveConfirm, setArchiveConfirm] = useState<MenuItem | null>(null);

  const fetchMenuItems = useCallback(async () => {
    try {
      setLoading(true);
      const token = localStorage.getItem('auth_token');
      const response = await fetch('/api/menu?include_archived=true', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch menu items');
      const data = await response.json();
      setMenuItems(data);
      setError(null);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMenuItems();
  }, [fetchMenuItems]);

  const activeItems = menuItems.filter(item => !item.archived);
  const archivedItems = menuItems.filter(item => item.archived);

  const itemsByCategory: MenuItemsByCategory = activeItems.reduce((acc, item) => {
    if (!acc[item.category]) {
      acc[item.category] = [];
    }
    acc[item.category].push(item);
    return acc;
  }, {} as MenuItemsByCategory);

  // Sort items within each category by position
  Object.keys(itemsByCategory).forEach(category => {
    itemsByCategory[category].sort((a, b) => a.position - b.position);
  });

  const categories = Object.keys(itemsByCategory).sort();
  const existingCategories = [...new Set(menuItems.map(item => item.category))].sort();

  const handleAddItem = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleEditItem = (item: MenuItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleArchiveItem = (item: MenuItem) => {
    setArchiveConfirm(item);
  };

  const handleConfirmArchive = async () => {
    if (!archiveConfirm) return;
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`/api/menu/${archiveConfirm.id}`, {
        method: 'DELETE',
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to archive item');
      await fetchMenuItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to archive item');
    } finally {
      setArchiveConfirm(null);
    }
  };

  const handleRestoreItem = async (item: MenuItem) => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`/api/menu/${item.id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ archived: false }),
      });
      if (!response.ok) throw new Error('Failed to restore item');
      await fetchMenuItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to restore item');
    }
  };

  const handleSaveItem = async (data: { name: string; price_cents: number; category: string }) => {
    try {
      const token = localStorage.getItem('auth_token');
      const url = editingItem ? `/api/menu/${editingItem.id}` : '/api/menu';
      const method = editingItem ? 'PATCH' : 'POST';
      
      const response = await fetch(url, {
        method,
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
      });
      if (!response.ok) throw new Error('Failed to save item');
      await fetchMenuItems();
      setIsModalOpen(false);
      setEditingItem(null);
    } catch (err) {
      throw err;
    }
  };

  const handleReorder = async (category: string, itemId: string, newPosition: number) => {
    try {
      const token = localStorage.getItem('auth_token');
      const response = await fetch(`/api/menu/${itemId}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ position: newPosition }),
      });
      if (!response.ok) throw new Error('Failed to reorder item');
      await fetchMenuItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to reorder item');
    }
  };

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0a0a0b] flex items-center justify-center">
        <div className="text-[#a1a1a6] text-lg">Loading menu...</div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#0a0a0b] p-6">
      <div className="max-w-4xl mx-auto">
        <header className="flex items-center justify-between mb-8">
          <h1 className="text-2xl font-bold text-[#fafafa]">Menu Management</h1>
          <button
            onClick={handleAddItem}
            className="px-6 py-3 bg-[#22c55e] text-[#fafafa] font-semibold rounded-xl hover:bg-[#1ea550] active:scale-[0.98] transition-all min-h-[48px]"
          >
            + Add Item
          </button>
        </header>

        {error && (
          <div className="mb-6 p-4 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400">
            {error}
          </div>
        )}

        <div className="space-y-6">
          {categories.length === 0 ? (
            <div className="text-center py-12 text-[#6b6b70]">
              <p className="text-lg">No menu items yet</p>
              <p className="mt-2">Click "Add Item" to create your first menu item</p>
            </div>
          ) : (
            categories.map(category => (
              <MenuCategorySection
                key={category}
                category={category}
                items={itemsByCategory[category]}
                onEdit={handleEditItem}
                onArchive={handleArchiveItem}
                onReorder={handleReorder}
              />
            ))
          )}
        </div>

        {archivedItems.length > 0 && (
          <ArchivedItemsSection
            items={archivedItems}
            onRestore={handleRestoreItem}
          />
        )}
      </div>

      {isModalOpen && (
        <MenuItemModal
          item={editingItem}
          categories={existingCategories}
          onSave={handleSaveItem}
          onClose={() => {
            setIsModalOpen(false);
            setEditingItem(null);
          }}
        />
      )}

      {archiveConfirm && (
        <ConfirmDialog
          title="Archive Item"
          message={`Are you sure you want to archive "${archiveConfirm.name}"? It will no longer appear on the menu but can be restored later.`}
          confirmLabel="Archive"
          onConfirm={handleConfirmArchive}
          onCancel={() => setArchiveConfirm(null)}
        />
      )}
    </div>
  );
}
