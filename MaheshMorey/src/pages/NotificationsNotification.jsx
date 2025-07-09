import React, { useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const notifications = [
  { title: 'Notice: KALIA Scheme Application Deadline', date: '2024-07-01', type: 'Important', icon: '📢', summary: 'Deadline for KALIA scheme applications is approaching.', details: 'All eligible farmers are requested to submit their KALIA scheme applications before the deadline. Visit the official portal for more information and required documents.' },
  { title: 'Weather Advisory for Kharif Season', date: '2024-06-28', type: 'Advisory', icon: '🌦️', summary: 'Weather advisory issued for Kharif season.', details: 'Farmers are advised to take necessary precautions due to expected heavy rainfall in the coming week. Follow the departments guidelines for crop protection.' },
  { title: 'New Subsidy Rates Announced', date: '2024-06-20', type: 'Update', icon: '💰', summary: 'Government announces new subsidy rates for fertilizers.', details: 'The Department has revised the subsidy rates for fertilizers effective from July 2024. Check the official website for the updated rates and eligibility.' },
  { title: 'Training Program for Farmers', date: '2024-06-15', type: 'Event', icon: '🎓', summary: 'Upcoming training program for farmers.', details: 'A training program on modern farming techniques will be held at Krushi Bhavan on 20th July 2024. Interested farmers can register online or at the local office.' },
];

const typeColors = {
  Important: 'bg-red-200 text-red-800',
  Advisory: 'bg-blue-200 text-blue-800',
  Update: 'bg-green-200 text-green-800',
  Event: 'bg-yellow-200 text-yellow-800',
};

const NotificationsNotification = () => {
  const [search, setSearch] = useState('');
  const [open, setOpen] = useState(null);

  const filtered = notifications.filter(note =>
    note.title.toLowerCase().includes(search.toLowerCase()) ||
    note.type.toLowerCase().includes(search.toLowerCase()) ||
    note.summary.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 animate-bgGradient">
      <Header />
      <NavBar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-2xl border-l-8 border-blue-400/60 p-8 animate-fadeInUp">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg text-center animate-headingFade flex items-center gap-2 justify-center">
            <span className="animate-leafWiggle">🔔</span>Notifications
          </h1>
          {/* Search/Filter Bar */}
          <div className="flex flex-col sm:flex-row items-center justify-between mb-6 gap-4">
            <input
              type="text"
              placeholder="Search notifications..."
              value={search}
              onChange={e => setSearch(e.target.value)}
              className="border rounded px-3 py-2 w-full sm:w-64 focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            />
            <span className="text-green-700 font-semibold flex items-center gap-2 animate-bounce-slow">{filtered.length} <span className="text-base">notifications</span></span>
          </div>
          <ul className="space-y-4">
            {filtered.length === 0 && (
              <li className="text-center text-gray-500 animate-fadeInUp">No notifications found.</li>
            )}
            {filtered.map((note, idx) => (
              <li key={idx} className={`border-b border-[#e0e0e0] pb-3 animate-fadeInUp transition-all duration-700 ${open === idx ? 'bg-green-50/40' : ''}`} style={{ animationDelay: `${0.1 + idx * 0.07}s` }}>
                <div className="flex items-center gap-2 mb-1">
                  <span className="text-2xl animate-bounce-slow">{note.icon}</span>
                  <span className={`px-2 py-1 rounded-full text-xs font-bold ${typeColors[note.type]} shadow`}>{note.type}</span>
                  <span className="ml-auto text-xs text-gray-500 font-mono">{new Date(note.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                </div>
                <button
                  className="w-full text-left flex items-center gap-2 focus:outline-none text-lg font-semibold text-[#216db9] hover:text-green-700 transition-all"
                  onClick={() => setOpen(open === idx ? null : idx)}
                  aria-expanded={open === idx}
                  aria-controls={`notif-details-${idx}`}
                >
                  {note.title}
                  <span className={`ml-2 text-xl transition-transform duration-300 ${open === idx ? 'rotate-90' : ''}`}>▶</span>
                </button>
                <div className="text-gray-700 text-base mt-1">{note.summary}</div>
                {open === idx && (
                  <div id={`notif-details-${idx}`} className="bg-gradient-to-r from-green-50 via-blue-50 to-white rounded-xl p-4 mt-2 border border-green-200 animate-fadeInUp">
                    <div className="text-gray-800 text-base">{note.details}</div>
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

export default NotificationsNotification; 