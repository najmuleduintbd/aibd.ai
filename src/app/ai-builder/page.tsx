import AIBuilderClient from "@/components/ai-builder/AIBuilderClient";

export const metadata = {
  title: "AI Smart Home Builder - AIBD.AI",
  description:
    "Let our AI recommend the perfect smart home products for your rooms, budget, and priorities.",
};

export default function AIBuilderPage() {
  return (
    <section className="bg-gray-950 min-h-screen">
      {/* Header */}
      <div className="bg-gradient-to-br from-gray-950 via-gray-900 to-gray-950 text-white py-16 relative overflow-hidden">
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute top-10 left-20 w-72 h-72 bg-cyan-500/10 rounded-full blur-3xl animate-float" />
          <div className="absolute bottom-0 right-10 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl animate-float delay-200" />
        </div>
        <div className="relative max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <span className="inline-block bg-gradient-to-r from-cyan-500/10 to-violet-500/10 backdrop-blur-sm border border-cyan-500/20 rounded-full px-5 py-2 text-sm font-medium text-cyan-300 mb-6 animate-fade-in">
            Powered by AI
          </span>
          <h1 className="text-4xl md:text-5xl font-bold mb-4 animate-fade-in-up">
            <span className="bg-gradient-to-r from-cyan-400 to-violet-400 bg-clip-text text-transparent">
              Smart Home Builder
            </span>
          </h1>
          <p className="text-gray-400 text-lg max-w-xl mx-auto animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            Tell us about your home and preferences, and we&apos;ll recommend the
            perfect smart home setup for you.
          </p>
        </div>
      </div>

      {/* Builder */}
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <AIBuilderClient />
      </div>
    </section>
  );
}
