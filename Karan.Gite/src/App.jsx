import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './pages/Home';
import Marketplace from './pages/Marketplace';
import Weather from './pages/Weather';
import CropAdvisory from './pages/CropAdvisory';
import NewsSchemes from './pages/NewsSchemes';
import Community from './pages/Community';
import AgriCalendar from './pages/AgriCalendar';
import AgroTools from './pages/AgroTools';
import Login from './pages/Login';
import Register from './pages/Register';
import LandingPage from './pages/LandingPage';
import { useAuth } from './contexts/AuthContext';

function App() {
  const { isLoggedIn } = useAuth();

  return (
    <Router>
      <div className="min-h-screen bg-green-100">
        <Navbar />
        <main className="pt-16 mt-6">
          <Routes>
            <Route
              path="/"
              element={isLoggedIn ? <Home /> : <LandingPage />}
            />
            <Route path="/marketplace" element={<Marketplace />} />
            <Route path="/weather" element={<Weather />} />
            <Route path="/advisory" element={<CropAdvisory />} />
            <Route path="/news" element={<NewsSchemes />} />
            <Route path="/community" element={<Community />} />
            <Route path="/calendar" element={<AgriCalendar />} />
            <Route path="/tools" element={<AgroTools />} />
            <Route
              path="/login"
              element={isLoggedIn ? <Navigate to="/" /> : <Login />}
            />
            <Route
              path="/register"
              element={isLoggedIn ? <Navigate to="/" /> : <Register />}
            />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
