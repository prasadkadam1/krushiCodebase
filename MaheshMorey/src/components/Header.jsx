import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';
import cmOdisha from '../assets/cm-odisha.png';
// Import all needed icons as React components or images
import searchIcon from '../assets/ico-site-search.png';
import skipIcon from '../assets/ico-skip.png';
import screenReaderIcon from '../assets/screen-reader.png';
import accessibilityIcon from '../assets/ico-accessibility.png';
import sitemapIcon from '../assets/ico-sitemap.png';

const Header = () => {
  return (
    <header className="w-full animate-gradient-x bg-gradient-to-r from-blue-50 via-white to-blue-100">
      {/* Pixel-perfect Top Header Bar */}
      <div className="bg-[#1d1f1e] border-b border-[#d3d3d3] text-xs text-[#333] font-medium animate-fadeInDown">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-2 h-[60px]">
            {/* Left: Government links */}
            <div className="flex items-center">
            <ul className="flex items-center space-x-4">
                <li>
                <a
                    href="#"
                    title="Government of Odisha"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-[16px] hover:underline border-r border-white pr-4 transition-colors duration-300 hover:text-blue-300"
                >
                    Government of Odisha
                </a>
                </li>
                <li>
                <a
                    href="#"
                    title="ଓଡ଼ିଶା ସରକାର"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-white text-[16px] hover:underline transition-colors duration-300 hover:text-blue-300"
                >
                    ଓଡ଼ିଶା ସରକାର
                </a>
                </li>
            </ul>
            </div>

            {/* Right: Utility links and icons */}
            <div className="flex items-center">
            <ul className="flex items-center space-x-4" id="header-nav">
                <li>
                <Link to="/login" title="Login" className="text-white text-[16px] hover:underline transition-colors duration-300 hover:text-blue-300">
                    Login
                </Link>
                </li>
                <li>
                <Link to="/register" title="Registration" className="text-white text-[16px] hover:underline transition-colors duration-300 hover:text-blue-300">
                    Register
                </Link>
                </li>
                <li>
                <a href="#" title="Site Search">
                    <img src={searchIcon} alt="Site Search" className="h-5 w-8 inline transition-transform duration-300 hover:scale-110 hover:animate-pulse" />
                </a>
                </li>
                <li>
                <a href="#skipCont" title="Skip to main content">
                    <img src={skipIcon} alt="Skip to main content" className="h-5 w-8 inline transition-transform duration-300 hover:scale-110 hover:animate-pulse" />
                </a>
                </li>
                <li>
                <a href="/screen-reader" title="Screen Reader Access">
                    <img src={screenReaderIcon} alt="Screen Reader Access" className="h-5 w-8 inline transition-transform duration-300 hover:scale-110 hover:animate-pulse" />
                </a>
                </li>

                {/* Accessibility Dropdown */}
                <li className="relative group">
                <a href="#" title="Accessibility Dropdown">
                    <img src={accessibilityIcon} alt="Accessibility Dropdown" className="h-5 w-8 inline transition-transform duration-300 hover:scale-110 hover:animate-pulse" />
                </a>
                <ul className="absolute right-0 top-full bg-white border border-gray-200 shadow-lg rounded mt-1 min-w-[120px] z-50 hidden group-hover:block animate-fadeInDown">
                    <li><a className="block px-3 py-1 hover:bg-gray-100" title="Increase font size" href="#">A<sup>+</sup></a></li>
                    <li><a className="block px-3 py-1 hover:bg-gray-100" title="Reset font size" href="#">A<sup>&nbsp;</sup></a></li>
                    <li><a className="block px-3 py-1 hover:bg-gray-100" title="Decrease font size" href="#">A<sup>-</sup></a></li>
                    <li><a className="block px-3 py-1 hover:bg-gray-100" href="#" title="High Contrast">A</a></li>
                    <li><a className="block px-3 py-1 hover:bg-gray-100" href="#" title="Normal Contrast">A</a></li>
                </ul>
                </li>

                <li>
                <a href="/sitemap" title="Sitemap">
                    <img src={sitemapIcon} alt="Sitemap" className="h-5 w-8 inline transition-transform duration-300 hover:scale-110 hover:animate-pulse" />
                </a>
                </li>
                <li>
                <a
                    href="/or"
                    className="text-white text-[16px] hover:underline border-r border-white pr-4 transition-colors duration-300 hover:text-blue-300"
                    hreflang="or"
                    data-drupal-link-system-path="<front>"
                    title="Select Language"
                >
                    ଓଡ଼ିଆ
                </a>
                </li>
            </ul>
            </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white w-full border-b border-[#d3d3d3] animate-fadeInUp">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between py-2 px-4">
          <div className="flex items-center gap-4">
            <img src={logo} alt="Odisha Logo" className="h-16 w-auto transition-transform duration-500 hover:scale-110 hover:animate-bounce" />
            <div className="flex flex-col">
              <span className="text-[1.15rem] md:text-2xl font-bold text-[#1b5e20] leading-tight relative inline-block">
                <span className="bg-gradient-to-r from-blue-700 via-blue-400 to-cyan-400 bg-clip-text text-transparent drop-shadow-lg animate-textShine">
                  DEPARTMENT OF AGRICULTURE &<br className="hidden md:block"/> FARMERS' EMPOWERMENT
                </span>
                <span className="block h-1 w-2/3 bg-gradient-to-r from-blue-400 via-cyan-400 to-blue-700 rounded-full mt-1 animate-underlineSlide"></span>
              </span>
              <span className="text-xs md:text-sm text-[#333] font-medium animate-fadeInUp delay-200">Government of Odisha</span>
            </div>
          </div>
          {/* Chief Minister Section */}
          <div className="flex items-center gap-3 ">
            <div className="flex flex-col text-right mr-2">
              <Link to="/about" className="text-[1rem] font-semibold text-[#1b5e20] leading-tight hover:underline animate-fadeInDown">
                Shri Mohan Charan Majhi<br/>
                <span className="block text-xs text-[#333] font-normal">Hon'ble Chief Minister</span>
              </Link>
            </div>
            <img src={cmOdisha} alt="Shri Mohan Charan Majhi" title="Shri Mohan Charan Majhi" width={90} height={90} className="bg-white rounded-full shadow-lg transition-shadow duration-500 hover:shadow-blue-400/70 hover:shadow-2xl animate-fadeInUp" />
          </div>
        </div>
      </div>
      {/* Custom keyframes for advanced animations */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
        @keyframes fadeInDown {
          from { opacity: 0; transform: translateY(-20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInDown {
          animation: fadeInDown 0.8s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 0.8s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes textShine {
          0% { background-position: -200% 0; }
          100% { background-position: 200% 0; }
        }
        .animate-textShine {
          background-size: 200% auto;
          animation: textShine 3s linear infinite;
        }
        @keyframes underlineSlide {
          0% { transform: scaleX(0); opacity: 0; }
          40% { opacity: 1; }
          100% { transform: scaleX(1); opacity: 1; }
        }
        .animate-underlineSlide {
          transform-origin: left;
          animation: underlineSlide 1.2s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </header>
  );
};

export default Header; 