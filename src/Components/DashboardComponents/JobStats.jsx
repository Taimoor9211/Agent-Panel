import React from 'react';
import { ShoppingCart, CheckCircle, XCircle, Calendar } from 'lucide-react';

const JobStats = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 pr-6 w-full h-full max-w-[1440px] mx-auto">
      <div className="flex flex-col items-start bg-white shadow rounded-lg p-4">
        <div className="flex items-center justify-between w-full">
          <div>
            <h2 className="text-lg font-semibold">Urgent Jobs</h2>
            <h2 className="text-2xl font-bold">200</h2>
          </div>
          <ShoppingCart className="text-blue-600 h-6 w-6 mr-2" />
        </div>
        <div className="flex justify-between w-full mt-4">
          <p className="text-blue-600 cursor-pointer">View all jobs</p>
          <p className="text-gray-500">0.29%</p>
        </div>
      </div>

      <div className="flex flex-col items-start bg-white shadow rounded-lg p-4">
        <div className="flex items-center justify-between w-full">
          
          <div>
            <h2 className="text-lg font-semibold">Active Jobs</h2>
            <h2 className="text-2xl font-bold">150</h2>
          </div>
          <CheckCircle className="text-green-600 h-6 w-6 mr-2" />
        </div>
        <div className="flex justify-between w-full mt-4">
          <p className="text-green-600 cursor-pointer">View all jobs</p>
          <p className="text-gray-500">0.39%</p>
        </div>
      </div>

      <div className="flex flex-col items-start bg-white shadow rounded-lg p-4">
        <div className="flex items-center justify-between w-full">
          <div>
            <h2 className="text-lg font-semibold">Jobs Awaiting provider</h2>
            <h2 className="text-2xl font-bold">30</h2>
          </div>
          <XCircle className="text-red-600 h-6 w-6 mr-2" />
        </div>
        <div className="flex justify-between w-full mt-4">
          <p className="text-red-600 cursor-pointer">View all jobs</p>
          <p className="text-gray-500">0.48%</p>
        </div>
      </div>

      <div className="flex flex-col items-start bg-white shadow rounded-lg p-4">
        <div className="flex items-center justify-between w-full">
          
          <div>
            <h2 className="text-lg font-semibold">Jobs Awaiting Customer Response</h2>
            <h2 className="text-2xl font-bold">30</h2>
          </div>
          <Calendar className="text-yellow-600 h-6 w-6 mr-2" />
        </div>
        <div className="flex justify-between w-full mt-4">
          <p className="text-yellow-600 cursor-pointer">View all jobs</p>
          <p className="text-gray-500">0.15%</p>
        </div>
      </div>
    </div>
  );
};

export default JobStats;
