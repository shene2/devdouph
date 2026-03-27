import { useEffect, useState } from 'react'

function Home() {
  const [text, setText] = useState('')
  const fullText = "Digital Solutions."
  
  useEffect(() => {
    let i = 0
    const interval = setInterval(() => {
      setText(fullText.slice(0, i))
      i++
      if (i > fullText.length) clearInterval(interval)
    }, 100)
    return () => clearInterval(interval)
  }, [])

  return (
    <div className="min-h-screen text-white relative overflow-hidden"
      style={{
        background: 'linear-gradient(135deg, #0f0c29, #302b63, #24243e)'
      }}>

      {/* Glowing Blobs */}
      <div style={{
        position: 'absolute', top: '10%', left: '15%',
        width: '400px', height: '400px',
        background: 'radial-gradient(circle, rgba(236,72,153,0.3), transparent 70%)',
        borderRadius: '50%', filter: 'blur(60px)', zIndex: 0
      }} />
      <div style={{
        position: 'absolute', bottom: '10%', right: '15%',
        width: '350px', height: '350px',
        background: 'radial-gradient(circle, rgba(139,92,246,0.3), transparent 70%)',
        borderRadius: '50%', filter: 'blur(60px)', zIndex: 0
      }} />

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen text-center px-6">

        {/* Badge */}
        <div style={{
          background: 'rgba(255,255,255,0.05)',
          border: '1px solid rgba(236,72,153,0.4)',
          backdropFilter: 'blur(10px)',
          borderRadius: '999px',
          padding: '6px 20px',
          marginBottom: '24px',
          fontSize: '13px',
          color: '#f9a8d4'
        }}>
           Based in Cagayan de Oro, Philippines
        </div>

        {/* Heading */}
        <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
          We Build{' '}
          <span style={{
            background: 'linear-gradient(90deg, #ec4899, #a855f7)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent'
          }}>
            {text}
            <span className="animate-pulse">|</span>
          </span>
        </h1>

        <p className="text-gray-300 text-lg mb-10 max-w-xl leading-relaxed">
          Affordable websites and systems for small businesses and students. Clean code, beautiful design, fast delivery.
        </p>

        {/* Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 mb-20">
          <a href="/services"
            style={{
              background: 'linear-gradient(90deg, #ec4899, #a855f7)',
              boxShadow: '0 0 30px rgba(236,72,153,0.5)',
              borderRadius: '999px',
              padding: '14px 36px',
              fontWeight: '600',
              color: 'white',
              transition: 'all 0.3s',
              textDecoration: 'none'
            }}
            onMouseEnter={e => e.target.style.boxShadow = '0 0 50px rgba(236,72,153,0.8)'}
            onMouseLeave={e => e.target.style.boxShadow = '0 0 30px rgba(236,72,153,0.5)'}
          >
            See Our Services 
          </a>
          <a href="/portfolio"
            style={{
              background: 'rgba(255,255,255,0.05)',
              border: '1px solid rgba(255,255,255,0.2)',
              backdropFilter: 'blur(10px)',
              borderRadius: '999px',
              padding: '14px 36px',
              fontWeight: '600',
              color: 'white',
              transition: 'all 0.3s',
              textDecoration: 'none'
            }}
            onMouseEnter={e => e.target.style.background = 'rgba(255,255,255,0.1)'}
            onMouseLeave={e => e.target.style.background = 'rgba(255,255,255,0.05)'}
          >
            View Portfolio
          </a>
        </div>

        {/* Glassmorphism Stats Cards */}
        <div className="flex flex-col sm:flex-row gap-6">
          {[
            { value: '2+', label: 'Developers', icon: '👩‍💻' },
            { value: '5+', label: 'Projects Done', icon: '💻' },
            { value: '100%', label: 'Satisfaction', icon: '⭐' },
          ].map((stat) => (
            <div key={stat.label}
              style={{
                background: 'rgba(255,255,255,0.05)',
                border: '1px solid rgba(255,255,255,0.15)',
                backdropFilter: 'blur(20px)',
                borderRadius: '20px',
                padding: '24px 36px',
                textAlign: 'center',
                transition: 'all 0.3s',
                cursor: 'default'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = '0 20px 40px rgba(236,72,153,0.2)'
                e.currentTarget.style.borderColor = 'rgba(236,72,153,0.5)'
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = 'none'
                e.currentTarget.style.borderColor = 'rgba(255,255,255,0.15)'
              }}
            >
              <div style={{ fontSize: '28px', marginBottom: '8px' }}>{stat.icon}</div>
              <h3 style={{
                fontSize: '32px', fontWeight: 'bold',
                background: 'linear-gradient(90deg, #ec4899, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>{stat.value}</h3>
              <p style={{ color: '#9ca3af', fontSize: '14px' }}>{stat.label}</p>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default Home