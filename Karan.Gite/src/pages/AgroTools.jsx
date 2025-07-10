import React, { useState } from 'react';

const AgroTools = () => {
  const [selectedSoil, setSelectedSoil] = useState('');
  const [recommendedCrops, setRecommendedCrops] = useState([]);

  const soilTypes = {
    'Black Soil': ['Cotton', 'Soybean', 'Pulses'],
    'Red Soil': ['Millets', 'Groundnut', 'Oilseeds'],
    'Alluvial Soil': ['Wheat', 'Rice', 'Sugarcane'],
    'Laterite Soil': ['Cashew', 'Coffee', 'Tea']
  };

  const handleSoilChange = (e) => {
    const soil = e.target.value;
    setSelectedSoil(soil);
    setRecommendedCrops(soilTypes[soil] || []);
  };

  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-green-700 mb-4">🧪 AgroTech Tools</h2>

      <div className="mb-6">
        <label className="block text-lg font-semibold mb-2">Select Soil Type:</label>
        <select
          value={selectedSoil}
          onChange={handleSoilChange}
          className="w-full p-2 border rounded text-gray-700"
        >
          <option value="">-- Choose Soil Type --</option>
          {Object.keys(soilTypes).map((soil, index) => (
            <option key={index} value={soil}>{soil}</option>
          ))}
        </select>
      </div>

      {recommendedCrops.length > 0 && (
        <div>
          <h3 className="text-xl font-semibold mb-2 text-green-600">Recommended Crops:</h3>
          <ul className="list-disc list-inside text-gray-800">
            {recommendedCrops.map((crop, index) => (
              <li key={index}>{crop}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default AgroTools;
