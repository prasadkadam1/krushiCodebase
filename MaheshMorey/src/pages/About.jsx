import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const About = () => {
  const [activeTab, setActiveTab] = useState('overview');

  const tabs = [
    { id: 'overview', label: 'Overview', icon: '🏛️' },
    { id: 'mission', label: 'Mission & Vision', icon: '🎯' },
    { id: 'structure', label: 'Organizational Structure', icon: '🏢' },
    { id: 'achievements', label: 'Achievements', icon: '🏆' },
  ];

  const achievements = [
    { title: 'Farmer Empowerment', value: '2.5M+', description: 'Farmers supported', icon: '👨‍🌾' },
    { title: 'Agricultural Growth', value: '8.2%', description: 'Annual growth rate', icon: '📈' },
    { title: 'Schemes Implemented', value: '45+', description: 'Active schemes', icon: '📋' },
    { title: 'Districts Covered', value: '30', description: 'Complete coverage', icon: '🗺️' },
  ];

  const departments = [
    { name: 'Crop Production', head: 'Dr. Rajesh Kumar', icon: '🌾' },
    { name: 'Horticulture', head: 'Dr. Priya Sharma', icon: '🍎' },
    { name: 'Soil Conservation', head: 'Dr. Amit Patel', icon: '🌱' },
    { name: 'Agricultural Extension', head: 'Dr. Sunita Verma', icon: '📚' },
    { name: 'Farmers Welfare', head: 'Dr. Ramesh Singh', icon: '🤝' },
    { name: 'Research & Development', head: 'Dr. Kavita Reddy', icon: '🔬' },
  ];

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 animate-bgGradient">
      <Header />
      <NavBar />
      
      <main className="flex-1 w-full max-w-7xl mx-auto px-4 py-8">
        {/* Hero Section */}
        <div className="text-center mb-12 animate-fadeInUp">
          <h1 className="text-5xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg animate-headingFade">
            About the Department
          </h1>
          <p className="text-xl text-gray-700 max-w-4xl mx-auto leading-relaxed animate-fadeInUp delay-200">
            Empowering farmers, advancing agriculture, and building a sustainable future for Odisha's agricultural community through innovation, technology, and dedicated service.
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="flex flex-wrap justify-center gap-2 mb-8 animate-fadeInUp delay-300">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-6 py-3 rounded-full font-semibold transition-all duration-300 flex items-center gap-2 ${
                activeTab === tab.id
                  ? 'bg-gradient-to-r from-green-600 to-blue-600 text-white shadow-lg scale-105'
                  : 'bg-white text-gray-700 hover:bg-green-50 hover:scale-105 shadow-md'
              }`}
            >
              <span className="text-lg">{tab.icon}</span>
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="bg-white rounded-2xl shadow-2xl p-8 animate-fadeInUp delay-400">
          {activeTab === 'overview' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <span className="text-3xl">🌾</span>
                    Our Mission
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    The Department of Agriculture & Farmers' Empowerment, Government of Odisha, is dedicated to the growth and development of the agricultural sector in the state. We formulate policies and implement various schemes to improve the livelihoods of farmers, boost agricultural productivity, and ensure sustainable farming practices.
                  </p>
                </div>
                <div className="space-y-4">
                  <h3 className="text-2xl font-bold text-gray-800 flex items-center gap-2">
                    <span className="text-3xl">🎯</span>
                    Our Vision
                  </h3>
                  <p className="text-gray-700 leading-relaxed">
                    To make Odisha a leading state in agri-based development through modern technology, farmer education programs, and comprehensive support systems. We coordinate with various central government initiatives to ensure holistic support to the farming community.
                  </p>
                </div>
              </div>
              
              {/* Quick Links */}
              <div className="bg-gradient-to-r from-blue-50 to-green-50 rounded-xl p-6">
                <h4 className="text-xl font-bold text-gray-800 mb-4 flex items-center gap-2">
                  <span className="text-2xl">🔗</span>
                  Quick Links
                </h4>
                <div className="grid md:grid-cols-3 gap-4">
                  <Link to="/about/department" className="group">
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 border-l-4 border-blue-400">
                      <h5 className="font-semibold text-gray-800 group-hover:text-blue-600 transition">About Department</h5>
                      <p className="text-sm text-gray-600">Learn about our structure and functions</p>
                    </div>
                  </Link>
                  <Link to="/about/statistics" className="group">
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 border-l-4 border-green-400">
                      <h5 className="font-semibold text-gray-800 group-hover:text-green-600 transition">Statistics</h5>
                      <p className="text-sm text-gray-600">View agricultural data and insights</p>
                    </div>
                  </Link>
                  <Link to="/schemes" className="group">
                    <div className="bg-white p-4 rounded-lg shadow-md hover:shadow-lg transition-all duration-300 group-hover:scale-105 border-l-4 border-cyan-400">
                      <h5 className="font-semibold text-gray-800 group-hover:text-cyan-600 transition">Schemes</h5>
                      <p className="text-sm text-gray-600">Explore our agricultural schemes</p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mission' && (
            <div className="space-y-8">
              <div className="grid md:grid-cols-2 gap-8">
                <div className="bg-gradient-to-br from-blue-50 to-blue-100 p-6 rounded-xl border-l-4 border-blue-400">
                  <h3 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                    <span className="text-3xl">🎯</span>
                    Mission Statement
                  </h3>
                  <ul className="space-y-3 text-blue-700">
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      Enhance agricultural productivity and farmer income
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      Promote sustainable farming practices
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      Ensure food security and rural development
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-blue-500 mt-1">•</span>
                      Empower farmers through education and technology
                    </li>
                  </ul>
                </div>
                <div className="bg-gradient-to-br from-green-50 to-green-100 p-6 rounded-xl border-l-4 border-green-400">
                  <h3 className="text-2xl font-bold text-green-800 mb-4 flex items-center gap-2">
                    <span className="text-3xl">🌟</span>
                    Vision Statement
                  </h3>
                  <ul className="space-y-3 text-green-700">
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      Lead agricultural innovation in India
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      Create prosperous farming communities
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      Establish Odisha as an agricultural hub
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-green-500 mt-1">•</span>
                      Ensure environmental sustainability
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'structure' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-3xl">🏢</span>
                Organizational Structure
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {departments.map((dept, index) => (
                  <div key={dept.name} className="bg-gradient-to-br from-blue-50 to-green-50 p-6 rounded-xl border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-105 animate-fadeInUp" style={{ animationDelay: `${index * 100}ms` }}>
                    <div className="text-4xl mb-3">{dept.icon}</div>
                    <h4 className="text-lg font-bold text-gray-800 mb-2">{dept.name}</h4>
                    <p className="text-sm text-gray-600 mb-2">Head of Department:</p>
                    <p className="text-sm font-medium text-blue-600">{dept.head}</p>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'achievements' && (
            <div className="space-y-8">
              <h3 className="text-2xl font-bold text-gray-800 mb-6 flex items-center gap-2">
                <span className="text-3xl">🏆</span>
                Key Achievements
              </h3>
              <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                {achievements.map((achievement, index) => (
                  <div key={achievement.title} className="bg-white p-6 rounded-xl shadow-lg border-l-4 border-green-400 hover:shadow-xl transition-all duration-300 hover:scale-105 animate-fadeInUp" style={{ animationDelay: `${index * 150}ms` }}>
                    <div className="text-4xl mb-3 animate-bounce-slow">{achievement.icon}</div>
                    <div className="text-3xl font-bold text-green-600 mb-1">{achievement.value}</div>
                    <h4 className="text-lg font-semibold text-gray-800 mb-1">{achievement.title}</h4>
                    <p className="text-sm text-gray-600">{achievement.description}</p>
                  </div>
                ))}
              </div>
            </div>
          )}
        </div>
      </main>
      
      <Footer />
      
      {/* Custom keyframes for advanced animations */}
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

export default About; 