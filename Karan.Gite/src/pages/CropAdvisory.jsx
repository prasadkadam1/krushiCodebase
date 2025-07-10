import React from 'react';

const advisoryData = [
  { crop: 'Wheat', season: 'Rabi', tip: 'Use high-yield varieties & irrigate timely' },
  { crop: 'Paddy', season: 'Kharif', tip: 'Start nursery early with water management' },
  { crop: 'Cotton', season: 'Kharif', tip: 'Use drip irrigation & monitor for bollworms' }
];

const CropAdvisory = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-green-700 mb-4">📚 Crop Advisory</h2>
      <div className="grid md:grid-cols-2 gap-4">
        {advisoryData.map((item, index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-700">{item.crop} ({item.season})</h3>
            <p className="text-gray-700 mt-2">{item.tip}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CropAdvisory;
