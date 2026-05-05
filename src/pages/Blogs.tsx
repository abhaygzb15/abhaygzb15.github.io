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
  cover?: string
  link: string
}

const posts: BlogPost[] = [
  {
    slug: 'SIH',
    tag: 'Experience',
    title: 'How We Made It to the Smart India Hackathon Finals Twice',
    excerpt: 'More than a hackathon - a journey of building, learning, traveling, and growing together as a team.',
    date: 'March 2026',
    readTime: '9 min read',
    cover: '/assets/result.jpeg',
    link: 'https://medium.com/@abhaygzb15/how-we-made-it-to-the-smart-india-hackathon-finals-twice-d3648d68bce2',
  },
  {
    slug: 'Govtech',
    tag: 'Experience',
    title: 'What My First 60 Days in GovTech Taught Me',
    excerpt: 'Two months in, everything changed. Everything outside my comfort zone had to be faced. Here is what the GovTech experience looked like.',
    date: 'April 2026',
    readTime: '5 min read',
    cover: '/assets/govtech.jpeg',
    link: 'https://medium.com/@abhaygzb15/what-my-first-60-days-in-govtech-taught-me-dfa3c20ea7eb',
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

const tagTone: Record<Exclude<Tag, 'All'>, string> = {
  Technical: 'text-[#8b93ff]',
  Experience: 'text-terminal-green',
}

const TAGS: Tag[] = ['All', 'Technical', 'Experience']

export default function Blogs() {
  const [active, setActive] = useState<Tag>('All')
  const visible = active === 'All' ? posts : posts.filter((p) => p.tag === active)

  return (
    <div className="blog-page min-h-screen overflow-hidden bg-black text-white">
      <Navbar />

      <main className="relative px-4 pb-20 pt-24 sm:px-6 md:px-10 lg:px-16">
        <div className="blog-ribbon blog-ribbon-top" aria-hidden="true" />
        <div className="blog-ribbon blog-ribbon-left" aria-hidden="true" />
        <div className="blog-ribbon blog-ribbon-bottom" aria-hidden="true" />

        <section className="blog-panel relative mx-auto max-w-7xl px-5 py-10 sm:px-8 md:px-12 lg:px-24 lg:py-20">
          <div className="flex flex-col gap-8 lg:flex-row lg:items-start lg:justify-between">
            <div className="max-w-2xl">
              <span className="inline-flex rounded-full bg-terminal-green/20 px-4 py-2 font-sans text-sm font-semibold text-terminal-green ring-1 ring-terminal-green/20">
                Blog Post
              </span>
              <h1 className="mt-6 font-sans text-4xl font-bold leading-tight tracking-normal text-white md:text-5xl">
                Latest Article
              </h1>
              <p className="mt-5 max-w-3xl font-sans text-base leading-8 text-white/75 md:text-lg">
                Thoughts on engineering, research, recent technology trends, and the occasional lesson learned the hard way.
              </p>
            </div>

            <div className="flex flex-col gap-4 sm:flex-row lg:flex-col lg:items-end">
              <a
                href="https://medium.com/@abhaygzb15"
                target="_blank"
                rel="noreferrer"
                className="inline-flex h-14 items-center justify-center gap-3 rounded-full bg-terminal-green px-7 font-sans text-base font-bold text-black shadow-[0_18px_45px_rgba(0,200,83,0.28)] transition duration-200 hover:-translate-y-0.5 hover:bg-terminal-green-glow focus:outline-none focus:ring-2 focus:ring-terminal-green focus:ring-offset-2 focus:ring-offset-black"
              >
                View All Posts
                <span aria-hidden="true" className="text-2xl leading-none">-&gt;</span>
              </a>

              <div className="flex flex-wrap gap-2 lg:justify-end">
                {TAGS.map((tag) => {
                  const count = tag === 'All' ? posts.length : posts.filter((p) => p.tag === tag).length
                  return (
                    <button
                      key={tag}
                      type="button"
                      onClick={() => setActive(tag)}
                      className={`rounded-full border px-3.5 py-2 font-sans text-xs font-bold transition duration-200 ${
                        active === tag
                          ? 'border-terminal-green bg-terminal-green text-black'
                          : 'border-white/10 bg-white/[0.04] text-white/60 hover:border-terminal-green/60 hover:text-terminal-green'
                      }`}
                    >
                      {tag}
                      <span className={`ml-1.5 ${active === tag ? 'text-black/70' : 'text-white/50'}`}>{count}</span>
                    </button>
                  )
                })}
              </div>
            </div>
          </div>

          <div className="mt-14 grid gap-8 md:grid-cols-3">
            {visible.map((post) => (
              <article key={post.slug} className="group">
                <a href={post.link} target="_blank" rel="noreferrer" className="block">
                  <div className="relative aspect-[1.75/1] overflow-hidden rounded-[1.4rem] border border-white/15 bg-white/[0.03]">
                    {post.cover ? (
                      <img
                        src={post.cover}
                        alt=""
                        className="h-full w-full object-cover grayscale transition duration-500 group-hover:scale-105 group-hover:grayscale-0"
                      />
                    ) : (
                      <div className="h-full w-full bg-[radial-gradient(circle_at_35%_35%,rgba(0,200,83,0.42),transparent_34%),linear-gradient(135deg,#161616,#050505)]" />
                    )}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/45 via-black/10 to-transparent" />
                    <span
                      aria-hidden="true"
                      className="absolute bottom-3 right-3 grid h-12 w-12 place-items-center rounded-full border border-white/50 bg-white/10 font-sans text-2xl text-white backdrop-blur-md transition duration-200 group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:bg-terminal-green group-hover:text-black"
                    >
                      /&gt;
                    </span>
                  </div>

                  <div className="mt-5">
                    <p className={`font-sans text-sm font-bold ${tagTone[post.tag]}`}>{post.tag}</p>
                    <h2 className="mt-2 font-sans text-2xl font-bold leading-tight text-white transition duration-200 group-hover:text-terminal-green">
                      {post.title}
                    </h2>
                    <p className="mt-3 line-clamp-2 font-sans text-sm leading-6 text-white/70">
                      {post.excerpt}
                    </p>
                    <div className="mt-6 flex items-center justify-between gap-4">
                      <div className="min-w-0">
                        <p className="truncate font-sans text-sm font-bold text-white">Abhay Pawar</p>
                        <p className="font-sans text-xs text-white/50">{post.date}</p>
                      </div>
                      <span className="shrink-0 font-sans text-sm text-white/50">{post.readTime}</span>
                    </div>
                  </div>
                </a>
              </article>
            ))}
          </div>
        </section>

        <div className="relative z-10 mt-10 flex justify-center">
          <Link
            to="/"
            className="font-sans text-sm font-semibold text-white/50 transition-colors duration-200 hover:text-terminal-green"
          >
            back_to_home
          </Link>
        </div>
      </main>

      <Footer />
    </div>
  )
}
