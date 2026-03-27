import { Link } from 'react-router-dom'
import { useState } from 'react'

function Navbar() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <nav className="bg-gray-900 text-white px-8 py-4">
      
      <div className="flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-pink-500">
          DevDou PH
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex gap-6 text-sm font-medium">
          <li><Link to="/" className="hover:text-pink-400 transition">Home</Link></li>
          <li><Link to="/services" className="hover:text-pink-400 transition">Services</Link></li>
          <li><Link to="/portfolio" className="hover:text-pink-400 transition">Portfolio</Link></li>
          <li><Link to="/about" className="hover:text-pink-400 transition">About</Link></li>
          <li><Link to="/contact" className="hover:text-pink-400 transition">Contact</Link></li>
        </ul>

        {/* Contact Button Desktop */}
        <Link to="/contact" className="hidden md:block bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full text-sm font-semibold transition">
          Hire Us
        </Link>

        {/* Hamburger Button Mobile */}
        <button
          className="md:hidden text-white focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? (
            <span className="text-2xl">✕</span>
          ) : (
            <span className="text-2xl">☰</span>
          )}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden mt-4 flex flex-col gap-4 text-sm font-medium pb-4 border-t border-gray-800 pt-4">
          <Link to="/" className="hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>Home</Link>
          <Link to="/services" className="hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>Services</Link>
          <Link to="/portfolio" className="hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>Portfolio</Link>
          <Link to="/about" className="hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>About</Link>
          <Link to="/contact" className="hover:text-pink-400 transition" onClick={() => setIsOpen(false)}>Contact</Link>
          <Link to="/contact" className="bg-pink-500 hover:bg-pink-600 text-white px-5 py-2 rounded-full text-center font-semibold transition" onClick={() => setIsOpen(false)}>
            Hire Us
          </Link>
        </div>
      )}

    </nav>
  )
}

export default Navbar