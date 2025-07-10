import React from 'react';

const news = [
  { title: 'PM-Kisan 15th Installment Released', date: 'July 2025' },
  { title: 'Heavy Rain Alert in Western Maharashtra', date: 'July 3, 2025' },
  { title: 'Subsidy Scheme for Organic Fertilizers', date: 'June 30, 2025' }
];

const NewsSchemes = () => {
  return (
    <div className="p-6">
      <h2 className="text-3xl font-bold text-green-700 mb-4">📰 Agri-News & Govt Schemes</h2>
      <ul className="space-y-4">
        {news.map((item, index) => (
          <li key={index} className="bg-white p-4 rounded shadow">
            <h3 className="text-xl font-semibold">{item.title}</h3>
            <p className="text-sm text-gray-500">{item.date}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default NewsSchemes;
