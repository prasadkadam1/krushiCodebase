import React, { useState } from 'react';
import { getStaggeredDelay } from '../utils/animationUtils';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const notifications = [
  {
    id: 1,
    type: 'Act & Rules',
    icon: '📜',
    date: '2024-06-20',
    title: 'Odisha Agriculture Act 2024',
    summary: 'Latest acts and rules related to agriculture in Odisha.',
    details: 'The Odisha Agriculture Act 2024 introduces new guidelines for sustainable farming, subsidies, and farmer rights. Download the full act for more information.'
  },
  {
    id: 2,
    type: 'Circular',
    icon: '📢',
    date: '2024-06-18',
    title: 'Circular on Fertilizer Subsidy',
    summary: 'Important circulars and office orders for farmers and officials.',
    details: 'This circular outlines the new fertilizer subsidy rates and eligibility criteria for the 2024-25 season.'
  },
  {
    id: 3,
    type: 'Memorandum',
    icon: '📝',
    date: '2024-06-15',
    title: 'Memorandum on Crop Insurance',
    summary: 'Official memorandums issued by the department.',
    details: 'The memorandum provides details on the new crop insurance scheme and how farmers can enroll.'
  },
  {
    id: 4,
    type: 'Notification',
    icon: '🔔',
    date: '2024-06-10',
    title: 'PM-KISAN Scheme Update',
    summary: 'Recent notifications regarding schemes and policies.',
    details: 'Updates to the PM-KISAN scheme for direct benefit transfer to eligible farmers.'
  },
  {
    id: 5,
    type: 'Resolution',
    icon: '✅',
    date: '2024-06-05',
    title: 'Resolution on Water Conservation',
    summary: 'Resolutions passed for the benefit of the agricultural community.',
    details: 'A new resolution to promote water conservation techniques among farmers.'
  },
];

const typeColors = {
  'Act & Rules': 'bg-blue-200 text-blue-800',
  'Circular': 'bg-green-200 text-green-800',
  'Memorandum': 'bg-yellow-200 text-yellow-800',
  'Notification': 'bg-cyan-200 text-cyan-800',
  'Resolution': 'bg-emerald-200 text-emerald-800',
};

const Notifications = () => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(null);

  const filtered = notifications.filter(n =>
    n.title.toLowerCase().includes(search.toLowerCase()) ||
    n.type.toLowerCase().includes(search.toLowerCase()) ||
    n.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 animate-bgGradient">
      <Header />
      <NavBar />
      <main className="flex-1 w-full max-w-5xl mx-auto px-4 py-8">
        <div className="sticky top-0 z-20 bg-gradient-to-r from-blue-100 via-green-100 to-white rounded-xl shadow-lg p-4 mb-8 flex flex-col sm:flex-row items-center justify-between gap-4 animate-fadeInUp">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-blue-600 via-green-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg flex items-center gap-2 animate-headingFade">
            <span className="animate-leafWiggle">🌱</span>Notifications
          </h1>
          <input
            type="text"
            placeholder="Search notifications..."
            value={search}
            onChange={e => setSearch(e.target.value)}
            className="border rounded px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
          />
        </div>
        <div className="space-y-6">
          {filtered.length === 0 && (
            <div className="text-center text-gray-500 animate-fadeInUp">No notifications found.</div>
          )}
          {filtered.map((n, idx) => (
            <div
              key={n.id}
              className={`bg-white rounded-2xl shadow-2xl border-l-8 p-6 flex flex-col gap-2 animate-fadeInUp transition-all duration-700 ${typeColors[n.type] || 'border-blue-400'} ${open === n.id ? 'border-green-400' : 'border-blue-400'}`}
              style={getStaggeredDelay(idx)}
            >
              <div className="flex items-center gap-3 mb-2">
                <span className="text-3xl animate-bounce-slow">{n.icon}</span>
                <span className={`px-3 py-1 rounded-full text-xs font-bold ${typeColors[n.type]} shadow`}>{n.type}</span>
                <span className="text-xs text-gray-500 ml-auto font-mono">{n.date}</span>
              </div>
              <button
                className="text-lg font-bold text-blue-800 hover:text-green-700 transition-all text-left flex items-center gap-2 focus:outline-none"
                onClick={() => setOpen(open === n.id ? null : n.id)}
                aria-expanded={open === n.id}
                aria-controls={`notif-details-${n.id}`}
              >
                {n.title}
                <span className={`ml-2 text-xl transition-transform duration-300 ${open === n.id ? 'rotate-90' : ''}`}>▶</span>
              </button>
              <div className="text-gray-700 text-base mb-1">{n.summary}</div>
              {open === n.id && (
                <div id={`notif-details-${n.id}`} className="bg-gradient-to-r from-green-50 via-blue-50 to-white rounded-xl p-4 mt-2 border border-green-200 animate-fadeInUp">
                  <div className="text-gray-800 text-base">{n.details}</div>
                </div>
              )}
            </div>
          ))}
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

export default Notifications; 