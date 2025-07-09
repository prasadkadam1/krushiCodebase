import React, { useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const ContactUs = () => {
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
      <section className="innerpage-wrapper py-8 flex-1">
        <div id="main-wrapper" className="layout-main-wrapper layout-container clearfix">
          <div className="container mx-auto px-4">
            <div id="skipCont"></div>
            <div id="main" className="layout-main">
              <div className="container p-0">
                <main id="content" className="column main-content" role="main">
                  <section className="section">
                    <a id="main-content" tabIndex="-1"></a>
                    <div id="block-swfone-page-title" className="block-page-title-block mb-6">
                      <h1 className="text-4xl font-extrabold text-green-900 flex items-center gap-2 animate-headingFade">
                        <span className="animate-leafWiggle">🌱</span>Contact Us
                      </h1>
                    </div>
                    <div>
                      <div className="content">
                        <div className="contact-us-page flex flex-col lg:flex-row gap-8">
                          {/* Contact Details Left */}
                          <div className="contact-us-content flex-1 order-1 animate-fadeInUp">
                            <ul className="contuctuspage bg-white rounded-xl shadow-lg border border-[#e0e0e0] p-8 text-lg text-gray-800">
                              <li className="pb-2 flex items-center gap-2"><span className="text-green-600 animate-bounce-slow">🏢</span><strong>Address:</strong> Department of Agriculture and Farmers' Empowerment, Krushi Bhavan, Bhubaneswar, Odisha, India, Pin-Code: 751001</li>
                              <li className="pt-2 border-t border-gray-300 flex items-center gap-2"><span className="text-green-700 animate-bounce-slow">📞</span><strong>Phone:</strong> 0674-2391325</li>
                              <li className="pt-2 border-t border-gray-300 flex items-center gap-2"><span className="text-blue-600 animate-bounce-slow">📞</span><strong>Krushi Samrudhi Help Line No.:</strong> 155333 (for any help/query related to Agriculture / Govt. Schemes of Agriculture)</li>
                              <li className="pt-2 border-t border-gray-300 flex items-center gap-2"><span className="text-blue-700 animate-bounce-slow">✉️</span><strong>E-mail:</strong> agrsec.or@od.gov.in</li>
                              <li className="pt-2 border-t border-gray-300">
                                <div className="flex items-center gap-2"><span className="text-green-600 animate-bounce-slow">👤</span>Dr. S. P. Parida, Joint Director (Statistics) - cum - Nodal Officer of Website</div>
                                <div className="flex items-center gap-2 ml-6"><span className="text-green-700 animate-bounce-slow">📞</span>Phone No. - 06742391124</div>
                                <div className="flex items-center gap-2 ml-6"><span className="text-blue-700 animate-bounce-slow">✉️</span>E-mail - spparida8@gmail.com</div>
                              </li>
                            </ul>
                          </div>
                          {/* Feedback Form Right */}
                          <div className="flex-1 order-2 animate-fadeInUp">
                            <form onSubmit={handleSubmit} className="bg-white rounded-xl shadow-lg border border-[#e0e0e0] p-8 flex flex-col gap-4">
                              <h2 className="text-2xl font-bold text-[#216db9] mb-2 flex items-center gap-2"><span className="animate-leafWiggle">💬</span>Feedback / Query</h2>
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
                        {/* Map below both on large screens, below form on mobile */}
                        <div className="map flex items-center justify-center mt-8 animate-fadeInUp">
                          <iframe
                            title="Krushi Bhavan Map"
                            allowFullScreen
                            height="350"
                            loading="lazy"
                            src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14970.486178799034!2d85.8280378!3d20.2745246!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x7ffe22b3bebac455!2sKrushi%20Bhavan!5e0!3m2!1sen!2sin!4v1632222730669!5m2!1sen!2sin"
                            style={{ border: 0, width: '100%', minWidth: '300px', maxWidth: '900px' }}
                          ></iframe>
                        </div>
                      </div>
                    </div>
                  </section>
                </main>
              </div>
            </div>
          </div>
        </div>
      </section>
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

export default ContactUs; 