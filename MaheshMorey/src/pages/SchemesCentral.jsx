import React, { useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const schemes = [
  { name: 'Pradhan Mantri Krishi Sinchai Yojana (PMKSY)', desc: 'Improving irrigation and water use efficiency.', icon: '💧' },
  { name: 'Pradhan Mantri Fasal Bima Yojana (PMFBY)', desc: 'Crop insurance for farmers.', icon: '🛡️' },
  { name: 'Rashtriya Krishi Vikas Yojana (RKVY)', desc: 'Holistic development of agriculture and allied sectors.', icon: '🌱' },
  { name: 'National Food Security Mission (NFSM)', desc: 'Increase production of rice, wheat, pulses, and coarse cereals.', icon: '🍚' },
  // Demo schemes
  { name: 'Paramparagat Krishi Vikas Yojana (PKVY)', desc: 'Promotes organic farming and sustainable agriculture.', icon: '🍃' },
  { name: 'Sub-Mission on Agricultural Mechanization (SMAM)', desc: 'Promotes farm mechanization and modern equipment.', icon: '🚜' },
  { name: 'Soil Health Card Scheme', desc: 'Promotes soil testing and balanced fertilizer use.', icon: '🧪' },
  { name: 'National Mission on Oilseeds and Oil Palm (NMOOP)', desc: 'Boosts oilseeds and oil palm production.', icon: '🌻' },
];

const SchemesCentral = () => {
  const [search, setSearch] = useState('');
  const filtered = schemes.filter(scheme =>
    scheme.name.toLowerCase().includes(search.toLowerCase()) ||
    scheme.desc.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 animate-bgGradient">
      <Header />
      <NavBar />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-2xl border-l-8 border-blue-400/60 p-8 animate-fadeInUp">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg text-center animate-headingFade flex items-center gap-2 justify-center">
            <span className="animate-leafWiggle">🏛️</span>Centrally Sponsored Schemes
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
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {filtered.length === 0 && (
              <div className="col-span-full text-center text-gray-500 animate-fadeInUp">No schemes found.</div>
            )}
            {filtered.map((scheme, idx) => (
              <div
                key={idx}
                className="bg-gradient-to-br from-blue-50 via-green-50 to-white rounded-lg p-6 border border-[#e0e0e0] shadow group transition-all duration-500 animate-fadeInUp hover:shadow-2xl hover:border-green-400 hover:-translate-y-1 flex items-start gap-4"
                style={{ animationDelay: `${0.1 + idx * 0.07}s` }}
              >
                <span className="text-3xl animate-bounce-slow mt-1">{scheme.icon}</span>
                <div>
                  <h2 className="text-xl font-bold text-[#216db9] mb-2 group-hover:text-green-700 transition-colors duration-300">{scheme.name}</h2>
                  <p className="text-gray-800">{scheme.desc}</p>
                </div>
              </div>
            ))}
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

export default SchemesCentral; 