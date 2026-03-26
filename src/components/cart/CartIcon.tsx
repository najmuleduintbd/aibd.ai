"use client";

import { useCart } from "@/context/CartContext";

export default function CartIcon() {
  const { totalItems, toggleCart } = useCart();

  return (
    <button
      onClick={toggleCart}
      className="relative p-2 rounded-lg hover:bg-white/5 transition-colors duration-200 group"
      aria-label="Shopping cart"
    >
      <svg
        className="w-6 h-6 text-gray-300 group-hover:text-cyan-400 transition-colors"
        fill="none"
        stroke="currentColor"
        viewBox="0 0 24 24"
      >
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z"
        />
      </svg>
      {totalItems > 0 && (
        <span className="absolute -top-0.5 -right-0.5 w-5 h-5 bg-cyan-500 text-gray-950 text-xs font-bold rounded-full flex items-center justify-center animate-scale-in">
          {totalItems > 9 ? "9+" : totalItems}
        </span>
      )}
    </button>
  );
}
