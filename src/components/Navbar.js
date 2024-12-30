import React from 'react';
import { Search } from 'lucide-react';
import Logo from '../images/Logo.png';

const Navbar = () => {
  return (
    <nav className="bg-gray-50 border-b">
      {/* Top Bar */}
      <div className="hidden lg:block px-24 border-b">
        <div className="container mx-auto px-4 py-2 flex justify-between items-center text-sm">
          <div className="flex space-x-6">
            <a href="/" className="text-blue-600">Home</a>
            <a href="/find-job">Find Job</a>
            <a href="/employers">Employers</a>
            <a href="/candidates">Candidates</a>
            <a href="/pricing">Pricing Plans</a>
            <a href="/support">Customer Supports</a>
          </div>
          <div className="flex items-center space-x-4">
            <div className="flex items-center">
              <span className="text-gray-600">+1-202-555-0178</span>
            </div>
            <div className="flex items-center">
              <img src="/us-flag.png" alt="US" className="w-4 h-4 mr-2" />
              <span>English</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation */}
      <div className="container mx-auto px-28 py-4"> {/* Update 1 */}
        <div className="flex justify-between items-center">
          {/* Logo and Location */}
          <div className="flex items-center space-x-4"> {/* Update 3 */}
            <a href="/" className="flex items-center space-x-2">
              <img src={Logo} alt="MyJob" className="h-8" />
            </a>
            <div className="hidden lg:flex items-center space-x-2">
              <img src="/india-flag.png" alt="India" className="w-5 h-5" />
              <span>India</span>
            </div>
          </div>

          {/* Search Bar - Shown on all pages except home */}
          <div className="hidden lg:flex flex-1 max-w-2xl mx-16"> {/* Update 2 */}
            <div className="relative w-full">
              <input
                type="text"
                placeholder="Job title, keyword, company"
                className="w-full px-6 py-2.5 border border-gray-200 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white"
              />
              <div className="absolute right-4 top-1/2 transform -translate-y-1/2 text-gray-400">
                <Search className="h-5 w-5" />
              </div>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <a href="/signin" className="text-gray-700 hover:text-blue-600">
              Sign in
            </a>
            
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

