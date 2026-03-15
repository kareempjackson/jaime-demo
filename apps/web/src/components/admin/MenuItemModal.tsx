'use client';

import { useState, useEffect } from 'react';
import { MenuItem } from '@/types/menu';

interface MenuItemModalProps {
  item: MenuItem | null;
  categories: string[];
  onSave: (data: { name: string; price_cents: number; category: string }) => Promise<void>;
  onClose: () => void;
}

export function MenuItemModal({ item, categories, onSave, onClose }: MenuItemModalProps) {
  const [name, setName] = useState(item?.name || '');
  const [priceDisplay, setPriceDisplay] = useState(
    item ? (item.price_cents / 100).toFixed(2) : ''
  );
  const [category, setCategory] = useState(item?.category || '');
  const [isNewCategory, setIsNewCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [saving, setSaving] = useState(false);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    // Handle escape key
    const handleEscape = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.addEventListener('keydown', handleEscape);
    return () => document.removeEventListener('keydown', handleEscape);
  }, [onClose]);

  const handlePriceChange = (value: string) => {
    // Allow only numbers and one decimal point
    const cleaned = value.replace(/[^0-9.]/g, '');
    const parts = cleaned.split('.');
    if (parts.length > 2) return;
    if (parts[1] && parts[1].length > 2) return;
    setPriceDisplay(cleaned);
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    const finalCategory = isNewCategory ? newCategory.trim() : category;
    const priceCents = Math.round(parseFloat(priceDisplay) * 100);

    if (!name.trim()) {
      setError('Name is required');
      return;
    }
    if (isNaN(priceCents) || priceCents <= 0) {
      setError('Please enter a valid price');
      return;
    }
    if (!finalCategory) {
      setError('Category is required');
      return;
    }

    try {
      setSaving(true);
      await onSave({
        name: name.trim(),
        price_cents: priceCents,
        category: finalCategory.toLowerCase(),
      });
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to save item');
      setSaving(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-black/60 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative bg-[#232326] rounded-2xl w-full max-w-md shadow-2xl">
        <div className="px-6 py-5 border-b border-[#2a2a2e]">
          <h2 className="text-xl font-semibold text-[#fafafa]">
            {item ? 'Edit Item' : 'Add Item'}
          </h2>
        </div>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
          {error && (
            <div className="p-3 bg-red-500/10 border border-red-500/20 rounded-xl text-red-400 text-sm">
              {error}
            </div>
          )}

          {/* Name Field */}
          <div>
            <label className="block text-sm font-medium text-[#a1a1a6] mb-2">
              Name
            </label>
            <input
              type="text"
              value={name}
              onChange={(e) => setName(e.target.value)}
              placeholder="e.g., Green Goddess"
              className="w-full px-4 py-3 bg-[#1c1c1f] border border-[#2a2a2e] rounded-xl text-[#fafafa] placeholder-[#6b6b70] focus:outline-none focus:border-[#22c55e] transition-colors min-h-[48px]"
              autoFocus
            />
          </div>

          {/* Price Field */}
          <div>
            <label className="block text-sm font-medium text-[#a1a1a6] mb-2">
              Price
            </label>
            <div className="relative">
              <span className="absolute left-4 top-1/2 -translate-y-1/2 text-[#6b6b70]">$</span>
              <input
                type="text"
                inputMode="decimal"
                value={priceDisplay}
                onChange={(e) => handlePriceChange(e.target.value)}
                placeholder="0.00"
                className="w-full pl-8 pr-4 py-3 bg-[#1c1c1f] border border-[#2a2a2e] rounded-xl text-[#fafafa] placeholder-[#6b6b70] focus:outline-none focus:border-[#22c55e] transition-colors min-h-[48px] tabular-nums"
              />
            </div>
          </div>

          {/* Category Field */}
          <div>
            <label className="block text-sm font-medium text-[#a1a1a6] mb-2">
              Category
            </label>
            {!isNewCategory ? (
              <div className="space-y-2">
                <select
                  value={category}
                  onChange={(e) => {
                    if (e.target.value === '__new__') {
                      setIsNewCategory(true);
                      setCategory('');
                    } else {
                      setCategory(e.target.value);
                    }
                  }}
                  className="w-full px-4 py-3 bg-[#1c1c1f] border border-[#2a2a2e] rounded-xl text-[#fafafa] focus:outline-none focus:border-[#22c55e] transition-colors min-h-[48px] appearance-none cursor-pointer"
                  style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='24' height='24' viewBox='0 0 24 24' fill='none' stroke='%236b6b70' stroke-width='2' stroke-linecap='round' stroke-linejoin='round'%3E%3Cpolyline points='6 9 12 15 18 9'%3E%3C/polyline%3E%3C/svg%3E")`,
                    backgroundRepeat: 'no-repeat',
                    backgroundPosition: 'right 12px center',
                    backgroundSize: '20px',
                  }}
                >
                  <option value="" disabled>Select a category</option>
                  {categories.map(cat => (
                    <option key={cat} value={cat} className="capitalize">
                      {cat.charAt(0).toUpperCase() + cat.slice(1)}
                    </option>
                  ))}
                  <option value="__new__">+ New Category</option>
                </select>
              </div>
            ) : (
              <div className="space-y-2">
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  placeholder="Enter new category name"
                  className="w-full px-4 py-3 bg-[#1c1c1f] border border-[#2a2a2e] rounded-xl text-[#fafafa] placeholder-[#6b6b70] focus:outline-none focus:border-[#22c55e] transition-colors min-h-[48px]"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => {
                    setIsNewCategory(false);
                    setNewCategory('');
                  }}
                  className="text-sm text-[#a1a1a6] hover:text-[#fafafa]"
                >
                  ← Back to existing categories
                </button>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-[#1c1c1f] text-[#a1a1a6] font-medium rounded-xl hover:bg-[#2a2a2e] transition-colors min-h-[48px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={saving}
              className="flex-1 px-6 py-3 bg-[#22c55e] text-[#fafafa] font-semibold rounded-xl hover:bg-[#1ea550] disabled:opacity-50 disabled:cursor-not-allowed transition-colors min-h-[48px]"
            >
              {saving ? 'Saving...' : item ? 'Save Changes' : 'Add Item'}
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}
