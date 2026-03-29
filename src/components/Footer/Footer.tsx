// TODO: Implement Footer
// - Copyright line
// - Built-with credits (optional)
// - Back-to-top link

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="py-8 text-center text-sm text-gray-400 border-t border-gray-100">
      <p>
        Designed &amp; Built by{' '}
        <span className="text-gray-600 font-medium">Abhay Pawar</span> © {year}
      </p>
    </footer>
  )
}

export default Footer
