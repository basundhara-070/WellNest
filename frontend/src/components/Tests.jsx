import React from 'react';

const Tests = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-blue-50 to-cyan-50 font-sans text-center py-16">
      {/* Heading */}
      <h1 className="text-4xl md:text-5xl font-semibold mb-8 text-gray-800">
        Your Mental Health Matters
      </h1>

      {/* Buttons Container */}
      <div className="flex flex-col md:flex-row gap-6">
        {/* Depression Test Button */}
        <button className="bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
          <span>Depression Test</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2"
            />
          </svg>
        </button>

        {/* Anxiety Test Button */}
        <button className="bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
          <span>Anxiety Test</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
        </button>

        {/* OCD Test Button */}
        <button className="bg-green-500 hover:bg-green-600 text-white font-semibold py-3 px-8 rounded-lg transform transition-all duration-300 hover:scale-105 hover:shadow-lg flex items-center justify-center gap-2">
          <span>OCD Test</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
            />
          </svg>
        </button>
      </div>
    </div>
  );
};

export default Tests;