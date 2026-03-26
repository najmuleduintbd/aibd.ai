"use client";

import AddToCartButton from "@/components/cart/AddToCartButton";

interface ProductActionsProps {
  product: {
    id: number;
    slug: string;
    categorySlug: string;
    name: string;
    image: string;
    price: { min: number; max: number };
    source: string;
    inStock?: boolean;
  };
}

export default function ProductActions({ product }: ProductActionsProps) {
  return (
    <div className="flex flex-col sm:flex-row gap-4">
      <AddToCartButton product={product} variant="full" />
      <a
        href="tel:09613824682"
        className="inline-flex items-center justify-center gap-2 border-2 border-cyan-500 text-cyan-400 hover:bg-cyan-500/10 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300"
      >
        <svg
          className="w-5 h-5"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
          />
        </svg>
        Call 09613-824682
      </a>
    </div>
  );
}
