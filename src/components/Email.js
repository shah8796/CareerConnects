import React from 'react';

const EmailVerification = () => {
  const userEmail = "emailaddress@gmail.com"; // This would typically come from your app's state/props

  return (
    <div className="min-h-screen flex flex-col items-center p-8">
      {/* Logo */}
      <div className="mb-12">
        <img src="/myjob-logo.png" alt="MyJob Logo" className="h-8" />
      </div>

      <div className="w-full max-w-md">
        {/* Header */}
        <h1 className="text-2xl font-semibold text-center mb-4">Email Verification</h1>
        
        {/* Description */}
        <p className="text-sm text-gray-500 text-center mb-8">
          We've sent an verification to <span className="text-gray-700">{userEmail}</span> to verify your 
          email address and activate your account.
        </p>

        {/* Form */}
        <form className="space-y-4">
          <div>
            <input 
              type="text" 
              placeholder="Verification Code"
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500" 
              required 
            />
          </div>

          <button 
            type="submit" 
            className="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition duration-300 flex items-center justify-center"
          >
            Verify My Account
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

          <div className="text-center text-sm">
            Didn't receive any code?{" "}
            <button 
              type="button" 
              className="text-blue-600 hover:underline"
              onClick={() => {
                // Handle resend logic here
                console.log("Resending verification code");
              }}
            >
              Resends
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EmailVerification;

