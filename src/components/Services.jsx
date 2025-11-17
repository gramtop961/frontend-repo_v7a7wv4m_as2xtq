import { CheckCircle, Sparkles, Search, Megaphone, BadgeDollarSign, Palette } from 'lucide-react'

const services = [
  {
    icon: Search,
    title: 'SEO & Content',
    desc: 'Technical SEO, on-page optimization, content strategy, and high-intent blog production.',
    items: ['Site audits', 'Keyword research', 'Content calendars', 'Link building']
  },
  {
    icon: Megaphone,
    title: 'Paid Media',
    desc: 'Full-funnel acquisition campaigns across Google, Meta, TikTok, and YouTube.',
    items: ['Campaign setup', 'Creative testing', 'Landing pages', 'Conversion tracking']
  },
  {
    icon: Palette,
    title: 'Web & Creative',
    desc: 'High-contrast, ultra-fast websites with 4K imagery and modern branding systems.',
    items: ['Design systems', 'Next-gen web builds', 'Cinematic visuals', 'Conversion UX']
  }
]

export default function Services(){
  return (
    <section id="services" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-blue-600">What we do</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">A full-funnel growth squad</h2>
          <p className="mt-4 text-gray-600">Strategy, creative, and media buying under one roof. Seamless execution and crystal clear reporting.</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {services.map(({icon:Icon, title, desc, items}) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6 hover:shadow-lg transition-shadow">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-fuchsia-500 text-white flex items-center justify-center">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-xl font-bold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
              <ul className="mt-4 space-y-2">
                {items.map(i => (
                  <li key={i} className="flex items-center gap-2 text-gray-700"><CheckCircle className="h-4 w-4 text-emerald-500" /> {i}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
