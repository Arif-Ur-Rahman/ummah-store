import { wixClientServer } from '@/lib/wixClientServer';
import type { products } from '@wix/stores';
import ProductCard from './ProductCard';

const PRODUCT_PER_PAGE = 20;

const ProductList = async ({
  categoryId,
  limit,
}: {
  categoryId?: string;
  limit?: number;
}) => {
  const wixClient = await wixClientServer();

  try {
    const res = await wixClient.products
      .queryProducts()
      .limit(limit || PRODUCT_PER_PAGE)
      .find();

    const products = res.items || [];

    if (products.length === 0) {
      return (
        <div className="mt-12 text-center py-12">
          <div className="text-gray-500 text-lg mb-4">
            No products available.
          </div>
        </div>
      );
    }

    return (
      <div>
        <div className="mb-4 p-4 bg-blue-50 rounded-lg">
          <p className="text-sm text-blue-800">
            Showing all {products.length} products
          </p>
        </div>

        <div className="mt-12 flex gap-x-8 gap-y-16 justify-between flex-wrap">
          {products.map((product: products.Product) => (
            <ProductCard key={product._id} product={product} />
          ))}
        </div>
      </div>
    );
  } catch (error) {
    console.error('Error fetching products:', error);
    return (
      <div className="mt-12 text-center py-12">
        <div className="text-red-500 text-lg mb-4">
          Failed to load products.
        </div>
      </div>
    );
  }
};

export default ProductList;