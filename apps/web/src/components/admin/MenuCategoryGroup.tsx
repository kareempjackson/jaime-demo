'use client';

import { useState, useRef } from 'react';
import { MenuItem } from '@/types/menu';
import { MenuItemCard } from './MenuItemCard';

interface MenuCategoryGroupProps {
  category: string;
  items: MenuItem[];
  onEdit: (item: MenuItem) => void;
  onArchive: (item: MenuItem) => void;
  onReorder: (items: MenuItem[]) => void;
}

export function MenuCategoryGroup({
  category,
  items,
  onEdit,
  onArchive,
  onReorder,
}: MenuCategoryGroupProps) {
  const [draggedIndex, setDraggedIndex] = useState<number | null>(null);
  const [dragOverIndex, setDragOverIndex] = useState<number | null>(null);
  const dragNodeRef = useRef<HTMLDivElement | null>(null);

  const handleDragStart = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    setDraggedIndex(index);
    dragNodeRef.current = e.currentTarget;
    e.dataTransfer.effectAllowed = 'move';
    e.dataTransfer.setData('text/plain', index.toString());
    
    // Add a slight delay to apply drag styling
    setTimeout(() => {
      if (dragNodeRef.current) {
        dragNodeRef.current.style.opacity = '0.5';
      }
    }, 0);
  };

  const handleDragEnd = () => {
    if (dragNodeRef.current) {
      dragNodeRef.current.style.opacity = '1';
    }
    setDraggedIndex(null);
    setDragOverIndex(null);
    dragNodeRef.current = null;
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>, index: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === index) return;
    setDragOverIndex(index);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>, dropIndex: number) => {
    e.preventDefault();
    if (draggedIndex === null || draggedIndex === dropIndex) return;

    const newItems = [...items];
    const [draggedItem] = newItems.splice(draggedIndex, 1);
    newItems.splice(dropIndex, 0, draggedItem);

    onReorder(newItems);
    setDraggedIndex(null);
    setDragOverIndex(null);
  };

  return (
    <section className="bg-[#141416] rounded-xl border border-[#232326] overflow-hidden">
      <header className="px-6 py-4 border-b border-[#232326]">
        <h2 className="text-lg font-medium text-[#fafafa]">{category}</h2>
        <p className="text-sm text-[#6b6b70]">{items.length} items</p>
      </header>

      <div className="divide-y divide-[#232326]">
        {items.map((item, index) => (
          <div
            key={item.id}
            draggable
            onDragStart={(e) => handleDragStart(e, index)}
            onDragEnd={handleDragEnd}
            onDragOver={(e) => handleDragOver(e, index)}
            onDrop={(e) => handleDrop(e, index)}
            className={`transition-all duration-150 ${
              dragOverIndex === index && draggedIndex !== index
                ? 'bg-[#1c1c1f] border-t-2 border-t-[#22c55e]'
                : ''
            }`}
          >
            <MenuItemCard
              item={item}
              onEdit={() => onEdit(item)}
              onArchive={() => onArchive(item)}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
