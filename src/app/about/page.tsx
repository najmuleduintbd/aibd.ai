const sources = [
  {
    name: "SmartLife",
    description: "Premium smart home solutions provider in Bangladesh",
    color: "from-cyan-500 to-blue-500",
  },
  {
    name: "SystechSmart",
    description: "Innovative smart technology solutions for modern homes",
    color: "from-violet-500 to-purple-500",
  },
  {
    name: "InnovateIT",
    description: "Cutting-edge IT and smart home products",
    color: "from-emerald-500 to-green-500",
  },
];

const reasons = [
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

const stats = [
  { value: "100+", label: "Products Available" },
  { value: "3", label: "Trusted Sources" },
  { value: "12", label: "Product Categories" },
  { value: "24/7", label: "Customer Support" },
];

export default function AboutPage() {
  return (
    <section className="bg-gray-950 min-h-screen">
      {/* Hero Header */}
      <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-20 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-10 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-float delay-200" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-cyan-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-5 py-2 text-sm font-medium text-cyan-300 mb-6 animate-fade-in">
            Smart Home Solutions Aggregator
          </span>
          <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fade-in-up">
            About AIBD.AI
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            Bangladesh&apos;s premier smart home marketplace, bringing together
            the best products from multiple trusted sources.
          </p>
        </div>
      </div>

      {/* Mission */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="max-w-3xl mx-auto text-center animate-fade-in-up">
          <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2">
            Our Mission
          </span>
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Making Smart Homes Accessible
          </h2>
          <p className="text-gray-400 text-lg leading-relaxed">
            At AIBD.AI, we believe that every home in Bangladesh deserves to be
            smart. We aggregate products from multiple trusted sources like
            SmartLife, SystechSmart, and InnovateIT to bring you the widest
            selection of smart home products at competitive prices. Our platform
            makes it easy to compare, choose, and purchase the perfect products
            for your home automation needs.
          </p>
        </div>
      </div>

      {/* We Aggregate From */}
      <div className="bg-gray-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Partners
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              We Aggregate From
            </h2>
            <p className="text-gray-400 max-w-xl mx-auto">
              Products sourced from Bangladesh&apos;s most trusted smart home brands.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {sources.map((source, index) => (
              <div
                key={source.name}
                className="group relative bg-gray-900 rounded-2xl p-8 border border-gray-800 hover:border-cyan-500/30 hover:shadow-2xl hover:shadow-cyan-500/5 transition-all duration-300 hover:-translate-y-1 overflow-hidden animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
              >
                <div
                  className={`absolute inset-0 bg-gradient-to-br ${source.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                />
                <div
                  className={`w-16 h-16 rounded-2xl bg-gradient-to-br ${source.color} flex items-center justify-center text-white text-2xl font-bold mb-5`}
                >
                  {source.name.charAt(0)}
                </div>
                <h3 className="text-xl font-bold text-white mb-2">
                  {source.name}
                </h3>
                <p className="text-gray-400">{source.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Stats */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20">
        <div className="bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-3xl p-10 md:p-14">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {stats.map((stat, index) => (
              <div
                key={stat.label}
                className="animate-scale-in"
                style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
              >
                <p className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent mb-1">
                  {stat.value}
                </p>
                <p className="text-gray-400 text-sm font-medium">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Why Choose Us */}
      <div className="bg-gray-900/50 py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Our Advantages
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Why Choose AIBD.AI
            </h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {reasons.map((reason, index) => (
              <div
                key={reason.title}
                className="group bg-gray-900 rounded-2xl p-7 border border-gray-800 hover:border-cyan-500/30 hover:shadow-xl hover:shadow-cyan-500/5 transition-all duration-300 hover:-translate-y-1 animate-fade-in-up"
                style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
              >
                <div className="w-14 h-14 bg-cyan-500/10 group-hover:bg-cyan-500 rounded-xl flex items-center justify-center text-cyan-400 group-hover:text-gray-950 transition-all duration-300 mb-5">
                  {reason.icon}
                </div>
                <h3 className="text-lg font-bold text-white mb-2">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
