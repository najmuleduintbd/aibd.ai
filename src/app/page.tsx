import Link from "next/link";
import CategoryGrid from "@/components/CategoryGrid";
import productsData from "@/data/products.json";

const stats = [
  { label: "Products", value: "100+" },
  { label: "Trusted Sources", value: "3" },
  { label: "Categories", value: "12" },
  { label: "Support", value: "24/7" },
];

const whyChoose = [
  {
    title: "Best Prices",
    description:
      "Compare prices across multiple trusted sources to ensure you always get the best deal on smart home products.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
  },
  {
    title: "Verified Products",
    description:
      "Every product is sourced from verified and trusted Bangladesh brands, ensuring quality and authenticity.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    ),
  },
  {
    title: "Multiple Brands",
    description:
      "Access products from SmartLife, SystechSmart, InnovateIT and more, all in one convenient platform.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 11H5m14 0a2 2 0 012 2v6a2 2 0 01-2 2H5a2 2 0 01-2-2v-6a2 2 0 012-2m14 0V9a2 2 0 00-2-2M5 11V9a2 2 0 012-2m0 0V5a2 2 0 012-2h6a2 2 0 012 2v2M7 7h10" />
      </svg>
    ),
  },
  {
    title: "Expert Support",
    description:
      "Our dedicated team of smart home experts is ready to help you choose the perfect products for your needs.",
    icon: (
      <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M18.364 5.636l-3.536 3.536m0 5.656l3.536 3.536M9.172 9.172L5.636 5.636m3.536 9.192l-3.536 3.536M21 12a9 9 0 11-18 0 9 9 0 0118 0zm-5 0a4 4 0 11-8 0 4 4 0 018 0z" />
      </svg>
    ),
  },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white overflow-hidden">
        {/* Floating decoration elements */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-violet-500/10 rounded-full blur-3xl animate-float delay-200" />
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/5 rounded-full blur-3xl" />
          {/* Grid pattern overlay */}
          <div
            className="absolute inset-0 opacity-[0.04]"
            style={{
              backgroundImage:
                "linear-gradient(rgba(6,182,212,.3) 1px, transparent 1px), linear-gradient(90deg, rgba(6,182,212,.3) 1px, transparent 1px)",
              backgroundSize: "60px 60px",
            }}
          />
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36 text-center">
          <div className="animate-fade-in-up">
            <span className="inline-block bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-5 py-2 text-sm font-medium text-cyan-300 mb-6">
              Aggregating from multiple trusted sources
            </span>
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            Bangladesh&apos;s #1
            <br />
            <span className="bg-gradient-to-r from-cyan-400 via-violet-400 to-pink-400 bg-clip-text text-transparent">
              Smart Home Marketplace
            </span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 mb-10 max-w-2xl mx-auto animate-fade-in-up delay-200" style={{ opacity: 0 }}>
            Browse 100+ smart home products from SmartLife, SystechSmart,
            InnovateIT and more. Smart locks, lights, switches, security
            cameras &mdash; all in one place.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center animate-fade-in-up delay-300" style={{ opacity: 0 }}>
            <Link
              href="/products"
              className="inline-block bg-cyan-500 hover:bg-cyan-400 text-gray-950 font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-400/40"
              style={{ animation: "pulse-glow 2s ease-in-out infinite" }}
            >
              Explore Products
            </Link>
            <Link
              href="/contact"
              className="inline-block bg-white/5 backdrop-blur-sm hover:bg-white/10 border border-gray-700 hover:border-gray-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Bar */}
      <section className="bg-gray-900 border border-gray-800 shadow-2xl shadow-black/20 relative -mt-6 mx-4 sm:mx-8 lg:mx-auto lg:max-w-5xl rounded-2xl z-10">
        <div className="px-6 sm:px-10 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
              >
                <p className="text-3xl md:text-4xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
                  {stat.value}
                </p>
                <p className="text-gray-400 mt-1 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Categories */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Browse Categories
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Smart Home Product Categories
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Explore our wide range of smart home products across{" "}
              {productsData.categories.length} categories from trusted Bangladesh
              brands.
            </p>
          </div>
          <CategoryGrid categories={productsData.categories} products={productsData.products} />
        </div>
      </section>

      {/* AI Builder CTA */}
      <section className="bg-gray-900/50 py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-10 md:p-14 overflow-hidden text-center">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-cyan-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <span className="inline-block bg-gradient-to-r from-cyan-500/10 to-violet-500/10 border border-cyan-500/20 rounded-full px-5 py-2 text-sm font-medium text-cyan-300 mb-6">
                New Feature
              </span>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                AI Smart Home Builder
              </h2>
              <p className="text-gray-400 max-w-xl mx-auto mb-8">
                Tell us your rooms, budget, and priorities. Our AI will instantly
                recommend the perfect smart home setup tailored just for you.
              </p>
              <Link
                href="/ai-builder"
                className="inline-flex items-center gap-2 bg-gradient-to-r from-cyan-500 to-violet-500 text-white font-semibold px-8 py-4 rounded-xl text-lg transition-all duration-300 shadow-lg shadow-cyan-500/20 hover:shadow-cyan-500/40 hover:scale-[1.02]"
              >
                <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                Try AI Builder
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Why Choose AIBD.AI */}
      <section className="bg-gray-950 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Advantages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AIBD.AI
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              We make smart home shopping simple, reliable, and affordable for
              every home in Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyChoose.map((item, index) => (
              <div
                key={item.title}
                className="group bg-gray-900 rounded-2xl p-7 border border-gray-800 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
              >
                <div className="w-14 h-14 bg-cyan-500/10 group-hover:bg-cyan-500 rounded-xl flex items-center justify-center text-cyan-400 group-hover:text-gray-950 transition-all duration-300 mb-5">
                  {item.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {item.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {item.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
