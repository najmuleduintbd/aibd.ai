import Link from "next/link";
import Image from "next/image";
import AddToCartButton from "@/components/cart/AddToCartButton";
import { formatPrice } from "@/lib/cart-utils";

interface Product {
  id: number;
  name: string;
  slug: string;
  categorySlug: string;
  price: { min: number; max: number };
  category: string;
  description: string;
  image?: string;
  source?: string;
  inStock?: boolean;
}

const categoryColors: Record<string, string> = {
  "Smart Door Locks": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Smart Lights & Fans": "bg-amber-500/10 text-amber-400 border-amber-500/20",
  "Smart Switches & Sockets": "bg-violet-500/10 text-violet-400 border-violet-500/20",
  "Smart Speaker & Hub": "bg-pink-500/10 text-pink-400 border-pink-500/20",
  "Smart Security & Surveillance": "bg-rose-500/10 text-rose-400 border-rose-500/20",
  "Smart Health & Wellness": "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
  "Smart Home Cleaning": "bg-cyan-500/10 text-cyan-400 border-cyan-500/20",
  "Smart Home Appliances": "bg-orange-500/10 text-orange-400 border-orange-500/20",
  "Smart Devices & Control Panels": "bg-indigo-500/10 text-indigo-400 border-indigo-500/20",
  "Smart Electronics & Gadgets": "bg-teal-500/10 text-teal-400 border-teal-500/20",
  "Ergonomic Smart Furniture": "bg-lime-500/10 text-lime-400 border-lime-500/20",
  "Wall Components & Accessories": "bg-slate-500/10 text-slate-400 border-slate-500/20",
};

const sourceLabels: Record<string, string> = {
  smartlife: "SmartLife",
  systechsmart: "SystechSmart",
  innovateit: "InnovateIT",
};

export default function ProductCard({ product }: { product: Product }) {
  const isOutOfStock = product.inStock === false;
  const colorClass =
    categoryColors[product.category] || "bg-cyan-500/10 text-cyan-400 border-cyan-500/20";

  return (
    <div className="group relative bg-gray-900 rounded-xl shadow-lg shadow-black/20 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300 overflow-hidden border border-gray-800 hover:border-cyan-500/30 hover:-translate-y-2">
      <Link href={`/products/${product.categorySlug}/${product.slug}`} className="block">
        {/* Product image */}
        <div className="h-52 bg-gray-800 flex items-center justify-center relative overflow-hidden">
          {product.image ? (
            <Image
              src={product.image}
              alt={product.name}
              fill
              className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            />
          ) : (
            <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
              <svg className="w-16 h-16 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
              </svg>
            </div>
          )}

          {/* Out of stock overlay */}
          {isOutOfStock && (
            <div className="absolute inset-0 bg-gray-950/70 flex items-center justify-center backdrop-blur-sm">
              <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg text-sm">
                Out of Stock
              </span>
            </div>
          )}

          {/* Source badge */}
          {product.source && (
            <span className="absolute top-3 right-3 bg-gray-900/90 backdrop-blur-sm text-gray-300 text-xs font-medium px-2 py-1 rounded-md border border-gray-700">
              {sourceLabels[product.source] || product.source}
            </span>
          )}
        </div>

        <div className="p-5">
          {/* Category Badge */}
          <span className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 border ${colorClass}`}>
            {product.category}
          </span>

          {/* Product Name */}
          <h3 className="text-base font-semibold text-white mb-2 group-hover:text-cyan-300 transition-colors duration-200 line-clamp-2 leading-snug">
            {product.name}
          </h3>

          {/* Description */}
          <p className="text-gray-400 text-sm mb-4 line-clamp-2">
            {product.description}
          </p>

          {/* Price + Cart */}
          <div className="flex items-center justify-between">
            <p className="text-cyan-400 font-bold text-lg">
              {product.price.min === product.price.max
                ? formatPrice(product.price.min)
                : `${formatPrice(product.price.min)} - ${formatPrice(product.price.max)}`}
            </p>
          </div>
        </div>
      </Link>

      {/* Add to Cart button - absolute positioned */}
      <div className="absolute bottom-5 right-5">
        <AddToCartButton
          product={{
            id: product.id,
            slug: product.slug,
            categorySlug: product.categorySlug,
            name: product.name,
            image: product.image || "",
            price: product.price,
            source: product.source || "",
            inStock: product.inStock,
          }}
          variant="icon"
        />
      </div>
    </div>
  );
}
