import React, { useMemo } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import a from '../assets/a.png';
import b from '../assets/b.jpg';
import c from '../assets/c.jpg';
import d from '../assets/d.jpg';
import e from '../assets/e.jpg';
import f from '../assets/f.jpg';
import g from '../assets/g.jpg';

const BannerCarousel = () => {
  const images = useMemo(() => [a, b, c, d, e, f, g], []);

  return (
    <div className="w-full max-w-7xl mx-auto mt-4 relative transition-all duration-1000 opacity-100 translate-y-0 scale-100 animate-gradient-x bg-gradient-to-r from-blue-100 via-white to-blue-200 rounded-2xl shadow-2xl p-2">
      <div className="absolute inset-0 pointer-events-none z-10 rounded-2xl overflow-hidden">
        <div className="w-full h-full bg-gradient-to-r from-blue-400/30 via-cyan-200/20 to-blue-100/30 animate-gradient-x"></div>
      </div>
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={4000}
        showIndicators={true}
        swipeable
        emulateTouch
        className="relative z-20"
      >
        {images.map((img, idx) => (
          <div key={idx} className="relative group">
            <img
              src={img}
              alt={`Banner ${idx + 1}`}
              className="rounded-xl shadow-xl border-4 border-white group-hover:border-blue-400 transition-all duration-500 group-hover:scale-105 group-hover:shadow-blue-200/80 animate-fadeInUp"
              style={{ objectFit: 'cover', width: '100%', height: '400px' }}
              loading="lazy"
            />
            {/* Animated overlay on hover */}
            <div className="absolute inset-0 rounded-xl pointer-events-none group-hover:bg-gradient-to-r group-hover:from-blue-200/40 group-hover:to-cyan-200/40 transition-all duration-500"></div>
          </div>
        ))}
      </Carousel>
      {/* Custom keyframes for advanced animations */}
      <style>{`
        @keyframes gradient-x {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-gradient-x {
          background-size: 200% 200%;
          animation: gradient-x 8s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s cubic-bezier(.4,0,.2,1) both;
        }
      `}</style>
    </div>
  );
};

export default BannerCarousel; 
