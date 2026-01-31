import React from "react";
import { MessageCircle, MapPin, User } from "lucide-react";
import Image2 from "../../assets/Images/Image2.jpg";

const requests = [
  {
    id: 1,
    role: "Customer",
    name: "Michael Johnson",
    location: "San Francisco",
    rating: "4.5",
    message: "I would like to report an issue with the service. Unfortunately, the quality did not meet my expectations, and I need your assistance to resolve this.",
  },
  {
    id: 2,
    role: "Customer",
    name: "Sarah Williams",
    location: "New York",
    rating: "4.8",
    message: "The delivery was delayed by 3 days. I need to understand the reason and get compensation for the inconvenience caused.",
  },
  {
    id: 3,
    role: "Customer",
    name: "Robert Chen",
    location: "Los Angeles",
    rating: "4.2",
    message: "Product arrived with damaged packaging. Some items inside were also affected. Requesting replacement or refund.",
  },
  {
    id: 4,
    role: "Customer",
    name: "Emma Davis",
    location: "Chicago",
    rating: "4.7",
    message: "I received the wrong item in my order. The size and color don't match what I ordered. Need immediate resolution.",
  },
  {
    id: 5,
    role: "Customer",
    name: "James Wilson",
    location: "Miami",
    rating: "4.0",
    message: "Billing issue - I was charged twice for the same order. Please refund the duplicate charge immediately.",
  },
  {
    id: 6,
    role: "Customer",
    name: "Lisa Anderson",
    location: "Seattle",
    rating: "4.9",
    message: "Technical issue with the app - unable to track my order. The tracking page shows error messages constantly.",
  },
  {
    id: 7,
    role: "Customer",
    name: "David Miller",
    location: "Austin",
    rating: "4.3",
    message: "Customer service was unresponsive to my previous queries. Need escalation to a supervisor for resolution.",
  },
  {
    id: 8,
    role: "Customer",
    name: "Maria Garcia",
    location: "Denver",
    rating: "4.6",
    message: "Subscription cancellation not processed despite multiple requests. Still getting charged monthly.",
  },
];

const CustomerOtherRequests = () => {
  return (
    <div className="w-full max-w-[1440px] mx-auto py-6 px-6 pr-50">
      {/* Heading */}
      <h2 className="text-xl sm:text-2xl font-bold text-gray-900 mb-6">
        Other Requests
      </h2>

      {/* Grid → ALWAYS 2 CARDS PER ROW */}
      <div className="grid grid-cols-2 gap-6">
        {requests.map((item) => (
          <div
            key={item.id}
            className="w-full h-[160px] rounded-[10px] bg-white shadow-md"
          >
            <div className="h-full flex flex-col p-4 gap-2">
              {/* Top */}
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <img
                    src={Image2}
                    alt={item.name}
                    className="w-10 h-10 rounded-full object-cover border"
                  />
                  <div>
                    <h3 className="text-sm font-bold text-gray-900">
                      {item.name}
                    </h3>
                    <div className="flex items-center gap-1 text-xs text-gray-500">
                      <User className="w-3 h-3" />
                      <span>{item.role}</span>
                      <span className="mx-1 text-gray-300">•</span>
                      <MapPin className="w-3 h-3" />
                      <span>{item.location}</span>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-1">
                  <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
                    <MessageCircle size={20} />
                  </button>
                </div>
              </div>

              {/* Message */}
              <div className="flex-1">
                <div className="py-4 h-full">
                  <p className="text-xs text-gray-700 leading-relaxed line-clamp-4">
                    {item.message}
                  </p>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomerOtherRequests;