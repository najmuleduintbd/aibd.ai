import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "All Products" },
  { href: "/about", label: "About Us" },
  { href: "/contact", label: "Contact" },
];

const categories = [
  { href: "/products/smart-door-locks", label: "Smart Door Locks" },
  { href: "/products/smart-lights-fans", label: "Smart Lights & Fans" },
  { href: "/products/smart-switches-sockets", label: "Smart Switches" },
  { href: "/products/smart-security-surveillance", label: "Security & Surveillance" },
  { href: "/products/smart-speaker-hub", label: "Smart Speakers" },
  { href: "/products/smart-home-appliances", label: "Home Appliances" },
];

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-gray-900 via-gray-900 to-gray-950 text-gray-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* About AIBD.AI */}
          <div className="animate-fade-in-up">
            <div className="flex items-center space-x-1 mb-4">
              <span className="text-2xl font-bold text-white">AIBD</span>
              <span className="text-2xl font-bold text-emerald-400">.AI</span>
            </div>
            <p className="text-gray-400 mb-4 leading-relaxed">
              Bangladesh&apos;s premier smart home solutions aggregator. We bring
              together the best products from multiple trusted sources to
              transform your home.
            </p>
            <div className="inline-flex items-center space-x-2 bg-gradient-to-r from-blue-600/20 to-emerald-600/20 border border-blue-500/30 rounded-full px-4 py-1.5">
              <svg
                className="w-4 h-4 text-emerald-400"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 10V3L4 14h7v7l9-11h-7z"
                />
              </svg>
              <span className="text-sm font-medium text-emerald-400">
                Powered by AI
              </span>
            </div>
            {/* Social Media */}
            <div className="flex items-center space-x-3 mt-5">
              {["facebook", "twitter", "instagram", "linkedin"].map(
                (social) => (
                  <a
                    key={social}
                    href="#"
                    className="w-9 h-9 rounded-full bg-white/5 hover:bg-blue-600 flex items-center justify-center transition-all duration-300 hover:scale-110"
                    aria-label={social}
                  >
                    <svg
                      className="w-4 h-4 text-gray-400 hover:text-white"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <circle cx="12" cy="12" r="3" />
                    </svg>
                  </a>
                )
              )}
            </div>
          </div>

          {/* Quick Links */}
          <div className="animate-fade-in-up delay-100">
            <h3 className="text-white text-lg font-semibold mb-5 relative">
              Quick Links
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-emerald-400 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {quickLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center space-x-2"
                  >
                    <span className="text-emerald-400/60 text-xs">&#9654;</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div className="animate-fade-in-up delay-200">
            <h3 className="text-white text-lg font-semibold mb-5 relative">
              Categories
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-emerald-400 rounded-full" />
            </h3>
            <ul className="space-y-3">
              {categories.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 hover:text-white hover:translate-x-1 transition-all duration-200 inline-flex items-center space-x-2"
                  >
                    <span className="text-emerald-400/60 text-xs">&#9654;</span>
                    <span>{link.label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="animate-fade-in-up delay-300">
            <h3 className="text-white text-lg font-semibold mb-5 relative">
              Contact Info
              <span className="absolute -bottom-1 left-0 w-8 h-0.5 bg-emerald-400 rounded-full" />
            </h3>
            <ul className="space-y-4">
              <li className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-blue-400"
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
                </div>
                <div>
                  <p className="text-sm text-gray-500">Phone</p>
                  <a
                    href="tel:09613824682"
                    className="text-white hover:text-emerald-400 transition-colors"
                  >
                    09613-824682
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Email</p>
                  <a
                    href="mailto:info@aibd.ai"
                    className="text-white hover:text-emerald-400 transition-colors"
                  >
                    info@aibd.ai
                  </a>
                </div>
              </li>
              <li className="flex items-start space-x-3">
                <div className="w-9 h-9 rounded-lg bg-blue-600/20 flex items-center justify-center shrink-0 mt-0.5">
                  <svg
                    className="w-4 h-4 text-blue-400"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
                <div>
                  <p className="text-sm text-gray-500">Address</p>
                  <p className="text-white">Dhaka, Bangladesh</p>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between text-gray-500 text-sm">
          <p>&copy; 2024 AIBD.AI. All rights reserved.</p>
          <p className="mt-2 md:mt-0">
            Smart Home Solutions for Bangladesh
          </p>
        </div>
      </div>
    </footer>
  );
}
