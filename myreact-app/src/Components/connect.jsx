 import React, { useState } from 'react';

export const Connecting = () => {
  const [formdata, setformdata] = useState({
    name: '',
    contact: '',
    email: '',
    message: '',
  });

  const [status, setStatus] = useState('');

  const handlechange = (e) => {
    setformdata((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handlesubmit = async (e) => {
    e.preventDefault();
    setStatus('Sending...');
    try {
      const res = await fetch('https://portfolio-mdsu.onrender.com/send', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formdata),
      });

      const data = await res.json();
      if (res.ok) {
        setStatus('Message sent successfully ✅');
        setformdata({ name: '', contact: '', email: '', message: '' }); // Clear form on success
      } else {
        setStatus(`Failed: ${data.message}`);
      }
    } catch (err) {
      setStatus('Service temporarily unavailable. Please email me directly.');
    }
  };

  return (
    <section id="contact" className="py-24 bg-white">
      <div className="max-w-5xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-extrabold text-gray-900 mb-4">Let's Connect</h2>
          <p className="text-gray-600 text-lg">Interested in working together or have a question?</p>
        </div>

        <div className="grid md:grid-cols-2 gap-16 items-start">
          {/* Contact Details from Resume */}
          <div className="space-y-8">
            <div>
              <h3 className="text-xl font-bold text-gray-800 mb-4">Contact Information</h3>
              <div className="space-y-4">
                <div className="flex items-center space-x-4">
                  <div className="p-3 bg-lime-100 text-lime-700 rounded-full">📧</div>
                  <div>
                    <p className="text-sm text-gray-500">Email</p>
                    <a href="mailto:bhukyaupender804@gmail.com" className="font-semibold hover:text-lime-600 transition">
                      bhukyaupender804@gmail.com
                    </a>
                  </div>
                </div>
                </div>
            </div>
            
            <div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
              <h4 className="font-bold text-gray-800 mb-2">Location</h4>
              <p className="text-gray-600 text-sm">IIT (BHU) Varanasi, Uttar Pradesh [cite: 2]</p>
            </div>
          </div>

          {/* Modernized Form */}
          <form onSubmit={handlesubmit} className="bg-white p-8 rounded-3xl shadow-xl border border-gray-100 space-y-5">
            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700 ml-1">Full Name</label>
              <input
                type="text"
                name="name"
                value={formdata.name}
                placeholder="Enter your name"
                onChange={handlechange}
                required
                className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-lime-400 focus:bg-white outline-none transition-all"
              />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700 ml-1">Email</label>
                <input
                  type="email"
                  name="email"
                  value={formdata.email}
                  placeholder="name@example.com"
                  onChange={handlechange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-lime-400 focus:bg-white outline-none transition-all"
                />
              </div>
              <div className="space-y-1">
                <label className="text-sm font-bold text-gray-700 ml-1">Contact No.</label>
                <input
                  type="number"
                  name="contact"
                  value={formdata.contact}
                  placeholder="Mobile number"
                  onChange={handlechange}
                  required
                  className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-lime-400 focus:bg-white outline-none transition-all"
                />
              </div>
            </div>

            <div className="space-y-1">
              <label className="text-sm font-bold text-gray-700 ml-1">Message</label>
              <textarea
                name="message"
                value={formdata.message}
                placeholder="How can I help you?"
                onChange={handlechange}
                required
                className="w-full px-4 py-3 h-32 rounded-xl bg-gray-50 border border-gray-200 focus:ring-2 focus:ring-lime-400 focus:bg-white outline-none transition-all resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-black text-white font-extrabold rounded-xl hover:bg-lime-500 transition-all shadow-lg active:scale-95"
            >
              Send Message
            </button>

            {status && (
              <p className={`text-center text-sm font-bold mt-4 ${status.includes('successfully') ? 'text-lime-600' : 'text-red-500'}`}>
                {status}
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
};