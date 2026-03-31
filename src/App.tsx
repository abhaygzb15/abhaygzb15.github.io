import { Routes, Route } from 'react-router-dom'
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
import About from './pages/About'
import Contact from './pages/Contact'

function Home() {
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
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/about" element={<About />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  )
}

export default App
