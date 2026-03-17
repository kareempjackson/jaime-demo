import React from 'react';

/**
 * Card Component
 * 
 * Variants: default, elevated, outlined
 * For product cards, menu items, and content containers
 */
export function Card({
  children,
  variant = 'default',
  padding = 'md',
  hover = false,
  className = '',
  ...props
}) {
  const baseStyles = `
    rounded-2xl
    transition-all duration-200 ease-out
    overflow-hidden
  `;

  const variants = {
    default: 'bg-white shadow-soft',
    elevated: 'bg-white shadow-lg hover:shadow-xl',
    outlined: 'bg-white border border-neutral-200',
    gradient: 'bg-gradient-fresh',
  };

  const paddings = {
    none: 'p-0',
    sm: 'p-4',
    md: 'p-6',
    lg: 'p-8',
  };

  const hoverStyles = hover
    ? 'hover:shadow-lg hover:-translate-y-1 cursor-pointer'
    : '';

  return (
    <div
      className={`${baseStyles} ${variants[variant]} ${paddings[padding]} ${hoverStyles} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
}

/**
 * ProductCard Component
 * Specialized card for displaying juice/product items
 */
export function ProductCard({
  image,
  title,
  description,
  price,
  originalPrice,
  badge,
  onAddToCart,
  className = '',
}) {
  return (
    <Card hover className={`group ${className}`}>
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden rounded-xl mb-4 bg-neutral-100">
        {image && (
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        )}
        {badge && (
          <span className="absolute top-3 left-3 bg-secondary-500 text-white text-xs font-semibold px-2.5 py-1 rounded-full">
            {badge}
          </span>
        )}
      </div>

      {/* Content */}
      <div className="space-y-2">
        <h3 className="font-display font-semibold text-lg text-neutral-900 group-hover:text-primary-600 transition-colors">
          {title}
        </h3>
        {description && (
          <p className="text-sm text-neutral-500 line-clamp-2">
            {description}
          </p>
        )}
        
        {/* Price and Action */}
        <div className="flex items-center justify-between pt-2">
          <div className="flex items-baseline gap-2">
            <span className="font-display font-bold text-xl text-neutral-900">
              ${price}
            </span>
            {originalPrice && (
              <span className="text-sm text-neutral-400 line-through">
                ${originalPrice}
              </span>
            )}
          </div>
          {onAddToCart && (
            <button
              onClick={onAddToCart}
              className="w-10 h-10 rounded-full bg-primary-500 text-white flex items-center justify-center hover:bg-primary-600 hover:shadow-primary transition-all"
              aria-label={`Add ${title} to cart`}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="12" y1="5" x2="12" y2="19" />
                <line x1="5" y1="12" x2="19" y2="12" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </Card>
  );
}

export default Card;