import Link from "next/link";
import Image from "next/image";

interface Product {
  name: string;
  slug: string;
  categorySlug: string;
  price: { min: number; max: number };
  category: string;
  description: string;
  image?: string;
}

function formatPrice(amount: number): string {
  return "৳" + amount.toLocaleString("en-IN");
}

export default function ProductCard({ product }: { product: Product }) {
  return (
    <Link
      href={`/products/${product.categorySlug}/${product.slug}`}
      className="group block bg-white rounded-xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-gray-100"
    >
      {/* Product image */}
      <div className="h-48 bg-gradient-to-br from-blue-50 to-blue-100 flex items-center justify-center group-hover:from-blue-100 group-hover:to-blue-200 transition-colors relative overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-3 group-hover:scale-105 transition-transform duration-300"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <svg
            className="w-16 h-16 text-blue-300"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={1.5}
              d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
            />
          </svg>
        )}
      </div>

      <div className="p-5">
        {/* Category Badge */}
        <span className="inline-block px-3 py-1 text-xs font-semibold text-emerald-700 bg-emerald-50 rounded-full mb-3">
          {product.category}
        </span>

        {/* Product Name */}
        <h3 className="text-lg font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-3 line-clamp-2">
          {product.description}
        </p>

        {/* Price Range */}
        <div className="flex items-center justify-between">
          <p className="text-blue-600 font-bold text-lg">
            {formatPrice(product.price.min)} - {formatPrice(product.price.max)}
          </p>
          <span className="text-blue-500 group-hover:translate-x-1 transition-transform">
            &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
