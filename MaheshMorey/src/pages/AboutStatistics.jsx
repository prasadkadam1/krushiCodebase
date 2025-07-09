import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';
import { BarChart, Bar, XAxis, YAxis, Tooltip, ResponsiveContainer, PieChart, Pie, Cell, Legend } from 'recharts';

const stats = [
  { label: 'Total Cultivable Area', value: 64.09, unit: 'lakh ha' },
  { label: 'Total Cultivated Area', value: 61.50, unit: 'lakh ha' },
  { label: 'Acidic Soil Area', value: 40.17, unit: 'lakh ha' },
  { label: 'Salinity Affected Area', value: 4.00, unit: 'lakh ha' },
  { label: 'Waterlogged Area', value: 3.00, unit: 'lakh ha' },
  { label: 'Average Rainfall', value: 1452, unit: 'mm' },
  { label: 'Irrigation Potential (Kharif)', value: 27.63, unit: 'lakh ha' },
  { label: 'Irrigation Potential (Rabi)', value: 13.31, unit: 'lakh ha' },
  { label: 'Food Grain Production (2007-08)', value: 92.13, unit: 'lakh tonnes' },
  { label: 'Main Crop', value: 'Rice', unit: '' },
];

// Demo summary cards
const summaryCards = [
  { label: 'Total Farmers', value: 4800000, icon: '👨‍🌾', color: 'from-green-400 to-blue-400' },
  { label: 'Avg. Yield (Rice)', value: 2.8, unit: 't/ha', icon: '🌾', color: 'from-blue-400 to-green-400' },
  { label: 'Growth Rate', value: '+4.2%', icon: '📈', color: 'from-green-300 to-blue-300' },
  { label: 'Irrigated Area', value: '41%', icon: '💧', color: 'from-blue-300 to-green-300' },
];

// Demo bar chart data
const barData = [
  { year: '2018', production: 80 },
  { year: '2019', production: 85 },
  { year: '2020', production: 90 },
  { year: '2021', production: 95 },
  { year: '2022', production: 92 },
];

// Demo pie chart data
const pieData = [
  { name: 'Rice', value: 62 },
  { name: 'Pulses', value: 14 },
  { name: 'Oilseeds', value: 10 },
  { name: 'Maize', value: 8 },
  { name: 'Others', value: 6 },
];
const pieColors = ['#38bdf8', '#22d3ee', '#4ade80', '#a7f3d0', '#facc15'];

const highlights = [
  { label: 'Record food grain production in 2021', icon: '🏆', color: 'text-green-600' },
  { label: 'Steady increase in irrigated area', icon: '💧', color: 'text-blue-500' },
  { label: 'Rice remains the dominant crop', icon: '🌾', color: 'text-yellow-500' },
  { label: 'Growth rate above national avg.', icon: '🚀', color: 'text-green-500' },
];

const AboutStatistics = () => {
  const [show, setShow] = useState(false);
  useEffect(() => {
    // Small delay for entrance animation
    setTimeout(() => setShow(true), 100);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 animate-bgGradient subtle-bg">
      <Header />
      <NavBar />
      <main className="flex-1 w-full max-w-6xl mx-auto px-4 py-10 flex flex-col gap-8">
        {/* Summary Cards */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-4 transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {summaryCards.map((card, idx) => (
            <div key={card.label} className={`bg-gradient-to-br ${card.color} text-white rounded-xl shadow-lg p-6 flex flex-col items-center animate-fadeInUp`} style={{ animationDelay: `${0.1 + idx * 0.1}s` }}>
              <span className="text-4xl mb-2 animate-bounce-slow">{card.icon}</span>
              <span className="text-2xl font-bold mb-1">
                {typeof card.value === 'number' && card.value > 1000 ? card.value.toLocaleString() : card.value}
                {card.unit && <span className="text-base font-normal ml-1">{card.unit}</span>}
              </span>
              <span className="text-sm opacity-90">{card.label}</span>
            </div>
          ))}
        </div>
        {/* Dashboard Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {/* Bar Chart */}
          <div className={`bg-white rounded-2xl shadow-2xl border-l-8 border-blue-400/60 p-6 flex flex-col items-center animate-fadeInUp transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.2s' }}>
            <h2 className="text-xl font-bold mb-4 text-blue-700 flex items-center"><span className="mr-2">📊</span>Food Grain Production (lakh tonnes)</h2>
            <ResponsiveContainer width="100%" height={220}>
              <BarChart data={barData} margin={{ top: 10, right: 20, left: 0, bottom: 0 }}>
                <XAxis dataKey="year" tick={{ fill: '#38bdf8', fontWeight: 600 }} />
                <YAxis tick={{ fill: '#4ade80', fontWeight: 600 }} />
                <Tooltip />
                <Bar dataKey="production" fill="#38bdf8" radius={[8, 8, 0, 0]}>
                  {barData.map((entry, idx) => (
                    <Cell key={`cell-${idx}`} fill={pieColors[idx % pieColors.length]} />
                  ))}
                </Bar>
              </BarChart>
            </ResponsiveContainer>
          </div>
          {/* Pie Chart */}
          <div className={`bg-white rounded-2xl shadow-2xl border-l-8 border-green-400/60 p-6 flex flex-col items-center animate-fadeInUp transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`} style={{ animationDelay: '0.3s' }}>
            <h2 className="text-xl font-bold mb-4 text-green-700 flex items-center"><span className="mr-2">🥧</span>Crop Share (%)</h2>
            <ResponsiveContainer width="100%" height={220}>
              <PieChart>
                <Pie data={pieData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} innerRadius={40} label>
                  {pieData.map((entry, idx) => (
                    <Cell key={`cell-pie-${idx}`} fill={pieColors[idx % pieColors.length]} />
                  ))}
                </Pie>
                <Legend />
                <Tooltip />
              </PieChart>
            </ResponsiveContainer>
          </div>
        </div>
        {/* Highlights Section */}
        <div className={`grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mt-4 transition-all duration-700 ${show ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
          {highlights.map((h, idx) => (
            <div key={h.label} className={`bg-gradient-to-br from-green-50 via-blue-50 to-green-100 border-l-4 border-green-400 rounded-xl shadow p-4 flex items-center gap-3 animate-fadeInUp`} style={{ animationDelay: `${0.2 + idx * 0.1}s` }}>
              <span className={`text-2xl ${h.color} animate-bounce-slow`}>{h.icon}</span>
              <span className="font-semibold text-gray-700">{h.label}</span>
            </div>
          ))}
        </div>
        {/* Original Table */}
        <div className={`bg-white rounded-2xl shadow-2xl border-l-8 border-blue-400/60 p-10 relative transition-all duration-700 ease-out mt-8 ${show ? 'opacity-100 translate-y-0 scale-100' : 'opacity-0 translate-y-8 scale-95'} animate-fadeInUp`} style={{ animationDelay: '0.4s' }}>
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg text-center animate-headingFade">
            <span className="inline-block align-middle mr-2 animate-leafWiggle">🌱</span>
            Agriculture Statistics
          </h1>
          <table className="w-full text-left border-separate border-spacing-y-2">
            <tbody>
              {stats.map((row, idx) => (
                <tr key={idx} className={`odd:bg-[#f5f8fd] even:bg-green-50/40 transition-all duration-700 animate-rowFadeIn`} style={{ animationDelay: `${0.1 + idx * 0.07}s` }}>
                  <td className="py-2 px-4 font-semibold text-[#216db9] w-2/3">{row.label}</td>
                  <td className="py-2 px-4 text-gray-800 w-1/3">{typeof row.value === 'number' ? row.value + (row.unit ? ' ' + row.unit : '') : row.value}</td>
                </tr>
              ))}
            </tbody>
          </table>
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
        @keyframes rowFadeIn {
          from { opacity: 0; transform: translateY(10px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-rowFadeIn {
          animation: rowFadeIn 0.7s cubic-bezier(.4,0,.2,1) both;
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

export default AboutStatistics; 
