function Home() {
  return (
    <div className="min-h-screen bg-gray-950 text-white flex flex-col items-center justify-center text-center px-6">
      <h1 className="text-5xl font-bold mb-4">We Build <span className="text-pink-500">Digital Solutions</span></h1>
      <p className="text-gray-400 text-lg mb-8 max-w-xl">Affordable websites and systems for small businesses and students in Cagayan de Oro.</p>
      <a href="/contact" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition">
        Get a Free Quote
      </a>
    </div>
  )
}

export default Home