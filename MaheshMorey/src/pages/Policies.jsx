import React, { useState } from 'react';
import { getStaggeredDelay } from '../utils/animationUtils';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const policies = [
  { title: 'Odisha Agriculture Policy 2013', desc: 'Aims to increase farmers income and promote sustainable agriculture.', icon: '🌱', details: 'The Odisha Agriculture Policy 2013 focuses on increasing farmers income, promoting sustainable agriculture, and encouraging the adoption of modern technology and best practices. It also emphasizes water management, crop diversification, and market linkages.' },
  { title: 'National Agriculture Policy', desc: 'Focuses on growth, equity, and sustainability in agriculture.', icon: '🇮🇳', details: 'The National Agriculture Policy aims to achieve a growth rate of 4% per annum in the agriculture sector, ensure equity and sustainability, and promote the use of technology and research for agricultural development.' },
  { title: 'State Organic Farming Policy', desc: 'Promotes organic farming practices in Odisha.', icon: '🍃', details: 'The State Organic Farming Policy encourages farmers to adopt organic farming practices, reduce chemical usage, and promote the production and marketing of organic produce in Odisha.' },
  { title: 'Agri Export Policy', desc: 'Boosts agricultural exports from Odisha.', icon: '🚢', details: 'The Agri Export Policy aims to increase the export of agricultural products from Odisha by improving infrastructure, quality standards, and market access.' },
  { title: 'Climate Resilient Agriculture Policy', desc: 'Prepares agriculture for climate change impacts.', icon: '☀️', details: 'This policy focuses on making agriculture more resilient to climate change through adaptation strategies, drought-resistant crops, and efficient water use.' },
  // --- Demo policies below ---
  { title: 'Smart Irrigation Policy', desc: 'Encourages adoption of smart irrigation systems.', icon: '💧', details: 'The Smart Irrigation Policy provides incentives for farmers to adopt drip and sprinkler irrigation, use IoT-based water management, and reduce water wastage.' },
  { title: 'Women Farmers Empowerment Policy', desc: 'Supports women in agriculture.', icon: '👩‍🌾', details: 'This policy offers training, credit, and support programs specifically for women farmers, aiming to increase their participation and leadership in the sector.' },
  { title: 'Agri-Startup Promotion Policy', desc: 'Fosters innovation and entrepreneurship in agriculture.', icon: '🚀', details: 'The Agri-Startup Promotion Policy provides funding, incubation, and mentorship for startups working on agri-tech, supply chain, and value addition.' },
  { title: 'Soil Health Management Policy', desc: 'Improves soil fertility and health.', icon: '🧪', details: 'This policy promotes regular soil testing, balanced fertilizer use, and organic amendments to maintain long-term soil health and productivity.' },
  { title: 'Farmers Digital Literacy Policy', desc: 'Promotes digital skills among farmers.', icon: '💻', details: 'The policy aims to train farmers in using digital tools, mobile apps, and online platforms for accessing information, markets, and government schemes.' },
];

const Policies = () => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(null);

  const filtered = policies.filter(policy =>
    policy.title.toLowerCase().includes(search.toLowerCase()) ||
    policy.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 animate-bgGradient">
      <Header />
      <NavBar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-2xl border-l-8 border-blue-400/60 p-8 animate-fadeInUp">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg text-center animate-headingFade flex items-center gap-2 justify-center">
            <span className="animate-leafWiggle">📄</span>Policies
          </h1>
          {/* Search/Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <input
              type="text"
              placeholder="Search policies..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="border rounded px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <span className="text-green-700 font-semibold flex items-center gap-2 animate-bounce-slow">{filtered.length} <span className="text-base">policies</span></span>
          </div>
          <ul className="space-y-6">
            {filtered.length === 0 && (
              <li className="text-center text-gray-500 animate-fadeInUp">No policies found.</li>
            )}
            {filtered.map((policy, idx) => (
              <li key={idx} className={`border-b border-[#e0e0e0] pb-4 animate-fadeInUp transition-all duration-700 ${open === idx ? 'bg-green-50/40' : ''}`} style={getStaggeredDelay(idx)}>
                <button
                  className="w-full text-left flex items-center gap-2 focus:outline-none"
                  onClick={() => setOpen(open === idx ? null : idx)}
                  aria-expanded={open === idx}
                  aria-controls={`policy-details-${idx}`}
                >
                  <span className="text-2xl animate-bounce-slow">{policy.icon}</span>
                  <span className="text-xl font-bold text-[#216db9] mb-1">{policy.title}</span>
                  <span className={`ml-auto text-xl transition-transform duration-300 ${open === idx ? 'rotate-90' : ''}`}>▶</span>
                </button>
                <p className="text-gray-800 mt-1">{policy.desc}</p>
                {open === idx && (
                  <div id={`policy-details-${idx}`} className="bg-gradient-to-r from-green-50 via-blue-50 to-white rounded-xl p-4 mt-2 border border-green-200 animate-fadeInUp">
                    <div className="text-gray-800 text-base">{policy.details}</div>
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

export default Policies; 