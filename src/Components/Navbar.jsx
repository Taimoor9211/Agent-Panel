import React, { useState, useEffect } from "react";
import { Bell, MessageCircle } from "lucide-react";
import Image1 from "../assets/Images/Image1.jpg";

const Navbar = () => {
  const [currentDateTime, setCurrentDateTime] = useState("");

  useEffect(() => {
    const updateDateTime = () => {
      const now = new Date();
      const options = {
        month: "long",
        day: "numeric",
        year: "numeric",
        weekday: "long",
        hour: "2-digit",
        minute: "2-digit",
      };
      setCurrentDateTime(now.toLocaleDateString("en-US", options));
    };

    updateDateTime();
    const interval = setInterval(updateDateTime, 60000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex items-center justify-end w-full h-16 px-4 bg-white shadow-sm">
      

      {/* Right */}
      <div className="flex items-center gap-4">
        <p className="text-gray-500 text-sm hidden md:block">{currentDateTime}</p>

        <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
          <MessageCircle size={20} />
        </button>

        <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200">
          <Bell size={20} />
        </button>

        <img
          src={Image1}
          alt="Profile"
          className="w-8 h-8 rounded-full cursor-pointer"
        />
      </div>
    </div>
  );
};

export default Navbar;