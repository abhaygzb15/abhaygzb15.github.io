// TODO: Implement Navbar
// - Logo / name on left
// - Nav links: About, Skills, Projects, Contact
// - Dark mode toggle
// - Mobile hamburger menu
// - Sticky + backdrop blur on scroll

const Navbar = () => {
  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-sm border-b border-gray-200">
      <div className="container-max flex items-center justify-between h-16 px-6 md:px-12 lg:px-24 mx-auto">
        <span className="font-mono font-medium text-primary-600">abhaypawar.me</span>
        <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
          {['About', 'Skills', 'Projects', 'Contact'].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                className="text-gray-600 hover:text-primary-600 transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  )
}

export default Navbar
