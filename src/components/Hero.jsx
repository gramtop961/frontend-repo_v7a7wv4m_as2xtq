import Spline from '@splinetool/react-spline'

export default function Hero() {
  return (
    <section className="relative pt-28 overflow-hidden" id="hero">
      <div className="absolute inset-0 bg-gradient-to-b from-black via-gray-900 to-black" />
      <div className="absolute inset-0 opacity-50 pointer-events-none" style={{background:"radial-gradient(800px 300px at 20% -10%, rgba(56,189,248,0.15), transparent), radial-gradient(800px 300px at 80% 10%, rgba(217,70,239,0.15), transparent)"}}/>

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid lg:grid-cols-2 gap-12 items-center">
          <div className="py-12">
            <p className="inline-flex items-center text-sm font-semibold text-cyan-300/90 bg-white/5 rounded-full px-3 py-1 ring-1 ring-white/10">Futuristic. Data-driven. Results.</p>
            <h1 className="mt-6 text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-white leading-tight">
              Digital marketing that feels like the future
            </h1>
            <p className="mt-5 text-lg text-gray-300 max-w-xl">
              We craft high-converting campaigns, cinematic content and search-first websites that turn attention into revenue. Transparent pricing. No fluff.
            </p>
            <div className="mt-8 flex flex-wrap gap-4">
              <a href="#pricing" className="inline-flex items-center rounded-full bg-white text-gray-900 px-5 py-3 text-sm font-semibold shadow hover:bg-gray-100">
                View Pricing
              </a>
              <a href="#services" className="inline-flex items-center rounded-full bg-gray-900/40 text-white px-5 py-3 text-sm font-semibold ring-1 ring-white/20 hover:bg-gray-900/60">
                Explore Services
              </a>
            </div>
            <div className="mt-8 grid grid-cols-3 gap-6 text-white/80">
              <div><p className="text-3xl font-extrabold text-white">120%+</p><p className="text-sm">Avg. ROI</p></div>
              <div><p className="text-3xl font-extrabold text-white">200k+</p><p className="text-sm">Leads generated</p></div>
              <div><p className="text-3xl font-extrabold text-white">50M+</p><p className="text-sm">Monthly impressions</p></div>
            </div>
          </div>
          <div className="relative h-[520px] lg:h-[700px]">
            <div className="absolute inset-0 rounded-2xl overflow-hidden ring-1 ring-white/10 shadow-2xl">
              <Spline scene="https://prod.spline.design/VyGeZv58yuk8j7Yy/scene.splinecode" style={{ width: '100%', height: '100%' }} />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
