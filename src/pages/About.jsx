import { useState } from 'react'

function Contact() {
  const [focused, setFocused] = useState(null)

  const inputStyle = (name) => ({
    width: '100%',
    background: 'rgba(255,255,255,0.05)',
    border: `1px solid ${focused === name ? 'rgba(236,72,153,0.6)' : 'rgba(255,255,255,0.1)'}`,
    borderRadius: '12px',
    padding: '14px 18px',
    color: 'white',
    fontSize: '14px',
    outline: 'none',
    transition: 'all 0.3s',
    boxShadow: focused === name ? '0 0 20px rgba(236,72,153,0.15)' : 'none',
    boxSizing: 'border-box'
  })

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
          }}>Get In Touch</p>
          <h2 style={{ fontSize: '42px', fontWeight: 'bold', marginBottom: '16px' }}>
            Contact{' '}
            <span style={{
              background: 'linear-gradient(90deg, #ec4899, #a855f7)',
              WebkitBackgroundClip: 'text',
              WebkitTextFillColor: 'transparent'
            }}>Us</span>
          </h2>
          <p style={{ color: '#9ca3af', maxWidth: '500px', margin: '0 auto' }}>
            Have a project in mind? Reach out and we will get back to you as soon as possible.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 max-w-5xl mx-auto">

          {/* Contact Info */}
          <div>
            <h3 style={{ fontSize: '22px', fontWeight: 'bold', marginBottom: '32px' }}>
              Reach Us{' '}
              <span style={{
                background: 'linear-gradient(90deg, #ec4899, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Directly</span>
            </h3>

            {[
              { label: 'Facebook', value: 'DevDou PH', icon: 'FB' },
              { label: 'Gmail', value: 'devdouph@gmail.com', icon: 'GM' },
              { label: 'Location', value: 'Cagayan de Oro, Philippines', icon: 'PH' },
            ].map((item) => (
              <div key={item.label}
                style={{
                  display: 'flex', alignItems: 'center', gap: '16px',
                  marginBottom: '20px',
                  background: 'rgba(255,255,255,0.04)',
                  backdropFilter: 'blur(20px)',
                  border: '1px solid rgba(255,255,255,0.08)',
                  borderRadius: '16px',
                  padding: '18px 24px',
                  transition: 'all 0.3s'
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.border = '1px solid rgba(236,72,153,0.3)'
                  e.currentTarget.style.boxShadow = '0 10px 30px rgba(236,72,153,0.1)'
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.border = '1px solid rgba(255,255,255,0.08)'
                  e.currentTarget.style.boxShadow = 'none'
                }}
              >
                <div style={{
                  width: '44px', height: '44px',
                  borderRadius: '12px',
                  background: 'linear-gradient(135deg, #ec4899, #a855f7)',
                  display: 'flex', alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: '11px', fontWeight: '700',
                  flexShrink: 0,
                  boxShadow: '0 0 15px rgba(236,72,153,0.3)'
                }}>
                  {item.icon}
                </div>
                <div>
                  <p style={{ fontSize: '12px', color: '#9ca3af', marginBottom: '2px' }}>{item.label}</p>
                  <p style={{ fontSize: '14px', fontWeight: '600' }}>{item.value}</p>
                </div>
              </div>
            ))}

            {/* Payment Terms */}
            <div style={{
              background: 'rgba(255,255,255,0.04)',
              backdropFilter: 'blur(20px)',
              border: '1px solid rgba(168,85,247,0.3)',
              borderRadius: '16px',
              padding: '24px',
              marginTop: '8px',
              boxShadow: '0 0 30px rgba(168,85,247,0.08)'
            }}>
              <p style={{
                fontSize: '12px', fontWeight: '600',
                letterSpacing: '2px', textTransform: 'uppercase',
                color: '#a855f7', marginBottom: '12px'
              }}>Payment Terms</p>
              <p style={{ color: '#d1d5db', fontSize: '14px', marginBottom: '6px' }}>
                — 50% downpayment to start
              </p>
              <p style={{ color: '#d1d5db', fontSize: '14px' }}>
                — 50% upon project completion
              </p>
            </div>
          </div>

          {/* Message Form */}
          <div style={{
            background: 'rgba(255,255,255,0.04)',
            backdropFilter: 'blur(20px)',
            border: '1px solid rgba(255,255,255,0.08)',
            borderRadius: '24px',
            padding: '40px'
          }}>
            <h3 style={{ fontSize: '20px', fontWeight: 'bold', marginBottom: '28px' }}>
              Send a{' '}
              <span style={{
                background: 'linear-gradient(90deg, #ec4899, #a855f7)',
                WebkitBackgroundClip: 'text',
                WebkitTextFillColor: 'transparent'
              }}>Message</span>
            </h3>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>

              <div>
                <label style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '8px' }}>
                  Your Name
                </label>
                <input
                  type="text"
                  placeholder="Juan dela Cruz"
                  style={inputStyle('name')}
                  onFocus={() => setFocused('name')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '8px' }}>
                  Email or Facebook
                </label>
                <input
                  type="text"
                  placeholder="juan@gmail.com"
                  style={inputStyle('email')}
                  onFocus={() => setFocused('email')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <div>
                <label style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '8px' }}>
                  Service Needed
                </label>
                <select
                  style={inputStyle('service')}
                  onFocus={() => setFocused('service')}
                  onBlur={() => setFocused(null)}
                >
                  <option value="" style={{ background: '#1a1a2e' }}>Select a service...</option>
                  <option style={{ background: '#1a1a2e' }}>Basic Website</option>
                  <option style={{ background: '#1a1a2e' }}>Standard Package</option>
                  <option style={{ background: '#1a1a2e' }}>Premium System</option>
                  <option style={{ background: '#1a1a2e' }}>Thesis / Capstone</option>
                </select>
              </div>

              <div>
                <label style={{ fontSize: '12px', color: '#9ca3af', display: 'block', marginBottom: '8px' }}>
                  Message
                </label>
                <textarea
                  rows="4"
                  placeholder="Tell us about your project..."
                  style={{ ...inputStyle('message'), resize: 'none' }}
                  onFocus={() => setFocused('message')}
                  onBlur={() => setFocused(null)}
                />
              </div>

              <button
                style={{
                  width: '100%',
                  background: 'linear-gradient(90deg, #ec4899, #a855f7)',
                  borderRadius: '12px',
                  padding: '14px',
                  color: 'white',
                  fontWeight: '600',
                  fontSize: '15px',
                  border: 'none',
                  cursor: 'pointer',
                  transition: 'all 0.3s',
                  boxShadow: '0 0 25px rgba(236,72,153,0.4)'
                }}
                onMouseEnter={e => e.currentTarget.style.boxShadow = '0 0 45px rgba(236,72,153,0.7)'}
                onMouseLeave={e => e.currentTarget.style.boxShadow = '0 0 25px rgba(236,72,153,0.4)'}
              >
                Send Message
              </button>

            </div>
          </div>

        </div>
      </div>
    </div>
  )
}

export default Contact