import React from 'react';

const HeroBanner = () => {
  return (
    <section className="relative w-full min-h-screen bg-green-900 flex items-center justify-center px-4">
      <div className="text-center text-white max-w-3xl">
        <h1 className="text-4xl sm:text-6xl font-extrabold drop-shadow-lg mb-4">
          🌿 Welcome to Shetkari-Raja
        </h1>
        <p className="text-lg sm:text-xl text-gray-200 mt-4">
          Empowering farmers with smart agricultural solutions, community, and insights.
        </p>
      </div>
    </section>
  );
};

export default HeroBanner;
