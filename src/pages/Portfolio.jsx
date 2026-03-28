function Portfolio() {
  const projects = [
    {
      title: "Sample Ordering System",
      description: "A full ordering system with cart, menu, and admin panel for small food businesses.",
      tech: ["React", "Django", "PostgreSQL"],
      type: "System",
      gradient: 'linear-gradient(135deg, #ec4899, #a855f7)'
    },
    {
      title: "Sample Portfolio Website",
      description: "A clean and modern portfolio website for a freelance developer.",
      tech: ["React", "Tailwind CSS"],
      type: "Website",
      gradient: 'linear-gradient(135deg, #a855f7, #6366f1)'
    },
    {
      title: "Inventory Management System",
      description: "Track stocks, sales, and generate reports for small businesses.",
      tech: ["React", "Django", "PostgreSQL"],
      type: "System",
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
        position: 'fixed', top: '15%', right: '10%',
        width: '300px', height: '300px',
        background: 'radial-gradient(circle, rgba(236,72,153,0.2), transparent 70%)',
        borderRadius: '50%', filter: 'blur(60px)', zIndex: 0, pointerEvents: 'none'
      }} />
      <div style={{
        position: 'fixed', bottom: '15%', left: '10%',
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
          }}>Our Work</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '16px' }}>
            Featured{' '}
            <span style={{
              background: 'linear-gradient(90deg, #ec4899, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Projects</span>
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: '500px', margin: '0 auto' }}>
            A showcase of systems and websites we have built.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto mb-20">
          {projects.map((project) => (
            <div key={project.title}
              style={{
                background: 'rgba(255,255,255,0.04)',
                backdropFilter: 'blur(20px)',
                border: '1px solid rgba(255,255,255,0.08)',
                borderRadius: '24px',
                overflow: 'hidden',
                transition: 'all 0.3s',
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
              {/* Project Thumbnail */}
              <div style={{
                height: '180px',
                background: project.gradient,
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                position: 'relative',
                overflow: 'hidden'
              }}>
                <div style={{
                  position: 'absolute', inset: 0,
                  background: 'rgba(0,0,0,0.2)'
                }} />
                <p style={{
                  fontSize: '14px', fontWeight: '700',
                  letterSpacing: '2px', textTransform: 'uppercase',
                  color: 'rgba(255,255,255,0.9)', zIndex: 1
                }}>
                  {project.type}
                </p>
              </div>

              {/* Project Info */}
              <div style={{ padding: '24px' }}>
                <div style={{
                  display: 'flex', justifyContent: 'space-between',
                  alignItems: 'center', marginBottom: '10px'
                }}>
                  <h3 style={{ fontSize: '16px', fontWeight: '700' }}>{project.title}</h3>
                  <span style={{
                    fontSize: '11px',
                    background: 'rgba(236,72,153,0.15)',
                    color: '#ec4899',
                    padding: '4px 12px',
                    borderRadius: '999px',
                    border: '1px solid rgba(236,72,153,0.3)'
                  }}>
                    {project.type}
                  </span>
                </div>
                <p style={{
                  color: '#9ca3af', fontSize: '13px',
                  lineHeight: '1.6', marginBottom: '16px'
                }}>
                  {project.description}
                </p>
                <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap' }}>
                  {project.tech.map((t) => (
                    <span key={t} style={{
                      fontSize: '11px',
                      background: 'rgba(255,255,255,0.06)',
                      color: '#d1d5db',
                      padding: '4px 12px',
                      borderRadius: '999px',
                      border: '1px solid rgba(255,255,255,0.1)'
                    }}>
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div style={{
          maxWidth: '600px', margin: '0 auto',
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(255,255,255,0.08)',
          borderRadius: '24px',
          padding: '48px',
          textAlign: 'center'
        }}>
          <h3 style={{ fontSize: '26px', fontWeight: 'bold', marginBottom: '12px' }}>
            Have a Project in{' '}
            <span style={{
              background: 'linear-gradient(90deg, #ec4899, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Mind?</span>
          </h3>
          <p style={{ color: '#9ca3af', marginBottom: '28px', fontSize: '14px' }}>
            Let us build something great together.
          </p>
          <a href="/contact" style={{
            display: 'inline-block',
            background: 'linear-gradient(90deg, #ec4899, #a855f7)',
            borderRadius: '999px',
            padding: '14px 40px',
            color: 'white',
            fontWeight: '600',
            textDecoration: 'none',
            boxShadow: '0 0 25px rgba(236,72,153,0.4)',
            transition: 'all 0.3s'
          }}
            onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 45px rgba(236,72,153,0.7)'}
            onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 25px rgba(236,72,153,0.4)'}
          >
            Let's Work Together
          </a>
        </div>

      </div>
    </div>
  )
}

export default Portfolio