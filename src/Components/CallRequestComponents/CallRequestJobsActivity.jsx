import React, { useState } from "react";
import { Languages, MapPin, MessageCircle } from "lucide-react";
import Image2 from "../../assets/Images/Image2.jpg";
import PopupModal from "./PopupModal";
import JobCard from "./JobCard";

const CallRequestJobsActivity = () => {
  const [filter, setFilter] = useState("all");
  const [showPopup, setShowPopup] = useState(false);
  const [selectedJobId, setSelectedJobId] = useState(null);
  const [keyPoints, setKeyPoints] = useState("");
  
  const [jobs, setJobs] = useState([
    {
      id: 1,
      title: "Plumber",
      jobId: "#JCD001",
      status: "Call request",
      client: "Michael John",
      languages: "English, Hindi",
      location: "San Francisco",
      date: "Wednesday - April 23, 2025",
      time: "11:30 AM",
      jobType: "Plumber",
      image: Image2,
      statusColor: "bg-[#EB8455]",
      statusBg: "bg-[#EB845526]",
      statusText: "text-[#EB8455]",
      isCompleted: false,
    },
    {
      id: 2,
      title: "Electrician",
      jobId: "#JCD002",
      status: "Call request",
      client: "Sarah Johnson",
      languages: "English, Spanish",
      location: "New York City",
      date: "Thursday - April 24, 2025",
      time: "02:45 PM",
      jobType: "Electrician",
      image: Image2,
      statusColor: "bg-[#EB8455]",
      statusBg: "bg-[#EB845526]",
      statusText: "text-[#EB8455]",
      isCompleted: false,
    },
    {
      id: 3,
      title: "Carpenter",
      jobId: "#JCD003",
      status: "Call request",
      client: "Robert Wilson",
      languages: "English, French",
      location: "Chicago",
      date: "Friday - April 25, 2025",
      time: "10:00 AM",
      jobType: "Carpenter",
      image: Image2,
      statusColor: "bg-[#EB8455]",
      statusBg: "bg-[#EB845526]",
      statusText: "text-[#EB8455]",
      isCompleted: true,
    },
    {
      id: 4,
      title: "Plumber",
      jobId: "#JCD004",
      status: "Call request",
      client: "Michael John",
      languages: "English, Hindi",
      location: "San Francisco",
      date: "Wednesday - April 23, 2025",
      time: "11:30 AM",
      jobType: "Plumber",
      image: Image2,
      statusColor: "bg-[#EB8455]",
      statusBg: "bg-[#EB845526]",
      statusText: "text-[#EB8455]",
      isCompleted: false,
    },
    {
      id: 5,
      title: "Electrician",
      jobId: "#JCD005",
      status: "Call request",
      client: "Sarah Johnson",
      languages: "English, Spanish",
      location: "New York City",
      CallerType: "Customer",
      date: "Thursday - April 24, 2025",
      time: "02:45 PM",
      jobType: "Electrician",
      image: Image2,
      statusColor: "bg-[#EB8455]",
      statusBg: "bg-[#EB845526]",
      statusText: "text-[#EB8455]",
      isCompleted: true,
    },
    {
      id: 6,
      title: "Carpenter",
      jobId: "#JCD006",
      status: "Call request",
      client: "Robert Wilson",
      languages: "English, French",
      location: "Chicago",
      CallerType: "Customer",
      date: "Friday - April 25, 2025",
      time: "10:00 AM",
      jobType: "Carpenter",
      image: Image2,
      statusColor: "bg-[#EB8455]",
      statusBg: "bg-[#EB845526]",
      statusText: "text-[#EB8455]",
      isCompleted: false,
    },
    {
      id: 7,
      title: "Carpenter",
      jobId: "#JCD003",
      status: "Call request",
      client: "Robert Wilson",
      languages: "English, French",
      location: "Chicago",
      CallerType: "Customer",
      date: "Friday - April 25, 2025",
      time: "10:00 AM",
      jobType: "Carpenter",
      image: Image2,
      statusColor: "bg-[#EB8455]",
      statusBg: "bg-[#EB845526]",
      statusText: "text-[#EB8455]",
      isCompleted: true,
    },
    {
      id: 8,
      title: "Electrician",
      jobId: "#JCD005",
      status: "Call request",
      client: "Sarah Johnson",
      languages: "English, Spanish",
      location: "New York City",
      CallerType: "Customer",
      date: "Thursday - April 24, 2025",
      time: "02:45 PM",
      jobType: "Electrician",
      image: Image2,
      statusColor: "bg-[#EB8455]",
      statusBg: "bg-[#EB845526]",
      statusText: "text-[#EB8455]",
      isCompleted: true,
    },
    {
      id: 9,
      title: "Carpenter",
      jobId: "#JCD003",
      status: "Call request",
      client: "Robert Wilson",
      languages: "English, French",
      location: "Chicago",
      CallerType: "Customer",
      date: "Friday - April 25, 2025",
      time: "10:00 AM",
      jobType: "Carpenter",
      image: Image2,
      statusColor: "bg-[#EB8455]",
      statusBg: "bg-[#EB845526]",
      statusText: "text-[#EB8455]",
      isCompleted: true,
    },
    {
      id: 10,
      title: "Electrician",
      jobId: "#JCD005",
      status: "Call request",
      client: "Sarah Johnson",
      languages: "English, Spanish",
      location: "New York City",
      CallerType: "Customer",
      date: "Thursday - April 24, 2025",
      time: "02:45 PM",
      jobType: "Electrician",
      image: Image2,
      statusColor: "bg-[#EB8455]",
      statusBg: "bg-[#EB845526]",
      statusText: "text-[#EB8455]",
      isCompleted: true,
    },
    {
      id: 11,
      title: "Plumber",
      jobId: "#JCD001",
      status: "Call request",
      client: "Michael John",
      languages: "English, Hindi",
      location: "San Francisco",
      CallerType: "Customer",
      date: "Wednesday - April 23, 2025",
      time: "11:30 AM",
      jobType: "Plumber",
      image: Image2,
      statusColor: "bg-[#EB8455]",
      statusBg: "bg-[#EB845526]",
      statusText: "text-[#EB8455]",
      isCompleted: false,
    },
    {
      id: 12,
      title: "Electrician",
      jobId: "#JCD002",
      status: "Call request",
      client: "Sarah Johnson",
      languages: "English, Spanish",
      location: "New York City",
      CallerType: "Customer",
      date: "Thursday - April 24, 2025",
      time: "02:45 PM",
      jobType: "Electrician",
      image: Image2,
      statusColor: "bg-[#EB8455]",
      statusBg: "bg-[#EB845526]",
      statusText: "text-[#EB8455]",
      isCompleted: false,
    },
  ]);

  const handleFilterChange = (e) => {
    setFilter(e.target.value);
  };

  const handleMarkAsDone = (jobId) => {
    setSelectedJobId(jobId);
    setShowPopup(true);
    setKeyPoints("");
  };

  const handleConfirmMarkAsDone = () => {
    if (!keyPoints.trim()) {
      alert("Please add key points before proceeding.");
      return;
    }
    
    setJobs(prevJobs => 
      prevJobs.map(job => 
        job.id === selectedJobId 
          ? { 
              ...job, 
              isCompleted: true 
            } 
          : job
      )
    );
    setShowPopup(false);
    setSelectedJobId(null);
    setKeyPoints("");
  };

  const handleCancelPopup = () => {
    setShowPopup(false);
    setSelectedJobId(null);
    setKeyPoints("");
  };

  const filteredJobs = filter === "all" 
    ? jobs.filter(job => job.isCompleted === false)
    : filter === "completed" 
      ? jobs.filter(job => job.isCompleted === true)
      : [];

  const incompleteJobsCount = jobs.filter(job => job.isCompleted === false).length;
  const completedJobsCount = jobs.filter(job => job.isCompleted === true).length;

  return (
    <>
      <PopupModal
        showPopup={showPopup}
        keyPoints={keyPoints}
        setKeyPoints={setKeyPoints}
        handleCancelPopup={handleCancelPopup}
        handleConfirmMarkAsDone={handleConfirmMarkAsDone}
      />

      <div className="w-full max-w-[1440px] mx-auto py-12 pr-12">
        <section className="mb-8 sm:mb-12 lg:mb-16">
          <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center mb-6 gap-4">
            <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
              Call request
            </h2>
            <div className='flex items-center space-x-3'>
              <select 
                value={filter}
                onChange={handleFilterChange}
                className='bg-white border border-gray-300 rounded-lg px-3 sm:px-4 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-[#515DEF]'
              >
                <option value="all">All Call Requests ({incompleteJobsCount})</option>
                <option value="completed">Completed Calls ({completedJobsCount})</option>
              </select>
            </div>
          </div>

          <div className="grid grid-cols-1 xs:grid-cols-2 md:grid-cols-2 xl:grid-cols-3 gap-4 sm:gap-6 lg:gap-8">
            {filteredJobs.length > 0 ? (
              filteredJobs.map((job) => (
                <JobCard 
                  key={job.id} 
                  job={job} 
                  handleMarkAsDone={handleMarkAsDone} 
                />
              ))
            ) : (
              <div className="col-span-full text-center py-12">
                <p className="text-gray-500 text-lg">No jobs found for the selected filter</p>
              </div>
            )}
          </div>
        </section>
      </div>
    </>
  );
};

export default CallRequestJobsActivity;