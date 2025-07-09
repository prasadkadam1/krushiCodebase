import React, { useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const acts = [
  { title: 'Odisha Agriculture Produce Markets Act', year: 1956, summary: 'Regulates the buying and selling of agricultural produce in markets across Odisha.', details: 'This act provides for the better regulation of buying and selling of agricultural produce and the establishment of markets for agricultural produce in the state.' },
  { title: 'Odisha Irrigation Act', year: 1959, summary: 'Provides for the construction and maintenance of irrigation works.', details: 'The act empowers the government to construct, maintain, and regulate irrigation works for the benefit of agriculture and the public.' },
  { title: 'Odisha Land Reforms Act', year: 1960, summary: 'Aims at land reforms and redistribution for equitable growth.', details: 'This act was enacted to bring about land reforms, abolish intermediaries, and ensure equitable distribution of land among farmers.' },
  { title: 'Odisha Agricultural Credit Operations Act', year: 1974, summary: 'Facilitates credit operations for farmers.', details: 'The act facilitates the provision of credit to farmers and agricultural workers for agricultural operations and allied activities.' },
  { title: 'Odisha Farmers Welfare Fund Act', year: 2015, summary: 'Establishes a welfare fund for the benefit of farmers.', details: 'This act provides for the constitution of a welfare fund for the benefit and welfare of farmers in Odisha.' },
];

const NotificationsActs = () => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(null);

  const filtered = acts.filter(act =>
    act.title.toLowerCase().includes(search.toLowerCase()) ||
    act.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 animate-bgGradient">
      <Header />
      <NavBar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-2xl border-l-8 border-blue-400/60 p-8 animate-fadeInUp">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg text-center animate-headingFade flex items-center gap-2 justify-center">
            <span className="animate-leafWiggle">📜</span>Acts & Rules
          </h1>
          {/* Search/Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <input
              type="text"
              placeholder="Search acts..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="border rounded px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <span className="text-green-700 font-semibold flex items-center gap-2 animate-bounce-slow">{filtered.length} <span className="text-base">acts</span></span>
          </div>
          <ul className="space-y-4">
            {filtered.length === 0 && (
              <li className="text-center text-gray-500 animate-fadeInUp">No acts found.</li>
            )}
            {filtered.map((act, idx) => (
              <li key={idx} className={`border-b border-[#e0e0e0] pb-3 animate-fadeInUp transition-all duration-700 ${open === idx ? 'bg-green-50/40' : ''}`} style={{ animationDelay: `${0.1 + idx * 0.07}s` }}>
                <button
                  className="w-full text-left flex items-center gap-2 focus:outline-none"
                  onClick={() => setOpen(open === idx ? null : idx)}
                  aria-expanded={open === idx}
                  aria-controls={`act-details-${idx}`}
                >
                  <span className="text-2xl animate-bounce-slow">📜</span>
                  <span className="font-semibold text-[#216db9] text-lg">{act.title}</span>
                  <span className="ml-2 text-gray-600">({act.year})</span>
                  <span className={`ml-auto text-xl transition-transform duration-300 ${open === idx ? 'rotate-90' : ''}`}>▶</span>
                </button>
                <div className="text-gray-700 text-base mt-1">{act.summary}</div>
                {open === idx && (
                  <div id={`act-details-${idx}`} className="bg-gradient-to-r from-green-50 via-blue-50 to-white rounded-xl p-4 mt-2 border border-green-200 animate-fadeInUp">
                    <div className="text-gray-800 text-base">{act.details}</div>
                  </div>
                )}
              </li>
            ))}
          </ul>
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

export default NotificationsActs; 