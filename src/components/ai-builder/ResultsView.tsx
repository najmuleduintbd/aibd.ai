"use client";

import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/cart-utils";
import RecommendedProductCard from "./RecommendedProductCard";
import type { AIBuilderResponse, Product } from "@/types";

const roomIcons: Record<string, string> = {
  "Living Room": "🛋️",
  Bedroom: "🛏️",
  Kitchen: "🍳",
  Bathroom: "🚿",
  Office: "💻",
  Entrance: "🚪",
  "Whole Home": "🏠",
};

interface ResultsViewProps {
  results: AIBuilderResponse;
  productsMap: Map<number, Product>;
  onReset: () => void;
}

export default function ResultsView({
  results,
  productsMap,
  onReset,
}: ResultsViewProps) {
  const { addToCart } = useCart();

  function addAllToCart() {
    for (const room of results.rooms) {
      for (const rec of room.products) {
        const product = productsMap.get(rec.productId);
        if (!product) continue;
        addToCart({
          productId: product.id,
          slug: product.slug,
          categorySlug: product.categorySlug,
          name: product.name,
          image: product.image,
          price: product.price,
          source: product.source,
        });
      }
    }
  }

  return (
    <div className="space-y-8 animate-fade-in-up">
      {/* Summary */}
      <div className="bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 rounded-2xl p-6">
        <p className="text-gray-300 leading-relaxed">{results.summary}</p>
        <div className="flex flex-wrap items-center gap-4 mt-4">
          <span className="text-cyan-400 font-bold text-xl">
            Estimated: {formatPrice(results.estimatedTotal)}
          </span>
          <button
            onClick={addAllToCart}
            className="bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold px-6 py-2.5 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20 flex items-center gap-2 text-sm"
          >
            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            Add All to Cart
          </button>
        </div>
      </div>

      {/* Room Sections */}
      {results.rooms.map((room) => (
        <div key={room.roomType} className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-xl font-bold text-white flex items-center gap-2">
              <span className="text-2xl">
                {roomIcons[room.roomType] || "🏠"}
              </span>
              {room.roomType}
            </h3>
            <span className="text-sm text-gray-400">
              ~{formatPrice(room.roomBudget)}
            </span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {room.products.map((rec) => {
              const product = productsMap.get(rec.productId);
              if (!product) return null;
              return (
                <RecommendedProductCard
                  key={rec.productId}
                  product={product}
                  reason={rec.reason}
                />
              );
            })}
          </div>
        </div>
      ))}

      {/* Actions */}
      <div className="flex flex-col sm:flex-row gap-4 pt-4">
        <button
          onClick={onReset}
          className="flex-1 py-3 px-6 rounded-xl border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 font-semibold transition-all text-center"
        >
          Start Over
        </button>
        <button
          onClick={addAllToCart}
          className="flex-1 py-3 px-6 rounded-xl bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold transition-all shadow-lg shadow-cyan-500/20 text-center"
        >
          Add All to Cart
        </button>
      </div>
    </div>
  );
}
