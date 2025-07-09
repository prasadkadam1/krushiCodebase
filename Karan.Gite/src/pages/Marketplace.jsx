import React from 'react';

const sampleProducts = [
  { name: 'Hybrid Seeds (Paddy)', price: '₹350/pack' },
  { name: 'Bio Fertilizer', price: '₹250/litre' },
  { name: 'Mini Tractor', price: '₹2.5 Lakh' }
];

const Marketplace = () => {
  const handleBuyNow = (productName) => {
    alert("You clicked Buy Now for " + productName);
  };

  return ( 
    <div className="p-6">
      <h2 className="text-3xl font-bold text-green-700 mb-4">🛒 Marketplace</h2>
      <div className="grid md:grid-cols-3 gap-4">
        {sampleProducts.map((product, index) => (
          <div key={index} className="bg-white rounded shadow p-4">
            <h3 className="text-xl font-semibold text-gray-800">{product.name}</h3>
            <p className="text-green-600 font-bold mt-2">{product.price}</p>
            <button
              onClick={() => handleBuyNow(product.name)}
              className="mt-4 px-4 py-2 bg-green-600 text-white rounded hover:bg-green-700"
            >
              Buy Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Marketplace;
