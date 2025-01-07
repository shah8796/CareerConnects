import React, { useState } from 'react';
import { FaEye, FaEyeSlash, FaFacebookF, FaGoogle } from 'react-icons/fa';

const CreateAccount = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

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
          <h1 className="text-2xl font-semibold mb-2">Create account.</h1>
          <p className="text-sm text-gray-600 mb-8">
            Already have account? <a href="/signin" className="text-blue-600 hover:underline">Log in</a>
          </p>

          {/* Form */}
          <form className="space-y-4">
            <div className="grid grid-cols-2 gap-4">
              <div>
                <label htmlFor="fullName" className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                <input type="text" id="fullName" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
              </div>
              <div>
                <label htmlFor="username" className="block text-sm font-medium text-gray-700 mb-1">Username</label>
                <input type="text" id="username" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
              </div>
            </div>

            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email address</label>
              <input type="email" id="email" className="w-full px-3 py-2 border border-gray-300 rounded-md" required />
            </div>

            <div>
              <label htmlFor="password" className="block text-sm font-medium text-gray-700 mb-1">Password</label>
              <div className="relative">
                <input 
                  type={showPassword ? "text" : "password"} 
                  id="password" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md" 
                  required 
                />
                <button
                  type="button"
                  className="absolute inset-y-0 right-0 pr-3 flex items-center"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash className="text-gray-400" /> : <FaEye className="text-gray-400" />}
                </button>
              </div>
            </div>

            <div>
              <label htmlFor="confirmPassword" className="block text-sm font-medium text-gray-700 mb-1">Confirm Password</label>
              <div className="relative">
                <input 
                  type={showConfirmPassword ? "text" : "password"} 
                  id="confirmPassword" 
                  className="w-full px-3 py-2 border border-gray-300 rounded-md" 
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

            <div className="flex items-center">
              <input type="checkbox" id="terms" className="mr-2" required />
              <label htmlFor="terms" className="text-sm text-gray-600">
                I've read and agree with your <a href="/terms" className="text-blue-600 hover:underline">Terms of Services</a>
              </label>
            </div>

            <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300">
              Create Account
            </button>

            <div className="relative">
              <div className="absolute inset-0 flex items-center">
                <div className="w-full border-t border-gray-300"></div>
              </div>
              <div className="relative flex justify-center text-sm">
                <span className="px-2 bg-white text-gray-500">Or continue with</span>
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button type="button" className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <FaFacebookF className="mr-2 text-blue-600" />
                Facebook
              </button>
              <button type="button" className="flex items-center justify-center px-4 py-2 border border-gray-300 rounded-md shadow-sm text-sm font-medium text-gray-700 bg-white hover:bg-gray-50">
                <FaGoogle className="mr-2 text-red-500" />
                Google
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

export default CreateAccount;

