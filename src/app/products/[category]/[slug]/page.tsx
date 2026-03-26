import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/products.json";

interface ProductPageProps {
  params: { category: string; slug: string };
}

function formatPrice(amount: number): string {
  return "\u09F3" + amount.toLocaleString("en-IN");
}

const sourceLabels: Record<string, { name: string; color: string }> = {
  smartlife: { name: "SmartLife", color: "bg-blue-100 text-blue-700" },
  systechsmart: { name: "SystechSmart", color: "bg-purple-100 text-purple-700" },
  innovateit: { name: "InnovateIT", color: "bg-emerald-100 text-emerald-700" },
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
    ? sourceLabels[product.source] || { name: product.source, color: "bg-gray-100 text-gray-700" }
    : null;

  const productAny = product as Record<string, unknown>;
  const inStock = productAny.inStock !== false;

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white py-8 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-5 right-20 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-blue-300 text-sm animate-fade-in">
            <Link href="/" className="hover:text-white transition-colors">
              Home
            </Link>
            <span className="mx-2">/</span>
            <Link href="/products" className="hover:text-white transition-colors">
              Products
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/products/${product.categorySlug}`}
              className="hover:text-white transition-colors"
            >
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white font-medium">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="animate-slide-in-left">
            <div className="group bg-gradient-to-br from-blue-50 via-white to-indigo-50 rounded-2xl flex items-center justify-center h-80 lg:h-[28rem] relative overflow-hidden border border-gray-100 shadow-sm">
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
                <div className="w-full h-full bg-gradient-to-br from-blue-100 via-blue-50 to-indigo-100 flex items-center justify-center">
                  <svg
                    className="w-24 h-24 text-blue-300"
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

              {/* Stock indicator on image */}
              {!inStock && (
                <div className="absolute inset-0 bg-gray-900/50 backdrop-blur-sm flex items-center justify-center">
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
              <span className="inline-block px-3 py-1 text-sm font-semibold text-emerald-700 bg-emerald-50 rounded-full">
                {product.category}
              </span>
              {sourceInfo && (
                <span
                  className={`inline-block px-3 py-1 text-sm font-semibold rounded-full ${sourceInfo.color}`}
                >
                  {sourceInfo.name}
                </span>
              )}
              <span
                className={`inline-flex items-center gap-1.5 px-3 py-1 text-sm font-semibold rounded-full ${
                  inStock
                    ? "bg-green-50 text-green-700"
                    : "bg-red-50 text-red-700"
                }`}
              >
                <span
                  className={`w-2 h-2 rounded-full ${
                    inStock ? "bg-green-500" : "bg-red-500"
                  }`}
                />
                {inStock ? "In Stock" : "Out of Stock"}
              </span>
            </div>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4 leading-tight">
              {product.name}
            </h1>

            <p className="text-gray-600 text-lg mb-6 leading-relaxed">
              {product.description}
            </p>

            {/* Price */}
            <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-2xl p-6 mb-8 border border-blue-100">
              <p className="text-sm text-gray-500 mb-1 font-medium">Price</p>
              <p className="text-3xl font-bold text-blue-600">
                {product.price.min === product.price.max
                  ? formatPrice(product.price.min)
                  : `${formatPrice(product.price.min)} - ${formatPrice(product.price.max)}`}
              </p>
            </div>

            {/* Features */}
            {product.features && product.features.length > 0 && (
              <div className="mb-8">
                <h2 className="text-xl font-semibold text-gray-900 mb-4">
                  Key Features
                </h2>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {product.features.map((feature: string, index: number) => (
                    <li
                      key={index}
                      className="flex items-center space-x-3 bg-gray-50 rounded-lg px-4 py-2.5"
                    >
                      <svg
                        className="w-5 h-5 text-emerald-500 shrink-0"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>
            )}

            {/* CTA */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center gap-2 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3.5 rounded-xl transition-all duration-300 shadow-lg shadow-blue-600/20 hover:shadow-blue-600/40"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
                  />
                </svg>
                Enquire Now
              </Link>
              <a
                href="tel:09613824682"
                className="inline-flex items-center justify-center gap-2 border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3.5 rounded-xl transition-all duration-300"
              >
                <svg
                  className="w-5 h-5"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                Call 09613-824682
              </a>
            </div>
          </div>
        </div>

        {/* Related Products */}
        {relatedProducts.length > 0 && (
          <div className="mt-20">
            <h2 className="text-2xl font-bold text-gray-900 mb-8">
              Related Products
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedProducts.map((rp, index) => (
                <div
                  key={rp.slug}
                  className="animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
                >
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
