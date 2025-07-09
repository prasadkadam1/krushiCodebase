import React from 'react';
import { FaLeaf, FaSyncAlt, FaCloudSun, FaTint } from 'react-icons/fa';

const tips = [
  { icon: <FaLeaf className="inline mr-2 text-green-300" />, text: 'Use organic fertilizers to improve soil health.' },
  { icon: <FaSyncAlt className="inline mr-2 text-green-300" />, text: 'Practice crop rotation to prevent soil depletion.' },
  { icon: <FaCloudSun className="inline mr-2 text-green-300" />, text: 'Monitor weather forecasts regularly for better planning.' },
  { icon: <FaTint className="inline mr-2 text-green-300" />, text: 'Implement efficient irrigation techniques to conserve water.' },
];

const FarmingTips = () => {
  return (
    <section className="bg-green-700 text-white rounded-3xl p-10 shadow-lg max-w-5xl mx-auto">
      <h2 className="text-4xl font-bold mb-6 text-center">Farming Tips</h2>
      <ul className="list-none space-y-4 text-left text-lg max-w-3xl mx-auto">
        {tips.map(({ icon, text }, index) => (
          <li key={index} className="flex items-center">
            {icon}
            <span>{text}</span>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default FarmingTips;
