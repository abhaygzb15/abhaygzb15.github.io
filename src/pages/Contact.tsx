import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: '',
  })
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }))
  }

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setLoading(true)

    try {
      // Using Formspree for form submission
      const response = await fetch('https://formspree.io/f/mzbbkzap', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      })

      if (response.ok) {
        setSubmitted(true)
        setFormData({ name: '', email: '', subject: '', message: '' })
        setTimeout(() => setSubmitted(false), 5000)
      }
    } catch (error) {
      console.error('Error submitting form:', error)
    } finally {
      setLoading(false)
    }
  }

  const contactMethods = [
    {
      icon: '✉️',
      title: 'Email',
      value: 'abhaypawar.dev@gmail.com',
      href: 'mailto:abhaypawar.dev@gmail.com',
    },
    {
      icon: '💼',
      title: 'LinkedIn',
      value: 'linkedin.com/in/abhaypawar15',
      href: 'https://www.linkedin.com/in/abhaypawar15/',
    },
    {
      icon: '🐙',
      title: 'GitHub',
      value: 'github.com/abhaygzb15',
      href: 'https://github.com/abhaygzb15',
    },
    {
      icon: '📝',
      title: 'Medium',
      value: 'medium.com/@abhaygzb15',
      href: 'https://medium.com/@abhaygzb15',
    },
  ]

  return (
    <div className="min-h-screen bg-terminal-bg text-gray-100">
      <Navbar />

      <main className="pt-24 pb-20 px-6 md:px-16 lg:px-28 max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <p className="font-mono text-terminal-green text-sm mb-4">// contact_form</p>
          <h1 className="font-mono font-bold text-gray-100 text-4xl md:text-5xl leading-tight mb-6">
            Get In Touch
          </h1>
          <p className="font-mono text-gray-400 text-lg leading-relaxed">
            I'm always open to discussing new projects, ideas, or opportunities. Feel free to reach out!
          </p>
        </header>

        {/* Main content grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          {/* Contact Form */}
          <div>
            <h2 className="font-mono font-bold text-terminal-green text-2xl mb-6">Send a Message</h2>

            {submitted && (
              <div className="mb-6 p-4 bg-terminal-green/20 border border-terminal-green rounded">
                <p className="font-mono text-terminal-green text-sm">
                  ✓ Message sent successfully! I'll get back to you soon.
                </p>
              </div>
            )}

            <form onSubmit={handleSubmit} className="space-y-4">
              {/* Name */}
              <div>
                <label htmlFor="name" className="block font-mono text-gray-400 text-sm mb-2">
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-terminal-bg-card border border-terminal-border rounded font-mono text-gray-200 placeholder-gray-600 focus:outline-none focus:border-terminal-green transition-colors"
                  placeholder="Your name"
                />
              </div>

              {/* Email */}
              <div>
                <label htmlFor="email" className="block font-mono text-gray-400 text-sm mb-2">
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-terminal-bg-card border border-terminal-border rounded font-mono text-gray-200 placeholder-gray-600 focus:outline-none focus:border-terminal-green transition-colors"
                  placeholder="your@email.com"
                />
              </div>

              {/* Subject */}
              <div>
                <label htmlFor="subject" className="block font-mono text-gray-400 text-sm mb-2">
                  Subject
                </label>
                <input
                  type="text"
                  id="subject"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="w-full px-4 py-2 bg-terminal-bg-card border border-terminal-border rounded font-mono text-gray-200 placeholder-gray-600 focus:outline-none focus:border-terminal-green transition-colors"
                  placeholder="What's this about?"
                />
              </div>

              {/* Message */}
              <div>
                <label htmlFor="message" className="block font-mono text-gray-400 text-sm mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="w-full px-4 py-2 bg-terminal-bg-card border border-terminal-border rounded font-mono text-gray-200 placeholder-gray-600 focus:outline-none focus:border-terminal-green transition-colors resize-none"
                  placeholder="Tell me more..."
                />
              </div>

              {/* Submit Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full px-6 py-3 bg-terminal-green text-terminal-bg font-mono font-bold text-sm rounded hover:bg-terminal-green-glow transition-colors duration-200 disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {loading ? 'Sending...' : '> Send Message'}
              </button>
            </form>
          </div>

          {/* Contact Info */}
          <div>
            <h2 className="font-mono font-bold text-terminal-green text-2xl mb-6">Contact Info</h2>

            <div className="space-y-4">
              {contactMethods.map((method) => (
                <a
                  key={method.title}
                  href={method.href}
                  target={method.href.startsWith('http') ? '_blank' : undefined}
                  rel={method.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                  className="block p-4 bg-terminal-bg-card border border-terminal-border rounded hover:border-terminal-green/40 transition-colors group"
                >
                  <div className="flex items-start gap-4">
                    <span className="text-2xl">{method.icon}</span>
                    <div className="flex-1">
                      <h3 className="font-mono font-bold text-gray-200 text-sm mb-1 group-hover:text-terminal-green transition-colors">
                        {method.title}
                      </h3>
                      <p className="font-mono text-gray-400 text-xs break-all">{method.value}</p>
                    </div>
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>

        {/* Social Links */}
        <div className="border-t border-terminal-border pt-8 mt-8">
          <h3 className="font-mono text-terminal-green text-sm font-bold mb-4">Follow</h3>
          <div className="flex gap-6">
            <a
              href="https://github.com/abhaygzb15"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors"
            >
              GitHub
            </a>
            <a
              href="https://www.linkedin.com/in/abhaypawar15/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors"
            >
              LinkedIn
            </a>
            <a
              href="https://medium.com/@abhaygzb15"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors"
            >
              Medium
            </a>
            <a
              href="https://www.instagram.com/stories/abhaypawar._/"
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-sm text-gray-400 hover:text-terminal-green transition-colors"
            >
              Instagram
            </a>
          </div>
        </div>

        {/* Back link */}
        <div className="mt-20 flex justify-center">
          <Link
            to="/"
            className="font-mono text-sm text-terminal-muted hover:text-terminal-green transition-colors duration-200 flex items-center gap-2"
          >
            <span>←</span> back_to_home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
