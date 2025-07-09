import React, { useEffect, useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { getStaggeredDelay } from '../utils/animationUtils';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import BannerCarousel from '../components/BannerCarousel';
import Footer from '../components/Footer';

const notifications = [
  { text: "Odisha government launches new scheme for farmers' welfare.", date: "2024-07-01", details: 'The new scheme aims to provide direct financial support and resources to small and marginal farmers across Odisha.' },
  { text: "Training program for sustainable agriculture announced.", date: "2024-06-28", details: 'A state-wide training program on sustainable agriculture practices will be held in July. Register online to participate.' },
  { text: "Weather advisory for the upcoming Kharif season released.", date: "2024-06-25", details: 'Farmers are advised to take necessary precautions due to expected heavy rainfall. See full advisory for crop protection tips.' },
  { text: "Important: Submit your crop insurance applications by July 15.", date: "2024-06-20", details: 'The last date for crop insurance applications is July 15. Ensure your crops are covered against natural calamities.' },
  { text: "New fertilizer subsidy rates effective from August 1.", date: "2024-06-15", details: 'The government has revised fertilizer subsidy rates. Check the official portal for updated rates and eligibility.' },
  { text: "Krushi Bhawan to host Agri-Tech Expo on August 10.", date: "2024-06-10", details: 'Join the Agri-Tech Expo to explore the latest in agricultural technology and innovation.' },
  { text: "Soil Health Card distribution drive starts July 5.", date: "2024-06-05", details: 'Farmers can collect their Soil Health Cards from local offices starting July 5.' },
];

const quickLinks = [
  { label: 'Fertilizer Subsidy', icon: '💰', href: '/schemes' },
  { label: 'Soil Health Card', icon: '🧪', href: '/schemes' },
  { label: 'Market Prices', icon: '📈', href: '/notifications' },
  { label: 'Weather Advisory', icon: '🌦️', href: '/notifications' },
  { label: 'Agri Schemes', icon: '📋', href: '/schemes' },
  { label: 'Crop Insurance', icon: '🛡️', href: '/schemes' },
  { label: 'Farmer Helpline', icon: '☎️', href: '/contact' },
  { label: 'Agri-Tech Expo', icon: '🚜', href: '/media' },
];

const schemes = [
  { title: 'KALIA', icon: '🌾', desc: 'Financial assistance to small and marginal farmers.', details: 'KALIA provides support for cultivation, livelihood, insurance, and interest-free crop loans.' },
  { title: 'PM-KISAN', icon: '🇮🇳', desc: 'Direct income support to eligible farmer families.', details: 'Rs.6000/- per year is provided to all farmer families in three equal installments.' },
  { title: 'Crop Insurance', icon: '🛡️', desc: 'Insurance coverage and financial support for crop loss.', details: 'Covers crop loss due to natural calamities, pests, and diseases.' },
  { title: 'Soil Health Card', icon: '🧪', desc: 'Promoting soil testing and balanced fertilization.', details: 'Farmers receive soil health cards with crop-wise recommendations for nutrients and fertilizers.' },
  { title: 'Agri-Startup', icon: '🚀', desc: 'Support for agri-entrepreneurs and startups.', details: 'Funding, incubation, and mentorship for agri-tech startups.' },
  { title: 'Organic Farming', icon: '🍃', desc: 'Promotes organic farming and sustainable agriculture.', details: 'Cluster-based organic farming, certification, and marketing support.' },
  { title: 'Micro Irrigation', icon: '💧', desc: 'Subsidies for drip and sprinkler irrigation systems.', details: 'Technical and financial support for micro irrigation adoption.' },
  { title: 'Farm Mechanization', icon: '🚜', desc: 'Subsidies for modern farm machinery and equipment.', details: 'Support for tractors, power tillers, and other machinery.' },
];

const NOTIF_ITEM_HEIGHT = 56;
const NOTIF_HEADER_HEIGHT = 44;
const NOTIF_VISIBLE_COUNT = 4.5;

const NewBadge = () => {
  const [isRed, setIsRed] = useState(true);
  useEffect(() => {
    const interval = setInterval(() => setIsRed((r) => !r), 1000);
    return () => clearInterval(interval);
  }, []);
  return (
    <span
      className={`text-[11px] font-bold px-2 py-0.5 rounded uppercase tracking-wider animate-pulse select-none shadow-sm new-badge ${isRed ? 'bg-red-500' : 'bg-blue-500'}`}
    >
      NEW
    </span>
  );
};

const Home = () => {
  const bannerRef = useRef(null);
  const [notifHeight, setNotifHeight] = useState(NOTIF_HEADER_HEIGHT + NOTIF_ITEM_HEIGHT * NOTIF_VISIBLE_COUNT);
  const [notifSearch, setNotifSearch] = useState('');
  const [notifOpen, setNotifOpen] = useState(null);
  const [aboutOpen, setAboutOpen] = useState(false);
  const [schemeModal, setSchemeModal] = useState(null);

  useEffect(() => {
    function updateHeight() {
      if (bannerRef.current) {
        const minHeight = NOTIF_HEADER_HEIGHT + NOTIF_ITEM_HEIGHT * NOTIF_VISIBLE_COUNT;
        setNotifHeight(Math.max(minHeight, bannerRef.current.offsetHeight));
      }
    }
    updateHeight();
    window.addEventListener('resize', updateHeight);
    return () => window.removeEventListener('resize', updateHeight);
  }, []);

  const filteredNotifs = notifications.filter(n =>
    n.text.toLowerCase().includes(notifSearch.toLowerCase())
  );

  // Mascot floating animation - moved to CSS class

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 animate-bgGradient">
      <Header />
      <NavBar />
      {/* Banner and Notifications Row */}
      <div className="w-full max-w-7xl mx-auto px-4 mt-4 flex flex-col md:flex-row gap-6 animate-fadeInUp">
        {/* Banner Carousel */}
        <div className="flex-1 min-w-0" ref={bannerRef}>
          <BannerCarousel />
        </div>
        {/* Latest Notifications */}
        <aside
          className="w-full md:w-[340px] bg-white rounded shadow h-fit border border-[#e0e0e0] flex flex-col animate-fadeInUp notification-sidebar"
          style={{ height: notifHeight }}
        >
          <div className="rounded-t px-4 py-2 flex items-center gap-2 notification-header">
            <h2 className="text-base font-bold text-white tracking-wide m-0 notification-title">Latest Notifications</h2>
            <input
              type="text"
              placeholder="Search..."
              value={notifSearch}
              onChange={e => setNotifSearch(e.target.value)}
              className="ml-auto px-2 py-1 rounded text-xs border focus:outline-none focus:ring-2 focus:ring-green-400 transition bg-white text-[#216db9] search-input"
            />
          </div>
          <ul className="divide-y divide-[#e0e0e0] overflow-y-auto custom-scrollbar notification-list">
            {filteredNotifs.length === 0 && (
              <li className="text-center text-gray-500 py-4">No notifications found.</li>
            )}
            {filteredNotifs.map((note, idx) => (
              <li key={idx} className="flex items-start gap-3 px-4 py-3 group relative notification-item">
                <NewBadge />
                <div className="flex-1">
                  <span className="block text-[15px] text-[#222] leading-snug font-medium group-hover:text-green-700 transition notification-text">{note.text}</span>
                  <span className="block text-xs text-[#888] mt-1 notification-date">
                    {new Date(note.date).toLocaleDateString('en-IN', { year: 'numeric', month: 'short', day: 'numeric' })}
                  </span>
                  <button
                    className="absolute right-4 top-1/2 -translate-y-1/2 text-xs text-blue-600 underline group-hover:text-green-700 transition"
                    onClick={() => setNotifOpen(notifOpen === idx ? null : idx)}
                    aria-expanded={notifOpen === idx}
                    aria-controls={`notif-details-${idx}`}
                  >
                    {notifOpen === idx ? 'Hide' : 'Details'}
                  </button>
                </div>
                {notifOpen === idx && (
                  <div id={`notif-details-${idx}`} className="absolute left-0 right-0 top-full mt-2 bg-gradient-to-r from-green-50 via-blue-50 to-white rounded-xl p-4 border border-green-200 shadow animate-fadeInUp z-20">
                    <div className="text-gray-800 text-sm">{note.details}</div>
                  </div>
                )}
              </li>
            ))}
          </ul>
        </aside>
      </div>
      {/* Main Content Sections */}
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8 grid grid-cols-1 md:grid-cols-3 gap-8 animate-fadeInUp">
        {/* About Department Card */}
        <section className="md:col-span-2 bg-white rounded-xl shadow-lg border border-[#e0e0e0] p-8 flex flex-col justify-center animate-fadeInUp">
          <h2 className="text-2xl font-bold mb-4 text-[#216db9] flex items-center gap-2"><span className="animate-leafWiggle">🌱</span>About the Department</h2>
          <p className="text-gray-800 text-lg leading-relaxed mb-2">
            The Department of Agriculture & Farmers' Empowerment, Government of Odisha, is dedicated to the growth and development of the agricultural sector in the state. The department formulates policies and implements various schemes to improve the livelihoods of farmers, boost agricultural productivity, and ensure sustainable farming practices.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed">
            Through modern technology, farmer education programs, and subsidies, the department strives to make Odisha a leading state in agri-based development. It also coordinates with various central government initiatives to ensure holistic support to the farming community.
          </p>
          <button
            className="mt-4 self-end text-sm text-blue-700 underline hover:text-green-700 transition"
            onClick={() => setAboutOpen(!aboutOpen)}
            aria-expanded={aboutOpen}
            aria-controls="about-details"
          >
            {aboutOpen ? 'Show Less' : 'Read More'}
          </button>
          {aboutOpen && (
            <div id="about-details" className="mt-3 bg-gradient-to-r from-green-50 via-blue-50 to-white rounded-xl p-4 border border-green-200 animate-fadeInUp">
              <div className="text-gray-800 text-base">
                Odisha’s Department of Agriculture & Farmers’ Empowerment also focuses on:
                <ul className="list-disc pl-6 mt-2 text-sm">
                  <li>Promoting organic and climate-resilient agriculture</li>
                  <li>Empowering women and youth in agriculture</li>
                  <li>Expanding agri-infrastructure and market access</li>
                  <li>Leveraging digital technology for farmer services</li>
                </ul>
              </div>
            </div>
          )}
        </section>
        {/* Quick Links */}
        <aside className="bg-white rounded-xl shadow-lg border border-[#e0e0e0] p-6 flex flex-col gap-4 h-fit animate-fadeInUp">
          <h2 className="text-lg font-bold text-[#216db9] mb-3 flex items-center gap-2"><span className="animate-leafWiggle">🔗</span>Quick Links</h2>
          <div className="grid grid-cols-2 gap-3">
            {quickLinks.map((link, idx) => (
              <Link
                key={idx}
                to={link.href}
                className="bg-gradient-to-r from-blue-400 via-green-400 to-blue-500 text-white px-4 py-2 rounded shadow hover:from-green-600 hover:to-blue-700 text-center font-semibold transition flex items-center gap-2 justify-center group relative"
                tabIndex={0}
                aria-label={link.label}
              >
                <span className="text-xl animate-bounce-slow group-hover:scale-125 transition-transform duration-300">{link.icon}</span>
                {link.label}
                <span className="absolute left-1/2 -translate-x-1/2 -bottom-8 opacity-0 group-hover:opacity-100 pointer-events-none bg-black text-white text-xs rounded px-2 py-1 transition-all duration-300 z-30 shadow-lg">
                  {link.label}
                </span>
              </Link>
            ))}
          </div>
        </aside>
        {/* Schemes Grid */}
        <section className="md:col-span-3 mt-8 animate-fadeInUp">
          <h2 className="text-2xl font-bold mb-6 text-[#216db9] flex items-center gap-2"><span className="animate-leafWiggle">📋</span>Schemes Implemented</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {schemes.map((scheme, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl shadow border border-[#e0e0e0] p-6 flex flex-col items-center text-center group relative animate-fadeInUp transition-all duration-500 hover:shadow-2xl hover:border-green-400 hover:-translate-y-1"
                style={getStaggeredDelay(idx)}
              >
                <span className="text-3xl mb-2 animate-bounce-slow group-hover:scale-125 transition-transform duration-300">{scheme.icon}</span>
                <span className="text-[#216db9] text-xl font-bold mb-2 group-hover:text-green-700 transition-colors duration-300">{scheme.title}</span>
                <p className="text-gray-700 text-base mb-2">{scheme.desc}</p>
                <button
                  className="text-[#216db9] font-semibold hover:underline text-sm group-hover:text-green-700 transition"
                  onClick={() => setSchemeModal(idx)}
                  aria-label={`Read more about ${scheme.title}`}
                >
                  Read More
                </button>
                {schemeModal === idx && (
                  <div className="fixed inset-0 bg-black/60 z-50 flex items-center justify-center animate-fadeInUp" onClick={() => setSchemeModal(null)}>
                    <div className="bg-white rounded-2xl shadow-2xl p-6 max-w-md w-full relative animate-fadeInUp" onClick={e => e.stopPropagation()}>
                      <button className="absolute top-2 right-2 text-2xl text-green-700 hover:text-blue-600 font-bold" onClick={() => setSchemeModal(null)} aria-label="Close">&times;</button>
                      <div className="flex flex-col items-center">
                        <span className="text-4xl mb-2 animate-bounce-slow">{scheme.icon}</span>
                        <div className="text-xl font-bold text-[#216db9] mb-2">{scheme.title}</div>
                        <div className="text-gray-800 text-base mb-2">{scheme.details}</div>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>
        </section>
      </main>
      <Footer />
      {/* Floating Mascot */}
      <span className="floating-mascot" aria-hidden="true">🌾</span>
      <style>{`
        .custom-scrollbar::-webkit-scrollbar {
          width: 7px;
        }
        .custom-scrollbar::-webkit-scrollbar-thumb {
          background: #e0e0e0;
          border-radius: 6px;
        }
        .custom-scrollbar::-webkit-scrollbar-track {
          background: transparent;
        }
        .custom-scrollbar {
          scrollbar-width: thin;
          scrollbar-color: #e0e0e0 transparent;
        }
        .new-badge {
          color: #fff;
          transition: background 0.5s;
          margin-right: 8px;
          min-width: 36px;
          display: inline-block;
          text-align: center;
          box-shadow: 0 1px 2px rgba(0,0,0,0.08);
          letter-spacing: 0.08em;
        }
        .notification-sidebar {
          border-left: 6px solid #216db9;
        }
        .notification-header {
          min-height: 44px;
          background: #216db9;
        }
        .notification-title {
          letter-spacing: 0.04em;
        }
        .search-input {
          width: 120px;
        }
        .notification-list {
          flex: 1;
          min-height: 0;
          max-height: 252px;
        }
        .notification-item {
          min-height: 56px;
        }
        .notification-text {
          letter-spacing: 0.01em;
        }
        .notification-date {
          font-size: 12px;
          letter-spacing: 0.01em;
        }
        .floating-mascot {
          position: fixed;
          bottom: 32px;
          right: 32px;
          z-index: 50;
          pointer-events: none;
          animation: mascotFloat 4s ease-in-out infinite;
          font-size: 56px;
          filter: drop-shadow(0 4px 16px rgba(34,197,94,0.18));
        }
        @keyframes mascotFloat {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-18px) scale(1.08); }
        }
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

export default Home; 
