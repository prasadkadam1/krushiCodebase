import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const [started, setStarted] = useState(false);
  const navigate = useNavigate();

  const handleGetStarted = () => {
    setStarted(true);
  };

  const handleRegister = () => {
    navigate('/register');
  };

  const handleLogin = () => {
    navigate('/login');
  };

  return (
    <div
      className="flex flex-col items-center justify-center"
      style={{
        backgroundImage: "url('https://images.coolwallpapers.me/picsup/1278140-cornfield.jpg')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundColor: 'black',
        width: '100vw',
        height: '100vh',
      }}
    >
      <div className="flex flex-col items-center justify-center bg-black bg-opacity-50 w-full h-full">
        {!started ? (
          <button
            onClick={handleGetStarted}
            className="px-6 py-3 bg-green-600 text-white rounded-md hover:bg-green-700 transition"
          >
            Get Started
          </button>
        ) : (
          <div className="space-x-4">
            <button
              onClick={handleRegister}
              className="px-6 py-3 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"
            >
              Register
            </button>
            <button
              onClick={handleLogin}
              className="px-6 py-3 bg-gray-600 text-white rounded-md hover:bg-gray-700 transition"
            >
              Login
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default LandingPage;
