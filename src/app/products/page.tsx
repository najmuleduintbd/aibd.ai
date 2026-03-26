import CategoryGrid from "@/components/CategoryGrid";
import productsData from "@/data/products.json";

export default function ProductsPage() {
  const totalProducts = productsData.products.length;
  const totalCategories = productsData.categories.length;

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Page Header */}
      <div className="bg-gradient-to-br from-blue-700 via-blue-800 to-indigo-900 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-10 w-48 h-48 bg-indigo-500/10 rounded-full blur-3xl" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-3xl md:text-5xl font-bold mb-3 animate-fade-in-up">
            Our Products
          </h1>
          <p className="text-blue-200 text-lg animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            Explore smart home solutions across {totalCategories} categories
          </p>
        </div>
      </div>

      {/* Search/Filter Section (visual) */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-6 relative z-10">
        <div className="bg-white rounded-2xl shadow-lg p-6 animate-scale-in">
          <div className="flex flex-col md:flex-row items-center gap-4">
            <div className="relative flex-1 w-full">
              <svg
                className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
                />
              </svg>
              <input
                type="text"
                placeholder="Search products..."
                className="w-full pl-10 pr-4 py-3 border border-gray-200 rounded-xl focus:ring-2 focus:ring-blue-500 focus:border-blue-500 outline-none transition-all"
                readOnly
              />
            </div>
            <div className="flex items-center gap-3 text-sm text-gray-500">
              <span className="bg-blue-50 text-blue-700 font-semibold px-4 py-2 rounded-lg">
                {totalProducts} Products
              </span>
              <span className="bg-emerald-50 text-emerald-700 font-semibold px-4 py-2 rounded-lg">
                {totalCategories} Categories
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14">
        <h2 className="text-2xl font-bold text-gray-900 mb-8">
          All Categories
        </h2>
        <CategoryGrid categories={productsData.categories} />
      </div>
    </section>
  );
}
