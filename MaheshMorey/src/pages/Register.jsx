import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const Register = () => {
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    userType: 'farmer'
  });
  const [errors, setErrors] = useState({});
  const [isLoading, setIsLoading] = useState(false);

  const validate = () => {
    const errs = {};
    if (!form.firstName.trim()) errs.firstName = 'First name is required.';
    if (!form.lastName.trim()) errs.lastName = 'Last name is required.';
    if (!form.email.trim()) errs.email = 'Email is required.';
    else if (!/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(form.email)) errs.email = 'Invalid email format.';
    if (!form.phone.trim()) errs.phone = 'Phone number is required.';
    else if (!/^\d{10}$/.test(form.phone.replace(/\D/g, ''))) errs.phone = 'Please enter a valid 10-digit phone number.';
    if (!form.password.trim()) errs.password = 'Password is required.';
    else if (form.password.length < 6) errs.password = 'Password must be at least 6 characters.';
    if (!form.confirmPassword.trim()) errs.confirmPassword = 'Please confirm your password.';
    else if (form.password !== form.confirmPassword) errs.confirmPassword = 'Passwords do not match.';
    return errs;
  };

  const handleChange = e => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = e => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) {
      setErrors(errs);
      return;
    }
    setIsLoading(true);
    // Simulate registration process - in real app, this would be an API call
    setTimeout(() => {
      setIsLoading(false);
      alert('Registration functionality would be implemented here.');
    }, 2000);
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 animate-bgGradient">
      <Header />
      <NavBar />
      <main className="flex-1 w-full max-w-2xl mx-auto px-4 py-10 flex items-center justify-center">
        <div className="bg-white rounded-2xl shadow-2xl border-l-8 border-blue-400/60 p-8 w-full animate-fadeInUp">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg text-center animate-headingFade flex items-center gap-2 justify-center">
            <span className="animate-leafWiggle">📝</span>Register
          </h1>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="firstName" className="block text-sm font-medium text-gray-700 mb-2">
                  First Name
                </label>
                <input
                  type="text"
                  id="firstName"
                  name="firstName"
                  value={form.firstName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition ${errors.firstName ? 'border-red-400' : 'border-gray-300'}`}
                  placeholder="Enter first name"
                />
                {errors.firstName && <span className="text-red-500 text-sm mt-1 block">{errors.firstName}</span>}
              </div>
              <div>
                <label htmlFor="lastName" className="block text-sm font-medium text-gray-700 mb-2">
                  Last Name
                </label>
                <input
                  type="text"
                  id="lastName"
                  name="lastName"
                  value={form.lastName}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition ${errors.lastName ? 'border-red-400' : 'border-gray-300'}`}
                  placeholder="Enter last name"
                />
                {errors.lastName && <span className="text-red-500 text-sm mt-1 block">{errors.lastName}</span>}
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={form.email}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition ${errors.email ? 'border-red-400' : 'border-gray-300'}`}
                  placeholder="Enter your email"
                />
                {errors.email && <span className="text-red-500 text-sm mt-1 block">{errors.email}</span>}
              </div>
              <div>
                <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  value={form.phone}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition ${errors.phone ? 'border-red-400' : 'border-gray-300'}`}
                  placeholder="Enter phone number"
                />
                {errors.phone && <span className="text-red-500 text-sm mt-1 block">{errors.phone}</span>}
              </div>
            </div>
            <div>
              <label htmlFor="userType" className="block text-sm font-medium text-gray-700 mb-2">
                User Type
              </label>
              <select
                id="userType"
                name="userType"
                value={form.userType}
                onChange={handleChange}
                className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition"
              >
                <option value="farmer">Farmer</option>
                <option value="agricultural_officer">Agricultural Officer</option>
                <option value="researcher">Researcher</option>
                <option value="student">Student</option>
                <option value="other">Other</option>
              </select>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-2">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={form.password}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition ${errors.password ? 'border-red-400' : 'border-gray-300'}`}
                  placeholder="Enter password"
                />
                {errors.password && <span className="text-red-500 text-sm mt-1 block">{errors.password}</span>}
              </div>
              <div>
                <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-2">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  value={form.confirmPassword}
                  onChange={handleChange}
                  className={`w-full px-4 py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-green-400 transition ${errors.confirmPassword ? 'border-red-400' : 'border-gray-300'}`}
                  placeholder="Confirm password"
                />
                {errors.confirmPassword && <span className="text-red-500 text-sm mt-1 block">{errors.confirmPassword}</span>}
              </div>
            </div>
            <div className="flex items-center">
              <input
                type="checkbox"
                id="terms"
                className="rounded border-gray-300 text-blue-600 focus:ring-green-400"
                required
              />
              <label htmlFor="terms" className="ml-2 text-sm text-gray-600">
                I agree to the{' '}
                              <Link to="/policies" className="text-blue-600 hover:text-green-700 underline">
                Terms and Conditions
              </Link>
              </label>
            </div>
            <button
              type="submit"
              disabled={isLoading}
              className="w-full bg-gradient-to-r from-green-700 to-blue-600 text-white py-3 px-4 rounded-lg shadow hover:from-green-600 hover:to-blue-500 transition-all duration-300 font-semibold flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isLoading ? (
                <>
                  <span className="animate-spin">⏳</span>Creating account...
                </>
              ) : (
                <>
                  <span className="animate-bounce-slow">✅</span>Create Account
                </>
              )}
            </button>
          </form>
          <div className="mt-6 text-center">
            <p className="text-gray-600">
              Already have an account?{' '}
              <Link to="/login" className="text-blue-600 hover:text-green-700 font-semibold underline transition">
                Login here
              </Link>
            </p>
          </div>
        </div>
      </main>
      <Footer />
      {/* Custom keyframes for advanced subtle animations */}
      <style>{`
        @keyframes bgGradient {
          0%, 100% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
        }
        .animate-bgGradient {
          background-size: 200% 200%;
          animation: bgGradient 12s ease-in-out infinite;
        }
        @keyframes fadeInUp {
          from { opacity: 0; transform: translateY(20px); }
          to { opacity: 1; transform: translateY(0); }
        }
        .animate-fadeInUp {
          animation: fadeInUp 1s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes headingFade {
          from { opacity: 0; letter-spacing: 0.1em; }
          to { opacity: 1; letter-spacing: 0.02em; }
        }
        .animate-headingFade {
          animation: headingFade 1.2s cubic-bezier(.4,0,.2,1) both;
        }
        @keyframes leafWiggle {
          0%, 100% { transform: rotate(-8deg) scale(1.1); }
          50% { transform: rotate(8deg) scale(1.2); }
        }
        .animate-leafWiggle {
          animation: leafWiggle 2.5s infinite;
        }
        @keyframes bounce-slow {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        .animate-bounce-slow {
          animation: bounce-slow 2.2s infinite;
        }
      `}</style>
    </div>
  );
};

export default Register; 