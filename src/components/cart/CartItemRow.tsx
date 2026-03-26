"use client";

import Image from "next/image";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/cart-utils";
import type { CartItem } from "@/types";

export default function CartItemRow({ item }: { item: CartItem }) {
  const { updateQuantity, removeFromCart } = useCart();

  return (
    <div className="flex gap-3 py-4 border-b border-gray-800 last:border-0">
      {/* Image */}
      <Link
        href={`/products/${item.categorySlug}/${item.slug}`}
        className="relative w-16 h-16 rounded-lg bg-gray-800 overflow-hidden shrink-0"
      >
        {item.image ? (
          <Image
            src={item.image}
            alt={item.name}
            fill
            className="object-contain p-1"
            sizes="64px"
          />
        ) : (
          <div className="w-full h-full flex items-center justify-center">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
            </svg>
          </div>
        )}
      </Link>

      {/* Details */}
      <div className="flex-1 min-w-0">
        <Link
          href={`/products/${item.categorySlug}/${item.slug}`}
          className="text-sm font-medium text-white hover:text-cyan-300 transition-colors line-clamp-2 leading-snug"
        >
          {item.name}
        </Link>
        <p className="text-cyan-400 font-semibold text-sm mt-1">
          {item.price.min === item.price.max
            ? formatPrice(item.price.min)
            : `from ${formatPrice(item.price.min)}`}
        </p>

        {/* Quantity + Remove */}
        <div className="flex items-center justify-between mt-2">
          <div className="flex items-center gap-1">
            <button
              onClick={() => updateQuantity(item.productId, item.quantity - 1)}
              className="w-7 h-7 rounded-md bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 flex items-center justify-center text-sm transition-colors"
            >
              -
            </button>
            <span className="w-8 text-center text-sm text-white font-medium">
              {item.quantity}
            </span>
            <button
              onClick={() => updateQuantity(item.productId, item.quantity + 1)}
              className="w-7 h-7 rounded-md bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 flex items-center justify-center text-sm transition-colors"
            >
              +
            </button>
          </div>
          <button
            onClick={() => removeFromCart(item.productId)}
            className="text-gray-500 hover:text-rose-400 transition-colors p-1"
            title="Remove"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
}
