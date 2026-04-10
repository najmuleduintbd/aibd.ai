import Link from "next/link";

const services = [
  { name: "AI Solution & Learning Hub", icon: "M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" },
  { name: "Automation & Business Transformation", icon: "M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.066 2.573c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.573 1.066c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.066-2.573c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z M15 12a3 3 0 11-6 0 3 3 0 016 0z" },
  { name: "Investment Banking", icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" },
  { name: "Corporate Advisory, M&A & Tokenization", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { name: "Portfolio Management & Trading", icon: "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" },
  { name: "Wealth Management", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
  { name: "IT & ERP Software Solutions", icon: "M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" },
  { name: "Education & Immigration Consultation", icon: "M12 14l9-5-9-5-9 5 9 5z M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" },
  { name: "Legal Services", icon: "M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3" },
  { name: "Marketing Solutions", icon: "M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z" },
  { name: "Research & Development", icon: "M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" },
  { name: "Smart City Management", icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" },
  { name: "Virtual Office Setup", icon: "M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" },
];

const holdings = [
  { name: "Eduintbd.ai", url: "https://eduintbd.ai", desc: "Education Consultancy" },
  { name: "The Legal Empire", url: "https://thelegalempire.org", desc: "Legal Services" },
  { name: "Ekush WML", url: "https://ekushwml.com", desc: "Asset Management" },
  { name: "UInsure.ai", url: "https://uinsure.ai", desc: "Insurance AI" },
  { name: "Herostock.ai", url: "https://herostock.ai", desc: "Fintech Bangladesh" },
  { name: "THiNK", url: "#", desc: "Innovation Platform" },
  { name: "Rapid Cargo", url: "#", desc: "Logistics Solutions" },
  { name: "Food & Family", url: "#", desc: "F&B Ventures" },
  { name: "NASH Building Mgmt", url: "#", desc: "Building Management" },
  { name: "Team.aibd.ai", url: "https://team.aibd.ai", desc: "AI Solutions Team" },
  { name: "Moshar Machine", url: "#", desc: "Industrial Manufacturing" },
];

const globalHubs = [
  { city: "New York", address: "1 Morning Side Drive, NY-10025", flag: "US" },
  { city: "Dhaka", address: "264 Elephant Road, Dhaka-1205", flag: "BD" },
  { city: "Guangzhou", address: "China Operations", flag: "CN" },
  { city: "Vienna", address: "Austria Operations", flag: "AT" },
];

export default function HomePage() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-black">
        {/* Animated background */}
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(139,92,246,0.15)_0%,rgba(0,0,0,0)_70%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,rgba(59,130,246,0.1)_0%,rgba(0,0,0,0)_60%)]" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,rgba(217,70,239,0.08)_0%,rgba(0,0,0,0)_60%)]" />
          {/* Stars */}
          <div className="stars-container absolute inset-0 overflow-hidden">
            {Array.from({ length: 50 }).map((_, i) => (
              <div
                key={i}
                className="absolute w-[2px] h-[2px] bg-white rounded-full animate-twinkle"
                style={{
                  top: `${Math.random() * 100}%`,
                  left: `${Math.random() * 100}%`,
                  animationDelay: `${Math.random() * 5}s`,
                  animationDuration: `${2 + Math.random() * 3}s`,
                  opacity: Math.random() * 0.7 + 0.3,
                }}
              />
            ))}
          </div>
        </div>

        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          {/* Logo Badge */}
          <div className="mb-8 animate-fade-in-up">
            <div className="relative inline-block">
              <div className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/30 via-blue-500/30 to-fuchsia-500/30 blur-2xl scale-150 animate-pulse-slow" />
              <div className="relative w-28 h-28 mx-auto rounded-full bg-gradient-to-br from-gray-900 to-gray-800 border-2 border-white/10 flex items-center justify-center shadow-2xl ring-2 ring-violet-500/20 ring-offset-2 ring-offset-black">
                <svg className="w-14 h-14 text-amber-400" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.5}>
                  <path d="M9.75 3.104v5.714a2.25 2.25 0 01-.659 1.591L5 14.5M9.75 3.104c-.251.023-.501.05-.75.082m.75-.082a24.301 24.301 0 014.5 0m0 0v5.714c0 .597.237 1.17.659 1.591L19.8 15.3M14.25 3.104c.251.023.501.05.75.082M19.8 15.3l-1.57.393A9.065 9.065 0 0112 15a9.065 9.065 0 00-6.23.693L5 14.5m14.8.8l.8 4.2a.75.75 0 01-.712.988H4.112a.75.75 0 01-.712-.988L4.2 15.3" />
                </svg>
              </div>
            </div>
          </div>

          {/* Company Badge */}
          <div className="animate-fade-in-up delay-100" style={{ opacity: 0 }}>
            <span className="inline-block bg-amber-500/10 border border-amber-500/30 rounded-full px-5 py-1.5 text-sm font-medium text-amber-300 mb-4">
              Eduint Limited
            </span>
          </div>

          {/* Name */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white mb-3 animate-fade-in-up delay-200" style={{ opacity: 0 }}>
            Syed Adnan Huda
            <span className="block text-xl md:text-2xl font-normal text-amber-400 mt-2">CFA</span>
          </h1>

          {/* Title */}
          <p className="text-lg md:text-xl text-gray-400 mb-2 animate-fade-in-up delay-300" style={{ opacity: 0 }}>
            Founder
          </p>

          {/* Tagline */}
          <p className="text-base md:text-lg text-gray-300/80 max-w-2xl mx-auto mb-10 animate-fade-in-up delay-400" style={{ opacity: 0 }}>
            Your Global Consultant &mdash; bridging capital, technology, and opportunity across four continents.
          </p>

          {/* CTA Buttons */}
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-lg mx-auto animate-fade-in-up delay-500" style={{ opacity: 0 }}>
            <a
              href="/Syed_Adnan_Huda.vcf"
              className="flex flex-col items-center gap-2 bg-amber-500/10 hover:bg-amber-500/20 border border-amber-500/30 rounded-xl px-4 py-3 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-amber-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
              </svg>
              <span className="text-xs font-medium text-amber-300">Save</span>
            </a>
            <a
              href="tel:+19175665560"
              className="flex flex-col items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-blue-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
              </svg>
              <span className="text-xs font-medium text-gray-300">Call</span>
            </a>
            <a
              href="mailto:syed@aibd.ai"
              className="flex flex-col items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-green-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
              </svg>
              <span className="text-xs font-medium text-gray-300">Email</span>
            </a>
            <a
              href="https://aibd.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-col items-center gap-2 bg-white/5 hover:bg-white/10 border border-white/10 rounded-xl px-4 py-3 transition-all duration-300 group"
            >
              <svg className="w-5 h-5 text-violet-400 group-hover:scale-110 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
              </svg>
              <span className="text-xs font-medium text-gray-300">Web</span>
            </a>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="bg-gray-950 py-12">
        <div className="max-w-3xl mx-auto px-4">
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a href="mailto:syed@aibd.ai" className="flex items-center gap-4 bg-white/5 hover:bg-white/[0.07] border border-white/10 rounded-xl p-4 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-full bg-cyan-500/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Email</p>
                <p className="text-sm text-white group-hover:text-cyan-300 transition-colors">syed@aibd.ai</p>
              </div>
            </a>
            <a href="tel:+19175665560" className="flex items-center gap-4 bg-white/5 hover:bg-white/[0.07] border border-white/10 rounded-xl p-4 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-full bg-blue-500/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Phone</p>
                <p className="text-sm text-white group-hover:text-blue-300 transition-colors">+1 (917) 566-5560</p>
              </div>
            </a>
            <div className="flex items-center gap-4 bg-white/5 border border-white/10 rounded-xl p-4">
              <div className="w-11 h-11 rounded-full bg-violet-500/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-violet-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Office</p>
                <p className="text-sm text-white">1 Morning Side Drive, New York, NY 10025</p>
              </div>
            </div>
            <a href="https://aibd.ai" target="_blank" rel="noopener noreferrer" className="flex items-center gap-4 bg-white/5 hover:bg-white/[0.07] border border-white/10 rounded-xl p-4 transition-all duration-300 group">
              <div className="w-11 h-11 rounded-full bg-green-500/10 flex items-center justify-center shrink-0">
                <svg className="w-5 h-5 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                </svg>
              </div>
              <div>
                <p className="text-xs text-gray-500">Website</p>
                <p className="text-sm text-white group-hover:text-green-300 transition-colors">aibd.ai</p>
              </div>
            </a>
          </div>
        </div>
      </section>

      {/* About AIBD.AI */}
      <section className="bg-gray-950 py-16">
        <div className="max-w-3xl mx-auto px-4 text-center">
          <div className="bg-gradient-to-br from-white/[0.03] to-white/[0.01] border border-white/10 rounded-2xl p-8 md:p-12">
            <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
              About <span className="text-cyan-400">aibd.ai</span>
            </h2>
            <p className="text-gray-400 leading-relaxed mb-6">
              AIBD is a global consultancy and holdings group powering AI adoption, investment, and business transformation.
            </p>
            <a
              href="https://aibd.ai"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-cyan-500/10 hover:bg-cyan-500/20 border border-cyan-500/30 text-cyan-300 font-medium px-6 py-3 rounded-xl transition-all duration-300"
            >
              Explore aibd.ai
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
              </svg>
            </a>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="bg-gray-950 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-amber-400 font-semibold text-sm uppercase tracking-wider mb-2">
              What We Do
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Our Services
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {services.map((service, index) => (
              <div
                key={service.name}
                className="group bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-amber-500/30 rounded-xl p-5 transition-all duration-300 hover:-translate-y-0.5 animate-fade-in-up"
                style={{ animationDelay: `${index * 60}ms`, opacity: 0 }}
              >
                <div className="flex items-start gap-3">
                  <div className="w-10 h-10 rounded-lg bg-amber-500/10 flex items-center justify-center shrink-0 group-hover:bg-amber-500/20 transition-colors">
                    <svg className="w-5 h-5 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                      <path strokeLinecap="round" strokeLinejoin="round" d={service.icon} />
                    </svg>
                  </div>
                  <h3 className="text-sm font-medium text-gray-200 group-hover:text-white transition-colors pt-2">
                    {service.name}
                  </h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Holdings & Ventures */}
      <section className="bg-gray-900/50 py-16">
        <div className="max-w-5xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-cyan-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Portfolio
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Holdings & Ventures
            </h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {holdings.map((company, index) => (
              <a
                key={company.name}
                href={company.url}
                target="_blank"
                rel="noopener noreferrer"
                className="group flex items-center gap-4 bg-white/[0.03] hover:bg-white/[0.06] border border-white/10 hover:border-cyan-500/30 rounded-xl p-4 transition-all duration-300 hover:-translate-y-0.5 animate-fade-in-up"
                style={{ animationDelay: `${index * 60}ms`, opacity: 0 }}
              >
                <div className="w-10 h-10 rounded-lg bg-cyan-500/10 flex items-center justify-center shrink-0 group-hover:bg-cyan-500/20 transition-colors">
                  <svg className="w-5 h-5 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                  </svg>
                </div>
                <div className="min-w-0">
                  <h3 className="text-sm font-semibold text-white truncate group-hover:text-cyan-300 transition-colors">
                    {company.name}
                  </h3>
                  <p className="text-xs text-gray-500">{company.desc}</p>
                </div>
                <svg className="w-4 h-4 text-gray-600 group-hover:text-cyan-400 ml-auto shrink-0 opacity-0 group-hover:opacity-100 transition-all" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                </svg>
              </a>
            ))}
          </div>
        </div>
      </section>

      {/* Global Presence */}
      <section className="bg-gray-950 py-16">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <span className="inline-block text-violet-400 font-semibold text-sm uppercase tracking-wider mb-2">
              Worldwide Reach
            </span>
            <h2 className="text-3xl md:text-4xl font-bold text-white">
              Global Presence
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {globalHubs.map((hub, index) => (
              <div
                key={hub.city}
                className="bg-white/[0.03] border border-white/10 rounded-xl p-5 text-center hover:border-violet-500/30 transition-all duration-300 animate-scale-in"
                style={{ animationDelay: `${index * 100}ms`, opacity: 0 }}
              >
                <div className="text-3xl mb-3">{hub.flag === "US" ? "\u{1F1FA}\u{1F1F8}" : hub.flag === "BD" ? "\u{1F1E7}\u{1F1E9}" : hub.flag === "CN" ? "\u{1F1E8}\u{1F1F3}" : "\u{1F1E6}\u{1F1F9}"}</div>
                <h3 className="text-lg font-bold text-white mb-1">{hub.city}</h3>
                <p className="text-xs text-gray-500">{hub.address}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* NFC Card CTA */}
      <section className="bg-gray-900/50 py-16">
        <div className="max-w-3xl mx-auto px-4">
          <div className="relative bg-gradient-to-br from-gray-900 to-gray-800 border border-gray-700 rounded-2xl p-8 md:p-12 overflow-hidden text-center">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute top-0 left-1/4 w-64 h-64 bg-amber-500/10 rounded-full blur-3xl" />
              <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-violet-500/10 rounded-full blur-3xl" />
            </div>
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center mx-auto mb-6">
                <svg className="w-8 h-8 text-amber-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.288 15.038a5.25 5.25 0 017.424 0M5.106 11.856c3.807-3.808 9.98-3.808 13.788 0M1.924 8.674c5.565-5.565 14.587-5.565 20.152 0M12.53 18.22l-.53.53-.53-.53a.75.75 0 011.06 0z" />
                </svg>
              </div>
              <h2 className="text-2xl md:text-3xl font-bold text-white mb-3">
                Get Your NFC Business Card
              </h2>
              <p className="text-gray-400 max-w-lg mx-auto mb-8">
                Share your professional identity with a single tap. Custom-designed NFC business cards with your profile, contact info, and digital presence.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:syed@aibd.ai?subject=NFC Card Inquiry"
                  className="inline-flex items-center justify-center gap-2 bg-amber-500 hover:bg-amber-400 text-gray-950 font-semibold px-6 py-3 rounded-xl transition-all duration-300 shadow-lg shadow-amber-500/20"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Contact for NFC Card
                </a>
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 bg-white/5 hover:bg-white/10 border border-white/20 text-white font-semibold px-6 py-3 rounded-xl transition-all duration-300"
                >
                  Try the Card Maker
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={2}>
                    <path strokeLinecap="round" strokeLinejoin="round" d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
