import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-r from-[#216db9] via-green-500 to-blue-400 text-white pt-8 pb-4 mt-8 w-full border-t-4 border-green-400 shadow-2xl animate-footerWave relative overflow-hidden">
      {/* Animated leaf/plant icons */}
      <div className="absolute left-4 top-2 text-3xl animate-leafBounce z-10">
        🌱
      </div>
      <div className="absolute right-4 top-2 text-3xl animate-leafBounce2 z-10">
        🌿
      </div>
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row justify-center items-center gap-4 md:gap-0 animate-fadeInUp">
        <div className="flex flex-wrap gap-4 md:gap-8 items-center text-sm font-medium">
          <Link
            to="/policies"
            className="hover:underline hover:text-green-200 transition-colors duration-300 relative group"
          >
            Website Policy
            <span className="block h-0.5 w-0 group-hover:w-full bg-green-300 transition-all duration-500 rounded-full absolute left-0 -bottom-1"></span>
          </Link>
          <Link
            to="/policies"
            className="hover:underline hover:text-green-200 transition-colors duration-300 relative group"
          >
            Disclaimer
            <span className="block h-0.5 w-0 group-hover:w-full bg-green-300 transition-all duration-500 rounded-full absolute left-0 -bottom-1"></span>
          </Link>
          <Link
            to="/policies"
            className="hover:underline hover:text-green-200 transition-colors duration-300 relative group"
          >
            Terms & Conditions
            <span className="block h-0.5 w-0 group-hover:w-full bg-green-300 transition-all duration-500 rounded-full absolute left-0 -bottom-1"></span>
          </Link>
          <Link
            to="/policies"
            className="hover:underline hover:text-green-200 transition-colors duration-300 relative group"
          >
            Copyright Policy
            <span className="block h-0.5 w-0 group-hover:w-full bg-green-300 transition-all duration-500 rounded-full absolute left-0 -bottom-1"></span>
          </Link>
          <Link
            to="/policies"
            className="hover:underline hover:text-green-200 transition-colors duration-300 relative group"
          >
            Privacy Policy
            <span className="block h-0.5 w-0 group-hover:w-full bg-green-300 transition-all duration-500 rounded-full absolute left-0 -bottom-1"></span>
          </Link>
          <Link
            to="/sitemap"
            className="hover:underline hover:text-green-200 transition-colors duration-300 relative group"
          >
            Sitemap
            <span className="block h-0.5 w-0 group-hover:w-full bg-green-300 transition-all duration-500 rounded-full absolute left-0 -bottom-1"></span>
          </Link>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 mt-3 flex flex-col justify-center items-center text-xs md:text-sm text-blue-100 opacity-90 animate-fadeInUp delay-200">
        <div className="text-center md:text-left">
          &copy; {new Date().getFullYear()} Department of Agriculture & Farmers'
          Empowerment, Government of Odisha. All Rights Reserved.
        </div>
        <div className="text-center md:text-right mt-2 md:mt-1 text-white font-semibold italic">
        Designed and Developed by{" "} msMorey
      </div>
      </div>
      
      {/* Custom keyframes for advanced animations */}
      <style>{`
        @keyframes footerWave {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-footerWave {
          background-size: 200% 200%;
          animation: footerWave 10s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes leafBounce {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-10px) scale(1.1); }
        }
        .animate-leafBounce {
          animation: leafBounce 2.5s infinite;
        }
        @keyframes leafBounce2 {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-6px) scale(1.08) rotate(-8deg); }
        }
        .animate-leafBounce2 {
          animation: leafBounce2 2.2s infinite;
        }
      `}</style>
    </footer>
  );
};

export default Footer;
