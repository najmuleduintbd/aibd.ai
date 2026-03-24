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
    <section className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-blue-200 text-sm mb-3">
            <Link href="/products" className="hover:text-white">
              Products
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{categoryInfo.name}</span>
          </nav>
          <h1 className="text-3xl md:text-4xl font-bold">
            {categoryInfo.name}
          </h1>
          <p className="text-blue-100 mt-2">
            {products.length} product{products.length !== 1 ? "s" : ""}{" "}
            available
          </p>
        </div>
      </div>

      {/* Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {products.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {products.map((product) => (
              <ProductCard key={product.slug} product={product} />
            ))}
          </div>
        ) : (
          <p className="text-center text-gray-500 py-12">
            No products found in this category.
          </p>
        )}
      </div>
    </section>
  );
}
