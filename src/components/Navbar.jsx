import { Link } from 'react-router-dom'

function Navbar() {
  return (
    <nav className="bg-gray-900 text-white px-8 py-4 flex justify-between items-center">
      
      {/* Logo */}
      <div className="text-2xl font-bold text-pink-500">
        DevDou PH
      </div>

      {/* Nav Links */}
      <ul className="flex gap-6 text-sm font-medium">
        <li><Link to="/" className="hover:text-pink-400 transition">Home</Link></li>
        <li><Link to="/services" className="hover:text-pink-400 transition">Services</Link></li>
        <li><Link to="/portfolio" className="hover:text-pink-400 transition">Portfolio</Link></li>
        <li><Link to="/about" className="hover:text-pink-400 transition">About</Link></li>
        <li><Link to="/contact" className="hover:text-pink-400 transition">Contact</Link></li>
      </ul>

    </nav>
  )
}

export default Navbar