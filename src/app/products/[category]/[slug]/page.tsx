import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import ProductActions from "@/components/ProductActions";
import productsData from "@/data/products.json";
import { formatPrice } from "@/lib/cart-utils";

interface ProductPageProps {
  params: { category: string; slug: string };
}

const sourceLabels: Record<string, { name: string; color: string }> = {
  smartlife: { name: "SmartLife", color: "bg-blue-500/10 text-blue-400 border border-blue-500/20" },
  systechsmart: { name: "SystechSmart", color: "bg-violet-500/10 text-violet-400 border border-violet-500/20" },
  innovateit: { name: "InnovateIT", color: "bg-emerald-500/10 text-emerald-400 border border-emerald-500/20" },
};

export function generateStaticParams() {
  return productsData.products.map((product) => ({
    category: product.categorySlug,
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = productsData.products.find(
    (p) => p.categorySlug === params.category && p.slug === params.slug
  );

  if (!product) {
    notFound();
  }

  const relatedProducts = productsData.products
    .filter(
      (p) => p.categorySlug === product.categorySlug && p.slug !== product.slug
    )
    .slice(0, 3);

  const sourceInfo = product.source
    ? sourceLabels[product.source] || { name: product.source, color: "bg-gray-800 text-gray-300 border border-gray-700" }
    : null;

  const productAny = product as Record<string, unknown>;
  const inStock = productAny.inStock !== false;

  return (
    <section className="bg-gray-950 min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-5 right-20 w-48 h-48 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-gray-400 text-sm animate-fade-in">
            <Link href="/" className="hover:text-cyan-300 transition-colors">
              Home
            </Link>
            <span className="mx-2 text-gray-600">/</span>
            <Link href="/products" className="hover:text-cyan-300 transition-colors">
              Products
            </Link>
            <span className="mx-2 text-gray-600">/</span>
            <Link
              href={`/products/${product.categorySlug}`}
              className="hover:text-cyan-300 transition-colors"
            >
              {product.category}
            </Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-cyan-400 font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="animate-slide-in-left">
            <div className="group bg-gray-900 rounded-2xl flex items-center justify-center h-80 lg:h-[28rem] relative overflow-hidden border border-gray-800 shadow-lg shadow-black/20">
              {product.image ? (
                <Image
                  src={product.image}
                  alt={product.name}
                  fill
                  className="object-contain p-6 group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  priority
                />
              ) : (
                <div className="w-full h-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center">
                  <svg className="w-24 h-24 text-gray-700" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4" />
                  </svg>
                </div>
              )}

              {!inStock && (
                <div className="absolute inset-0 bg-gray-950/60 backdrop-blur-sm flex items-center justify-center">
                  <span className="bg-red-500 text-white font-bold px-6 py-3 rounded-xl text-lg">
                    Out of Stock
                  </span>
                </div>
              )}
            </div>
          </div>

          {/* Product Info */}
          <div className="animate-slide-in-right">
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="inline-block px-3 py-1 text-sm font-semibold text-cyan-400 bg-cyan-500/10 rounded-full border border-cyan-500/20">
                {product.category}
              </span>
              {sourceInfo && (
                <span className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${sourceInfo.color}`}>
                  {sourceInfo.name}
                </span>
              )}
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-semibold rounded-full border ${
                  inStock
                    ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
                    : "bg-red-500/10 text-red-400 border-red-500/20"
                }`}
              >
                <span className={`w-2 h-2 rounded-full ${inStock ? "bg-emerald-400" : "bg-red-400"}`} />
                {inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-white mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-gray-400 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Price */}
            <div className="bg-gray-900 rounded-2xl p-6 mb-8 border border-gray-800">
              <p className="text-sm text-gray-500 mb-1 font-medium">Price</p>
              <p className="text-3xl font-bold text-cyan-400">
                {product.price.min === product.price.max
                  ? formatPrice(product.price.min)
                  : `${formatPrice(product.price.min)} - ${formatPrice(product.price.max)}`}
              </p>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-white mb-4">
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature: string, index: number) => (
                    <li key={index} className="flex items-center space-x-3 bg-gray-900 rounded-lg px-4 py-2.5 border border-gray-800">
                      <svg className="w-5 h-5 text-cyan-400 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span className="text-gray-300 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <ProductActions
              product={{
                id: product.id,
                slug: product.slug,
                categorySlug: product.categorySlug,
                name: product.name,
                image: product.image,
                price: product.price,
                source: product.source,
                inStock: inStock,
              }}
            />
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-white mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rp, index) => (
                <div key={rp.slug} className="animate-fade-in-up" style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}>
                  <ProductCard product={rp} />
                </div>
              ))}
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
