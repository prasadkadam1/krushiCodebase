import React, { useState } from 'react';
import { getStaggeredDelay } from '../utils/animationUtils';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const schemes = [
  {
    title: 'KALIA Scheme',
    icon: '🌾',
    desc: 'Krushak Assistance for Livelihood and Income Augmentation (KALIA) is a flagship scheme of the Government of Odisha to accelerate agricultural prosperity and reduce poverty in the State.',
    details: 'The scheme provides financial assistance to small and marginal farmers, landless agricultural households, and vulnerable agricultural families. It covers support for cultivation, livelihood, insurance, and interest-free crop loans.'
  },
  {
    title: 'PM-KISAN',
    icon: '🇮🇳',
    desc: 'Pradhan Mantri Kisan Samman Nidhi (PM-KISAN) is a Central Sector Scheme with 100% funding from the Government of India.',
    details: 'Under the scheme, income support of Rs.6000/- per year is provided to all farmer families across the country in three equal installments.'
  },
  {
    title: 'Crop Insurance',
    icon: '🛡️',
    desc: 'The Government of Odisha implements various crop insurance schemes to provide financial support to farmers in the event of crop failure due to natural calamities, pests, and diseases.',
    details: 'Major schemes include Pradhan Mantri Fasal Bima Yojana (PMFBY) and Restructured Weather Based Crop Insurance Scheme (RWBCIS). These provide risk coverage and financial support to farmers.'
  },
  // --- Demo schemes below ---
  {
    title: 'Soil Health Card Scheme',
    icon: '🧪',
    desc: 'Promotes soil testing and balanced fertilizer use for better crop yields.',
    details: 'Farmers receive soil health cards with crop-wise recommendations for nutrients and fertilizers, helping them improve soil fertility and productivity.'
  },
  {
    title: 'National Food Security Mission',
    icon: '🍚',
    desc: 'Aims to increase production of rice, wheat, pulses, and coarse cereals.',
    details: 'The mission provides support for improved seeds, farm machinery, and training to boost food grain production.'
  },
  {
    title: 'Paramparagat Krishi Vikas Yojana',
    icon: '🌱',
    desc: 'Encourages organic farming and sustainable agriculture.',
    details: 'The scheme promotes cluster-based organic farming, certification, and marketing of organic produce.'
  },
  {
    title: 'Micro Irrigation Scheme',
    icon: '💧',
    desc: 'Supports adoption of drip and sprinkler irrigation systems.',
    details: 'Farmers get subsidies and technical support for installing micro irrigation systems, saving water and increasing yields.'
  },
  {
    title: 'Farm Mechanization Scheme',
    icon: '🚜',
    desc: 'Promotes use of modern farm machinery and equipment.',
    details: 'The scheme provides subsidies for tractors, power tillers, and other machinery to reduce labor and improve efficiency.'
  },
];

const Schemes = () => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(null);

  const filtered = schemes.filter(scheme =>
    scheme.title.toLowerCase().includes(search.toLowerCase()) ||
    scheme.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 animate-bgGradient">
      <Header />
      <NavBar />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
        <div className="bg-white rounded-2xl shadow-2xl border-l-8 border-blue-400/60 p-8 animate-fadeInUp">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg text-center animate-headingFade flex items-center gap-2 justify-center">
            <span className="animate-leafWiggle">📋</span>Schemes
          </h1>
          {/* Search/Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <input
              type="text"
              placeholder="Search schemes..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="border rounded px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <span className="text-green-700 font-semibold flex items-center gap-2 animate-bounce-slow">{filtered.length} <span className="text-base">schemes</span></span>
          </div>
          <ul className="space-y-6">
            {filtered.length === 0 && (
              <li className="text-center text-gray-500 animate-fadeInUp">No schemes found.</li>
            )}
            {filtered.map((scheme, idx) => (
              <li key={idx} className={`border-b border-[#e0e0e0] pb-4 animate-fadeInUp transition-all duration-700 ${open === idx ? 'bg-green-50/40' : ''}`} style={getStaggeredDelay(idx)}>
                <button
                  className="w-full text-left flex items-center gap-2 focus:outline-none"
                  onClick={() => setOpen(open === idx ? null : idx)}
                  aria-expanded={open === idx}
                  aria-controls={`scheme-details-${idx}`}
                >
                  <span className="text-2xl animate-bounce-slow">{scheme.icon}</span>
                  <span className="text-xl font-bold text-[#216db9] mb-1">{scheme.title}</span>
                  <span className={`ml-auto text-xl transition-transform duration-300 ${open === idx ? 'rotate-90' : ''}`}>▶</span>
                </button>
                <p className="text-gray-800 mt-1">{scheme.desc}</p>
                {open === idx && (
                  <div id={`scheme-details-${idx}`} className="bg-gradient-to-r from-green-50 via-blue-50 to-white rounded-xl p-4 mt-2 border border-green-200 animate-fadeInUp">
                    <div className="text-gray-800 text-base">{scheme.details}</div>
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

export default Schemes; 