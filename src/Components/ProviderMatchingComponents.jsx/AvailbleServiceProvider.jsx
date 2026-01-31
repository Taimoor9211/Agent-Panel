import React from "react";
import { Clock, Globe, Heart, Star } from "lucide-react";
import Image2 from "../../assets/Images/Image2.jpg";
import CategoryDropdown from "./CategoryDropdown";
import { useNavigate } from "react-router-dom";

const AvailableServiceProvider = () => {
  const navigate = useNavigate();
  const handleClick = () => navigate('/chat-app');

  const serviceProviders = [
    { id: 1, service: "Plumbing services", status: "AVAILABLE", name: "Michael Johnson", distance: "5 miles away", languages: "English, Hindi", rating: 4.8, reviews: 41, Image: Image2 },
    { id: 2, service: "Plumbing services", status: "AVAILABLE", name: "John Carter", distance: "7 miles away", languages: "English, Hindi", rating: 4.6, reviews: 48, Image: Image2 },
    { id: 3, service: "Plumbing services", status: "AVAILABLE", name: "David Miller", distance: "9 miles away", languages: "English, Hindi", rating: 4.8, reviews: 41, Image: Image2 },
    { id: 4, service: "Plumbing services", status: "AVAILABLE", name: "James Wilson", distance: "10 miles away", languages: "English, Hindi", rating: 4.8, reviews: 47, Image: Image2 },
    { id: 5, service: "Plumbing services", status: "AVAILABLE", name: "Michael Johnson", distance: "5 miles away", languages: "English, Hindi", rating: 4.8, reviews: 41, Image: Image2 },
    { id: 6, service: "Plumbing services", status: "AVAILABLE", name: "John Carter", distance: "7 miles away", languages: "English, Hindi", rating: 4.6, reviews: 48, Image: Image2 },
    { id: 7, service: "Plumbing services", status: "AVAILABLE", name: "David Miller", distance: "9 miles away", languages: "English, Hindi", rating: 4.8, reviews: 41, Image: Image2 },
    { id: 8, service: "Plumbing services", status: "AVAILABLE", name: "James Wilson", distance: "10 miles away", languages: "English, Hindi", rating: 4.8, reviews: 47, Image: Image2 },
    { id: 9, service: "Plumbing services", status: "AVAILABLE", name: "Michael Johnson", distance: "5 miles away", languages: "English, Hindi", rating: 4.8, reviews: 41, Image: Image2 },
    { id: 10, service: "Plumbing services", status: "AVAILABLE", name: "John Carter", distance: "7 miles away", languages: "English, Hindi", rating: 4.6, reviews: 48, Image: Image2 },
    { id: 11, service: "Plumbing services", status: "AVAILABLE", name: "David Miller", distance: "9 miles away", languages: "English, Hindi", rating: 4.8, reviews: 41, Image: Image2 },
    { id: 12, service: "Plumbing services", status: "AVAILABLE", name: "James Wilson", distance: "10 miles away", languages: "English, Hindi", rating: 4.8, reviews: 47, Image: Image2 },
  ];

  return (
    <div className="w-full max-w-[1440px] mx-auto p-2">
      <div className="flex flex-col md:flex-row justify-between items-center mb-6">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Available Service Provider</h2>
        <div className="flex flex-col sm:flex-row w-full md:w-auto space-y-2 sm:space-y-0 sm:space-x-2">
          <input
            type="text"
            placeholder="Enter Postcode..."
            className="w-full sm:w-auto border border-gray-300 rounded-md px-3 py-2 text-sm"
          />
          <CategoryDropdown />
        </div>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
        {serviceProviders.map((provider) => (
          <div
            key={provider.id}
            className="rounded-lg p-4 shadow-md border border-gray-100 hover:shadow-lg transition-shadow w-full"
          >
            <div className="flex justify-between items-center mb-2">
              <div>
                <p className="text-sm font-medium">{provider.service}</p>
                <p className="inline-block mt-1 rounded-md bg-blue-100 px-2 py-0.5 text-xs font-semibold text-blue-600">{provider.status}</p>
              </div>
              <div className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-400 cursor-pointer hover:bg-gray-200 hover:text-gray-500 transition">
                <Heart className="h-4 w-4" />
              </div>
            </div>

            <div className="flex items-center mt-3">
              <div className="w-10 h-10 overflow-hidden rounded-full mr-3 flex-shrink-0">
                <img src={provider.Image} alt={provider.name} className="w-full h-full object-cover" />
              </div>
              <div className="overflow-hidden">
                <p className="text-sm font-medium truncate">{provider.name}</p>
                <div className="flex flex-wrap items-center gap-x-2">
                  <div className="flex items-center text-xs text-gray-500 mt-1">
                    <Clock className="h-3 w-3 mr-1 flex-shrink-0" />
                    <span className="truncate">{provider.distance}</span>
                  </div>
                  <div className="flex items-center text-xs text-gray-500">
                    <Globe className="h-3 w-3 mr-1 flex-shrink-0" />
                    <span className="truncate">{provider.languages}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="flex items-center mt-2">
              <Star className="h-3.5 w-3.5 text-yellow-400 fill-yellow-400 flex-shrink-0" />
              <span className="text-xs font-medium ml-1">{provider.rating}</span>
              <span className="text-xs text-gray-500 ml-1">({provider.reviews} reviews)</span>
            </div>

            <div className="flex mt-3 gap-2">
              <button className="flex-1 py-1.5 text-xs border border-blue-600 text-blue-600 rounded-md hover:bg-blue-50 transition-colors">View Profile</button>
              <button
                className="flex-1 py-1.5 text-xs bg-blue-600 text-white rounded-md hover:bg-blue-700 transition-colors"
                onClick={handleClick}
              >
                Chat with Provider
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AvailableServiceProvider;