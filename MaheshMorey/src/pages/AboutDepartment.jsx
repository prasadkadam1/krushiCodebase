import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const AboutDepartment = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-r from-blue-400 via-pink-300 to-yellow-200 animate-gradient-x">
      <Header />
      <NavBar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl border-l-8 border-blue-400 p-10 relative transition-all duration-700 ease-out transform opacity-100 translate-y-0 scale-100 animate-fadeInUp">
          <div className="flex flex-col items-center mb-4">
            <span className="text-5xl mb-2 animate-bounce">🌾</span>
            <h1 className="text-4xl font-extrabold mb-2 bg-gradient-to-r from-blue-600 via-green-500 to-yellow-500 bg-clip-text text-transparent drop-shadow-lg text-center">
              About the Department
            </h1>
          </div>
          <p className="text-gray-800 text-lg leading-relaxed mb-4 transition-opacity duration-700 delay-200 ease-in-out opacity-90">
            The Department of Agriculture & Farmers' Empowerment, Government of Odisha, is dedicated to the growth and development of the agricultural sector in the state. The department formulates policies and implements various schemes to improve the livelihoods of farmers, boost agricultural productivity, and ensure sustainable farming practices.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed mb-4 transition-opacity duration-700 delay-300 ease-in-out opacity-90">
            Through modern technology, farmer education programs, and subsidies, the department strives to make Odisha a leading state in agri-based development. It also coordinates with various central government initiatives to ensure holistic support to the farming community.
          </p>
          <p className="text-gray-800 text-lg leading-relaxed transition-opacity duration-700 delay-500 ease-in-out opacity-90">
            The department is committed to empowering farmers, advancing technology, and ensuring sustainable growth for Odisha's agricultural community.
          </p>
        </div>
      </main>
      <Footer />
      {/* Custom animation for gradient background */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </div>
  );
};

export default AboutDepartment; 