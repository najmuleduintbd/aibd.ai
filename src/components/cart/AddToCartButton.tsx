"use client";

import { useCart } from "@/context/CartContext";
import { useState } from "react";

interface AddToCartButtonProps {
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
  variant?: "full" | "compact" | "icon";
}

export default function AddToCartButton({
  product,
  variant = "full",
}: AddToCartButtonProps) {
  const { addToCart, state } = useCart();
  const [added, setAdded] = useState(false);
  const isOutOfStock = product.inStock === false;
  const isInCart = state.items.some((item) => item.productId === product.id);

  function handleAdd(e: React.MouseEvent) {
    e.preventDefault();
    e.stopPropagation();
    if (isOutOfStock) return;

    addToCart({
      productId: product.id,
      slug: product.slug,
      categorySlug: product.categorySlug,
      name: product.name,
      image: product.image,
      price: product.price,
      source: product.source,
    });

    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  if (variant === "icon") {
    return (
      <button
        onClick={handleAdd}
        disabled={isOutOfStock}
        className={`w-10 h-10 rounded-xl flex items-center justify-center transition-all duration-300 ${
          isOutOfStock
            ? "bg-gray-800 text-gray-600 cursor-not-allowed"
            : added
            ? "bg-emerald-500 text-white scale-110"
            : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-gray-950"
        }`}
        title={isOutOfStock ? "Out of Stock" : "Add to Cart"}
      >
        {added ? (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        ) : (
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
        )}
      </button>
    );
  }

  if (variant === "compact") {
    return (
      <button
        onClick={handleAdd}
        disabled={isOutOfStock}
        className={`px-4 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
          isOutOfStock
            ? "bg-gray-800 text-gray-500 cursor-not-allowed"
            : added
            ? "bg-emerald-500 text-white"
            : "bg-cyan-500/10 text-cyan-400 border border-cyan-500/30 hover:bg-cyan-500 hover:text-gray-950"
        }`}
      >
        {added ? (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            Added
          </>
        ) : isOutOfStock ? (
          "Out of Stock"
        ) : (
          <>
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            {isInCart ? "Add More" : "Add to Cart"}
          </>
        )}
      </button>
    );
  }

  // Full variant
  return (
    <button
      onClick={handleAdd}
      disabled={isOutOfStock}
      className={`inline-flex items-center justify-center gap-2 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 ${
        isOutOfStock
          ? "bg-gray-800 text-gray-500 cursor-not-allowed"
          : added
          ? "bg-emerald-500 text-white shadow-lg shadow-emerald-500/20"
          : "bg-cyan-500 hover:bg-cyan-400 text-gray-950 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40"
      }`}
    >
      {added ? (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
          Added to Cart!
        </>
      ) : isOutOfStock ? (
        "Out of Stock"
      ) : (
        <>
          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
          {isInCart ? "Add Another" : "Add to Cart"}
        </>
      )}
    </button>
  );
}
