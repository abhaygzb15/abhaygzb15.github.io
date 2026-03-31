import { Link } from 'react-router-dom'
import Navbar from '../components/Navbar/Navbar'
import Footer from '../components/Footer/Footer'

export default function Publications() {
  return (
    <div className="min-h-screen bg-terminal-bg text-gray-100">
      <Navbar />
      <main className="pt-24 pb-20 px-6 md:px-12 lg:px-24 container-max mx-auto">
        <div className="mb-12">
          <p className="font-mono text-terminal-muted text-sm mb-2">// publications</p>
          <h1 className="font-mono font-bold text-4xl md:text-5xl text-gray-100 leading-tight">
            Publications<span className="text-terminal-green">.</span>
          </h1>
          <p className="font-mono text-gray-400 mt-3 text-sm">Coming soon — research papers and academic work.</p>
        </div>
        <Link
          to="/"
          className="font-mono text-sm text-terminal-muted hover:text-terminal-green transition-colors duration-200 flex items-center gap-2"
        >
          <span>←</span> back_to_home
        </Link>
      </main>
      <Footer />
    </div>
  )
}
