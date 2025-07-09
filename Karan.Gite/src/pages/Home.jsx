 import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import HeroBanner from '../components/HeroBanner';
import {
  FaTractor,
  FaCloudSun,
  FaSeedling,
  FaCalendarAlt,
  FaTools,
  FaNewspaper,
  FaUsers,
  FaRobot,
  FaSatelliteDish,
  FaChartLine,
  FaMapMarkedAlt,
} from 'react-icons/fa';
import { MdAgriculture } from 'react-icons/md';

const Button = ({ children, onClick, className }) => (
  <button
    onClick={onClick}
    className={`transition duration-300 ease-in-out ${className}`}
  >
    {children}
  </button>
);

const CropCard = ({ img, alt, title, desc }) => (
  <div className="cursor-pointer bg-white rounded-xl overflow-hidden shadow-md hover:shadow-xl transform hover:scale-105 transition-all">
    <img
      src={img}
      alt={alt}
      className="w-full h-[250px] sm:h-[300px] object-cover rounded-t-xl"
    />
    <div className="p-5">
      <h3 className="text-2xl font-bold text-green-700 mb-2">{title}</h3>
      <p className="text-gray-700 text-base">{desc}</p>
    </div>
  </div>
);

const FarmingTips = () => (
  <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 w-full px-4 sm:px-20">
    {[
      { title: 'Use Organic Fertilizers', tip: 'They improve soil health and ensure long-term yield stability.' },
      { title: 'Irrigate Wisely', tip: 'Utilize drip irrigation or rainwater harvesting to conserve water.' },
      { title: 'Crop Rotation', tip: 'Rotate crops to maintain nutrient-rich soil and reduce pests.' },
      { title: 'Timely Sowing', tip: 'Follow agri-calendar for accurate planting and harvesting cycles.' },
    ].map(({ title, tip }) => (
      <div key={title} className="bg-white p-6 rounded-xl shadow-md hover:shadow-lg transition-all hover:scale-105">
        <h4 className="text-xl font-semibold text-green-700 mb-2">{title}</h4>
        <p className="text-base text-gray-700">{tip}</p>
      </div>
    ))}
  </div>
);

const ExploreMore = () => (
  <section className="py-20 px-6 sm:px-20 bg-green-50">
    <h2 className="text-5xl font-bold text-center mb-16 text-green-800">
      🚀 Explore More Smart Features
    </h2>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10">
      {[
        { icon: <FaRobot />, title: 'AI-Based Crop Advisory', desc: 'Get personalized crop suggestions using AI analysis.' },
        { icon: <FaSatelliteDish />, title: 'Satellite Weather', desc: 'Live satellite-based weather predictions & alerts.' },
        { icon: <FaChartLine />, title: 'Soil Health Dashboard', desc: 'Monitor pH, nitrogen, potassium, and organic matter.' },
        { icon: <MdAgriculture />, title: 'Smart Irrigation', desc: 'IoT devices for automatic soil moisture monitoring.' },
        { icon: <FaMapMarkedAlt />, title: 'Geo-tagging Fields', desc: 'Map your fields with real-time GPS for better tracking.' },
      ].map(({ icon, title, desc }) => (
        <div key={title} className="bg-white rounded-xl p-6 text-center shadow-md hover:shadow-lg hover:scale-105 transition-all">
          <div className="text-4xl text-green-700 mb-4 mx-auto">{icon}</div>
          <h4 className="text-xl font-bold mb-2">{title}</h4>
          <p className="text-gray-600">{desc}</p>
        </div>
      ))}
    </div>
  </section>
);

const Home = () => {
  const navigate = useNavigate();
  const [showExplore, setShowExplore] = useState(false);

  return (
    <main className="bg-white w-full min-h-screen text-gray-800">
      {/* Hero Banner */}
      <HeroBanner />

      {/* Features Section */}
      <section className="px-6 sm:px-20 mt-10">
        <h2 className="text-5xl font-bold text-center mb-2 text-green-800">
          🌿 Explore Our Features
        </h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 w-full">
          {[
            { label: 'Marketplace', icon: <FaTractor />, path: '/marketplace' },
            { label: 'Weather', icon: <FaCloudSun />, path: '/weather' },
            { label: 'Crop Advisory', icon: <FaSeedling />, path: '/advisory' },
            { label: 'Agri Calendar', icon: <FaCalendarAlt />, path: '/calendar' },
            { label: 'Agro Tools', icon: <FaTools />, path: '/tools' },
            { label: 'News', icon: <FaNewspaper />, path: '/news' },
            { label: 'Community', icon: <FaUsers />, path: '/community' },
          ].map(({ label, icon, path }) => (
            <Button
              key={label}
              onClick={() => navigate(path)}
              className="bg-white rounded-xl p-6 flex flex-col items-center justify-center shadow-md hover:shadow-xl hover:scale-105 w-full"
              aria-label={`Navigate to ${label}`}
            >
              <div className="text-4xl text-green-700 mb-3">{icon}</div>
              <p className="text-lg font-medium text-center">{label}</p>
            </Button>
          ))}
        </div>

        {/* Explore More Button */}
        <div className="flex justify-center mt-10">
          <button
            onClick={() => setShowExplore(!showExplore)}
            className="bg-green-700 text-white px-6 py-3 rounded-full shadow-lg hover:bg-green-800 transition-all text-lg font-semibold"
          >
            {showExplore ? 'Hide Advanced Features' : 'Explore More'}
          </button>
        </div>
      </section>

      {/* Featured Crops */}
      <section className="py-20 px-6 sm:px-20 bg-gray-50">
        <h2 className="text-5xl font-bold text-center mb-16 text-green-800">
          🌾 Featured Crops
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-12 w-full">
          {[
            {
              img: 'https://as1.ftcdn.net/v2/jpg/07/53/41/68/1000_F_753416843_dmOcMGkMO4YxBo9Dfq4j1Yu6jr3dLWE5.jpg',
              alt: 'Wheat field',
              title: 'Wheat',
              desc: 'High yield and drought resistant crop suitable for various regions.',
            },
            {
              img: 'https://thumbs.dreamstime.com/b/fresh-corn-cobs-display-close-up-view-oak-boards-some-grains-capturing-their-natural-appealing-texture-ai-325694989.jpg',
              alt: 'Corn field',
              title: 'Corn',
              desc: 'Rich in nutrients and widely cultivated for food and fodder.',
            },
            {
              img: 'https://static.vecteezy.com/system/resources/thumbnails/039/285/582/small_2x/ai-generated-grip-on-a-wooden-bowl-full-of-raw-white-rice-and-wheat-sprigs-free-photo.jpeg',
              alt: 'Rice field',
              title: 'Rice',
              desc: 'Staple food crop requiring high moisture and fertile land.',
            },
          ].map((crop) => (
            <CropCard key={crop.title} {...crop} />
          ))}
        </div>
      </section>

      {/* Farming Tips */}
      <section className="py-20 px-6 sm:px-20">
        <h2 className="text-5xl font-bold text-center mb-16 text-green-800">
          💡 Smart Farming Tips
        </h2>
        <FarmingTips />
      </section>

      {/* Conditional Smart Features Section */}
      {showExplore && <ExploreMore />}

      {/* Footer */}
      <footer className="bg-green-800 text-white py-6 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} Shetkari-Raja. All rights reserved.</p>
      </footer>
    </main>
  );
};

export default Home;
