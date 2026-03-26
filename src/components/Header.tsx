"use client";

import { useState, useEffect } from "react";
import Link from "next/link";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/products", label: "Products" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-gradient-to-r from-blue-800/95 to-blue-600/95 backdrop-blur-md shadow-xl"
          : "bg-gradient-to-r from-blue-700 to-blue-500 shadow-lg"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2 group">
            <div className="relative">
              <span className="text-2xl font-bold tracking-tight text-white group-hover:text-emerald-300 transition-colors duration-300">
                AIBD
              </span>
              <span className="text-2xl font-bold text-emerald-400">.AI</span>
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-emerald-400 group-hover:w-full transition-all duration-300" />
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className="relative text-white/90 hover:text-white font-medium px-4 py-2 rounded-lg hover:bg-white/10 transition-all duration-200 group"
              >
                {link.label}
                <span className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0.5 bg-emerald-400 group-hover:w-3/4 transition-all duration-300 rounded-full" />
              </Link>
            ))}
          </nav>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden p-2 rounded-lg hover:bg-white/10 transition-colors duration-200"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle menu"
          >
            <div className="w-6 h-5 relative flex flex-col justify-between">
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "rotate-45 translate-y-2" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "opacity-0 scale-0" : ""
                }`}
              />
              <span
                className={`w-full h-0.5 bg-white rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? "-rotate-45 -translate-y-2" : ""
                }`}
              />
            </div>
          </button>
        </div>

        {/* Mobile Menu */}
        <div
          className={`md:hidden overflow-hidden transition-all duration-300 ease-in-out ${
            mobileMenuOpen ? "max-h-64 opacity-100 pb-4" : "max-h-0 opacity-0"
          }`}
        >
          <nav className="border-t border-white/20 pt-3 space-y-1">
            {navLinks.map((link, index) => (
              <Link
                key={link.href}
                href={link.href}
                className="block py-2.5 px-4 text-white/90 hover:text-white hover:bg-white/10 rounded-lg transition-all duration-200"
                style={{
                  animationDelay: `${index * 50}ms`,
                }}
                onClick={() => setMobileMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}
