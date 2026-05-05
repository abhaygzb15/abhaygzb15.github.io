import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

type Tag = 'All' | 'Technical' | 'Experience'

interface BlogPost {
  slug: string
  tag: Exclude<Tag, 'All'>
  title: string
  excerpt: string
  date: string
  readTime: string
  cover?: string   // path to cover image, e.g. /assets/blog/post1.png
  link: string     // URL to the blog post
}

const posts: BlogPost[] = [

  {
    slug: 'SIH',
    tag: 'Experience',
    title: 'How We Made It to the Smart India Hackathon Finals Twice',
    excerpt: 'More than a hackathon — a journey of building, learning, traveling, and growing together as a team.',
    date: 'March 2026',
    readTime: '9 min read',
    cover: '/assets/result.jpeg',
    link: 'https://medium.com/@abhaygzb15/how-we-made-it-to-the-smart-india-hackathon-finals-twice-d3648d68bce2',
  },
  {
    slug: 'Govtech',
    tag: 'Experience',
    title: 'What My First 60 Days in GovTech Taught Me',
    excerpt: 'Two months in, everything changed. Everything outside my comfort zone had to be faced. Here\'s what the GovTech experience looked like:',
    date: 'April 2026',
    readTime: '5 min read',
    cover: '/assets/govtech.jpeg', link: 'https://medium.com/@abhaygzb15/what-my-first-60-days-in-govtech-taught-me-dfa3c20ea7eb',
  },
  {
    slug: 'Digilocker',
    tag: 'Technical',
    title: 'DigiLocker Integration Architecture: A Secure OAuth-Based System',
    excerpt: 'What I found interesting while building this integration was how thoughtfully the overall architecture is designed between all the systems involved.',
    date: 'April 2026',
    readTime: '5 min read',
    cover: '/assets/digilocker.jpg',
    link: 'https://medium.com/@abhaygzb15/digilocker-integration-architecture-a-secure-oauth-based-system-2b844ba63ccc',
  },

]

// Colour palette per tag (used in both the filter pill and card badge)
const tagColor: Record<Exclude<Tag, 'All'>, { pill: string; badge: string; cover: string }> = {
  Technical: {
    pill: 'bg-cyan-50   text-cyan-700   border-cyan-200',
    badge: 'bg-cyan-100  text-cyan-700',
    cover: 'from-cyan-100 to-cyan-200',
  },
  Experience: {
    pill: 'bg-purple-50  text-purple-700 border-purple-200',
    badge: 'bg-purple-100 text-purple-700',
    cover: 'from-purple-100 to-purple-200',
  },

}

const TAGS: Tag[] = ['All', 'Technical', 'Experience']


export default function Blogs() {
  const [active, setActive] = useState<Tag>('All')
  const visible = active === 'All' ? posts : posts.filter((p) => p.tag === active)

  return (
    <div className="min-h-screen text-gray-100">
      <Navbar />

      {/* ── Header ── */}
      <header className="pt-20 pb-12 px-6 md:px-12 lg:px-24 container-max mx-auto max-w-4xl">
        <h1 className="font-mono font-bold text-4xl md:text-5xl text-gray-100 leading-tight mb-3">
          Blog<span className="text-terminal-green">.</span>
        </h1>
        <p className="font-mono text-gray-400 text-base leading-relaxed">
          Thoughts on engineering, research, recent technology trends, and the occasional lesson learned the hard way.
        </p>
      </header>

      {/* ── Filter Tags ── */}
      <div className="px-6 md:px-12 lg:px-24 pb-8 container-max mx-auto max-w-4xl">
        <div className="flex flex-wrap gap-2">
          {TAGS.map((tag) => {
            const count = tag === 'All' ? posts.length : posts.filter((p) => p.tag === tag).length
            return (
              <button
                key={tag}
                onClick={() => setActive(tag)}
                className={`font-mono text-xs px-3 py-1.5 rounded-full border transition-all duration-200 ${active === tag
                  ? 'bg-terminal-green text-terminal-bg border-terminal-green'
                  : 'text-terminal-muted border-terminal-border hover:border-terminal-green hover:text-terminal-green'
                  }`}
              >
                {tag}
                <span className="ml-1.5 opacity-60">{count}</span>
              </button>
            )
          })}
        </div>
      </div>

      {/* ── Posts List ── */}
      <main className="px-6 md:px-12 lg:px-24 pb-20 container-max mx-auto max-w-4xl">
        <div className="space-y-8">
          {visible.map((post) => (
            <article
              key={post.slug}
              onClick={() => window.open(post.link, '_blank')}
              className="group py-6 border-b border-terminal-border last:border-b-0 cursor-pointer transition-colors duration-200 hover:bg-terminal-bg-card/30 px-4 -mx-4 rounded-lg"
            >
              {/* Post header */}
              <div className="flex flex-col gap-3">
                {/* Title and link */}
                <h2 className="font-mono font-bold text-xl md:text-2xl text-gray-100 leading-snug group-hover:text-terminal-green transition-colors duration-200">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="font-mono text-gray-400 text-sm md:text-base leading-relaxed max-w-2xl">
                  {post.excerpt}
                </p>

                {/* Meta info: date, read time, tag */}
                <div className="flex items-center gap-3 flex-wrap pt-2">
                  <span className="font-mono text-xs text-terminal-muted">{post.date}</span>
                  <span className="text-terminal-border">·</span>
                  <span className="font-mono text-xs text-terminal-muted">{post.readTime}</span>
                  <span className="text-terminal-border">·</span>
                  <span className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${tagColor[post.tag].badge}`}>
                    {post.tag}
                  </span>
                </div>
              </div>
            </article>
          ))}
        </div>

        {/* Back link */}
        <div className="mt-16 flex justify-center">
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
