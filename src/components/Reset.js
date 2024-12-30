import React, { useState } from 'react';
import { FaEye, FaEyeSlash } from 'react-icons/fa';

const ResetPassword = () => {
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      {/* Logo */}
      <div className="mb-12">
        <img src="/myjob-logo.png" alt="MyJob Logo" className="h-8" />
      </div>

      <div className="w-full max-w-md">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-center mb-2">Reset Password</h1>
        <p className="text-sm text-gray-500 text-center mb-8">
          Quis lectus bibendum metus, ut consectetur ante consectetur sed.
          Suspendisse pulvinar viverra massa sit amet mattis.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <div className="relative">
              <input 
                type={showNewPassword ? "text" : "password"} 
                id="newPassword" 
                placeholder="New Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowNewPassword(!showNewPassword)}
              >
                {showNewPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
              </button>
            </div>
          </div>

          <div>
            <div className="relative">
              <input 
                type={showConfirmPassword ? "text" : "password"} 
                id="confirmPassword" 
                placeholder="Confirm Password"
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
                required 
              />
              <button
                type="button"
                className="absolute inset-y-0 right-0 pr-3 flex items-center"
                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
              >
                {showConfirmPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
              </button>
            </div>
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
        </form>
      </div>
    </div>
  );
};

export default ResetPassword;

