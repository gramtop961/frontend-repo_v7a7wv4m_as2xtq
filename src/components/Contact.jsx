import { useState } from 'react'

export default function Contact(){
  const [status, setStatus] = useState(null)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setStatus('loading')

    const form = new FormData(e.currentTarget)
    const payload = Object.fromEntries(form.entries())

    try {
      const baseUrl = import.meta.env.VITE_BACKEND_URL || 'http://localhost:8000'
      const res = await fetch(`${baseUrl}/leads`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(payload)
      })

      if (!res.ok) throw new Error('Failed to submit')

      const data = await res.json()
      setStatus('success')
      e.currentTarget.reset()
    } catch (e) {
      setStatus('error')
    }
  }

  return (
    <section id="contact" className="py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-start">
          <div>
            <p className="text-sm font-semibold text-blue-600">Get a quote</p>
            <h2 className="mt-2 text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900">Tell us about your goals</h2>
            <p className="mt-4 text-gray-600">We’ll review your brand, current performance, and put together a tailored plan with clear deliverables and pricing.</p>
            <ul className="mt-6 space-y-3 text-gray-700 list-disc list-inside">
              <li>SEO-first recommendations</li>
              <li>Channel mix and projected impact</li>
              <li>Transparent monthly pricing</li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="bg-white rounded-2xl border border-gray-200 p-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-gray-700">Name</label>
                <input name="name" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-gray-900 focus:border-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Email</label>
                <input type="email" name="email" required className="mt-1 w-full rounded-md border-gray-300 focus:ring-gray-900 focus:border-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Company</label>
                <input name="company" className="mt-1 w-full rounded-md border-gray-300 focus:ring-gray-900 focus:border-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <input name="phone" className="mt-1 w-full rounded-md border-gray-300 focus:ring-gray-900 focus:border-gray-900" />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Budget</label>
                <select name="budget" className="mt-1 w-full rounded-md border-gray-300 focus:ring-gray-900 focus:border-gray-900">
                  <option value="<$2k/mo">&lt;$2k/mo</option>
                  <option value="$2k-$5k/mo">$2k-$5k/mo</option>
                  <option value="$5k-$10k/mo">$5k-$10k/mo</option>
                  <option value=">$10k/mo">&gt;$10k/mo</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-700">Services</label>
                <select name="services" className="mt-1 w-full rounded-md border-gray-300 focus:ring-gray-900 focus:border-gray-900">
                  <option>SEO</option>
                  <option>Paid Media</option>
                  <option>Web & Creative</option>
                  <option>Full-Funnel Growth</option>
                </select>
              </div>
              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">Message</label>
                <textarea name="message" rows="4" className="mt-1 w-full rounded-md border-gray-300 focus:ring-gray-900 focus:border-gray-900" />
              </div>
            </div>
            <button type="submit" className="mt-6 inline-flex items-center rounded-full bg-gray-900 text-white px-5 py-3 text-sm font-semibold hover:bg-black">Request proposal</button>

            {status === 'success' && <p className="mt-3 text-emerald-600">Thanks! We’ll be in touch shortly.</p>}
            {status === 'error' && <p className="mt-3 text-red-600">Something went wrong. Please try again.</p>}
            {status === 'loading' && <p className="mt-3 text-gray-600">Submitting...</p>}
          </form>
        </div>
      </div>
    </section>
  )
}
