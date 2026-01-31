import { X, Search, Star, Clock, Globe } from "lucide-react";
import React from "react";
import Image2 from "../../assets/Images/Image2.jpg";
import Image3 from "../../assets/Images/Image3.jpg";
import Image4 from "../../assets/Images/Image4.jpg";
import Image5 from "../../assets/Images/Image5.png";
import Image6 from "../../assets/Images/Image6.jpg";
import Image7 from "../../assets/Images/Image7.jpg";
import Image8 from "../../assets/Images/Image8.jpg";
import Image9 from "../../assets/Images/Image9.jpg";
import Image10 from "../../assets/Images/Image10.jpg";

const providers = [
  {
    id: 1,
    name: "John Smith",
    rating: "4.8",
    reviews: "41 reviews",
    distance: "5 mins away",
    languages: "English, Hindi",
    image: Image2,
  },
  {
    id: 2,
    name: "Michael Chen",
    rating: "4.9",
    reviews: "52 reviews",
    distance: "8 mins away",
    languages: "English, Mandarin",
    image: Image3,
  },
  {
    id: 3,
    name: "Sarah Johnson",
    rating: "4.7",
    reviews: "38 reviews",
    distance: "12 mins away",
    languages: "English, Spanish",
    image: Image4,
  },
  {
    id: 4,
    name: "Robert Wilson",
    rating: "4.6",
    reviews: "45 reviews",
    distance: "7 mins away",
    languages: "English, French",
    image: Image5,
  },
  {
    id: 5,
    name: "Emma Davis",
    rating: "4.9",
    reviews: "67 reviews",
    distance: "15 mins away",
    languages: "English, German",
    image: Image6,
  },
  {
    id: 6,
    name: "David Kim",
    rating: "4.8",
    reviews: "49 reviews",
    distance: "10 mins away",
    languages: "English, Korean",
    image: Image7,
  },
  {
    id: 7,
    name: "Olivia Martinez",
    rating: "4.7",
    reviews: "42 reviews",
    distance: "6 mins away",
    languages: "English, Spanish",
    image: Image8,
  },
  {
    id: 8,
    name: "Thomas Brown",
    rating: "4.5",
    reviews: "36 reviews",
    distance: "9 mins away",
    languages: "English, Italian",
    image: Image9,
  },
  {
    id: 9,
    name: "Sophia Garcia",
    rating: "4.9",
    reviews: "58 reviews",
    distance: "11 mins away",
    languages: "English, Spanish",
    image: Image10,
  },
];

const AssignProviderModal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40">
      <div className="bg-white rounded-2xl w-full max-w-[870px] max-h-[90vh] overflow-hidden shadow-xl">
        {/* Header */}
        <div className="flex items-center justify-between px-6 py-4">
          <h2 className="text-lg font-semibold">Matching Service Providers</h2>
          <button
            onClick={onClose}
            className="p-2 rounded-lg bg-gray-100 hover:bg-gray-200"
          >
            <X className="w-5 h-5 text-black" />
          </button>
        </div>

        {/* Search */}
        <div className="px-6 py-4">
          <div className="flex items-center border border-blue-500 rounded-full px-4 py-2 focus-within:ring-1 focus-within:ring-blue-500">
            <Search className="w-5 h-5 text-blue-500 mr-3" />
            <input
              type="text"
              placeholder="Search by name, service type or language..."
              className="w-full outline-none text-sm text-gray-500 placeholder-gray-400"
            />
          </div>
        </div>

        {/* Provider List */}
        <div className="px-6 pb-6 space-y-3 overflow-y-auto max-h-[60vh]">
          {providers.map((p) => (
            <div
              key={p.id}
              className="flex items-center justify-between bg-[#F1F5FF] rounded-xl px-4 py-3 hover:bg-[#E8EDFF] transition-colors duration-200"
            >
              {/* Left */}
              <div className="flex items-center gap-3">
                <img
                  src={p.image}
                  alt={p.name}
                  className="w-12 h-12 rounded-full object-cover border-2 border-white"
                />
                <div>
                  <div className="flex items-center gap-2">
                    <h4 className="font-semibold text-sm">{p.name}</h4>
                    <div className="flex items-center text-xs text-gray-500 gap-1">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      {p.rating} ({p.reviews})
                    </div>
                  </div>
                  <div className="flex items-center text-xs text-gray-500 gap-2 mt-1">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3 h-3" /> {p.distance}
                    </span>
                    <span className="flex items-center gap-1">
                      <Globe className="w-3 h-3" /> {p.languages}
                    </span>
                  </div>
                </div>
              </div>

              {/* Right */}
              <div className="flex gap-2">
                <button className="bg-[#515DEF] hover:bg-[#3F4BDA] text-white text-xs px-4 py-2 rounded-full transition-colors duration-200">
                  Assign Provider
                </button>
                <button className="border border-gray-300 hover:bg-gray-50 text-gray-700 text-xs px-4 py-2 rounded-full transition-colors duration-200">
                  Chat with Provider
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="px-6 py-4 border-t border-gray-200">
          <div className="flex justify-between items-center">
            <p className="text-sm text-gray-500">
              Showing {providers.length} service providers
            </p>
            <button
              onClick={onClose}
              className="px-4 py-2 text-sm text-gray-600 hover:text-gray-800"
            >
              Cancel
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignProviderModal;
