import React from 'react';

const ReviewsAndRatings = () => {
  const ratings = {
    service: 5,
    reliability: 5,
    punctuality: 5,
    solution: 5,
  };

  const renderStars = (count) => {
    return Array.from({ length: 5 }, (_, index) => (
      <span
        key={index}
        className={`cursor-pointer text-lg sm:text-xl md:text-2xl lg:text-3xl ${
          index < count ? "text-blue-600" : "text-gray-300"
        }`}
      >
        ★
      </span>
    ));
  };

  const ratingItems = [
    { label: "Service", value: ratings.service },
    { label: "Reliability", value: ratings.reliability },
    { label: "Punctuality", value: ratings.punctuality },
    { label: "Solution", value: ratings.solution },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto">
      <div className="w-full max-w-[383px] mb-6 md:mb-8">
        <h1 className="text-xl sm:text-2xl font-bold">How was your experience?</h1>
        <p className="text-gray-600 text-sm sm:text-base">Your feedback helps us improve.</p>
      </div>

      <div className="w-full max-w-[383px] mb-6 md:mb-8 space-y-4 sm:space-y-6">
        {ratingItems.map((item) => (
          <div key={item.label} className="flex justify-between items-center text-center">
            <h3 className="font-semibold text-sm sm:text-base md:text-lg">{item.label}</h3>
            <div className="ml-2 sm:ml-4">{renderStars(item.value)}</div>
          </div>
        ))}
      </div>

      <div className="w-full max-w-[1040px] mb-6 md:mb-8">
        <h2 className="font-semibold text-sm sm:text-base md:text-lg mb-2 sm:mb-3">Add comment</h2>
        <textarea
          className="w-full h-[120px] sm:h-[140px] md:h-[150px] bg-[#F5F5F5] rounded-lg p-3 sm:p-4 border border-gray-300 text-sm sm:text-base"
          placeholder="Share your thoughts or suggestions…"
        />
      </div>

      <div className="w-full max-w-[200px]">
        <button className="w-full h-[36px] sm:h-[40px] bg-blue-600 text-white font-medium rounded-full hover:bg-blue-700 transition-colors duration-300 text-sm sm:text-base">
          Submit Review
        </button>
      </div>
    </div>
  );
};

export default ReviewsAndRatings;