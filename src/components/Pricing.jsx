import { Check } from 'lucide-react'

const tiers = [
  {
    name: 'Starter',
    price: 1499,
    period: 'mo',
    highlight: false,
    features: [
      'Foundational SEO setup',
      '2 campaigns/month',
      'Monthly reporting',
      'Email support'
    ]
  },
  {
    name: 'Growth',
    price: 3499,
    period: 'mo',
    highlight: true,
    features: [
      'Advanced SEO + content',
      'Full paid media management',
      'Weekly reporting + dashboard',
      'Dedicated strategist'
    ]
  },
  {
    name: 'Scale',
    price: 6999,
    period: 'mo',
    highlight: false,
    features: [
      'Aggressive multi-channel growth',
      'Creative production + landing pages',
      'Daily optimization + experiments',
      'Slack + priority support'
    ]
  }
]

export default function Pricing(){
  return (
    <section id="pricing" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-blue-600">Transparent pricing</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Simple plans that scale with you</h2>
          <p className="mt-4 text-gray-600">Everything you need to grow across SEO, paid media, and web without the mystery invoices.</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
          {tiers.map((t) => (
            <div key={t.name} className={`rounded-2xl border ${t.highlight ? 'border-blue-600 shadow-xl' : 'border-gray-200'} p-6 bg-white` }>
              <div className="flex items-baseline justify-between">
                <h3 className="text-xl font-bold text-gray-900">{t.name}</h3>
                {t.highlight && <span className="text-xs font-semibold text-white bg-blue-600 rounded-full px-2 py-1">Most Popular</span>}
              </div>
              <div className="mt-4 flex items-end gap-1">
                <span className="text-4xl font-extrabold text-gray-900">${t.price}</span>
                <span className="text-gray-500">/{t.period}</span>
              </div>
              <ul className="mt-6 space-y-3">
                {t.features.map(f => (
                  <li key={f} className="flex items-center gap-2 text-gray-700"><Check className="h-4 w-4 text-emerald-500"/> {f}</li>
                ))}
              </ul>
              <a href="#contact" className={`mt-6 inline-flex w-full justify-center items-center rounded-full px-4 py-2.5 text-sm font-semibold ${t.highlight ? 'bg-blue-600 text-white hover:bg-blue-700' : 'bg-gray-900 text-white hover:bg-black'}`}>Get started</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
