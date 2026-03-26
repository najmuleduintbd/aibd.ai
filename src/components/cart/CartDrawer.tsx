"use client";

import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/cart-utils";
import CartItemRow from "./CartItemRow";

export default function CartDrawer() {
  const { state, closeCart, clearCart, totalItems, estimatedTotal } = useCart();

  return (
    <>
      {/* Backdrop */}
      {state.isOpen && (
        <div
          className="fixed inset-0 bg-black/60 backdrop-blur-sm z-40 transition-opacity"
          onClick={closeCart}
        />
      )}

      {/* Drawer */}
      <div
        className={`fixed top-0 right-0 h-full w-full sm:w-[400px] bg-gray-950 border-l border-gray-800 z-50 transform transition-transform duration-300 ease-in-out flex flex-col ${
          state.isOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-800">
          <h2 className="text-lg font-bold text-white">
            Cart{" "}
            {totalItems > 0 && (
              <span className="text-cyan-400 text-sm font-medium">
                ({totalItems} item{totalItems !== 1 ? "s" : ""})
              </span>
            )}
          </h2>
          <button
            onClick={closeCart}
            className="p-2 rounded-lg hover:bg-gray-800 text-gray-400 hover:text-white transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>

        {/* Body */}
        <div className="flex-1 overflow-y-auto px-5">
          {state.items.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center py-12">
              <svg className="w-16 h-16 text-gray-700 mb-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
              </svg>
              <p className="text-gray-400 font-medium mb-2">Your cart is empty</p>
              <p className="text-gray-500 text-sm mb-6">
                Browse our products and add items to get started.
              </p>
              <Link
                href="/products"
                onClick={closeCart}
                className="text-cyan-400 hover:text-cyan-300 font-semibold text-sm transition-colors"
              >
                Browse Products
              </Link>
            </div>
          ) : (
            <div>
              {state.items.map((item) => (
                <CartItemRow key={item.productId} item={item} />
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {state.items.length > 0 && (
          <div className="border-t border-gray-800 px-5 py-4 space-y-3">
            <div className="flex items-center justify-between">
              <span className="text-gray-400 text-sm">Estimated Total</span>
              <span className="text-white font-bold text-lg">
                from {formatPrice(estimatedTotal)}
              </span>
            </div>
            <Link
              href="/cart/inquiry"
              onClick={closeCart}
              className="block w-full bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold py-3 rounded-xl text-center transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Proceed to Inquiry
            </Link>
            <div className="flex items-center justify-between">
              <Link
                href="/cart"
                onClick={closeCart}
                className="text-cyan-400 hover:text-cyan-300 text-sm font-medium transition-colors"
              >
                View Full Cart
              </Link>
              <button
                onClick={clearCart}
                className="text-gray-500 hover:text-rose-400 text-sm font-medium transition-colors"
              >
                Clear Cart
              </button>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
