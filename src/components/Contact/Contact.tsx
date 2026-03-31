import { useState, FormEvent } from 'react'

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' })
  const [status, setStatus] = useState<'idle' | 'sending' | 'sent' | 'error'>('idle')

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault()
    setStatus('sending')
    // Wire to Formspree / EmailJS here when ready
    // For now, simulate success after short delay
    setTimeout(() => setStatus('sent'), 800)
  }

  return (
    <section id="contact" className="py-24 bg-terminal-bg">
      <div className="max-w-3xl mx-auto px-6 md:px-12 text-center">

        {/* ── Heading ── */}
        <p className="font-mono text-terminal-green text-sm mb-3">// get_in_touch</p>
        <h2 className="font-mono font-bold text-4xl md:text-5xl text-gray-100 mb-6">
          Contact Me<span className="text-terminal-green">.</span>
        </h2>

        {/* ── Big email CTA ── */}
        <a
          href="mailto:abhaygzb15@gmail.com"
          className="inline-block font-mono font-semibold text-2xl md:text-3xl text-terminal-green
                     hover:text-terminal-green-glow transition-colors duration-200 terminal-glow mb-3"
        >
          abhaygzb15@gmail.com
        </a>

        <p className="font-mono text-gray-400 text-sm mb-10">
          Feel free to reach out with any inquiries, collaborations, or questions!
        </p>

        {/* ── Contact form ── */}
        {status === 'sent' ? (
          <div className="font-mono text-terminal-green text-lg py-12">
            <span className="text-terminal-green mr-2">{'>'}</span>
            Message received — I'll get back to you soon.
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="text-left space-y-6">

            {/* Row 1: Name + Email */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block font-mono text-sm text-terminal-green mb-2">Name</label>
                <input
                  type="text"
                  required
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Your name"
                  className="w-full bg-transparent border-0 border-b border-terminal-border
                             font-mono text-sm text-gray-200 placeholder-terminal-muted/50
                             pb-2 focus:outline-none focus:border-terminal-green
                             transition-colors duration-200"
                />
              </div>
              <div>
                <label className="block font-mono text-sm text-terminal-green mb-2">Email Address</label>
                <input
                  type="email"
                  required
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="your@email.com"
                  className="w-full bg-transparent border-0 border-b border-terminal-border
                             font-mono text-sm text-gray-200 placeholder-terminal-muted/50
                             pb-2 focus:outline-none focus:border-terminal-green
                             transition-colors duration-200"
                />
              </div>
            </div>

            {/* Row 2: Message */}
            <div>
              <label className="block font-mono text-sm text-terminal-green mb-2">Message</label>
              <textarea
                required
                rows={5}
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Write your message here..."
                className="w-full bg-transparent border-0 border-b border-terminal-border
                           font-mono text-sm text-gray-200 placeholder-terminal-muted/50
                           pb-2 resize-none focus:outline-none focus:border-terminal-green
                           transition-colors duration-200"
              />
            </div>

            {/* Submit */}
            <div className="flex justify-end pt-2">
              <button
                type="submit"
                disabled={status === 'sending'}
                className="font-mono text-sm font-semibold px-8 py-2.5
                           border border-terminal-green text-terminal-green rounded-full
                           hover:bg-terminal-green hover:text-terminal-bg
                           transition-all duration-200 disabled:opacity-50"
              >
                {status === 'sending' ? 'Sending...' : 'Submit'}
              </button>
            </div>
          </form>
        )}

        {/* ── Divider ── */}
        <div className="mt-14 border-t border-terminal-border/40 pt-8 flex flex-wrap justify-center gap-6">
          {[
            { label: 'GitHub',    href: 'https://github.com/abhaygzb15' },
            { label: 'LinkedIn',  href: 'https://linkedin.com/in/abhay-pawar/' },
            { label: 'Medium',    href: 'https://medium.com/@abhaygzb15' },
            { label: '+91 9810993024', href: 'tel:+919810993024' },
          ].map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith('http') ? '_blank' : undefined}
              rel="noopener noreferrer"
              className="font-mono text-xs text-terminal-muted hover:text-terminal-green transition-colors duration-200"
            >
              {label}
            </a>
          ))}
        </div>

      </div>
    </section>
  )
}

export default Contact
