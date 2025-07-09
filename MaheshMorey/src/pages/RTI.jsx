import React from 'react';
import Header from '../components/Header';
import NavBar from '../components/NavBar';
import Footer from '../components/Footer';

const RTI = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 via-green-50 to-blue-100 animate-bgGradient">
      <Header />
      <NavBar />
      <main className="flex-1 w-full max-w-4xl mx-auto px-4 py-10">
        <div className="bg-white rounded-2xl shadow-2xl border-l-8 border-blue-400/60 p-8 animate-fadeInUp">
          <h1 className="text-4xl font-extrabold mb-6 bg-gradient-to-r from-blue-600 via-green-500 to-blue-400 bg-clip-text text-transparent drop-shadow-lg text-center animate-headingFade flex items-center gap-2 justify-center">
            <span className="animate-leafWiggle">📋</span>Right to Information (RTI)
          </h1>
          
          <div className="space-y-6 text-gray-800">
            <div className="bg-gradient-to-r from-blue-50 to-green-50 p-6 rounded-xl border border-blue-200">
              <h2 className="text-2xl font-bold text-blue-800 mb-4 flex items-center gap-2">
                <span className="text-2xl">ℹ️</span>
                About RTI
              </h2>
              <p className="text-lg leading-relaxed">
                The Right to Information Act, 2005 enables citizens to access information under the control of public authorities. 
                The Department of Agriculture & Farmers' Empowerment is committed to transparency and provides information 
                as per the RTI Act provisions.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="bg-white p-6 rounded-xl border border-green-200 shadow-lg">
                <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
                  <span className="text-xl">👤</span>
                  Public Information Officer
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p><strong>Name:</strong> Shri Rajesh Kumar</p>
                  <p><strong>Designation:</strong> Joint Director</p>
                  <p><strong>Phone:</strong> 0674-2391325</p>
                  <p><strong>Email:</strong> rti.agri.od@nic.in</p>
                </div>
              </div>

              <div className="bg-white p-6 rounded-xl border border-blue-200 shadow-lg">
                <h3 className="text-xl font-bold text-blue-800 mb-3 flex items-center gap-2">
                  <span className="text-xl">📝</span>
                  How to Apply
                </h3>
                <div className="space-y-2 text-gray-700">
                  <p>• Submit application in writing</p>
                  <p>• Pay fee of Rs. 10/-</p>
                  <p>• Provide specific information request</p>
                  <p>• Include contact details</p>
                </div>
              </div>
            </div>

            <div className="bg-gradient-to-r from-green-50 to-blue-50 p-6 rounded-xl border border-green-200">
              <h3 className="text-xl font-bold text-green-800 mb-3 flex items-center gap-2">
                <span className="text-xl">📊</span>
                RTI Statistics
              </h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-center">
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-600">150+</div>
                  <div className="text-sm text-gray-600">Applications</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-green-600">95%</div>
                  <div className="text-sm text-gray-600">Response Rate</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-blue-600">7</div>
                  <div className="text-sm text-gray-600">Days Average</div>
                </div>
                <div className="bg-white p-4 rounded-lg shadow">
                  <div className="text-2xl font-bold text-green-600">100%</div>
                  <div className="text-sm text-gray-600">Transparency</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default RTI; 