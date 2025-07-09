import React from 'react';

const calendarData = {
  January: ['🌱 Prepare land for Rabi crops', '🌾 Sow wheat and mustard'],
  February: ['💧 Irrigate wheat, mustard', '🧪 Apply fertilizers'],
  March: ['🔪 Harvest mustard', '🌾 Irrigate wheat before final yield'],
  April: ['🌾 Harvest wheat', '🧹 Clean field & prepare for Kharif'],
  May: ['☀️ Pre-monsoon soil testing', '🚜 Land plowing for Kharif'],
  June: ['🌧️ Start sowing paddy, soybean, cotton'],
  July: ['💧 Irrigate paddy', '🌱 Weed control and fertilizer application'],
  August: ['🌿 Monitor for pests', '💧 Ensure water drainage'],
  September: ['🌾 Harvest early Kharif crops like maize'],
  October: ['🌱 Sow Rabi crops: wheat, peas'],
  November: ['💧 Irrigate wheat', '🌾 Fertilize and weed Rabi crops'],
  December: ['🌾 Monitor wheat growth', '❄️ Protect from cold damage']
};

const AgriCalendar = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-green-700 mb-6">📆 Agri Calendar</h2>

      <div className="grid md:grid-cols-3 gap-4">
        {Object.entries(calendarData).map(([month, tasks], index) => (
          <div key={index} className="bg-white p-4 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-green-700 mb-2">{month}</h3>
            <ul className="list-disc list-inside text-gray-700 space-y-1">
              {tasks.map((task, idx) => (
                <li key={idx}>{task}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AgriCalendar;
