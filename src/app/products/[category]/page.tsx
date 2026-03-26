import { notFound } from "next/navigation";
import Link from "next/link";
import ProductCard from "@/components/ProductCard";
import productsData from "@/data/products.json";

interface CategoryPageProps {
  params: { category: string };
}

export function generateStaticParams() {
  return productsData.categories.map((cat) => ({
    category: cat.slug,
  }));
}

export default function CategoryPage({ params }: CategoryPageProps) {
  const categoryInfo = productsData.categories.find(
    (c) => c.slug === params.category
  );

  if (!categoryInfo) {
    notFound();
  }

  const products = productsData.products.filter(
    (p) => p.categorySlug === params.category
  );

  return (
    <section className="bg-gray-950 min-h-screen">
      {/* Category Header */}
      <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-14 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Breadcrumb */}
          <nav className="text-gray-400 text-sm mb-4 animate-fade-in">
            <Link
              href="/"
              className="hover:text-cyan-300 transition-colors"
            >
              Home
            </Link>
            <span className="mx-2 text-gray-600">/</span>
            <Link
              href="/products"
              className="hover:text-cyan-300 transition-colors"
            >
              Products
            </Link>
            <span className="mx-2 text-gray-600">/</span>
            <span className="text-cyan-400 font-medium">{categoryInfo.name}</span>
          </nav>

          <h1 className="text-3xl md:text-5xl font-bold mb-2 animate-fade-in-up">
            {categoryInfo.name}
          </h1>
          <p className="text-gray-400 text-lg animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            {products.length} product{products.length !== 1 ? "s" : ""}{" "}
            available
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product, index) => (
              <div
                key={product.slug}
                className="animate-fade-in-up"
                style={{ animationDelay: `${index * 80}ms`, opacity: 0 }}
              >
                <ProductCard product={product} />
              </div>
            ))}
          </div>
        ) : (
          <div className="text-center py-20 animate-fade-in">
            <svg
              className="w-20 h-20 text-gray-700 mx-auto mb-4"
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
            <h3 className="text-xl font-semibold text-gray-300 mb-2">
              No products found
            </h3>
            <p className="text-gray-500 mb-6">
              There are no products in this category yet.
            </p>
            <Link
              href="/products"
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold px-6 py-3 rounded-xl transition-colors"
            >
              Browse All Categories
            </Link>
          </div>
        )}
      </div>
    </section>
  );
}
