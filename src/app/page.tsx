import Link from "next/link";
import CategoryGrid from "@/components/CategoryGrid";
import productsData from "@/data/products.json";

const stats = [
  { label: "Projects", value: "12,000+" },
  { label: "Devices Installed", value: "1M+" },
  { label: "Support", value: "24/7" },
  { label: "Categories", value: "10+" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-blue-600 via-blue-700 to-blue-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-32 text-center">
          <h1 className="text-4xl md:text-6xl font-bold mb-6 leading-tight">
            Transform Your Home
            <br />
            Into a <span className="text-emerald-400">Smart Home</span>
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 mb-10 max-w-2xl mx-auto">
            Bangladesh&apos;s Leading Smart Home Solution Provider
          </p>
          <Link
            href="/products"
            className="inline-block bg-emerald-500 hover:bg-emerald-600 text-white font-semibold px-8 py-4 rounded-lg text-lg transition-colors shadow-lg hover:shadow-xl"
          >
            Explore Products
          </Link>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-white border-b">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat) => (
              <div key={stat.label}>
                <p className="text-3xl md:text-4xl font-bold text-blue-600">
                  {stat.value}
                </p>
                <p className="text-gray-500 mt-1">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-gray-50 py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">
              Product Categories
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Browse our wide range of smart home products to find the perfect
              solution for your needs.
            </p>
          </div>
          <CategoryGrid categories={productsData.categories} />
        </div>
      </section>
    </>
  );
}
