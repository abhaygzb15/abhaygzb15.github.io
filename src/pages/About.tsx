import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function About() {
  return (
    <div className="min-h-screen bg-terminal-bg text-gray-100">
      <Navbar />

      <main className="pt-24 pb-20 px-6 md:px-16 lg:px-28 max-w-4xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <p className="font-mono text-terminal-green text-sm mb-4">// about_me</p>
          <h1 className="font-mono font-bold text-gray-100 text-4xl md:text-5xl leading-tight mb-6">
            Mobile App Dev & Data Science Enthusiast
          </h1>
          <p className="font-mono text-gray-400 text-lg leading-relaxed">
            Building scalable solutions with a focus on Android development, Flutter cross-platform apps, and data-driven insights.
          </p>
        </header>

        {/* Main content */}
        <div className="space-y-16">
          {/* Intro section */}
          <section className="space-y-4">
            <h2 className="font-mono font-bold text-terminal-green text-2xl">About Me</h2>
            <p className="font-mono text-gray-300 text-sm leading-relaxed">
              I'm a passionate developer currently pursuing B.Tech in Information Technology and Mathematical Innovation at Cluster Innovation Centre, University of Delhi. I specialize in mobile application development and data science, with hands-on experience in building production-ready applications.
            </p>
          </section>

          {/* Four key points */}
          <section className="space-y-8">
            <h2 className="font-mono font-bold text-terminal-green text-2xl">What I Do</h2>
            
            <div className="space-y-6">
              {/* Point 1 */}
              <div className="bg-terminal-bg-card border border-terminal-border p-6 rounded-lg hover:border-terminal-green/40 transition-colors">
                <h3 className="font-mono font-bold text-terminal-green mb-2 text-lg">
                  Mobile App Development
                </h3>
                <p className="font-mono text-gray-400 text-sm leading-relaxed">
                  Building robust Android and cross-platform mobile applications using Kotlin, Flutter, and Firebase. I focus on creating intuitive user interfaces, seamless performance, and scalable backend integrations for production environments.
                </p>
              </div>

              {/* Point 2 */}
              <div className="bg-terminal-bg-card border border-terminal-border p-6 rounded-lg hover:border-terminal-green/40 transition-colors">
                <h3 className="font-mono font-bold text-terminal-green mb-2 text-lg">
                  Data Science & Analytics
                </h3>
                <p className="font-mono text-gray-400 text-sm leading-relaxed">
                  Leveraging Python, TensorFlow, and machine learning to extract actionable insights from complex datasets. I specialize in data visualization, predictive modeling, and implementing end-to-end ML pipelines for real-world problems.
                </p>
              </div>

              {/* Point 3 */}
              <div className="bg-terminal-bg-card border border-terminal-border p-6 rounded-lg hover:border-terminal-green/40 transition-colors">
                <h3 className="font-mono font-bold text-terminal-green mb-2 text-lg">
                  Full-Stack Solutions
                </h3>
                <p className="font-mono text-gray-400 text-sm leading-relaxed">
                  Developing end-to-end solutions combining mobile frontends with powerful backends. Experienced with REST APIs, database optimization, and deploying applications on cloud platforms to ensure scalability and reliability.
                </p>
              </div>

              {/* Point 4 */}
              <div className="bg-terminal-bg-card border border-terminal-border p-6 rounded-lg hover:border-terminal-green/40 transition-colors">
                <h3 className="font-mono font-bold text-terminal-green mb-2 text-lg">
                  Competitive Excellence
                </h3>
                <p className="font-mono text-gray-400 text-sm leading-relaxed">
                  Cleared GATE exams in Computer Science and Data Science, qualified for Smart India Hackathon finals (2024 & 2025), and consistently delivered top-ranking solutions in national-level competitions. Driven by continuous learning and innovation.
                </p>
              </div>
            </div>
          </section>

          {/* Education */}
          <section className="space-y-4">
            <h2 className="font-mono font-bold text-terminal-green text-2xl">Education</h2>
            <div className="bg-terminal-bg-card border border-terminal-border p-6 rounded-lg">
              <h3 className="font-mono font-bold text-gray-200 text-lg mb-2">
                B.Tech (Information Technology and Mathematical Innovation)
              </h3>
              <p className="font-mono text-gray-400 text-sm mb-2">
                Cluster Innovation Centre, University of Delhi | New Delhi
              </p>
              <p className="font-mono text-terminal-green text-sm font-semibold">
                Nov 2022 – Present
              </p>
              <p className="font-mono text-gray-400 text-sm mt-3">
                CGPA: 9.64 | 9.77 | 9.45 (Sem 1, 2, 3)
              </p>
            </div>
          </section>

          {/* Contact CTA */}
          <section className="border-t border-terminal-border pt-8">
            <p className="font-mono text-gray-400 text-sm mb-4">
              Interested in collaborating or want to know more?
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center gap-2 px-6 py-2 bg-terminal-green text-terminal-bg font-mono font-bold text-sm rounded hover:bg-terminal-green-glow transition-colors duration-200"
            >
              <span>{'>'}</span> Get in Touch
            </Link>
          </section>
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
