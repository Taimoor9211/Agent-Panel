import React from 'react'
import { useState } from 'react';

const WelcomeComponent = () => {
    const [status, setStatus] = useState("Online");
    
      const options = ["Online", "Offline", "Break"];
  return (
    <div className="max-w-[1440px] mx-auto flex flex-col sm:flex-row items-start sm:items-center justify-between py-4 pr-6">
      
      {/* Left */}
      <div className="w-full sm:w-auto">
        <h1 className="text-xl sm:text-2xl font-bold text-gray-900">
          Welcome Back, Mehdi Hassan!
        </h1>
        <p className="text-gray-500 text-sm sm:text-base mt-1">
          Let's dive in and get things done.
        </p>
      </div>

      {/* Right */}
      <div className="flex flex-col sm:flex-row gap-3 sm:gap-5 items-start sm:items-center w-full sm:w-auto">
        <div className="bg-[#5F8EFD26] p-1 rounded-full flex w-fit">
          {options.map((item) => (
            <button
              key={item}
              onClick={() => setStatus(item)}
              className={`px-6 py-2 rounded-full text-sm font-medium transition-all duration-300
                ${
                  status === item
                    ? "bg-[#5F8EFD] text-white shadow"
                    : "text-gray-400 hover:text-gray-600"
                }`}
            >
              {item}
            </button>
          ))}
        </div>
      </div>
    </div>
  )
}

export default WelcomeComponent