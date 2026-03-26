"use client";

import Image from "next/image";
import Link from "next/link";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { formatPrice } from "@/lib/cart-utils";
import type { Product } from "@/types";

interface RecommendedProductCardProps {
  product: Product;
  reason: string;
}

export default function RecommendedProductCard({
  product,
  reason,
}: RecommendedProductCardProps) {
  return (
    <div className="bg-gray-900 border border-gray-800 rounded-xl overflow-hidden hover:border-cyan-500/30 transition-all duration-300">
      <div className="flex gap-4 p-4">
        {/* Image */}
        <Link
          href={`/products/${product.categorySlug}/${product.slug}`}
          className="relative w-20 h-20 rounded-lg bg-gray-800 overflow-hidden shrink-0"
        >
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-2"
              sizes="80px"
            />
          ) : (
            <div className="w-full h-full flex items-center justify-center">
              <svg className="w-8 h-8 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          )}
        </Link>

        {/* Details */}
        <div className="flex-1 min-w-0">
          <Link
            href={`/products/${product.categorySlug}/${product.slug}`}
            className="text-sm font-semibold text-white hover:text-cyan-300 transition-colors line-clamp-2 leading-snug"
          >
            {product.name}
          </Link>
          <p className="text-xs text-gray-500 mt-1 line-clamp-1">{reason}</p>
          <div className="flex items-center justify-between mt-2">
            <span className="text-cyan-400 font-bold text-sm">
              {product.price.min === product.price.max
                ? formatPrice(product.price.min)
                : `from ${formatPrice(product.price.min)}`}
            </span>
            <AddToCartButton product={product} variant="icon" />
          </div>
        </div>
      </div>
    </div>
  );
}
