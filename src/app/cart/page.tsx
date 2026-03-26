"use client";

import Link from "next/link";
import Image from "next/image";
import { useCart } from "@/context/CartContext";
import { formatPrice } from "@/lib/cart-utils";

export default function CartPage() {
  const { state, updateQuantity, removeFromCart, clearCart, totalItems, estimatedTotal } = useCart();

  return (
    <section className="bg-gray-950 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-gray-400 text-sm mb-4 animate-fade-in">
            <Link href="/" className="hover:text-cyan-300 transition-colors">Home</Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-cyan-400 font-medium">Cart</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold animate-fade-in-up">Your Cart</h1>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {state.items.length === 0 ? (
          <div className="text-center py-20 animate-fade-in">
            <svg className="w-24 h-24 text-gray-700 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
            </svg>
            <h2 className="text-2xl font-bold text-white mb-3">Your cart is empty</h2>
            <p className="text-gray-400 mb-8 max-w-md mx-auto">
              Browse our smart home products and add items to your cart to get started.
            </p>
            <Link
              href="/products"
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-cyan-500/20"
            >
              Browse Products
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-4">
              <div className="flex items-center justify-between mb-2">
                <p className="text-gray-400 text-sm">
                  {totalItems} item{totalItems !== 1 ? "s" : ""} in cart
                </p>
                <button
                  onClick={clearCart}
                  className="text-gray-500 hover:text-rose-400 text-sm font-medium transition-colors"
                >
                  Clear All
                </button>
              </div>

              {state.items.map((item, index) => (
                <div
                  key={item.productId}
                  className="bg-gray-900 border border-gray-800 rounded-xl p-4 sm:p-5 flex gap-4 animate-fade-in-up"
                  style={{ animationDelay: `${index * 60}ms`, opacity: 0 }}
                >
                  {/* Image */}
                  <Link
                    href={`/products/${item.categorySlug}/${item.slug}`}
                    className="relative w-20 h-20 sm:w-24 sm:h-24 rounded-lg bg-gray-800 overflow-hidden shrink-0"
                  >
                    {item.image ? (
                      <Image src={item.image} alt={item.name} fill className="object-contain p-2" sizes="96px" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <svg className="w-8 h-8 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      </div>
                    )}
                  </Link>

                  {/* Details */}
                  <div className="flex-1 min-w-0">
                    <Link
                      href={`/products/${item.categorySlug}/${item.slug}`}
                      className="text-white font-semibold hover:text-cyan-300 transition-colors line-clamp-2"
                    >
                      {item.name}
                    </Link>
                    <p className="text-cyan-400 font-bold mt-1">
                      {item.price.min === item.price.max
                        ? formatPrice(item.price.min)
                        : `from ${formatPrice(item.price.min)}`}
                    </p>

                    <div className="flex items-center justify-between mt-3">
                      <div className="flex items-center gap-2">
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                          className="w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 flex items-center justify-center transition-colors"
                        >
                          -
                        </button>
                        <span className="w-10 text-center text-white font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                          className="w-8 h-8 rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:text-white hover:border-gray-600 flex items-center justify-center transition-colors"
                        >
                          +
                        </button>
                      </div>
                      <div className="flex items-center gap-4">
                        <span className="text-white font-semibold">
                          {formatPrice(item.price.min * item.quantity)}
                        </span>
                        <button
                          onClick={() => removeFromCart(item.productId)}
                          className="text-gray-500 hover:text-rose-400 transition-colors p-1"
                          title="Remove"
                        >
                          <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
                          </svg>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sticky top-24">
                <h2 className="text-lg font-bold text-white mb-5">Order Summary</h2>
                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-sm">
                    <span className="text-gray-400">Items ({totalItems})</span>
                    <span className="text-white">from {formatPrice(estimatedTotal)}</span>
                  </div>
                  <div className="border-t border-gray-800 pt-3 flex justify-between">
                    <span className="text-gray-300 font-medium">Estimated Total</span>
                    <span className="text-cyan-400 font-bold text-lg">from {formatPrice(estimatedTotal)}</span>
                  </div>
                </div>
                <p className="text-gray-500 text-xs mb-5">
                  Final pricing will be confirmed during inquiry. Prices shown are starting estimates.
                </p>
                <Link
                  href="/cart/inquiry"
                  className="block w-full bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold py-3.5 rounded-xl text-center transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-400/40"
                >
                  Proceed to Inquiry
                </Link>
                <Link
                  href="/products"
                  className="block text-center text-cyan-400 hover:text-cyan-300 text-sm font-medium mt-4 transition-colors"
                >
                  Continue Shopping
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
