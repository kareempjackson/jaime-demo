/**
 * Formats a price in cents to a display string
 * @param cents - Price in cents (e.g., 850 for $8.50)
 * @returns Formatted price string (e.g., "$8.50")
 */
export function formatPrice(cents: number): string {
  const dollars = cents / 100;
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(dollars);
}

/**
 * Parses a price string to cents
 * @param value - Price string (e.g., "8.50" or "$8.50")
 * @returns Price in cents (e.g., 850)
 */
export function parsePriceToCents(value: string): number {
  const cleaned = value.replace(/[^0-9.]/g, '');
  const parsed = parseFloat(cleaned);
  if (isNaN(parsed)) return 0;
  return Math.round(parsed * 100);
}
