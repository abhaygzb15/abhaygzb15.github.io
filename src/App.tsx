import { Routes, Route, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import Navbar from "./components/Navbar/Navbar";
import SocialSidebar from "./components/SocialSidebar/SocialSidebar";
import Hero from "./components/Hero/Hero";
import Skills from "./components/Skills/Skills";
import Projects from "./components/Projects/Projects";
import Internships from "./components/Internships/Internships";
import Achievements from "./components/Achievements/Achievements";
import ContactSection from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Blogs from "./pages/Blogs";
import Publications from "./pages/Publications";
import Contact from "./components/Contact/Contact";
import Terminal from "./components/Terminal/Terminal";

const SECTION_ROUTES = [
  "skills",
  "projects",
  "internships",
  "achievements",
  "contact",
];

function Home() {
  const location = useLocation();
  const [terminalOpen, setTerminalOpen] = useState(false);

  useEffect(() => {
    const section = location.pathname.replace("/", "").trim();
    if (!section) return;
    const id = setTimeout(() => {
      const el = document.getElementById(section);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    }, 80);
    return () => clearTimeout(id);
  }, [location.pathname]);

  // Scroll-reveal observer
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((e) => { if (e.isIntersecting) e.target.classList.add("visible"); }),
      { threshold: 0.1 }
    );
    const timer = setTimeout(() => {
      document.querySelectorAll(".reveal, .stagger-children").forEach((el) => observer.observe(el));
    }, 150);
    return () => { clearTimeout(timer); observer.disconnect(); };
  }, []);

  return (
    <div className="min-h-screen bg-terminal-bg text-gray-100">
      <Navbar />
      <SocialSidebar />
      <main>
        <Hero onLaunchTerminal={() => setTerminalOpen(true)} />
        <Skills />
        <Projects />
        <Internships />
        <Achievements />
        <ContactSection />
      </main>
      <Footer />
      <Terminal open={terminalOpen} setOpen={setTerminalOpen} />
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {SECTION_ROUTES.map((s) => (
        <Route key={s} path={`/${s}`} element={<Home />} />
      ))}
      <Route path="/blogs" element={<Blogs />} />
      <Route path="/publications" element={<Publications />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
  );
}

export default App;
