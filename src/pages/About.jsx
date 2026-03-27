function About() {
  const team = [
  {
    name: "Shene",
    role: "UI/UX & Frontend Developer",
    description: "Handles the design, React frontend, and client communication. Makes sure everything looks clean and works smoothly.",
    skills: ["React", "Tailwind CSS", "Figma", "UI/UX"],
    photo: "blob:https://www.messenger.com/a51875ee-c9f0-4e44-b62d-cc9d3ca367f7"   // ← paste your URL here
  },
  {
    name: "Erica",
    role: "Frontend & Backend Developer",
    description: "Handles the database, system logic, and backend. Makes sure everything runs perfectly behind the scenes.",
    skills: ["Django", "PostgreSQL", "React", "System Logic"],
    photo: "blob:https://www.messenger.com/c00018d4-acf8-4623-8449-c7d8c5ab775b"   // ← paste Erica's URL here
  },
]

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-16">

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">About <span className="text-pink-500">Us</span></h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          We are two 3rd year Computer Science students from Cagayan de Oro, passionate about building digital solutions.
        </p>
      </div>

      {/* Team Cards */}
      <div className="flex flex-col md:flex-row gap-8 justify-center max-w-4xl mx-auto mb-16">
        {team.map((member) => (
          <div key={member.name} className="bg-gray-900 border border-gray-800 hover:border-pink-500 transition rounded-2xl p-8 w-full text-center">
            
            {/* Avatar */}
<img 
  src={member.photo} 
  alt={member.name}
  className="w-24 h-24 rounded-full object-cover mx-auto mb-4"
/>
            <h3 className="text-2xl font-bold mb-1">{member.name}</h3>
            <p className="text-pink-500 text-sm font-semibold mb-4">{member.role}</p>
            <p className="text-gray-400 text-sm mb-6">{member.description}</p>

            {/* Skills */}
            <div className="flex gap-2 flex-wrap justify-center">
              {member.skills.map((skill) => (
                <span key={skill} className="text-xs bg-gray-800 text-gray-300 px-3 py-1 rounded-full">
                  {skill}
                </span>
              ))}
            </div>

          </div>
        ))}
      </div>

      {/* Why Choose Us */}
      <div className="max-w-3xl mx-auto bg-gray-900 border border-gray-800 rounded-2xl p-10">
        <h3 className="text-2xl font-bold text-center mb-8">Why Choose <span className="text-pink-500">DevDou PH?</span></h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
          <div>
            <div className="text-3xl mb-3">💰</div>
            <h4 className="font-semibold mb-2">Affordable</h4>
            <p className="text-gray-400 text-sm">Student-friendly rates without sacrificing quality.</p>
          </div>
          <div>
            <div className="text-3xl mb-3">⚡</div>
            <h4 className="font-semibold mb-2">Fast Delivery</h4>
            <p className="text-gray-400 text-sm">Small projects in 3-7 days, systems in 1-3 weeks.</p>
          </div>
          <div>
            <div className="text-3xl mb-3">🤝</div>
            <h4 className="font-semibold mb-2">Dedicated</h4>
            <p className="text-gray-400 text-sm">We communicate well and deliver what you need.</p>
          </div>
        </div>
      </div>

    </div>
  )
}

export default About