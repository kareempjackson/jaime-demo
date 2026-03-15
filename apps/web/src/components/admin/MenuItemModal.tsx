'use client';

import { useState, useEffect, useRef } from 'react';
import { MenuItem } from '@/types/menu';
import { Modal } from '@/components/ui/Modal';
import { CloseIcon } from '@/components/icons/CloseIcon';

interface MenuItemModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSave: (data: { name: string; priceCents: number; category: string }) => void;
  item: MenuItem | null;
  categories: string[];
  isLoading: boolean;
}

export function MenuItemModal({
  isOpen,
  onClose,
  onSave,
  item,
  categories,
  isLoading,
}: MenuItemModalProps) {
  const [name, setName] = useState('');
  const [priceDisplay, setPriceDisplay] = useState('');
  const [category, setCategory] = useState('');
  const [isNewCategory, setIsNewCategory] = useState(false);
  const [newCategory, setNewCategory] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const nameInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (isOpen) {
      if (item) {
        setName(item.name);
        setPriceDisplay(formatCentsToDisplay(item.priceCents));
        setCategory(item.category || '');
        setIsNewCategory(false);
        setNewCategory('');
      } else {
        setName('');
        setPriceDisplay('');
        setCategory(categories[0] || '');
        setIsNewCategory(false);
        setNewCategory('');
      }
      setErrors({});
      // Focus name input after modal opens
      setTimeout(() => nameInputRef.current?.focus(), 100);
    }
  }, [isOpen, item, categories]);

  const formatCentsToDisplay = (cents: number): string => {
    return (cents / 100).toFixed(2);
  };

  const parsePriceToCents = (value: string): number => {
    const cleaned = value.replace(/[^0-9.]/g, '');
    const parsed = parseFloat(cleaned);
    if (isNaN(parsed)) return 0;
    return Math.round(parsed * 100);
  };

  const handlePriceChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const value = e.target.value;
    // Allow only numbers and one decimal point
    if (/^\d*\.?\d{0,2}$/.test(value) || value === '') {
      setPriceDisplay(value);
    }
  };

  const handlePriceBlur = () => {
    if (priceDisplay) {
      const cents = parsePriceToCents(priceDisplay);
      setPriceDisplay(formatCentsToDisplay(cents));
    }
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

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!name.trim()) {
      newErrors.name = 'Name is required';
    }

    const priceCents = parsePriceToCents(priceDisplay);
    if (priceCents <= 0) {
      newErrors.price = 'Price must be greater than 0';
    }

    const finalCategory = isNewCategory ? newCategory.trim() : category;
    if (!finalCategory) {
      newErrors.category = 'Category is required';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!validate()) return;

    onSave({
      name: name.trim(),
      priceCents: parsePriceToCents(priceDisplay),
      category: isNewCategory ? newCategory.trim() : category,
    });
  };

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="bg-[#232326] rounded-2xl w-full max-w-md mx-4 overflow-hidden shadow-2xl">
        <header className="flex items-center justify-between px-6 py-4 border-b border-[#2a2a2e]">
          <h2 className="text-xl font-semibold text-[#fafafa]">
            {item ? 'Edit Item' : 'Add Item'}
          </h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-[#a1a1a6] hover:text-[#fafafa] hover:bg-[#2a2a2e] transition-colors min-w-[44px] min-h-[44px] flex items-center justify-center"
            aria-label="Close"
          >
            <CloseIcon className="w-5 h-5" />
          </button>
        </header>

        <form onSubmit={handleSubmit} className="p-6 space-y-5">
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
              className={`w-full px-4 py-3 bg-[#1c1c1f] border rounded-xl text-[#fafafa] placeholder-[#6b6b70] focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all min-h-[48px] ${
                errors.name ? 'border-[#ef4444]' : 'border-[#2a2a2e]'
              }`}
              placeholder="e.g., Green Goddess"
            />
            {errors.name && (
              <p className="mt-1 text-sm text-[#ef4444]">{errors.name}</p>
            )}
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
                inputMode="decimal"
                value={priceDisplay}
                onChange={handlePriceChange}
                onBlur={handlePriceBlur}
                className={`w-full pl-8 pr-4 py-3 bg-[#1c1c1f] border rounded-xl text-[#fafafa] placeholder-[#6b6b70] focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all min-h-[48px] ${
                  errors.price ? 'border-[#ef4444]' : 'border-[#2a2a2e]'
                }`}
                placeholder="0.00"
              />
            </div>
            {errors.price && (
              <p className="mt-1 text-sm text-[#ef4444]">{errors.price}</p>
            )}
          </div>

          <div>
            <label htmlFor="category" className="block text-sm font-medium text-[#a1a1a6] mb-2">
              Category
            </label>
            {!isNewCategory ? (
              <select
                id="category"
                value={category}
                onChange={(e) => handleCategoryChange(e.target.value)}
                className={`w-full px-4 py-3 bg-[#1c1c1f] border rounded-xl text-[#fafafa] focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all min-h-[48px] appearance-none cursor-pointer ${
                  errors.category ? 'border-[#ef4444]' : 'border-[#2a2a2e]'
                }`}
                style={{
                  backgroundImage: `url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' fill='none' viewBox='0 0 20 20'%3e%3cpath stroke='%236b6b70' stroke-linecap='round' stroke-linejoin='round' stroke-width='1.5' d='m6 8 4 4 4-4'/%3e%3c/svg%3e")`,
                  backgroundPosition: 'right 0.75rem center',
                  backgroundRepeat: 'no-repeat',
                  backgroundSize: '1.5em 1.5em',
                }}
              >
                {categories.map((cat) => (
                  <option key={cat} value={cat}>
                    {cat}
                  </option>
                ))}
                <option value="__new__">+ New Category</option>
              </select>
            ) : (
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newCategory}
                  onChange={(e) => setNewCategory(e.target.value)}
                  className={`flex-1 px-4 py-3 bg-[#1c1c1f] border rounded-xl text-[#fafafa] placeholder-[#6b6b70] focus:outline-none focus:ring-2 focus:ring-[#22c55e] focus:border-transparent transition-all min-h-[48px] ${
                    errors.category ? 'border-[#ef4444]' : 'border-[#2a2a2e]'
                  }`}
                  placeholder="New category name"
                  autoFocus
                />
                <button
                  type="button"
                  onClick={() => {
                    setIsNewCategory(false);
                    setCategory(categories[0] || '');
                  }}
                  className="px-4 py-3 bg-[#1c1c1f] border border-[#2a2a2e] rounded-xl text-[#a1a1a6] hover:text-[#fafafa] hover:bg-[#2a2a2e] transition-colors min-h-[48px]"
                >
                  Cancel
                </button>
              </div>
            )}
            {errors.category && (
              <p className="mt-1 text-sm text-[#ef4444]">{errors.category}</p>
            )}
          </div>

          <div className="flex gap-3 pt-2">
            <button
              type="button"
              onClick={onClose}
              className="flex-1 px-6 py-3 bg-[#1c1c1f] border border-[#2a2a2e] text-[#a1a1a6] font-medium rounded-xl hover:bg-[#2a2a2e] hover:text-[#fafafa] transition-colors min-h-[48px]"
            >
              Cancel
            </button>
            <button
              type="submit"
              disabled={isLoading}
              className="flex-1 px-6 py-3 bg-[#22c55e] hover:bg-[#1ea550] text-[#fafafa] font-medium rounded-xl transition-colors min-h-[48px] disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? 'Saving...' : item ? 'Save Changes' : 'Add Item'}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}
