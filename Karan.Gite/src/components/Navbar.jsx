import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [lang, setLang] = useState('EN');
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-gradient-to-r from-green-800 via-green-700 to-green-600 text-white px-6 py-4 shadow-2xl fixed w-full z-50 top-0 backdrop-blur-md">
      <div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between">
          <Link to="/" className="text-3xl font-extrabold tracking-wider hover:text-green-300 transition duration-300 ease-in-out">
          🌾 Shetkari-Raja
        </Link>

        <div className="flex items-center gap-6">
          <select
            value={lang}
            onChange={(e) => setLang(e.target.value)}
            className="bg-green-700 px-3 py-2 rounded-md text-white text-sm focus:outline-none focus:ring-2 focus:ring-green-400 transition"
            aria-label="Select Language"
          >
            <option value="EN">English</option>
            <option value="HI">हिन्दी</option>
            <option value="MR">मराठी</option>
          </select>

          <button
            className="md:hidden text-white focus:outline-none focus:ring-2 focus:ring-green-400 rounded"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
              {menuOpen ? (
                <path d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path d="M3 12h18M3 6h18M3 18h18" />
              )}
            </svg>
          </button>
        </div>

        <div className={`w-full md:flex md:items-center md:w-auto transition-all duration-500 ease-in-out ${menuOpen ? 'block' : 'hidden'}`}>
          <div className="flex flex-col md:flex-row gap-6 mt-6 md:mt-0 md:ml-8 text-base md:text-lg font-medium">
            <Link to="/" className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition">Home</Link>
            <Link to="/marketplace" className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition">Marketplace</Link>
            <Link to="/weather" className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition">Weather</Link>
            <Link to="/advisory" className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition">Crop Advisory</Link>
            <Link to="/news" className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition">News</Link>
            <Link to="/community" className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition">Community</Link>
            <Link to="/calendar" className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition">Calendar</Link>
            <a href="https://www.google.com" target="_blank" rel="noopener noreferrer" className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition">Google</a>
            <Link to="/tools" className="px-4 py-2 rounded-md hover:bg-green-600 hover:text-white transition">AgroTech</Link>
            <Link to="/login" className="bg-white text-green-700 px-4 py-2 rounded-md hover:bg-gray-100 transition font-semibold">Login</Link>
            <Link to="/register" className="bg-white text-green-700 px-4 py-2 rounded-md hover:bg-gray-100 transition font-semibold">Register</Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
