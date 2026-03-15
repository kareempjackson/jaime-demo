'use client';

import { useState, useEffect, useRef } from 'react';
import { MenuItem } from './AdminMenuScreen';

interface MenuItemModalProps {
  item: MenuItem | null;
  existingCategories: string[];
  onClose: () => void;
  onSubmit: (data: { name: string; priceCents: number; category: string }) => Promise<void>;
}

export function MenuItemModal({
  item,
  existingCategories,
  onClose,
  onSubmit,
}: MenuItemModalProps) {
  const [name, setName] = useState(item?.name || '');
  const [priceDisplay, setPriceDisplay] = useState(
    item ? (item.priceCents / 100).toFixed(2) : ''
  );
  const [category, setCategory] = useState(item?.category || '');
  const [isNewCategory, setIsNewCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    nameInputRef.current?.focus();
  }, []);

  const handlePriceChange = (value: string) => {
    const cleaned = value.replace(/[^0-9.]/g, '');
    const parts = cleaned.split('.');
    if (parts.length > 2) return;
    if (parts[1] && parts[1].length > 2) return;
    setPriceDisplay(cleaned);
  };

  const handleCategoryChange = (value: string) => {
    if (value === '__new__') {
      setIsNewCategory(true);
      setCategory('');
    } else {
      setIsNewCategory(false);
      setCategory(value);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const finalCategory = isNewCategory ? newCategory.trim() : category;
    
    if (!name.trim()) {
      setError('Name is required');
      return;
    }
    if (!priceDisplay || parseFloat(priceDisplay) <= 0) {
      setError('Valid price is required');
      return;
    }
    if (!finalCategory) {
      setError('Category is required');
      return;
    }

    const priceCents = Math.round(parseFloat(priceDisplay) * 100);

    setIsSubmitting(true);
    try {
      await onSubmit({
        name: name.trim(),
        priceCents,
        category: finalCategory,
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save item');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center p-4 z-50">
      <div className="bg-[#232326] rounded-2xl w-full max-w-md shadow-2xl">
        <div className="p-6 border-b border-[#2a2a2e]">
          <h2 className="text-xl font-semibold text-[#fafafa]">
            {item ? 'Edit Item' : 'Add New Item'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <div className="p-3 bg-red-900/20 border border-red-500/30 rounded-lg text-red-400 text-sm">
              {error}
            </div>
          )}

          <div>
            <label htmlFor="name" className="block text-sm font-medium text-[#a1a1a6] mb-2">
              Name
            </label>
            <input
              ref={nameInputRef}
              type="text"
              id="name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              className="w-full px-4 py-3 bg-[#1c1c1f] border border-[#2a2a2e] rounded-xl text-[#fafafa] placeholder-[#6b6b70] focus:outline-none focus:border-[#22c55e] transition-colors min-h-[48px]"
              placeholder="e.g., Green Goddess Smoothie"
            />
          </div>

          <div>
            <label htmlFor="price" className="block text-sm font-medium text-[#a1a1a6] mb-2">
              Price
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b70]">$</span>
              <input
                type="text"
                id="price"
                value={priceDisplay}
                onChange={(e) => handlePriceChange(e.target.value)}
                className="w-full pl-8 pr-4 py-3 bg-[#1c1c1f] border border-[#2a2a2e] rounded-xl text-[#fafafa] placeholder-[#6b6b70] focus:outline-none focus:border-[#22c55e] transition-colors min-h-[48px]"
                placeholder="0.00"
                inputMode="decimal"
              />
            </div>
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-[#a1a1a6] mb-2">
              Category
            </label>
            {isNewCategory ? (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className="flex-1 px-4 py-3 bg-[#1c1c1f] border border-[#2a2a2e] rounded-xl text-[#fafafa] placeholder-[#6b6b70] focus:outline-none focus:border-[#22c55e] transition-colors min-h-[48px]"
                  placeholder="New category name"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => {
                    setIsNewCategory(false);
                    setNewCategory('');
                  }}
                  className="px-4 py-3 text-[#a1a1a6] hover:text-[#fafafa] hover:bg-[#2a2a2e] rounded-xl transition-colors min-h-[48px]"
                >
                  Cancel
                </button>
              </div>
            ) : (
              <select
                id="category"
                value={category}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className="w-full px-4 py-3 bg-[#1c1c1f] border border-[#2a2a2e] rounded-xl text-[#fafafa] focus:outline-none focus:border-[#22c55e] transition-colors min-h-[48px] appearance-none cursor-pointer"
              >
                <option value="" disabled>Select a category</option>
                {existingCategories.map((cat) => (
                  <option key={cat} value={cat} className="capitalize">
                    {cat}
                  </option>
                ))}
                <option value="__new__">+ New Category</option>
              </select>
            )}
          </div>

          <div className="flex gap-3 pt-4">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-[#2a2a2e] text-[#fafafa] font-medium rounded-xl hover:bg-[#333338] transition-colors min-h-[48px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isSubmitting}
              className="flex-1 px-6 py-3 bg-[#22c55e] text-[#0a0a0b] font-semibold rounded-xl hover:bg-[#16a34a] transition-colors disabled:opacity-50 disabled:cursor-not-allowed min-h-[48px]"
            >
              {isSubmitting ? 'Saving...' : item ? 'Save Changes' : 'Add Item'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
