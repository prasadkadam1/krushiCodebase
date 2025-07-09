import React, { useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Contact = () => {
  const [form, setForm] = useState({ name: '', email: '', message: '' });
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = 'Name is required.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Invalid email.';
    if (!form.message.trim()) errs.message = 'Message is required.';
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.type === 'textarea' ? 'message' : e.target.type]: e.target.value });
    setErrors({ ...errors, [e.target.type === 'textarea' ? 'message' : e.target.type]: undefined });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setSubmitted(true);
    // Auto-hide success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
    setForm({ name: '', email: '', message: '' });
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 animate-bgGradient">
      <Header />
      <NavBar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-8 flex flex-col items-center justify-center">
        <div className="w-full animate-fadeInUp">
          <h1 className="text-4xl font-extrabold text-green-900 mb-6 flex items-center gap-2 animate-headingFade">
            <span className="animate-leafWiggle">🌱</span>Contact Us
          </h1>
          <div className="mb-4 text-lg text-gray-800 bg-white/80 rounded-xl shadow-lg p-6 animate-fadeInUp">
            <p className="flex items-center gap-2"><span className="text-green-600 animate-bounce-slow">🏢</span>Department of Agriculture & Farmers' Empowerment</p>
            <p>Government of Odisha</p>
            <p className="flex items-center gap-2"><span className="text-blue-600 animate-bounce-slow">📍</span>Krushi Bhawan, Keshari Nagar, Bhubaneswar, Odisha - 751001</p>
            <p className="flex items-center gap-2"><span className="text-green-700 animate-bounce-slow">📞</span>Phone: 0674-2391325</p>
            <p className="flex items-center gap-2"><span className="text-blue-700 animate-bounce-slow">✉️</span>Email: agrsec.od@nic.in</p>
          </div>
          <div className="mt-8 animate-fadeInUp">
            <h2 className="text-xl font-semibold text-green-800 mb-2 flex items-center gap-2"><span className="animate-leafWiggle">💬</span>Feedback / Query</h2>
            <form onSubmit={handleSubmit} className="bg-white rounded-2xl shadow-2xl p-6 flex flex-col gap-4 max-w-lg animate-fadeInUp">
              <input
                type="text"
                placeholder="Your Name"
                className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${errors.name ? 'border-red-400' : ''}`}
                value={form.name}
                onChange={handleChange}
              />
              {errors.name && <span className="text-red-500 text-sm animate-fadeInUp">{errors.name}</span>}
              <input
                type="email"
                placeholder="Your Email"
                className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${errors.email ? 'border-red-400' : ''}`}
                value={form.email}
                onChange={handleChange}
              />
              {errors.email && <span className="text-red-500 text-sm animate-fadeInUp">{errors.email}</span>}
              <textarea
                placeholder="Your Message"
                className={`border rounded px-3 py-2 focus:outline-none focus:ring-2 focus:ring-green-400 transition ${errors.message ? 'border-red-400' : ''}`}
                rows={4}
                value={form.message}
                onChange={handleChange}
              ></textarea>
              {errors.message && <span className="text-red-500 text-sm animate-fadeInUp">{errors.message}</span>}
              <button
                type="submit"
                className="bg-gradient-to-r from-green-700 to-blue-600 text-white px-4 py-2 rounded shadow hover:from-green-600 hover:to-blue-500 transition-all duration-300 font-semibold flex items-center gap-2"
              >
                <span className="animate-bounce-slow">📤</span>Send
              </button>
              {submitted && (
                <div className="text-green-700 font-semibold flex items-center gap-2 animate-fadeInUp">
                  <span className="animate-bounce-slow">✅</span>Thank you for your feedback!
                </div>
              )}
            </form>
          </div>
        </div>
      </main>
      <Footer />
      {/* Custom keyframes for advanced subtle animations */}
      <style>{`
        @keyframes bgGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-bgGradient {
          background-size: 200% 200%;
          animation: bgGradient 12s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes headingFade {
          from { opacity: 0; letter-spacing: 0.1em; }
          to { opacity: 1; letter-spacing: 0.02em; }
        }
        .animate-headingFade {
          animation: headingFade 1.2s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes leafWiggle {
          0%, 100% { transform: rotate(-8deg) scale(1.1); }
          50% { transform: rotate(8deg) scale(1.2); }
        }
        .animate-leafWiggle {
          animation: leafWiggle 2.5s infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Contact; 