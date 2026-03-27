function Contact() {
  return (
    <div className="min-h-screen bg-gray-950 text-white px-6 py-16">

      {/* Header */}
      <div className="text-center mb-16">
        <h2 className="text-4xl font-bold mb-4">Contact <span className="text-pink-500">Us</span></h2>
        <p className="text-gray-400 max-w-xl mx-auto">
          Have a project in mind? Let's talk! Reach out to us and we'll get back to you as soon as possible.
        </p>
      </div>

      <div className="max-w-4xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">

        {/* Contact Info */}
        <div className="space-y-8">
          <h3 className="text-2xl font-bold mb-6">Get In <span className="text-pink-500">Touch</span></h3>
          
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-xl">📘</div>
            <div>
              <p className="font-semibold">Facebook</p>
              <p className="text-gray-400 text-sm">DevDou PH</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-xl">📧</div>
            <div>
              <p className="font-semibold">Gmail</p>
              <p className="text-gray-400 text-sm">devdouph@gmail.com</p>
            </div>
          </div>

          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-pink-500 rounded-full flex items-center justify-center text-xl">📍</div>
            <div>
              <p className="font-semibold">Location</p>
              <p className="text-gray-400 text-sm">Cagayan de Oro, Philippines</p>
            </div>
          </div>

          {/* Payment Info */}
          <div className="bg-gray-900 border border-gray-800 rounded-2xl p-6 mt-6">
            <h4 className="font-semibold mb-3">Payment Terms 💳</h4>
            <p className="text-gray-400 text-sm">50% downpayment to start</p>
            <p className="text-gray-400 text-sm">50% upon completion</p>
          </div>
        </div>

        {/* Message Form */}
        <div className="bg-gray-900 border border-gray-800 rounded-2xl p-8">
          <h3 className="text-xl font-bold mb-6">Send a <span className="text-pink-500">Message</span></h3>
          
          <div className="space-y-4">
            <div>
              <label className="text-sm text-gray-400 mb-1 block">Your Name</label>
              <input 
                type="text" 
                placeholder="Juan dela Cruz"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Email or Facebook</label>
              <input 
                type="text" 
                placeholder="juan@gmail.com"
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition"
              />
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Service Needed</label>
              <select className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-pink-500 transition">
                <option value="">Select a service...</option>
                <option>Basic Website</option>
                <option>Standard Package</option>
                <option>Premium System</option>
                <option>Thesis / Capstone</option>
              </select>
            </div>

            <div>
              <label className="text-sm text-gray-400 mb-1 block">Message</label>
              <textarea 
                rows="4"
                placeholder="Tell us about your project..."
                className="w-full bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-pink-500 transition resize-none"
              />
            </div>

            <button className="w-full bg-pink-500 hover:bg-pink-600 text-white py-3 rounded-xl font-semibold transition">
              Send Message 🚀
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Contact