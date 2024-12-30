import React from 'react';
import { FaFacebookF, FaGoogle } from 'react-icons/fa';

const ForgetPassword = () => {
  return (
    <div className="flex min-h-screen">
      {/* Left side - Form */}
      <div className="w-full lg:w-1/2 p-8 lg:p-12">
        <div className="max-w-md mx-auto">
          {/* Logo */}
          <div className="mb-8">
            <img src="/myjob-logo.png" alt="MyJob Logo" className="h-8" />
          </div>

          {/* Header */}
          <h1 className="text-2xl font-semibold mb-2">Forget Password</h1>
          <div className="text-sm text-gray-600 mb-2">
            Go back to <a href="/signin" className="text-blue-600 hover:underline">Sign in</a>
          </div>
          <div className="text-sm text-gray-600 mb-8">
            Don't have account? <a href="/create-account" className="text-blue-600 hover:underline">Create Account</a>
          </div>

          {/* Form */}
          <form className="space-y-4">
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input 
                type="email" 
                id="email" 
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
            </div>

            <button 
              type="submit" 
              className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
            >
              Reset Password
              <svg 
                className="ml-2 h-4 w-4" 
                fill="none" 
                stroke="currentColor" 
                viewBox="0 0 24 24"
              >
                <path 
                  strokeLinecap="round" 
                  strokeLinejoin="round" 
                  strokeWidth={2} 
                  d="M9 5l7 7-7 7" 
                />
              </svg>
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">or</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button 
                type="button" 
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <FaFacebookF className="mr-2 text-blue-600" />
                Sign in with Facebook
              </button>
              <button 
                type="button" 
                className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50"
              >
                <FaGoogle className="mr-2 text-red-500" />
                Sign in with Google
              </button>
            </div>
          </form>
        </div>
      </div>

      {/* Right side - Stats */}
      <div className="hidden lg:block lg:w-1/2 bg-gradient-to-b from-blue-800 to-blue-900 p-12 text-white">
        <div className="h-full flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-16">
            Over 175,324 candidates<br />
            waiting for good employees.
          </h2>
          <div className="grid grid-cols-3 gap-8">
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">175,324</div>
              <div className="text-sm text-gray-300">Live Jobs</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">97,354</div>
              <div className="text-sm text-gray-300">Companies</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold mb-2">7,532</div>
              <div className="text-sm text-gray-300">New Jobs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ForgetPassword;

