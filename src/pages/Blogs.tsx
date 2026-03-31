import { useState } from 'react'
import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

type Tag = 'All' | 'Technical' | 'Research' | 'Guides'

interface BlogPost {
  slug: string
  tag: Exclude<Tag, 'All'>
  title: string
  excerpt: string
  date: string
  readTime: string
  cover?: string          // optional cover image path
}

const posts: BlogPost[] = [
  {
    slug: 'battery-ageing-digital-twin',
    tag: 'Research',
    title: 'Building a Digital Twin for Battery Ageing & Reuse Optimisation',
    excerpt:
      'How we modelled State-of-Health degradation curves and built a simulation layer to predict second-life usability — insights from Tata InnoVent.',
    date: 'Jan 2026',
    readTime: '7 min read',
  },
  {
    slug: 'gate-cs-prep-strategy',
    tag: 'Guides',
    title: 'My GATE CS Preparation Strategy — Cleared in 2025 & 2026',
    excerpt:
      'A no-nonsense breakdown of the resources, schedule, and mental models that helped me crack GATE CSE twice, including lessons from the first attempt.',
    date: 'Mar 2026',
    readTime: '5 min read',
  },
  {
    slug: 'flutter-firebase-chatbot',
    tag: 'Technical',
    title: 'Integrating Dialogflow CX with a Flutter App using Firebase',
    excerpt:
      'Step-by-step walkthrough of wiring a Dialogflow CX agent to a Flutter frontend via Cloud Functions — auth, sessions, and rich responses included.',
    date: 'Sep 2025',
    readTime: '9 min read',
  },
  {
    slug: 'nlp-text-classification-spacy',
    tag: 'Technical',
    title: 'Text Classification at Scale with spaCy and Custom Pipelines',
    excerpt:
      'Practical guide to training a spaCy text-cat model from scratch, evaluating with precision/recall, and deploying it as a REST microservice.',
    date: 'Jun 2025',
    readTime: '8 min read',
  },
  {
    slug: 'british-airways-data-science',
    tag: 'Research',
    title: 'What I Learned from the British Airways Data Science Simulation',
    excerpt:
      'Scraping customer reviews, running sentiment analysis, and building a predictive model for booking behaviour — end-to-end walkthrough.',
    date: 'May 2024',
    readTime: '6 min read',
  },
  {
    slug: 'sih-lessons',
    tag: 'Guides',
    title: 'Making It to SIH Finals Two Years in a Row — What Changed',
    excerpt:
      'Honest reflection on team dynamics, problem statement selection, prototype depth, and presentation strategy across two Smart India Hackathon runs.',
    date: 'Dec 2025',
    readTime: '4 min read',
  },
]

const tagStyle: Record<Exclude<Tag, 'All'>, string> = {
  Technical: 'text-cyan-400   border-cyan-400/30   bg-cyan-400/5',
  Research:  'text-purple-400 border-purple-400/30 bg-purple-400/5',
  Guides:    'text-yellow-400 border-yellow-400/30 bg-yellow-400/5',
}

const TAGS: Tag[] = ['All', 'Technical', 'Research', 'Guides']

export default function Blogs() {
  const [active, setActive] = useState<Tag>('All')

  const visible = active === 'All' ? posts : posts.filter((p) => p.tag === active)

  return (
    <div className="min-h-screen bg-terminal-bg text-gray-100">
      <Navbar />

      <main className="pt-24 pb-20 px-6 md:px-12 lg:px-24 container-max mx-auto">

        {/* ── Header ── */}
        <div className="mb-12">
          <p className="font-mono text-terminal-muted text-sm mb-2">// writing</p>
          <h1 className="font-mono font-bold text-4xl md:text-5xl text-gray-100 leading-tight">
            Blog<span className="text-terminal-green">.</span>
          </h1>
          <p className="font-mono text-gray-400 mt-3 max-w-xl text-sm leading-relaxed">
            Thoughts on engineering, research, competitive exams, and the occasional
            lesson learned the hard way.
          </p>
        </div>

        {/* ── Filter tabs ── */}
        <div className="flex gap-2 flex-wrap mb-10">
          {TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActive(tag)}
              className={`font-mono text-xs px-4 py-1.5 rounded-full border transition-all duration-200 ${
                active === tag
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

        {/* ── Grid ── */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
          {visible.map((post, i) => (
            <article
              key={post.slug}
              className="group relative bg-terminal-bg-card border border-terminal-border rounded-2xl overflow-hidden
                         hover:border-terminal-green transition-all duration-300 hover:shadow-terminal
                         flex flex-col"
            >
              {/* Top accent line */}
              <div className="h-px w-full bg-gradient-to-r from-terminal-green/0 via-terminal-green/60 to-terminal-green/0
                              opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="p-6 flex flex-col gap-4 flex-1">

                {/* Tag + read time */}
                <div className="flex items-center justify-between">
                  <span
                    className={`font-mono text-[10px] font-semibold uppercase tracking-widest border px-2.5 py-0.5 rounded-full ${tagStyle[post.tag]}`}
                  >
                    {post.tag}
                  </span>
                  <span className="font-mono text-terminal-muted text-[10px]">{post.readTime}</span>
                </div>

                {/* Title */}
                <h2 className="font-mono font-bold text-base leading-snug text-gray-100
                               group-hover:text-terminal-green transition-colors duration-200">
                  {post.title}
                </h2>

                {/* Excerpt */}
                <p className="font-mono text-gray-400 text-xs leading-relaxed line-clamp-3 flex-1">
                  {post.excerpt}
                </p>

                {/* Footer: date + read more */}
                <div className="flex items-center justify-between pt-2 border-t border-terminal-border/50">
                  <span className="font-mono text-terminal-muted text-[10px] uppercase tracking-widest">
                    {post.date}
                  </span>
                  <a
                    href="#"
                    className="font-mono text-xs text-terminal-green hover:text-terminal-green-glow
                               flex items-center gap-1 transition-colors duration-200"
                  >
                    Read more
                    <span className="inline-block transition-transform duration-200 group-hover:translate-x-1">→</span>
                  </a>
                </div>
              </div>

              {/* Index number watermark */}
              <span className="absolute bottom-4 right-5 font-mono text-5xl font-bold text-terminal-border/20 select-none pointer-events-none">
                {String(i + 1).padStart(2, '0')}
              </span>
            </article>
          ))}
        </div>

        {/* ── Back link ── */}
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
