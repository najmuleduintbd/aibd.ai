import Link from "next/link";
import Image from "next/image";

interface Category {
  name: string;
  slug: string;
  icon: string;
  productCount: number;
}

interface Product {
  name: string;
  slug: string;
  categorySlug: string;
  image?: string;
}

const categoryAccents: Record<string, { border: string; glow: string; text: string }> = {
  lock: { border: "border-cyan-500/40", glow: "group-hover:shadow-cyan-500/20", text: "text-cyan-400" },
  lightbulb: { border: "border-amber-500/40", glow: "group-hover:shadow-amber-500/20", text: "text-amber-400" },
  toggle: { border: "border-violet-500/40", glow: "group-hover:shadow-violet-500/20", text: "text-violet-400" },
  speaker: { border: "border-pink-500/40", glow: "group-hover:shadow-pink-500/20", text: "text-pink-400" },
  shield: { border: "border-rose-500/40", glow: "group-hover:shadow-rose-500/20", text: "text-rose-400" },
  heart: { border: "border-emerald-500/40", glow: "group-hover:shadow-emerald-500/20", text: "text-emerald-400" },
  cleaning: { border: "border-cyan-500/40", glow: "group-hover:shadow-cyan-500/20", text: "text-cyan-400" },
  thermometer: { border: "border-orange-500/40", glow: "group-hover:shadow-orange-500/20", text: "text-orange-400" },
  hub: { border: "border-indigo-500/40", glow: "group-hover:shadow-indigo-500/20", text: "text-indigo-400" },
  plug: { border: "border-yellow-500/40", glow: "group-hover:shadow-yellow-500/20", text: "text-yellow-400" },
  blinds: { border: "border-lime-500/40", glow: "group-hover:shadow-lime-500/20", text: "text-lime-400" },
  sensor: { border: "border-teal-500/40", glow: "group-hover:shadow-teal-500/20", text: "text-teal-400" },
  furniture: { border: "border-lime-500/40", glow: "group-hover:shadow-lime-500/20", text: "text-lime-400" },
};

export default function CategoryGrid({
  categories,
  products = [],
}: {
  categories: Category[];
  products?: Product[];
}) {
  return (
    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-5">
      {categories.map((category, index) => {
        const accent = categoryAccents[category.icon] || {
          border: "border-cyan-500/40",
          glow: "group-hover:shadow-cyan-500/20",
          text: "text-cyan-400",
        };
        const categoryImage = products.find(
          (p) => p.categorySlug === category.slug && p.image
        )?.image;

        return (
          <Link
            key={category.slug}
            href={`/products/${category.slug}`}
            className={`group relative bg-gray-900/80 backdrop-blur-sm ${accent.border} border rounded-2xl overflow-hidden hover:shadow-2xl ${accent.glow} transition-all duration-300 hover:scale-[1.03] hover:-translate-y-1 animate-fade-in-up`}
            style={{ animationDelay: `${index * 60}ms`, opacity: 0 }}
          >
            {/* Image */}
            <div className="relative h-40 sm:h-44 overflow-hidden bg-gray-800">
              {categoryImage ? (
                <Image
                  src={categoryImage}
                  alt={category.name}
                  fill
                  className="object-contain p-3 group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 50vw, (max-width: 1024px) 33vw, 25vw"
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <svg className="w-14 h-14 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              )}
              {/* Gradient overlay */}
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
            </div>

            {/* Content */}
            <div className="p-4">
              <h3 className="font-semibold text-white text-sm mb-1 group-hover:text-cyan-300 transition-colors leading-tight">
                {category.name}
              </h3>
              <p className={`text-xs ${accent.text} font-medium`}>
                {category.productCount} products
              </p>
            </div>
          </Link>
        );
      })}
    </div>
  );
}
