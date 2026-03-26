"use client";

import { useState, FormEvent } from "react";
import Link from "next/link";
import { useCart } from "@/context/CartContext";
import { formatPrice, generateWhatsAppMessage, getWhatsAppUrl } from "@/lib/cart-utils";

export default function InquiryPage() {
  const { state, estimatedTotal, totalItems, clearCart } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    area: "",
    notes: "",
  });
  const [sent, setSent] = useState(false);

  function handleWhatsApp(e: FormEvent) {
    e.preventDefault();
    const message = generateWhatsAppMessage(state.items, formData);
    const url = getWhatsAppUrl(message);
    window.open(url, "_blank");
    setSent(true);
  }

  if (state.items.length === 0 && !sent) {
    return (
      <section className="bg-gray-950 min-h-screen">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <svg className="w-20 h-20 text-gray-700 mx-auto mb-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 100 4 2 2 0 000-4z" />
          </svg>
          <h2 className="text-2xl font-bold text-white mb-3">No items to inquire about</h2>
          <p className="text-gray-400 mb-8">Add products to your cart first.</p>
          <Link href="/products" className="inline-block bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold px-8 py-3.5 rounded-xl transition-colors">
            Browse Products
          </Link>
        </div>
      </section>
    );
  }

  if (sent) {
    return (
      <section className="bg-gray-950 min-h-screen">
        <div className="max-w-2xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center animate-scale-in">
          <div className="w-20 h-20 bg-emerald-500/10 rounded-full flex items-center justify-center mx-auto mb-6 border border-emerald-500/20">
            <svg className="w-10 h-10 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold text-white mb-3">Inquiry Sent!</h2>
          <p className="text-gray-400 mb-8 max-w-md mx-auto">
            Your order inquiry has been opened in WhatsApp. Our team will get back to you shortly with pricing details and availability.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <button
              onClick={() => { clearCart(); }}
              className="bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Clear Cart & Continue Shopping
            </button>
            <Link
              href="/"
              className="border border-gray-700 hover:border-gray-600 text-gray-300 hover:text-white font-semibold px-8 py-3 rounded-xl transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </section>
    );
  }

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
            <Link href="/cart" className="hover:text-cyan-300 transition-colors">Cart</Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-cyan-400 font-medium">Inquiry</span>
          </nav>
          <h1 className="text-3xl md:text-5xl font-bold animate-fade-in-up">Order Inquiry</h1>
          <p className="text-gray-400 mt-2 animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            Fill in your details and send your order via WhatsApp
          </p>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* Form */}
          <div className="lg:col-span-2 animate-slide-in-left">
            <form onSubmit={handleWhatsApp} className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sm:p-8 space-y-6">
              <h2 className="text-xl font-bold text-white mb-2">Your Details</h2>

              <div>
                <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                  Full Name <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  id="name"
                  required
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                  placeholder="Your full name"
                />
              </div>

              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-300 mb-2">
                  Phone Number <span className="text-rose-400">*</span>
                </label>
                <input
                  type="tel"
                  id="phone"
                  required
                  value={formData.phone}
                  onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                  placeholder="01XXX-XXXXXX"
                />
              </div>

              <div>
                <label htmlFor="area" className="block text-sm font-medium text-gray-300 mb-2">
                  Area / Location <span className="text-rose-400">*</span>
                </label>
                <input
                  type="text"
                  id="area"
                  required
                  value={formData.area}
                  onChange={(e) => setFormData({ ...formData, area: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all"
                  placeholder="e.g., Dhanmondi, Dhaka"
                />
              </div>

              <div>
                <label htmlFor="notes" className="block text-sm font-medium text-gray-300 mb-2">
                  Additional Notes
                </label>
                <textarea
                  id="notes"
                  rows={3}
                  value={formData.notes}
                  onChange={(e) => setFormData({ ...formData, notes: e.target.value })}
                  className="w-full px-4 py-3 bg-gray-800 border border-gray-700 text-white rounded-xl focus:ring-2 focus:ring-cyan-500 focus:border-cyan-500 outline-none transition-all resize-none"
                  placeholder="Any special requirements or questions..."
                />
              </div>

              <button
                type="submit"
                className="w-full bg-emerald-500 hover:bg-emerald-400 text-white font-semibold py-4 rounded-xl transition-all duration-300 shadow-lg shadow-emerald-500/20 hover:shadow-emerald-400/30 flex items-center justify-center gap-3 text-lg"
              >
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                Send via WhatsApp
              </button>
            </form>
          </div>

          {/* Order Summary Sidebar */}
          <div className="lg:col-span-1 animate-slide-in-right">
            <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 sticky top-24">
              <h2 className="text-lg font-bold text-white mb-4">Order Summary</h2>
              <div className="space-y-3 max-h-80 overflow-y-auto">
                {state.items.map((item) => (
                  <div key={item.productId} className="flex items-center gap-3 py-2 border-b border-gray-800 last:border-0">
                    <div className="w-10 h-10 rounded-lg bg-gray-800 shrink-0 flex items-center justify-center overflow-hidden">
                      {item.image ? (
                        <img src={item.image} alt="" className="w-full h-full object-contain p-0.5" />
                      ) : (
                        <svg className="w-4 h-4 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                        </svg>
                      )}
                    </div>
                    <div className="flex-1 min-w-0">
                      <p className="text-sm text-white line-clamp-1">{item.name}</p>
                      <p className="text-xs text-gray-400">
                        x{item.quantity} &middot; from {formatPrice(item.price.min)}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div className="border-t border-gray-800 mt-4 pt-4">
                <div className="flex justify-between items-center">
                  <span className="text-gray-400 text-sm">Items: {totalItems}</span>
                  <span className="text-cyan-400 font-bold">from {formatPrice(estimatedTotal)}</span>
                </div>
                <p className="text-gray-500 text-xs mt-3">
                  Exact pricing confirmed after inquiry
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
