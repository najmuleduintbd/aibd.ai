import CategoryGrid from "@/components/CategoryGrid";
import productsData from "@/data/products.json";

export default function ProductsPage() {
  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-4xl font-bold">Our Products</h1>
          <p className="text-blue-100 mt-2">
            Explore smart home solutions across {productsData.categories.length}{" "}
            categories
          </p>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <CategoryGrid categories={productsData.categories} />
      </div>
    </section>
  );
}
