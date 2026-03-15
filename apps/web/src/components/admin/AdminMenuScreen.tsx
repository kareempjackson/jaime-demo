'use client';

import { useState, useEffect, useCallback } from 'react';
import { MenuItemCard } from './MenuItemCard';
import { MenuItemModal } from './MenuItemModal';
import { ArchiveConfirmDialog } from './ArchiveConfirmDialog';
import { ArchivedItemsSection } from './ArchivedItemsSection';

export interface MenuItem {
  id: string;
  name: string;
  priceCents: number;
  category: string;
  position: number;
  isArchived: boolean;
}

export function AdminMenuScreen() {
  const [menuItems, setMenuItems] = useState<MenuItem[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [archivingItem, setArchivingItem] = useState<MenuItem | null>(null);

  const fetchMenuItems = useCallback(async () => {
    try {
      setIsLoading(true);
      const token = localStorage.getItem('token');
      const response = await fetch('/api/menu?includeArchived=true', {
        headers: {
          'Authorization': `Bearer ${token}`,
        },
      });
      if (!response.ok) throw new Error('Failed to fetch menu items');
      const data = await response.json();
      setMenuItems(data);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'An error occurred');
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchMenuItems();
  }, [fetchMenuItems]);

  const activeItems = menuItems.filter(item => !item.isArchived);
  const archivedItems = menuItems.filter(item => item.isArchived);

  const categories = [...new Set(activeItems.map(item => item.category))];
  const itemsByCategory = categories.reduce((acc, category) => {
    acc[category] = activeItems
      .filter(item => item.category === category)
      .sort((a, b) => a.position - b.position);
    return acc;
  }, {} as Record<string, MenuItem[]>);

  const handleAddItem = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleEditItem = (item: MenuItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleArchiveItem = (item: MenuItem) => {
    setArchivingItem(item);
  };

  const handleConfirmArchive = async () => {
    if (!archivingItem) return;
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/menu/${archivingItem.id}`, {
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
      setArchivingItem(null);
    }
  };

  const handleRestoreItem = async (item: MenuItem) => {
    try {
      const token = localStorage.getItem('token');
      const response = await fetch(`/api/menu/${item.id}`, {
        method: 'PATCH',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ isArchived: false }),
      });
      if (!response.ok) throw new Error('Failed to restore item');
      await fetchMenuItems();
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to restore item');
    }
  };

  const handleModalClose = () => {
    setIsModalOpen(false);
    setEditingItem(null);
  };

  const handleModalSubmit = async (data: { name: string; priceCents: number; category: string }) => {
    try {
      const token = localStorage.getItem('token');
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
      handleModalClose();
    } catch (err) {
      throw err;
    }
  };

  const handleReorder = async (category: string, fromIndex: number, toIndex: number) => {
    const categoryItems = [...itemsByCategory[category]];
    const [movedItem] = categoryItems.splice(fromIndex, 1);
    categoryItems.splice(toIndex, 0, movedItem);
    
    const updatedItems = menuItems.map(item => {
      if (item.category === category) {
        const newPosition = categoryItems.findIndex(ci => ci.id === item.id);
        return { ...item, position: newPosition };
      }
      return item;
    });
    setMenuItems(updatedItems);

    try {
      const token = localStorage.getItem('token');
      await Promise.all(
        categoryItems.map((item, index) =>
          fetch(`/api/menu/${item.id}`, {
            method: 'PATCH',
            headers: {
              'Authorization': `Bearer ${token}`,
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({ position: index }),
          })
        )
      );
    } catch (err) {
      fetchMenuItems();
      setError('Failed to save order');
    }
  };

  if (isLoading) {
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
          <h1 className="text-2xl font-semibold text-[#fafafa]">Menu Management</h1>
          <button
            onClick={handleAddItem}
            className="px-6 py-3 bg-[#22c55e] text-[#0a0a0b] font-semibold rounded-xl hover:bg-[#16a34a] transition-colors min-h-[48px]"
          >
            Add Item
          </button>
        </header>

        {error && (
          <div className="mb-6 p-4 bg-red-900/20 border border-red-500/30 rounded-xl text-red-400">
            {error}
            <button onClick={() => setError(null)} className="ml-4 underline">Dismiss</button>
          </div>
        )}

        {categories.length === 0 ? (
          <div className="text-center py-16">
            <p className="text-[#a1a1a6] text-lg mb-4">No menu items yet</p>
            <button
              onClick={handleAddItem}
              className="px-6 py-3 bg-[#22c55e] text-[#0a0a0b] font-semibold rounded-xl hover:bg-[#16a34a] transition-colors"
            >
              Add Your First Item
            </button>
          </div>
        ) : (
          <div className="space-y-8">
            {categories.map(category => (
              <div key={category} className="bg-[#141416] rounded-2xl p-6">
                <h2 className="text-lg font-medium text-[#fafafa] mb-4 capitalize">{category}</h2>
                <div className="space-y-2">
                  {itemsByCategory[category].map((item, index) => (
                    <MenuItemCard
                      key={item.id}
                      item={item}
                      index={index}
                      totalItems={itemsByCategory[category].length}
                      onEdit={() => handleEditItem(item)}
                      onArchive={() => handleArchiveItem(item)}
                      onMoveUp={() => handleReorder(category, index, index - 1)}
                      onMoveDown={() => handleReorder(category, index, index + 1)}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        )}

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
          existingCategories={categories}
          onClose={handleModalClose}
          onSubmit={handleModalSubmit}
        />
      )}

      {archivingItem && (
        <ArchiveConfirmDialog
          itemName={archivingItem.name}
          onConfirm={handleConfirmArchive}
          onCancel={() => setArchivingItem(null)}
        />
      )}
    </div>
  );
}
