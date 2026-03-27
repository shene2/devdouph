function Services() {
  const packages = [
    {
      name: "Basic",
      price: "₱3,000 - ₱5,000",
      description: "Perfect for simple online presence",
      features: ["Simple Website", "Landing Page", "Mobile Responsive", "1 Revision"],
      color: "border-gray-600",
      badge: ""
    },
    {
      name: "Standard",
      price: "₱8,000 - ₱15,000",
      description: "Great for small businesses",
      features: ["Website + Admin Panel", "Basic System", "Mobile Responsive", "3 Revisions", "1 Month Support"],
      color: "border-pink-500",
      badge: "Most Popular"
    },
    {
      name: "Premium",
      price: "₱20,000+",
      description: "Full custom system solution",
      features: ["Full System", "Inventory / Ordering", "Admin Dashboard", "Unlimited Revisions", "3 Months Support"],
      color: "border-purple-500",
      badge: ""
    },
  ]

  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-16">
      
      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Our <span className="text-pink-500">Services</span></h2>
        <p className="text-gray-400 max-w-xl mx-auto">Choose a package that fits your needs and budget.</p>
      </div>

      {/* Packages */}
      <div className="flex flex-col md:flex-row gap-8 justify-center items-center max-w-5xl mx-auto mb-20">
        {packages.map((pkg) => (
          <div key={pkg.name} className={`bg-gray-900 border-2 ${pkg.color} rounded-2xl p-8 w-full md:w-80 relative`}>
            {pkg.badge && (
              <span className="absolute -top-3 left-1/2 -translate-x-1/2 bg-pink-500 text-white text-xs px-4 py-1 rounded-full font-semibold">
                {pkg.badge}
              </span>
            )}
            <h3 className="text-2xl font-bold mb-1">{pkg.name}</h3>
            <p className="text-pink-500 font-semibold text-lg mb-2">{pkg.price}</p>
            <p className="text-gray-400 text-sm mb-6">{pkg.description}</p>
            <ul className="space-y-2 mb-8">
              {pkg.features.map((f) => (
                <li key={f} className="text-gray-300 text-sm flex items-center gap-2">
                  <span className="text-pink-500">✓</span> {f}
                </li>
              ))}
            </ul>
            <a href="/contact" className="block text-center bg-pink-500 hover:bg-pink-600 text-white py-2 rounded-full font-semibold transition">
              Get Started
            </a>
          </div>
        ))}
      </div>

      {/* Thesis Section */}
      <div className="max-w-3xl mx-auto bg-gray-900 border border-purple-500 rounded-2xl p-10 text-center">
        <h3 className="text-3xl font-bold mb-2">Thesis / Capstone <span className="text-pink-500">Service</span></h3>
        <p className="text-gray-400 mb-6">We help CS and IT students build their capstone systems.</p>
        <div className="flex flex-col md:flex-row justify-center gap-8 mb-8">
          <div>
            <h4 className="font-semibold text-white mb-2">What We Offer</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>✓ Capstone System</li>
              <li>✓ Documentation</li>
              <li>✓ Debugging</li>
            </ul>
          </div>
          <div>
            <h4 className="font-semibold text-white mb-2">Pricing</h4>
            <ul className="text-gray-400 text-sm space-y-1">
              <li>Simple System: <span className="text-pink-500 font-semibold">₱5k - ₱10k</span></li>
              <li>Full Capstone: <span className="text-pink-500 font-semibold">₱15k - ₱30k</span></li>
            </ul>
          </div>
        </div>
        <a href="/contact" className="bg-pink-500 hover:bg-pink-600 text-white px-8 py-3 rounded-full font-semibold transition">
          Inquire Now
        </a>
      </div>

    </div>
  )
}

export default Services