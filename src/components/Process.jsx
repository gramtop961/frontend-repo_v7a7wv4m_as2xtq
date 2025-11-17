import { Sparkles, Target, LineChart, CheckCircle2 } from 'lucide-react'

const steps = [
  { icon: Target, title: 'Strategy', desc: 'We identify goals, audiences, and channels with the highest ROI.' },
  { icon: Sparkles, title: 'Creative', desc: 'We craft assets, landing pages, and high-contrast visuals optimized for conversion.' },
  { icon: LineChart, title: 'Launch', desc: 'We deploy campaigns with proper tracking and QA across platforms.' },
  { icon: CheckCircle2, title: 'Scale', desc: 'We iterate with weekly experiments and turn learnings into growth.' },
]

export default function Process(){
  return (
    <section id="process" className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-2xl mx-auto">
          <p className="text-sm font-semibold text-blue-600">How we work</p>
          <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">A clear, repeatable playbook</h2>
          <p className="mt-4 text-gray-600">No jargon. No black box. Just a transparent process built to generate revenue.</p>
        </div>

        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {steps.map(({icon:Icon, title, desc}) => (
            <div key={title} className="rounded-2xl border border-gray-200 p-6">
              <div className="h-12 w-12 rounded-lg bg-gradient-to-br from-blue-600 to-fuchsia-500 text-white flex items-center justify-center mx-auto">
                <Icon className="h-6 w-6" />
              </div>
              <h3 className="mt-5 text-lg font-bold text-gray-900">{title}</h3>
              <p className="mt-2 text-gray-600">{desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
