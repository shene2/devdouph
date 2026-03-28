function About() {
  const team = [
    {
      name: "Shene",
      role: "UI/UX & Frontend Developer",
      description: "Handles the design, React frontend, and client communication. Makes sure everything looks clean and works smoothly.",
      skills: ["React", "Tailwind CSS", "Figma", "UI/UX"],
      gradient: 'linear-gradient(135deg, #ec4899, #a855f7)'
    },
    {
      name: "Erica",
      role: "Frontend & Backend Developer",
      description: "Handles the database, system logic, and backend. Makes sure everything runs perfectly behind the scenes.",
      skills: ["Django", "PostgreSQL", "React", "System Logic"],
      gradient: 'linear-gradient(135deg, #a855f7, #6366f1)'
    },
  ]

  const reasons = [
    {
      title: "Affordable",
      description: "Student-friendly rates without sacrificing quality.",
      gradient: 'linear-gradient(135deg, #ec4899, #a855f7)'
    },
    {
      title: "Fast Delivery",
      description: "Small projects in 3-7 days, systems in 1-3 weeks.",
      gradient: 'linear-gradient(135deg, #a855f7, #6366f1)'
    },
    {
      title: "Dedicated",
      description: "We communicate well and deliver what you need.",
      gradient: 'linear-gradient(135deg, #6366f1, #ec4899)'
    },
  ]

  return (
    <div style={{
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)',
      color: 'white',
      padding: '80px 24px'
    }}>

      {/* Glowing Blobs */}
      <div style={{
        position: 'fixed', top: '20%', left: '5%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(236,72,153,0.2), transparent 70%)',
        borderRadius: '50%', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'fixed', bottom: '20%', right: '5%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.2), transparent 70%)',
        borderRadius: '50%', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none'
      }} />

      <div style={{ position: 'relative', zIndex: 1 }}>

        {/* Header */}
        <div className="text-center mb-16">
          <p style={{
            color: '#ec4899', fontSize: '13px',
            fontWeight: '600', letterSpacing: '3px',
            textTransform: 'uppercase', marginBottom: '12px'
          }}>Who We Are</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '16px' }}>
            Meet the{' '}
            <span style={{
              background: 'linear-gradient(90deg, #ec4899, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Team</span>
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: '500px', margin: '0 auto' }}>
            Two 3rd year Computer Science students from Cagayan de Oro, passionate about building digital solutions.
          </p>
        </div>

        {/* Team Cards */}
        <div className="flex flex-col md:flex-row gap-8 justify-center max-w-4xl mx-auto mb-20">
          {team.map((member) => (
            <div key={member.name}
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                padding: '40px',
                flex: 1,
                textAlign: 'center',
                transition: 'all 0.3s'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.border = '1px solid rgba(236,72,153,0.4)'
                e.currentTarget.style.boxShadow = '0 20px 60px rgba(236,72,153,0.15)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
                e.currentTarget.style.boxShadow = 'none'
              }}
            >
              {/* Avatar */}
              <div style={{
                width: '80px', height: '80px',
                borderRadius: '50%',
                background: member.gradient,
                margin: '0 auto 20px',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                fontSize: '28px',
                fontWeight: 'bold',
                boxShadow: '0 0 30px rgba(236,72,153,0.3)'
              }}>
                {member.name.charAt(0)}
              </div>

              <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '6px' }}>
                {member.name}
              </h3>
              <p style={{
                fontSize: '13px', fontWeight: '600',
                marginBottom: '16px',
                background: 'linear-gradient(90deg, #ec4899, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {member.role}
              </p>
              <p style={{
                color: '#9ca3af', fontSize: '14px',
                lineHeight: '1.7', marginBottom: '24px'
              }}>
                {member.description}
              </p>

              {/* Skills */}
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', justifyContent: 'center' }}>
                {member.skills.map((skill) => (
                  <span key={skill} style={{
                    fontSize: '11px',
                    background: 'rgba(255,255,255,0.06)',
                    color: '#d1d5db',
                    padding: '4px 14px',
                    borderRadius: '999px',
                    border: '1px solid rgba(255,255,255,0.1)'
                  }}>
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Why Choose Us */}
        <div style={{ maxWidth: '900px', margin: '0 auto' }}>
          <div className="text-center mb-12">
            <p style={{
              color: '#ec4899', fontSize: '13px',
              fontWeight: '600', letterSpacing: '3px',
              textTransform: 'uppercase', marginBottom: '12px'
            }}>Our Edge</p>
            <h3 style={{ fontSize: '32px', fontWeight: 'bold' }}>
              Why Choose{' '}
              <span style={{
                background: 'linear-gradient(90deg, #ec4899, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>DevDou PH</span>
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {reasons.map((reason) => (
              <div key={reason.title}
                style={{
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '24px',
                  padding: '32px',
                  textAlign: 'center',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = 'translateY(-6px)'
                  e.currentTarget.style.border = '1px solid rgba(236,72,153,0.3)'
                  e.currentTarget.style.boxShadow = '0 20px 40px rgba(236,72,153,0.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = 'translateY(0)'
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                {/* Icon Bar */}
                <div style={{
                  width: '48px', height: '4px',
                  background: reason.gradient,
                  borderRadius: '999px',
                  margin: '0 auto 20px',
                  boxShadow: '0 0 15px rgba(236,72,153,0.4)'
                }} />
                <h4 style={{ fontWeight: '700', fontSize: '18px', marginBottom: '10px' }}>
                  {reason.title}
                </h4>
                <p style={{ color: '#9ca3af', fontSize: '14px', lineHeight: '1.6' }}>
                  {reason.description}
                </p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  )
}

export default About