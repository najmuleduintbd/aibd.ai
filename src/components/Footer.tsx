import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-black border-t border-white/5 text-gray-400">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo & Copyright */}
          <div className="flex items-center gap-4">
            <div className="flex items-center space-x-1">
              <span className="text-lg font-bold text-white">AIBD</span>
              <span className="text-lg font-bold text-amber-400">.AI</span>
            </div>
            <span className="text-sm text-gray-600">|</span>
            <p className="text-sm">
              &copy; {new Date().getFullYear()} Eduint Limited
            </p>
          </div>

          {/* Links */}
          <div className="flex items-center gap-6 text-sm">
            <Link href="/about" className="hover:text-white transition-colors">
              About
            </Link>
            <Link href="/contact" className="hover:text-white transition-colors">
              Contact
            </Link>
            <a
              href="https://aibd.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-amber-400 transition-colors"
            >
              aibd.ai
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
