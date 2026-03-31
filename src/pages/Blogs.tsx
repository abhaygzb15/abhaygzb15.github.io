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

// Initials avatar for author
const AUTHOR = { name: 'Abhay Pawar', initials: 'AP' }

export default function Blogs() {
  const [active, setActive] = useState<Tag>('All')
  const visible = active === 'All' ? posts : posts.filter((p) => p.tag === active)

  return (
    <div className="min-h-screen bg-terminal-bg text-gray-100">
      <Navbar />

      {/* ── Dark header band ── */}
      <header className="pt-24 pb-12 px-6 md:px-12 lg:px-24 container-max mx-auto">
        <p className="font-mono text-terminal-green text-sm mb-2">// writing</p>
        <h1 className="font-mono font-bold text-4xl md:text-5xl text-gray-100 leading-tight">
          Blog<span className="text-terminal-green">.</span>
        </h1>
        <p className="font-mono text-gray-400 mt-3 max-w-xl text-sm leading-relaxed">
          Thoughts on engineering, research, competitive exams, and the occasional
          lesson learned the hard way.
        </p>

        {/* Filter tabs */}
        <div className="flex gap-2 flex-wrap mt-8">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`font-mono text-xs px-4 py-1.5 rounded-full border transition-all duration-200 ${active === tag
                ? 'bg-terminal-green text-terminal-bg border-terminal-green font-semibold'
                : 'text-terminal-muted border-terminal-border hover:border-terminal-green hover:text-terminal-green'
                }`}
            >
              {tag}
            </button>
          ))}
          <span className="font-mono text-terminal-muted text-xs self-center ml-2">
            {visible.length} post{visible.length !== 1 ? 's' : ''}
          </span>
        </div>
      </header>

      {/* ── Posts list — white cards on dark bg ── */}
      <main className="px-6 md:px-12 lg:px-24 pb-20 container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visible.map((post) => {
            const colors = tagColor[post.tag]
            return (
              <article
                key={post.slug}
                onClick={() => window.open(post.link, '_blank')}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-lg
                           transition-shadow duration-300 flex flex-col cursor-pointer"
              >
                {/* Cover image / placeholder */}
                {post.cover ? (
                  <img
                    src={post.cover}
                    alt={post.title}
                    className="w-full h-52 object-cover"
                  />
                ) : (
                  /* Gradient placeholder with a subtle pattern */
                  <div
                    className={`w-full h-52 bg-gradient-to-br ${colors.cover} flex items-center justify-center relative overflow-hidden`}
                  >
                    {/* decorative circles */}
                    <div className="absolute -top-8 -right-8 w-40 h-40 rounded-full bg-white/30" />
                    <div className="absolute -bottom-6 -left-6 w-28 h-28 rounded-full bg-white/20" />
                    <span className="relative font-mono text-5xl font-bold text-white/40 select-none">
                      {post.tag[0]}
                    </span>
                  </div>
                )}

                {/* Card body */}
                <div className="p-6 flex flex-col gap-3 flex-1">
                  {/* Tag badge */}
                  <span
                    className={`self-start text-xs font-semibold px-2.5 py-0.5 rounded-full ${colors.badge}`}
                  >
                    {post.tag}
                  </span>

                  {/* Title */}
                  <h2
                    className="text-gray-900 font-bold text-xl leading-snug
                               group-hover:text-terminal-green-dim transition-colors duration-200"
                  >
                    {post.title}
                  </h2>

                  {/* Excerpt */}
                  <p className="text-gray-500 text-sm leading-relaxed line-clamp-2 flex-1">
                    {post.excerpt}
                  </p>

                  {/* Author row */}
                  <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                    {/* Avatar */}
                    <div className="w-8 h-8 rounded-full bg-terminal-green flex items-center justify-center shrink-0">
                      <span className="font-mono text-xs font-bold text-terminal-bg">{AUTHOR.initials}</span>
                    </div>
                    <div className="flex flex-col">
                      <span className="text-gray-800 text-xs font-semibold">{AUTHOR.name}</span>
                      <span className="text-gray-400 text-xs">
                        {post.date} · {post.readTime}
                      </span>
                    </div>
                  </div>
                </div>
              </article>
            )
          })}
        </div>

        {/* Back link */}
        <div className="mt-14 flex justify-center">
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
