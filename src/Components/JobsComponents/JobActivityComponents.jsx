import React, { useState } from "react";
import {
  Languages,
  MapPin,
  MoreVertical,
  MessageCircle,
  Calendar,
} from "lucide-react";
import Image2 from "../../assets/Images/Image2.jpg";
import AssignProviderModal from "./AssignProviderModal.jsx";

const JobActivityComponents = () => {
  const [filter, setFilter] = useState("all");
  const [openAssignModal, setOpenAssignModal] = useState(false);

  const jobCards = [
    {
      id: 1,
      title: "Plumber",
      jobId: "#JCD001",
      status: "Cancelation request",
      client: "Michael John",
      languages: "English, Hindi",
      location: "San Francisco",
      date: "Wednesday - April 23, 2025",
      time: "11:30 AM",
      jobType: "Plumber",
      image: Image2,
      statusColor: "bg-[#FF383C]",
      statusBg: "bg-[#FF383C26]",
      statusText: "text-[#FF383C]",
      Button: "Cancel Job",
    },
    {
      id: 2,
      title: "Electrician",
      jobId: "#JCD002",
      status: "Scheduled",
      client: "Sarah Johnson",
      languages: "English, Spanish",
      location: "New York City",
      date: "Thursday - April 24, 2025",
      time: "02:45 PM",
      jobType: "Electrician",
      image: Image2,
      statusColor: "bg-[#CB30E0]",
      statusBg: "bg-[#CB30E026]",
      statusText: "text-[#CB30E0]",
      Button: "Start Job",
    },
    {
      id: 3,
      title: "Carpenter",
      jobId: "#JCD003",
      status: "Awaiting provider",
      client: "Robert Wilson",
      languages: "English, French",
      location: "Chicago",
      date: "Friday - April 25, 2025",
      time: "10:00 AM",
      jobType: "Carpenter",
      image: Image2,
      statusColor: "bg-[#FFCC00]",
      statusBg: "bg-[#FFCC0026]",
      statusText: "text-[#FFCC00]",
      Button: "Assign Provider",
    },
    {
      id: 4,
      title: "Plumber",
      jobId: "#JCD001",
      status: "Completed",
      client: "Michael John",
      languages: "English, Hindi",
      location: "San Francisco",
      date: "Wednesday - April 23, 2025",
      time: "11:30 AM",
      jobType: "Plumber",
      image: Image2,
      statusColor: "bg-[#34C759]",
      statusBg: "bg-[#34C75926]",
      statusText: "text-[#34C759]",
      Button: "View Details",
    },
    {
      id: 5,
      title: "Electrician",
      jobId: "#JCD002",
      status: "pending",
      client: "Sarah Johnson",
      languages: "English, Spanish",
      location: "New York City",
      date: "Thursday - April 24, 2025",
      time: "02:45 PM",
      jobType: "Electrician",
      AssignedProviderName: "John Smith",
      AssignedProviderID: "#JCD0231",
      image: Image2,
      statusColor: "bg-[#00C3D0]",
      statusBg: "bg-[#00C3D026]",
      statusText: "text-[#00C3D0]",
      Button: "Start Job",
    },
    {
      id: 6,
      title: "Carpenter",
      jobId: "#JCD003",
      status: "In progress",
      client: "Robert Wilson",
      languages: "English, French",
      location: "Chicago",
      date: "Friday - April 25, 2025",
      time: "10:00 AM",
      jobType: "Carpenter",
      AssignedProviderName: "John Smith",
      AssignedProviderID: "#JCD0231",
      image: Image2,
      statusColor: "bg-[#AC7F5E]",
      statusBg: "bg-[#AC7F5E26]",
      statusText: "text-[#AC7F5E]",
      Button: "Complete Job",
    },
  ];

  // Calculate job counts based on status
  const allJobCount = jobCards.length;
  const completedJobsCount = jobCards.filter(
    (job) => job.status === "Completed",
  ).length;
  const cancelationJobsCount = jobCards.filter(
    (job) => job.status === "Cancelation request",
  ).length;
  const scheduledJobsCount = jobCards.filter(
    (job) => job.status === "Scheduled",
  ).length;
  const awaitingJobsCount = jobCards.filter(
    (job) => job.status === "Awaiting provider",
  ).length;
  const pendingJobsCount = jobCards.filter(
    (job) => job.status === "pending",
  ).length;
  const inProgressJobsCount = jobCards.filter(
    (job) => job.status === "In progress",
  ).length;

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  // Filter jobs based on selected filter
  const filteredJobs = jobCards.filter((job) => {
    if (filter === "all") return true;
    if (filter === "Completed") return job.status === "Completed";
    if (filter === "Cancelation") return job.status === "Cancelation request";
    if (filter === "Scheduled") return job.status === "Scheduled";
    if (filter === "Awaiting") return job.status === "Awaiting provider";
    if (filter === "Pending") return job.status === "pending";
    if (filter === "InProgress") return job.status === "In progress";
    return true;
  });

  const JobCard = ({ job }) => (
    <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden hover:shadow-lg transition-all duration-300 hover:border-[#515DEF]/20">
      {/* Card Header */}
      <div className="p-4 sm:p-5 lg:p-6">
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
      <div className="p-4 sm:p-5 lg:p-6 space-y-3">
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
        {/* ✅ Assign Provider ONLY id 5 & 6 */}
        {(job.id === 5 || job.id === 6) && (
          <>
            <div className="flex justify-between">
              <p className="text-xs text-gray-500">Assigned Provider Name</p>
              <p className="font-medium text-gray-900 text-xs sm:text-sm">
                {job.AssignedProviderName}
              </p>
            </div>
            <div className="flex justify-between">
              <p className="text-xs text-gray-500">Assigned Provider ID</p>
              <p className="font-medium text-gray-900 text-xs sm:text-sm">
                {job.AssignedProviderID}
              </p>
            </div>
          </>
        )}
      </div>

      <div className="p-4 flex items-center gap-3 ">
        <button
          onClick={() => {
            if (job.Button === "Assign Provider") {
              setOpenAssignModal(true);
            } else {
              console.log(`${job.Button} clicked for ${job.jobId}`);
            }
          }}
          className="w-full bg-[#515DEF] text-white font-medium py-2 px-4 rounded-full hover:bg-[#3F4BDA] transition-colors duration-200 flex items-center justify-center text-sm sm:text-base shadow-sm hover:shadow-md"
        >
          {job.Button}
        </button>

        <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
          <MessageCircle size={20} />
        </button>
      </div>
    </div>
  );

  return (
    <div className="w-full max-w-[1440px] mx-auto py-12 pr-12">
      {/* All Jobs */}
      <section className="mb-8 sm:mb-12 lg:mb-16">
        {/* Header with heading on left and calendar/filter on right */}
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center mb-6 gap-4">
          {/* Left side - Heading */}
          <div className="flex-1">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              All Jobs
            </h2>
          </div>

          {/* Right side - Calendar and Filter */}
          <div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 w-full lg:w-auto">
            {/* Calendar */}
            <div className="flex items-center bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 w-full sm:w-auto">
              <input
                type="date"
                className="bg-transparent border-none focus:outline-none w-full text-sm"
              />
            </div>

            {/* Filter Dropdown */}
            <div className="w-full sm:w-auto">
              <select
                value={filter}
                onChange={handleFilterChange}
                className="w-full bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#515DEF]"
              >
                <option value="all">All Jobs ({allJobCount})</option>
                <option value="Completed">
                  Completed Jobs ({completedJobsCount})
                </option>
                <option value="Cancelation">
                  Cancelation Request ({cancelationJobsCount})
                </option>
                <option value="Scheduled">
                  Scheduled Jobs ({scheduledJobsCount})
                </option>
                <option value="Awaiting">
                  Awaiting Provider ({awaitingJobsCount})
                </option>
                <option value="Pending">
                  Pending Jobs ({pendingJobsCount})
                </option>
                <option value="InProgress">
                  In Progress Jobs ({inProgressJobsCount})
                </option>
              </select>
            </div>
          </div>
        </div>

        {/* Job Cards Grid */}
        <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8 items-start">
          {filteredJobs.map((job) => (
            <JobCard key={job.id} job={job} />
          ))}
        </div>
        <AssignProviderModal
          isOpen={openAssignModal}
          onClose={() => setOpenAssignModal(false)}
        />
      </section>
    </div>
  );
};

export default JobActivityComponents;
