function Portfolio() {
  const projects = [
    {
      title: "Sample Ordering System",
      description: "A full ordering system with cart, menu, and admin panel.",
      tech: ["React", "Django", "PostgreSQL"],
      type: "System",
      color: "bg-pink-500"
    },
    {
      title: "Sample Portfolio Website",
      description: "A clean portfolio website for a freelance developer.",
      tech: ["React", "Tailwind"],
      type: "Website",
      color: "bg-purple-500"
    },
    {
      title: "Inventory Management System",
      description: "Track stocks, sales, and generate reports for small businesses.",
      tech: ["React", "Django", "PostgreSQL"],
      type: "System",
      color: "bg-pink-500"
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-16">

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our <span className="text-pink-500">Portfolio</span></h2>
        <p className="text-gray-400 max-w-xl mx-auto">Sample projects we've built to showcase our skills.</p>
      </div>

      {/* Projects Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {projects.map((project) => (
          <div key={project.title} className="bg-gray-900 rounded-2xl overflow-hidden border border-gray-800 hover:border-pink-500 transition">
            
            {/* Project Image Placeholder */}
            <div className={`${project.color} h-48 flex items-center justify-center`}>
              <span className="text-white text-4xl">💻</span>
            </div>

            {/* Project Info */}
            <div className="p-6">
              <div className="flex justify-between items-center mb-2">
                <h3 className="text-lg font-bold">{project.title}</h3>
                <span className="text-xs bg-gray-800 text-pink-400 px-3 py-1 rounded-full">{project.type}</span>
              </div>
              <p className="text-gray-400 text-sm mb-4">{project.description}</p>
              <div className="flex gap-2 flex-wrap">
                {project.tech.map((t) => (
                  <span key={t} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">{t}</span>
                ))}
              </div>
            </div>

          </div>
        ))}
      </div>

      {/* CTA */}
      <div className="text-center mt-16">
        <p className="text-gray-400 mb-4">Want us to build something for you?</p>
        <a href="/contact" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition">
          Let's Work Together
        </a>
      </div>

    </div>
  )
}

export default Portfolio