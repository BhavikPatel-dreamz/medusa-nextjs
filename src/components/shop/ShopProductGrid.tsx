'use client';

import { Product } from '@/middleware/types/commerce.types';
import { SortOption } from './ShopPage';
import ShopProductCard from './ShopProductCard';

interface ShopProductGridProps {
  products: Product[];
  totalProducts: number;
  sortBy: SortOption;
  onSortChange: (sort: SortOption) => void;
  getPrice: (product: Product) => number;
}

const SORT_OPTIONS: SortOption[] = [
  'Most Popular',
  'Price: Low to High',
  'Price: High to Low',
  'Newest',
];

export default function ShopProductGrid({
  products,
  totalProducts,
  sortBy,
  onSortChange,
  getPrice,
}: ShopProductGridProps) {
  return (
    <div style={styles.main}>
      <div style={styles.topBar}>
        <p style={styles.showingText}>
          Showing <span style={styles.highlight}>{products.length}</span> of{' '}
          <span style={styles.highlight}>{totalProducts}</span> Products
        </p>
        <div style={styles.sortWrapper}>
          <span style={styles.sortLabel}>Sort by:</span>
          <div style={styles.selectWrapper}>
            <select
              value={sortBy}
              onChange={(e) => onSortChange(e.target.value as SortOption)}
              style={styles.select}
            >
              {SORT_OPTIONS.map((opt) => (
                <option key={opt} value={opt}>{opt}</option>
              ))}
            </select>
            <span style={styles.chevron}>▾</span>
          </div>
        </div>
      </div>

      {products.length === 0 ? (
        <p style={styles.empty}>No products match your filters.</p>
      ) : (
        <div style={styles.grid}>
          {products.map((product) => (
            <ShopProductCard
              key={product.id}
              product={product}
              price={getPrice(product)}
            />
          ))}
        </div>
      )}
    </div>
  );
}

const styles: Record<string, React.CSSProperties> = {
  main: {
    flex: 1,
    padding: '50px 42px',
    background: '#fafafa',
  },

  topBar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: 60,
  },

  showingText: {
    fontSize: 18,
    color: '#555',
    fontWeight: 400,
  },

  highlight: {
    color: '#c86f43',
    fontWeight: 600,
  },

  sortWrapper: {
    display: 'flex',
    alignItems: 'center',
    gap: 16,
  },

  sortLabel: {
    fontSize: 18,
    color: '#555',
  },

  selectWrapper: {
    position: 'relative',
    display: 'inline-flex',
    alignItems: 'center',
  },

  select: {
    width: 200,
    height: 58,
    border: '1px solid #e5e5e5',
    background: '#fff',
    padding: '0 45px 0 22px',
    fontSize: 16,
    color: '#555',
    outline: 'none',
    appearance: 'none',
    WebkitAppearance: 'none',
    cursor: 'pointer',
  },

  chevron: {
    position: 'absolute',
    right: 18,
    pointerEvents: 'none',
    color: '#777',
    fontSize: 12,
  },

  grid: {
    display: 'grid',
    justifyContent: 'start',
gridTemplateColumns: 'repeat(3, 280px)',
gap: '40px 35px',
  },

  empty: {
    textAlign: 'center',
    color: '#999',
    marginTop: 60,
  },
};