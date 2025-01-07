import React from 'react';
import illustration from '../images/Illustration.png'
import briefcase from '../images/briefcase-duotone 1 (1).png'
import buildings from '../images/buildings-duotone 1.png'
import users from '../images/users-duotone 1.png'
// import Logo from '../images/Logo.png'
import { Search, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const suggestions = ['Designer', 'Programming', 'Digital Marketing', 'Video', 'Animation'];

  return (
    <div className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <div className="container mx-auto px-4 py-16 flex items-center justify-center min-h-[calc(100vh-80px)]">
        <div className="flex flex-col lg:flex-row items-center justify-between max-w-7xl w-full">
          {/* Left Content */}
          <div className="lg:w-1/2 mb-12 lg:mb-0 lg:pr-8">
            <h1 className="text-4xl lg:text-5xl font-bold mb-4">
              Find a job that suits<br />
              your interest & skills.
            </h1>
            <p className="text-gray-600 mb-8">
              Aliquam vitae turpis in diam convallis finibus in at risus. Nullam<br />
              in scelerisque leo, eget sollicitudin velit bestibulum.
            </p>

            {/* Search Form */}
            <div className="bg-white p-2 rounded-lg shadow-sm flex flex-col sm:flex-row gap-2">
              <div className="flex-1 relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Job title, keyword..."
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <div className="flex-1 relative">
                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Your Location"
                  className="w-full pl-10 pr-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>
              <button
                className="bg-blue-600 text-white px-8 py-2 rounded-md hover:bg-blue-700 transition duration-300 whitespace-nowrap"
                onClick={() => navigate('/find-job')}
              >
                Find Job
              </button>
            </div>

            {/* Suggestions */}
            <div className="mt-4 flex flex-wrap gap-2">
              <span className="text-sm text-gray-600">Suggestion:</span>
              {suggestions.map((suggestion, index) => (
                <a
                  key={index}
                  href={`/search?q=${suggestion}`}
                  className="text-sm text-gray-600 hover:text-blue-600"
                >
                  {suggestion}
                  {index < suggestions.length - 1 && ','}
                </a>
              ))}
            </div>
          </div>

          {/* Right Illustration */}
          <div className="lg:w-1/2 lg:pl-8">
            <img
              src={illustration}
              alt="Job Search Illustration"
              className="w-full max-w-lg mx-auto"
            />
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="container mx-auto px-28 py-16">
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4">
            <img src={briefcase} alt="Jobs" className="w-8 h-8" />
            <div>
              <div className="text-xl font-bold">1,75,324</div>
              <div className="text-gray-600">Live Job</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4">
            <img src={buildings} alt="Companies" className="w-8 h-8" />
            <div>
              <div className="text-xl font-bold">97,354</div>
              <div className="text-gray-600">Companies</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4">
            <img src={users} alt="Candidates" className="w-8 h-8" />
            <div>
              <div className="text-xl font-bold">38,47,154</div>
              <div className="text-gray-600">Candidates</div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-sm flex items-center space-x-4">
            <img src={briefcase} alt="New Jobs" className="w-8 h-8" />
            <div>
              <div className="text-xl font-bold">7,532</div>
              <div className="text-gray-600">New Jobs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

