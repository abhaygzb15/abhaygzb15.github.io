import { Routes, Route, useLocation } from 'react-router-dom'
import { useEffect } from 'react'
import Navbar from './components/Navbar/Navbar'
import SocialSidebar from './components/SocialSidebar/SocialSidebar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Internships from './components/Internships/Internships'
import Achievements from './components/Achievements/Achievements'
import ContactSection from './components/Contact/Contact'
import Footer from './components/Footer/Footer'
import Blogs from './pages/Blogs'
import Publications from './pages/Publications'
import Contact from './pages/Contact'
import About from './pages/About'

// Sections reachable by direct route e.g. /skills → Home + scroll to #skills
const SECTION_ROUTES = ['skills', 'projects', 'internships', 'achievements', 'contact']

function Home() {
  const location = useLocation()

  useEffect(() => {
    const section = location.pathname.replace('/', '').trim()
    if (!section) return
    // Small delay so the page renders before we scroll
    const id = setTimeout(() => {
      const el = document.getElementById(section)
      if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
    }, 80)
    return () => clearTimeout(id)
  }, [location.pathname])

  return (
    <div className="min-h-screen bg-terminal-bg text-gray-100">
      <Navbar />
      <SocialSidebar />
      <main>
        <Hero />
        <Skills />
        <Projects />
        <Internships />
        <Achievements />
        <ContactSection />
      </main>
      <Footer />
    </div>
  )
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {/* Section routes — all render Home and auto-scroll */}
      {SECTION_ROUTES.map((s) => (
        <Route key={s} path={`/${s}`} element={<Home />} />
      ))}
      {/* Dedicated pages */}
      <Route path="/about"        element={<About />} />
      <Route path="/blogs"        element={<Blogs />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/contact" element={<Contact />} />
      
    </Routes>
  )
}

export default App
