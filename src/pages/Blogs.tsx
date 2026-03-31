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
  cover?: string   // path to cover image, e.g. /assets/blog/post1.png
}

const posts: BlogPost[] = [
  {
    slug: 'battery-ageing-digital-twin',
    tag: 'Research',
    title: 'Building a Digital Twin for Battery Ageing & Reuse Optimisation',
    excerpt:
      'How we modelled State-of-Health degradation curves and built a simulation layer to predict second-life usability — insights from Tata InnoVent.',
    date: 'January 2026',
    readTime: '7 min read',
  },
  {
    slug: 'gate-cs-prep-strategy',
    tag: 'Guides',
    title: 'My GATE CS Preparation Strategy — Cleared in 2025 & 2026',
    excerpt:
      'A no-nonsense breakdown of the resources, schedule, and mental models that helped me crack GATE CSE twice, including lessons from the first attempt.',
    date: 'March 2026',
    readTime: '5 min read',
  },
  {
    slug: 'flutter-firebase-chatbot',
    tag: 'Technical',
    title: 'Integrating Dialogflow CX with a Flutter App using Firebase',
    excerpt:
      'Step-by-step walkthrough of wiring a Dialogflow CX agent to a Flutter frontend via Cloud Functions — auth, sessions, and rich responses included.',
    date: 'September 2025',
    readTime: '9 min read',
  },
  {
    slug: 'nlp-text-classification-spacy',
    tag: 'Technical',
    title: 'Text Classification at Scale with spaCy and Custom Pipelines',
    excerpt:
      'Practical guide to training a spaCy text-cat model from scratch, evaluating with precision/recall, and deploying it as a REST microservice.',
    date: 'June 2025',
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
    date: 'December 2025',
    readTime: '4 min read',
  },
]

// Colour palette per tag (used in both the filter pill and card badge)
const tagColor: Record<Exclude<Tag, 'All'>, { pill: string; badge: string; cover: string }> = {
  Technical: {
    pill:  'bg-cyan-50   text-cyan-700   border-cyan-200',
    badge: 'bg-cyan-100  text-cyan-700',
    cover: 'from-cyan-100 to-cyan-200',
  },
  Research: {
    pill:  'bg-purple-50  text-purple-700 border-purple-200',
    badge: 'bg-purple-100 text-purple-700',
    cover: 'from-purple-100 to-purple-200',
  },
  Guides: {
    pill:  'bg-amber-50  text-amber-700  border-amber-200',
    badge: 'bg-amber-100 text-amber-700',
    cover: 'from-amber-100 to-amber-200',
  },
}

const TAGS: Tag[] = ['All', 'Technical', 'Research', 'Guides']

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
      </header>

      {/* ── Posts list — white cards on dark bg ── */}
      <main className="px-6 md:px-12 lg:px-24 pb-20 container-max mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {visible.map((post) => {
            const colors = tagColor[post.tag]
            return (
              <article
                key={post.slug}
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
