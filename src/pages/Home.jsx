function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center text-center px-6">
      
      {/* Hero Section */}
      <h1 className="text-5xl font-bold mb-4 leading-tight">
        We Build <span className="text-pink-500">Digital Solutions</span>
      </h1>
      <p className="text-gray-400 text-lg mb-8 max-w-xl">
        Affordable websites and systems for small businesses and students in Cagayan de Oro.
      </p>
      <div className="flex gap-4">
        <a href="/services" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition">
          See Our Services
        </a>
        <a href="/portfolio" className="border border-pink-500 text-pink-500 hover:bg-pink-500 hover:text-white px-8 py-3 rounded-full font-semibold transition">
          View Portfolio
        </a>
      </div>

      {/* Stats Section */}
      <div className="flex gap-12 mt-16">
        <div>
          <h3 className="text-3xl font-bold text-pink-500">2+</h3>
          <p className="text-gray-400 text-sm">Developers</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-pink-500">5+</h3>
          <p className="text-gray-400 text-sm">Projects Done</p>
        </div>
        <div>
          <h3 className="text-3xl font-bold text-pink-500">100%</h3>
          <p className="text-gray-400 text-sm">Satisfaction</p>
        </div>
      </div>

    </div>
  )
}

export default Home