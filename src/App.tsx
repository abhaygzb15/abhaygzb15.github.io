import Navbar from './components/Navbar/Navbar'
import SocialSidebar from './components/SocialSidebar/SocialSidebar'
import Hero from './components/Hero/Hero'
import Skills from './components/Skills/Skills'
import Projects from './components/Projects/Projects'
import Internships from './components/Internships/Internships'
import Achievements from './components/Achievements/Achievements'
import Contact from './components/Contact/Contact'
import Footer from './components/Footer/Footer'

function App() {
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
        <Contact />
      </main>
      <Footer />
    </div>
  )
}

export default App
