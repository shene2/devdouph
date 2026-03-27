function Services() {
  const packages = [
    {
      name: "Basic",
      price: "3,000 - 5,000",
      description: "Perfect for simple online presence",
      features: ["Simple Website", "Landing Page", "Mobile Responsive", "1 Revision"],
      border: 'rgba(255,255,255,0.1)',
      glow: 'transparent'
    },
    {
      name: "Standard",
      price: "8,000 - 15,000",
      description: "Great for small businesses",
      features: ["Website + Admin Panel", "Basic System", "Mobile Responsive", "3 Revisions", "1 Month Support"],
      border: 'rgba(236,72,153,0.6)',
      glow: 'rgba(236,72,153,0.15)',
      badge: "Most Popular"
    },
    {
      name: "Premium",
      price: "20,000+",
      description: "Full custom system solution",
      features: ["Full System", "Inventory / Ordering", "Admin Dashboard", "Unlimited Revisions", "3 Months Support"],
      border: 'rgba(168,85,247,0.6)',
      glow: 'rgba(168,85,247,0.15)'
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
          }}>What We Offer</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '16px' }}>
            Our{' '}
            <span style={{
              background: 'linear-gradient(90deg, #ec4899, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Services</span>
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: '500px', margin: '0 auto' }}>
            Choose a package that fits your needs and budget.
          </p>
        </div>

        {/* Packages */}
        <div className="flex flex-col md:flex-row gap-8 justify-center items-stretch max-w-5xl mx-auto mb-20">
          {packages.map((pkg) => (
            <div key={pkg.name}
              style={{
                background: `rgba(255,255,255,0.04)`,
                backdropFilter: 'blur(20px)',
                border: `1px solid ${pkg.border}`,
                borderRadius: '24px',
                padding: '36px',
                flex: 1,
                position: 'relative',
                transition: 'all 0.3s',
                boxShadow: pkg.glow !== 'transparent' ? `0 0 40px ${pkg.glow}` : 'none'
              }}
              onMouseEnter={e => {
                e.currentTarget.style.transform = 'translateY(-8px)'
                e.currentTarget.style.boxShadow = `0 20px 60px ${pkg.glow || 'rgba(255,255,255,0.05)'}`
              }}
              onMouseLeave={e => {
                e.currentTarget.style.transform = 'translateY(0)'
                e.currentTarget.style.boxShadow = pkg.glow !== 'transparent' ? `0 0 40px ${pkg.glow}` : 'none'
              }}
            >
              {pkg.badge && (
                <div style={{
                  position: 'absolute', top: '-14px',
                  left: '50%', transform: 'translateX(-50%)',
                  background: 'linear-gradient(90deg, #ec4899, #a855f7)',
                  borderRadius: '999px',
                  padding: '4px 20px',
                  fontSize: '12px',
                  fontWeight: '600',
                  whiteSpace: 'nowrap'
                }}>
                  {pkg.badge}
                </div>
              )}

              <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '8px' }}>{pkg.name}</h3>
              <p style={{
                fontSize: '26px', fontWeight: 'bold', marginBottom: '8px',
                background: 'linear-gradient(90deg, #ec4899, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>
                {pkg.price}
              </p>
              <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '24px' }}>{pkg.description}</p>

              <ul style={{ listStyle: 'none', padding: 0, marginBottom: '32px' }}>
                {pkg.features.map((f) => (
                  <li key={f} style={{
                    color: '#d1d5db', fontSize: '14px',
                    padding: '8px 0',
                    borderBottom: '1px solid rgba(255,255,255,0.05)',
                    display: 'flex', alignItems: 'center', gap: '10px'
                  }}>
                    <span style={{
                      width: '18px', height: '18px',
                      borderRadius: '50%',
                      background: 'linear-gradient(90deg, #ec4899, #a855f7)',
                      display: 'flex', alignItems: 'center',
                      justifyContent: 'center', fontSize: '10px',
                      flexShrink: 0
                    }}>✓</span>
                    {f}
                  </li>
                ))}
              </ul>

              <a href="/contact" style={{
                display: 'block', textAlign: 'center',
                background: 'linear-gradient(90deg, #ec4899, #a855f7)',
                borderRadius: '999px',
                padding: '12px',
                color: 'white',
                fontWeight: '600',
                textDecoration: 'none',
                fontSize: '14px',
                transition: 'all 0.3s',
                boxShadow: '0 0 20px rgba(236,72,153,0.3)'
              }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 40px rgba(236,72,153,0.6)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 20px rgba(236,72,153,0.3)'}
              >
                Get Started
              </a>
            </div>
          ))}
        </div>

        {/* Thesis Section */}
        <div style={{
          maxWidth: '700px', margin: '0 auto',
          background: 'rgba(255,255,255,0.04)',
          backdropFilter: 'blur(20px)',
          border: '1px solid rgba(168,85,247,0.4)',
          borderRadius: '24px',
          padding: '48px',
          textAlign: 'center',
          boxShadow: '0 0 40px rgba(168,85,247,0.1)'
        }}>
          <p style={{
            color: '#a855f7', fontSize: '12px',
            fontWeight: '600', letterSpacing: '3px',
            textTransform: 'uppercase', marginBottom: '12px'
          }}>For Students</p>
          <h3 style={{ fontSize: '28px', fontWeight: 'bold', marginBottom: '12px' }}>
            Thesis / Capstone{' '}
            <span style={{
              background: 'linear-gradient(90deg, #ec4899, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Service</span>
          </h3>
          <p style={{ color: '#9ca3af', marginBottom: '32px' }}>
            We help CS and IT students build their capstone systems.
          </p>

          <div className="flex flex-col md:flex-row justify-center gap-12 mb-10">
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontWeight: '600', marginBottom: '12px', color: 'white' }}>What We Offer</h4>
              {['Capstone System', 'Documentation', 'Debugging'].map(item => (
                <p key={item} style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '8px' }}>
                  — {item}
                </p>
              ))}
            </div>
            <div style={{ textAlign: 'left' }}>
              <h4 style={{ fontWeight: '600', marginBottom: '12px', color: 'white' }}>Pricing</h4>
              <p style={{ color: '#9ca3af', fontSize: '14px', marginBottom: '8px' }}>
                Simple System: <span style={{ color: '#ec4899', fontWeight: '600' }}>₱5,000 - ₱10,000</span>
              </p>
              <p style={{ color: '#9ca3af', fontSize: '14px' }}>
                Full Capstone: <span style={{ color: '#ec4899', fontWeight: '600' }}>₱15,000 - ₱30,000</span>
              </p>
            </div>
          </div>

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
            Inquire Now
          </a>
        </div>

      </div>
    </div>
  )
}

export default Services