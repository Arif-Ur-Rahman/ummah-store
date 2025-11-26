'use client';

import Image from 'next/image';
import Link from 'next/link';
import DOMPurify from 'isomorphic-dompurify';
import type { products } from '@wix/stores';

interface ProductCardProps {
  product: products.Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  const handleAddToCart = (e: React.MouseEvent) => {
    e.preventDefault();
    e.stopPropagation();
    // Add your add to cart logic here
    console.log('Add to cart:', product.name);
    // You can use a state management solution here
  };

  return (
    <Link
      href={'/' + product.slug}
      className="w-full flex flex-col gap-4 sm:w-[45%] lg:w-[22%] group"
      key={product._id}
    >
      <div className="relative w-full h-80 overflow-hidden rounded-md">
        {/* Main Image */}
        <Image
          src={product.media?.mainMedia?.image?.url || '/placeholder.svg'}
          alt={product.name || 'Product image'}
          fill
          sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 22vw"
          className="object-cover transition-opacity duration-500 group-hover:opacity-0"
          priority={false}
        />
        
        {/* Secondary Image (if available) */}
        {product.media?.items && product.media.items[1]?.image?.url ? (
          <Image
            src={product.media.items[1].image.url}
            alt={`${product.name} - Alternate view`}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 22vw"
            className="object-cover"
            priority={false}
          />
        ) : (
          // Fallback if no secondary image
          <Image
            src={product.media?.mainMedia?.image?.url || '/placeholder.svg'}
            alt={product.name || 'Product image'}
            fill
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 45vw, 22vw"
            className="object-cover"
            priority={false}
          />
        )}
      </div>

      {/* Product Info */}
      <div className="flex justify-between items-start">
        <span className="font-medium text-gray-900 flex-1 pr-2">
          {product.name}
        </span>
        <span className="font-semibold text-gray-900 whitespace-nowrap">
          ${product.priceData?.price || '0.00'}
        </span>
      </div>

      {/* Short Description */}
      {product.additionalInfoSections && (
        <div
          className="text-sm text-gray-500 line-clamp-2"
          dangerouslySetInnerHTML={{
            __html: DOMPurify.sanitize(
              product.additionalInfoSections.find(
                (section: { title?: string; description?: string }) =>
                  section.title === 'shortDesc'
              )?.description || ''
            ),
          }}
        />
      )}

      {/* Add to Cart Button */}
      <button 
        className="rounded-2xl w-max ring-1 ring-red-500 text-red-500 text-xs py-2 px-4 hover:bg-red-500 hover:text-white transition-colors duration-200 mt-auto"
        onClick={handleAddToCart}
      >
        Add to Cart
      </button>
    </Link>
  );
};

export default ProductCard;