import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const navItems = [
  { label: 'Home', path: '/' },
  {
    label: 'About Us',
    path: '/about',
    dropdown: [
      { label: 'About Department', path: '/about/department' },
      { label: 'Statistics', path: '/about/statistics' },
    ],
  },
  {
    label: 'Notification',
    path: '/notifications',
    dropdown: [
      { label: 'Act & Rules', path: '/notifications/acts' },
      { label: 'Notification', path: '/notifications/notification' },
    ],
  },
  {
    label: 'Schemes',
    path: '/schemes',
    dropdown: [
      { label: 'Centrally Sponsored Scheme', path: '/schemes/central' },
      { label: 'State Sector Scheme', path: '/schemes/state' },
    ],
  },
  { label: 'Policies', path: '/policies' },
  { label: 'RTI', path: '/rti' },
  { label: 'Media Gallery', path: '/media' },
  { label: 'Contact Us', path: '/contact' },
];

const NavBar = () => {
  const [openDropdown, setOpenDropdown] = useState(null);

  return (
    <nav className="w-full bg-gradient-to-r from-[#216db9] via-green-500 to-blue-400 shadow-lg z-30 relative animate-navbarGradient overflow-visible">
      {/* Animated leaf icon */}
      <div className="absolute left-2 top-1 text-2xl animate-leafSpin z-20">🌿</div>
      <div className="max-w-7xl mx-auto px-4">
        <ul className="flex items-center h-12 md:h-14 gap-1 md:gap-2">
          {navItems.map((item, idx) => (
            <li
              key={item.label}
              className="relative group h-full flex items-center"
              onMouseEnter={() => setOpenDropdown(idx)}
              onMouseLeave={() => setOpenDropdown(null)}
            >
              <Link
                to={item.path}
                className="nav-link px-4 py-2 h-full flex items-center text-white font-semibold text-[15px] hover:bg-green-600/80 hover:text-green-100 transition rounded-none border-r border-[#1a5a8a] last:border-r-0 relative group tracking-wide"
              >
                {item.label}
                {/* Animated underline and glow */}
                <span className="block h-0.5 w-0 group-hover:w-full bg-green-300 transition-all duration-500 rounded-full absolute left-4 -bottom-1 shadow-md group-hover:shadow-green-400"></span>
              </Link>
              {item.dropdown && openDropdown === idx && (
                <ul className="absolute left-0 top-full min-w-[220px] bg-gradient-to-r from-[#216db9] via-green-400 to-blue-300 text-white shadow-2xl rounded-b z-50 border-t-2 border-green-400 animate-fadeInDropdown">
                  {item.dropdown.map((sub, subIdx) => (
                    <li key={sub.label}>
                      <Link
                        to={sub.path}
                        className={`block px-5 py-2 text-[15px] hover:bg-green-600/80 hover:text-green-100 transition relative group ${subIdx !== item.dropdown.length - 1 ? 'border-b border-[#1a5a8a]' : ''}`}
                      >
                        {sub.label}
                        <span className="block h-0.5 w-0 group-hover:w-full bg-green-200 transition-all duration-500 rounded-full absolute left-5 -bottom-1"></span>
                      </Link>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
      
      <style>{`
        @media (max-width: 768px) {
          nav ul { flex-wrap: wrap; }
        }
        .animate-navbarGradient {
          background-size: 200% 200%;
          animation: navbarGradient 8s ease-in-out infinite;
        }
        @keyframes navbarGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-fadeInDropdown {
          animation: fadeInDropdown 0.25s cubic-bezier(.4,0,.2,1);
        }
        @keyframes fadeInDropdown {
          from { opacity: 0; transform: translateY(-10px) scale(0.98); }
          to { opacity: 1; transform: translateY(0) scale(1); }
        }
        .nav-link {
          position: relative;
        }
        .animate-leafSpin {
          animation: leafSpin 4s linear infinite;
        }
        @keyframes leafSpin {
          0% { transform: rotate(0deg) scale(1); }
          50% { transform: rotate(20deg) scale(1.15); }
          100% { transform: rotate(0deg) scale(1); }
        }
        .tracking-wide {
          letter-spacing: 0.01em;
        }
      `}</style>
    </nav>
  );
};

export default NavBar; 