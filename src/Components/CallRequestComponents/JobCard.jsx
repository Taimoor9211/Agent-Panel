import React from "react";
import { Languages, MapPin, MessageCircle } from "lucide-react";

const JobCard = ({ job, handleMarkAsDone }) => {
  return (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 h-full flex flex-col hover:border-[#515DEF]/20">
      {/* Card Header */}
      <div className="p-4 sm:p-5 lg:p-6 flex-grow">
        <div className="flex justify-between items-start mb-3 sm:mb-4">
          <div className="flex-1">
            <h3 className="text-base sm:text-lg font-bold text-gray-900 line-clamp-1">
              {job.title}
            </h3>
            <span
              className={`px-2 sm:px-3 py-1 ${job.statusBg} ${job.statusText} text-xs font-semibold rounded-full flex items-center w-fit mt-1`}
            >
              <span
                className={`w-1.5 h-1.5 sm:w-2 sm:h-2 ${job.statusColor} rounded-full mr-1.5 sm:mr-2`}
              ></span>
              {job.status}
            </span>
          </div>
          <p className="text-xs sm:text-sm text-gray-500 ml-2 whitespace-nowrap">
            {job.jobId}
          </p>
        </div>

        {/* Client Info */}
        <div className="flex items-center gap-3 sm:gap-4 mt-4">
          <img
            src={job.image}
            alt={job.client}
            className="w-12 h-12 sm:w-14 sm:h-14 rounded-full object-cover border-2 border-gray-100 flex-shrink-0"
          />

          <div className="flex-1 min-w-0">
            <h4 className="font-bold text-gray-900 text-sm sm:text-base truncate">
              {job.client}
            </h4>

            <div className="flex flex-wrap sm:flex-nowrap items-center justify-between gap-2 mt-2">
              {/* Languages */}
              <div className="flex items-center gap-1.5">
                <Languages className="w-2 h-2 text-gray-400" />
                <span className="text-[9px] text-gray-600 truncate">
                  {job.languages}
                </span>
              </div>

              {/* Location */}
              <div className="flex items-center gap-1.5">
                <MapPin className="w-2 h-2 text-gray-400" />
                <span className="text-[9px] text-gray-600 truncate">
                  {job.location}
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Divider */}
      <div className="px-4 sm:px-5 lg:px-6">
        <hr className="border-gray-200" />
      </div>

      {/* Job Details */}
      <div className="p-4 sm:p5 lg:p-6 space-y-3">
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">Date</p>
          <p className="font-medium text-gray-900 text-xs sm:text-sm text-right truncate pl-2">
            {job.date}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">Time</p>
          <p className="font-medium text-gray-900 text-xs sm:text-sm">
            {job.time}
          </p>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-xs text-gray-500">Job Type</p>
          <p className="font-medium text-gray-900 text-xs sm:text-sm">
            {job.jobType}
          </p>
        </div>
      </div>

      {/* Button - Only show if not completed */}
      {!job.isCompleted && (
        <div className="p-4 flex items-center gap-3">
          <button 
            onClick={() => handleMarkAsDone(job.id)}
            className="w-full bg-[#515DEF] text-white font-medium py-2 px-4 rounded-full hover:bg-[#3F4BDA] transition-colors duration-200 flex items-center justify-center text-sm sm:text-base shadow-sm hover:shadow-md"
          >
            Mark as Done
          </button>
          <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
            <MessageCircle size={20} />
          </button>
        </div>
      )}
    </div>
  );
};

export default JobCard;