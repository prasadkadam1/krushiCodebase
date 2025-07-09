import React, { useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import a from '../assets/a.png';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import d from '../assets/d.jpg';
import e from '../assets/e.jpg';
import f from '../assets/f.jpg';
import g from '../assets/g.jpg';

const images = [
  { src: a, label: 'Harvest Festival' },
  { src: b, label: 'Modern Irrigation' },
  { src: c, label: 'Rice Fields' },
  { src: d, label: 'Farmer Training' },
  { src: e, label: 'Agri Machinery' },
  { src: f, label: 'Organic Market' },
  { src: g, label: 'Community Farming' },
];

const MediaGallery = () => {
  const [selected, setSelected] = useState(null);
  const [search, setSearch] = useState('');

  const filteredImages = images.filter(img => img.label.toLowerCase().includes(search.toLowerCase()));

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 animate-bgGradient">
      <Header />
      <NavBar />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-10 flex flex-col items-center">
        <div className="bg-white rounded-2xl shadow-2xl border-l-8 border-blue-400/60 p-8 w-full animate-fadeInUp">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg text-center animate-headingFade flex items-center gap-2 justify-center">
            <span className="animate-leafWiggle">🌱</span>Media Gallery
          </h1>
          {/* Search/Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <input
              type="text"
              placeholder="Search by label..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="border rounded px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <span className="text-green-700 font-semibold flex items-center gap-2 animate-bounce-slow">{filteredImages.length} <span className="text-base">photos</span></span>
          </div>
          {/* Gallery Grid */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
            {filteredImages.map((img, idx) => (
              <button
                key={idx}
                className="rounded-lg overflow-hidden shadow border border-[#e0e0e0] bg-gradient-to-br from-blue-50 via-green-50 to-white group focus:outline-none focus:ring-2 focus:ring-green-400 animate-fadeInUp transition-all duration-500"
                style={{ animationDelay: `${0.1 + idx * 0.07}s` }}
                onClick={() => setSelected(img)}
                tabIndex={0}
                aria-label={`View ${img.label}`}
              >
                <div className="relative">
                  <img
                    src={img.src}
                    alt={img.label}
                    className="w-full h-40 object-cover object-center transform group-hover:scale-110 group-hover:shadow-2xl group-hover:border-green-400 border-2 border-transparent transition-all duration-500"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-green-700/80 to-transparent text-white text-sm font-semibold px-2 py-1 opacity-90 group-hover:opacity-100 transition-all duration-300 flex items-center gap-1">
                    <span className="animate-leafWiggle">🌾</span>{img.label}
                  </div>
                </div>
              </button>
            ))}
          </div>
        </div>
        {/* Lightbox Modal */}
        {selected && (
          <div className="fixed inset-0 bg-black/70 z-50 flex items-center justify-center animate-fadeInUp" onClick={() => setSelected(null)}>
            <div className="bg-white rounded-2xl shadow-2xl p-4 max-w-lg w-full relative flex flex-col items-center animate-fadeInUp" onClick={e => e.stopPropagation()}>
              <button className="absolute top-2 right-2 text-2xl text-green-700 hover:text-blue-600 font-bold" onClick={() => setSelected(null)} aria-label="Close">&times;</button>
              <img src={selected.src} alt={selected.label} className="w-full h-80 object-contain rounded-xl mb-4 shadow-lg border-4 border-green-200 animate-fadeInUp" />
              <div className="text-lg font-bold text-green-800 flex items-center gap-2 mb-2"><span className="animate-leafWiggle">🌾</span>{selected.label}</div>
            </div>
          </div>
        )}
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

export default MediaGallery; 