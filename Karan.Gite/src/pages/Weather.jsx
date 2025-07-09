import React from 'react';

const Weather = () => {
  return (
    <div className="p-6 text-center">
      <h2 className="text-3xl font-bold text-green-700 mb-4">🌦️ Weather Forecast</h2>
      <p className="text-gray-700 mb-2">📍 Location: Maharashtra</p>
      <div className="bg-white p-4 rounded shadow inline-block">
        <h3 className="text-xl text-gray-800">Today</h3>
        <p className="text-lg text-blue-600">🌤️ Partly Cloudy</p>
        <p className="text-gray-700">Temperature: 28°C - 35°C</p>
        <p className="text-gray-700">Humidity: 60%</p>
      </div>
    </div>
  );
};

export default Weather;
