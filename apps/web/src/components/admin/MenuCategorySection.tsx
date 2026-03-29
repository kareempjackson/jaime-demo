'use client';

import { useState } from 'react';
import { MenuItem } from '@/types/menu';
import { MenuItemRow } from './MenuItemRow';

interface MenuCategorySectionProps {
  category: string;
  items: MenuItem[];
  onEdit: (item: MenuItem) => void;
  onArchive: (item: MenuItem) => void;
  onReorder: (category: string, itemId: string, newPosition: number) => void;
}

export function MenuCategorySection({
  category,
  items,
  onEdit,
  onArchive,
  onReorder,
}: MenuCategorySectionProps) {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);

  const handleDragStart = (index: number) => {
    setDraggedIndex(index);
  };

  const handleDragOver = (e: React.DragEvent, index: number) => {
    e.preventDefault();
    if (draggedIndex !== null && draggedIndex !== index) {
      setDragOverIndex(index);
    }
  };

  const handleDragEnd = () => {
    if (draggedIndex !== null && dragOverIndex !== null && draggedIndex !== dragOverIndex) {
      const draggedItem = items[draggedIndex];
      const targetItem = items[dragOverIndex];
      onReorder(category, draggedItem.id, targetItem.position);
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  const handleDragLeave = () => {
    setDragOverIndex(null);
  };

  return (
    <div className="bg-[#141416] rounded-2xl overflow-hidden">
      <div className="px-5 py-4 border-b border-[#232326]">
        <h2 className="text-lg font-semibold text-[#fafafa] capitalize">{category}</h2>
      </div>
      <div className="divide-y divide-[#232326]">
        {items.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={() => handleDragStart(index)}
            onDragOver={(e) => handleDragOver(e, index)}
            onDragEnd={handleDragEnd}
            onDragLeave={handleDragLeave}
            className={`
              ${draggedIndex === index ? 'opacity-50' : ''}
              ${dragOverIndex === index ? 'bg-[#1c1c1f]' : ''}
              transition-colors
            `}
          >
            <MenuItemRow
              item={item}
              onEdit={() => onEdit(item)}
              onArchive={() => onArchive(item)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
