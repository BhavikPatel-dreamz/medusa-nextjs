import { AdapterFactory } from '@/middleware/factory/adapter.factory';
import { Product, ProductCategory, ProductCollection } from '@/middleware/types/commerce.types';
import ShopPage from '@/components/shop/ShopPage';

export const metadata = {
  title: 'Shop | Flatlogic',
  description: 'Browse our collection of furniture, lighting, decoration and more.',
};

const PLACEHOLDER = 'https://images.unsplash.com/photo-1555041469-a586c61ea9bc?w=400&q=70';

export default async function Shop() {
  let products: Product[] = [];
  let categories: ProductCategory[] = [];
  let collections: ProductCollection[] = [];

  try {
    const adapter = AdapterFactory.getAdapter();

    // Fetch products + filters in parallel
    const [productResult, filters] = await Promise.all([
      adapter.listProducts({ limit: 15 }),
      adapter.getFilters(),
    ]);

    products = productResult.products.map((p) => ({
      ...p,
      thumbnail: p.thumbnail || PLACEHOLDER,
    }));
    categories = filters.categories;
    collections = filters.collections;
  } catch (error) {
    console.error('Error fetching shop data:', error);
  }

  return (
    
    <ShopPage
      products={products}
      categories={categories}
      collections={collections}
    />
  );
}