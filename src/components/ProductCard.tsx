import Link from "next/link";
import Image from "next/image";

interface Product {
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

function formatPrice(amount: number): string {
  return "\u09F3" + amount.toLocaleString("en-IN");
}

const categoryColors: Record<string, string> = {
  "Smart Door Locks": "bg-blue-50 text-blue-700",
  "Smart Lights & Fans": "bg-amber-50 text-amber-700",
  "Smart Switches & Sockets": "bg-purple-50 text-purple-700",
  "Smart Speaker & Hub": "bg-pink-50 text-pink-700",
  "Smart Security & Surveillance": "bg-red-50 text-red-700",
  "Smart Health & Wellness": "bg-emerald-50 text-emerald-700",
  "Smart Home Cleaning": "bg-cyan-50 text-cyan-700",
  "Smart Home Appliances": "bg-orange-50 text-orange-700",
  "Smart Devices & Control Panels": "bg-indigo-50 text-indigo-700",
  "Smart Electronics & Gadgets": "bg-teal-50 text-teal-700",
  "Ergonomic Smart Furniture": "bg-lime-50 text-lime-700",
  "Wall Components & Accessories": "bg-slate-100 text-slate-700",
};

const sourceLabels: Record<string, string> = {
  smartlife: "SmartLife",
  systechsmart: "SystechSmart",
  innovateit: "InnovateIT",
};

export default function ProductCard({ product }: { product: Product }) {
  const isOutOfStock = product.inStock === false;
  const colorClass =
    categoryColors[product.category] || "bg-emerald-50 text-emerald-700";

  return (
    <Link
      href={`/products/${product.categorySlug}/${product.slug}`}
      className="group block bg-white rounded-xl shadow-md hover:shadow-2xl transition-all duration-300 overflow-hidden border border-gray-100 hover:border-blue-200 hover:-translate-y-2"
    >
      {/* Product image */}
      <div className="h-52 bg-gradient-to-br from-blue-50 to-indigo-100 flex items-center justify-center relative overflow-hidden">
        {product.image ? (
          <Image
            src={product.image}
            alt={product.name}
            fill
            className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          />
        ) : (
          <div className="w-full h-full bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 flex items-center justify-center">
            <svg
              className="w-16 h-16 text-blue-300"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={1.5}
                d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"
              />
            </svg>
          </div>
        )}

        {/* Out of stock overlay */}
        {isOutOfStock && (
          <div className="absolute inset-0 bg-gray-900/60 flex items-center justify-center backdrop-blur-sm">
            <span className="bg-red-500 text-white font-bold px-4 py-2 rounded-lg text-sm">
              Out of Stock
            </span>
          </div>
        )}

        {/* Source badge */}
        {product.source && (
          <span className="absolute top-3 right-3 bg-white/90 backdrop-blur-sm text-gray-600 text-xs font-medium px-2 py-1 rounded-md shadow-sm">
            {sourceLabels[product.source] || product.source}
          </span>
        )}
      </div>

      <div className="p-5">
        {/* Category Badge */}
        <span
          className={`inline-block px-3 py-1 text-xs font-semibold rounded-full mb-3 ${colorClass}`}
        >
          {product.category}
        </span>

        {/* Product Name */}
        <h3 className="text-base font-semibold text-gray-900 mb-2 group-hover:text-blue-600 transition-colors duration-200 line-clamp-2 leading-snug">
          {product.name}
        </h3>

        {/* Description */}
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {product.description}
        </p>

        {/* Price */}
        <div className="flex items-center justify-between">
          <p className="text-blue-600 font-bold text-lg">
            {product.price.min === product.price.max
              ? formatPrice(product.price.min)
              : `${formatPrice(product.price.min)} - ${formatPrice(product.price.max)}`}
          </p>
          <span className="text-blue-500 group-hover:translate-x-1.5 transition-transform duration-300 text-lg">
            &rarr;
          </span>
        </div>
      </div>
    </Link>
  );
}
