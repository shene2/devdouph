function Footer() {
  return (
    <footer className="bg-gray-900 text-white px-8 py-12 border-t border-gray-800">
      
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
        
        {/* Brand */}
        <div>
          <h3 className="text-2xl font-bold text-pink-500 mb-3">DevDou PH</h3>
          <p className="text-gray-400 text-sm leading-relaxed">
            Affordable websites and systems for small businesses and Students.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-semibold mb-4">Quick Links</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li><a href="/" className="hover:text-pink-400 transition">Home</a></li>
            <li><a href="/services" className="hover:text-pink-400 transition">Services</a></li>
            <li><a href="/portfolio" className="hover:text-pink-400 transition">Portfolio</a></li>
            <li><a href="/about" className="hover:text-pink-400 transition">About</a></li>
            <li><a href="/contact" className="hover:text-pink-400 transition">Contact</a></li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h4 className="font-semibold mb-4">Contact</h4>
          <ul className="space-y-2 text-sm text-gray-400">
            <li>📘 DevDou PH (Facebook)</li>
            <li>📧 devdouph@gmail.com</li>
            <li>📍 Cagayan de Oro, Philippines</li>
          </ul>
        </div>

      </div>

      {/* Bottom Bar */}
      <div className="border-t border-gray-800 pt-6 text-center text-sm text-gray-500">
        © 2026 DevDou PH.  by Shene & Erica.
      </div>

    </footer>
  )
}

export default Footer