'use client';

import { useEffect, useState, useRef } from 'react';
import { MenuItem } from '@/types/order';
import { MenuItemCard } from './MenuItemCard';

interface MenuPanelProps {
  onAddItem: (item: MenuItem) => void;
}

interface GroupedItems {
  [category: string]: MenuItem[];
}

export function MenuPanel({ onAddItem }: MenuPanelProps) {
  const [items, setItems] = useState<MenuItem[]>([]);
  const [loading, setLoading] = useState(true);
  const [activeCategory, setActiveCategory] = useState<string>('');
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const categoryRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  useEffect(() => {
    async function fetchMenu() {
      try {
        const response = await fetch('/api/menu');
        if (!response.ok) throw new Error('Failed to fetch menu');
        const data = await response.json();
        const menuItems = data.items || data;
        setItems(menuItems);
        if (menuItems.length > 0) {
          const firstCategory = menuItems[0].category;
          setActiveCategory(firstCategory);
        }
      } catch (error) {
        console.error('Error fetching menu:', error);
      } finally {
        setLoading(false);
      }
    }
    fetchMenu();
  }, []);

  const groupedItems: GroupedItems = items.reduce((acc, item) => {
    const category = item.category || 'Other';
    if (!acc[category]) {
      acc[category] = [];
    }
    acc[category].push(item);
    return acc;
  }, {} as GroupedItems);

  const categories = Object.keys(groupedItems);

  const scrollToCategory = (category: string) => {
    const element = categoryRefs.current[category];
    if (element && scrollContainerRef.current) {
      const container = scrollContainerRef.current;
      const elementTop = element.offsetTop - container.offsetTop;
      container.scrollTo({ top: elementTop - 60, behavior: 'smooth' });
    }
    setActiveCategory(category);
  };

  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    const container = scrollContainerRef.current;
    const scrollTop = container.scrollTop + 100;

    for (const category of categories) {
      const element = categoryRefs.current[category];
      if (element) {
        const elementTop = element.offsetTop - container.offsetTop;
        const elementBottom = elementTop + element.offsetHeight;
        if (scrollTop >= elementTop && scrollTop < elementBottom) {
          setActiveCategory(category);
          break;
        }
      }
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center h-full bg-[#0a0a0b]">
        <div className="text-[#a1a1a6] text-lg">Loading menu...</div>
      </div>
    );
  }

  return (
    <div className="flex flex-col h-full bg-[#0a0a0b]">
      <div className="flex gap-2 px-4 py-3 bg-[#141416] border-b border-[#232326] overflow-x-auto">
        {categories.map((category) => (
          <button
            key={category}
            onClick={() => scrollToCategory(category)}
            className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors min-h-[48px] ${
              activeCategory === category
                ? 'bg-[#22c55e] text-[#052e16]'
                : 'bg-[#1c1c1f] text-[#a1a1a6] hover:bg-[#2a2a2e]'
            }`}
          >
            {category}
          </button>
        ))}
      </div>
      <div
        ref={scrollContainerRef}
        onScroll={handleScroll}
        className="flex-1 overflow-y-auto px-4 py-4"
      >
        {categories.map((category) => (
          <div
            key={category}
            ref={(el) => {
              categoryRefs.current[category] = el;
            }}
            className="mb-6"
          >
            <div className="sticky top-0 bg-[#0a0a0b] py-2 z-10">
              <h2 className="text-[#fafafa] text-xl font-semibold">{category}</h2>
            </div>
            <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-2">
              {groupedItems[category].map((item) => (
                <MenuItemCard
                  key={item.id}
                  item={item}
                  onAdd={() => onAddItem(item)}
                />
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
