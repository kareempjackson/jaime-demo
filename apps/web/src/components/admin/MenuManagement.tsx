'use client';

import { useState, useCallback } from 'react';
import { MenuItem, MenuCategory } from '@/types/menu';
import { MenuCategoryGroup } from './MenuCategoryGroup';
import { ArchivedItemsSection } from './ArchivedItemsSection';
import { MenuItemModal } from './MenuItemModal';
import { ConfirmDialog } from '@/components/ui/ConfirmDialog';
import { PlusIcon } from '@/components/icons/PlusIcon';
import { archiveMenuItem, restoreMenuItem, createMenuItem, updateMenuItem, reorderMenuItems } from '@/lib/api/menu';

interface MenuManagementProps {
  initialItems: MenuItem[];
  initialCategories: string[];
}

export function MenuManagement({ initialItems, initialCategories }: MenuManagementProps) {
  const [items, setItems] = useState<MenuItem[]>(initialItems);
  const [categories, setCategories] = useState<string[]>(initialCategories);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [editingItem, setEditingItem] = useState<MenuItem | null>(null);
  const [archiveConfirm, setArchiveConfirm] = useState<MenuItem | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  const activeItems = items.filter((item) => !item.archived);
  const archivedItems = items.filter((item) => item.archived);

  const groupedItems = activeItems.reduce<Record<string, MenuItem[]>>((acc, item) => {
    const category = item.category || 'Uncategorized';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {});

  // Sort items within each category by position
  Object.keys(groupedItems).forEach((category) => {
    groupedItems[category].sort((a, b) => a.position - b.position);
  });

  const handleAddItem = () => {
    setEditingItem(null);
    setIsModalOpen(true);
  };

  const handleEditItem = (item: MenuItem) => {
    setEditingItem(item);
    setIsModalOpen(true);
  };

  const handleArchiveClick = (item: MenuItem) => {
    setArchiveConfirm(item);
  };

  const handleArchiveConfirm = async () => {
    if (!archiveConfirm) return;
    setIsLoading(true);
    try {
      await archiveMenuItem(archiveConfirm.id);
      setItems((prev) =>
        prev.map((item) =>
          item.id === archiveConfirm.id ? { ...item, archived: true } : item
        )
      );
    } catch (error) {
      console.error('Failed to archive item:', error);
    } finally {
      setIsLoading(false);
      setArchiveConfirm(null);
    }
  };

  const handleRestore = async (item: MenuItem) => {
    setIsLoading(true);
    try {
      await restoreMenuItem(item.id);
      setItems((prev) =>
        prev.map((i) =>
          i.id === item.id ? { ...i, archived: false } : i
        )
      );
    } catch (error) {
      console.error('Failed to restore item:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSaveItem = async (data: {
    name: string;
    priceCents: number;
    category: string;
  }) => {
    setIsLoading(true);
    try {
      if (editingItem) {
        const updated = await updateMenuItem(editingItem.id, data);
        setItems((prev) =>
          prev.map((item) => (item.id === editingItem.id ? updated : item))
        );
      } else {
        const created = await createMenuItem(data);
        setItems((prev) => [...prev, created]);
        if (!categories.includes(data.category)) {
          setCategories((prev) => [...prev, data.category]);
        }
      }
      setIsModalOpen(false);
      setEditingItem(null);
    } catch (error) {
      console.error('Failed to save item:', error);
    } finally {
      setIsLoading(false);
    }
  };

  const handleReorder = useCallback(
    async (category: string, reorderedItems: MenuItem[]) => {
      // Optimistic update
      setItems((prev) => {
        const otherItems = prev.filter(
          (item) => item.category !== category || item.archived
        );
        const updatedItems = reorderedItems.map((item, index) => ({
          ...item,
          position: index,
        }));
        return [...otherItems, ...updatedItems];
      });

      try {
        await reorderMenuItems(
          reorderedItems.map((item, index) => ({
            id: item.id,
            position: index,
          }))
        );
      } catch (error) {
        console.error('Failed to reorder items:', error);
        // Revert on error
        setItems(initialItems);
      }
    },
    [initialItems]
  );

  return (
    <div className="max-w-4xl mx-auto">
      <header className="flex items-center justify-between mb-8">
        <h1 className="text-2xl font-semibold text-[#fafafa]">Menu Management</h1>
        <button
          onClick={handleAddItem}
          className="flex items-center gap-2 px-6 py-3 bg-[#22c55e] hover:bg-[#1ea550] text-[#fafafa] font-medium rounded-xl transition-colors min-h-[48px]"
        >
          <PlusIcon className="w-5 h-5" />
          Add Item
        </button>
      </header>

      <div className="space-y-6">
        {Object.entries(groupedItems).map(([category, categoryItems]) => (
          <MenuCategoryGroup
            key={category}
            category={category}
            items={categoryItems}
            onEdit={handleEditItem}
            onArchive={handleArchiveClick}
            onReorder={(reordered) => handleReorder(category, reordered)}
          />
        ))}

        {activeItems.length === 0 && (
          <div className="text-center py-12 bg-[#141416] rounded-xl border border-[#232326]">
            <p className="text-[#a1a1a6] mb-4">No menu items yet</p>
            <button
              onClick={handleAddItem}
              className="text-[#22c55e] hover:text-[#1ea550] font-medium transition-colors"
            >
              Add your first item
            </button>
          </div>
        )}

        {archivedItems.length > 0 && (
          <ArchivedItemsSection
            items={archivedItems}
            onRestore={handleRestore}
          />
        )}
      </div>

      <MenuItemModal
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setEditingItem(null);
        }}
        onSave={handleSaveItem}
        item={editingItem}
        categories={categories}
        isLoading={isLoading}
      />

      <ConfirmDialog
        isOpen={!!archiveConfirm}
        onClose={() => setArchiveConfirm(null)}
        onConfirm={handleArchiveConfirm}
        title="Archive Item"
        message={`Are you sure you want to archive "${archiveConfirm?.name}"? It will no longer appear on the menu but can be restored later.`}
        confirmLabel="Archive"
        isLoading={isLoading}
      />
    </div>
  );
}
