import { notFound } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import productsData from "@/data/products.json";

interface ProductPageProps {
  params: { category: string; slug: string };
}

function formatPrice(amount: number): string {
  return "৳" + amount.toLocaleString("en-IN");
}

export function generateStaticParams() {
  return productsData.products.map((product) => ({
    category: product.categorySlug,
    slug: product.slug,
  }));
}

export default function ProductPage({ params }: ProductPageProps) {
  const product = productsData.products.find(
    (p) => p.categorySlug === params.category && p.slug === params.slug
  );

  if (!product) {
    notFound();
  }

  return (
    <section className="bg-gray-50 min-h-screen">
      {/* Breadcrumb Header */}
      <div className="bg-gradient-to-r from-blue-600 to-blue-700 text-white py-8">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <nav className="text-blue-200 text-sm">
            <Link href="/products" className="hover:text-white">
              Products
            </Link>
            <span className="mx-2">/</span>
            <Link
              href={`/products/${product.categorySlug}`}
              className="hover:text-white"
            >
              {product.category}
            </Link>
            <span className="mx-2">/</span>
            <span className="text-white">{product.name}</span>
          </nav>
        </div>
      </div>

      {/* Product Details */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Product Image */}
          <div className="bg-gradient-to-br from-blue-50 to-blue-100 rounded-2xl flex items-center justify-center h-80 lg:h-[28rem] relative overflow-hidden">
            {product.image ? (
              <Image
                src={product.image}
                alt={product.name}
                fill
                className="object-contain p-6"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            ) : (
              <svg
                className="w-24 h-24 text-blue-300"
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
            )}
          </div>

          {/* Product Info */}
          <div>
            <span className="inline-block px-3 py-1 text-sm font-semibold text-emerald-700 bg-emerald-50 rounded-full mb-4">
              {product.category}
            </span>

            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              {product.name}
            </h1>

            <p className="text-gray-600 text-lg mb-6">{product.description}</p>

            {/* Price */}
            <div className="bg-blue-50 rounded-xl p-6 mb-8">
              <p className="text-sm text-gray-500 mb-1">Price Range</p>
              <p className="text-3xl font-bold text-blue-600">
                {formatPrice(product.price.min)} -{" "}
                {formatPrice(product.price.max)}
              </p>
            </div>

            {/* Features */}
            <div>
              <h2 className="text-xl font-semibold text-gray-900 mb-4">
                Key Features
              </h2>
              <ul className="space-y-3">
                {product.features.map((feature, index) => (
                  <li key={index} className="flex items-center space-x-3">
                    <svg
                      className="w-5 h-5 text-emerald-500 shrink-0"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M5 13l4 4L19 7"
                      />
                    </svg>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* CTA */}
            <div className="mt-8 flex flex-col sm:flex-row gap-4">
              <Link
                href="/contact"
                className="inline-block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Enquire Now
              </Link>
              <a
                href="tel:09613824682"
                className="inline-block text-center border-2 border-blue-600 text-blue-600 hover:bg-blue-50 font-semibold px-8 py-3 rounded-lg transition-colors"
              >
                Call 09613-824682
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
