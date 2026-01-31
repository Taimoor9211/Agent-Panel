import React, { useState } from "react";
import { MoreVertical } from "lucide-react";
import Image1 from "../../assets/Images/Image1.jpg";

const notifications = [
  {
    id: 1,
    name: "Ashwin Bose",
    message: "is requesting access to Design File - Final Project.",
    time: "15h",
    avatar: Image1,
  },
  {
    id: 2,
    name: "Ashwin Bose",
    message: "is requesting access to Design File - Final Project.",
    time: "15h",
    avatar: Image1,
  },
  {
    id: 3,
    name: "Ashwin Bose",
    message: "is requesting access to Design File - Final Project.",
    time: "15h",
    avatar: Image1,
  },
  {
    id: 4,
    name: "Ashwin Bose",
    message: "is requesting access to Design File - Final Project.",
    time: "15h",
    avatar: Image1,
  },
];

const NotificationAdminComponents = () => {
  const [activeTab, setActiveTab] = useState("All");
  const [openMenu, setOpenMenu] = useState(null);

  return (
    <div className="p-4  min-h-screen">
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h1 className="text-xl font-semibold">Notifications</h1>
        <div className="space-x-4 text-blue-600 font-medium cursor-pointer">
          <span>Contact Admin</span>
          <span>Mark all as read</span>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex border-b border-gray-300 mb-4">
        {["All", "Mentions"].map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-4 py-2 -mb-px font-medium ${
              activeTab === tab
                ? "border-b-2 border-blue-600 text-blue-600"
                : "text-gray-600"
            }`}
          >
            {tab}
            {tab === "All" && (
              <span className="ml-1 bg-gray-200 rounded-full px-2 text-xs">
                1
              </span>
            )}
          </button>
        ))}
      </div>

      {/* Notifications List */}
      <div className="space-y-4 bg-blue-100">
        {notifications.map((notif) => (
          <div
            key={notif.id}
            className="relative flex justify-between items-start p-4 border-b border-gray-300"
          >
            <div className="flex gap-4 items-start">
              {/* Avatar */}
              <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-300">
                <img
                  src={notif.avatar}
                  alt={notif.name}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Message */}
              <div>
                <p className="text-gray-800">
                  <span className="font-medium">{notif.name}</span>{" "}
                  {notif.message}
                </p>
                <div className="mt-2 flex gap-2">
                  <button className="px-3 py-1 bg-blue-600 text-white rounded text-sm hover:bg-blue-700">
                    Mark as read
                  </button>
                  <button className="px-3 py-1 bg-white border border-gray-300 rounded text-sm hover:bg-gray-100">
                    Reply
                  </button>
                </div>
              </div>
            </div>

            {/* Right Side */}
            <div className="flex flex-col items-end gap-2">
              <span className="text-gray-400 text-sm">{notif.time}</span>

              {/* Dropdown */}
              <button
                onClick={() =>
                  setOpenMenu(openMenu === notif.id ? null : notif.id)
                }
                className="p-1 rounded hover:bg-gray-100"
              >
                <MoreVertical className="w-5 h-5 text-gray-500" />
              </button>

              {openMenu === notif.id && (
                <div className="absolute right-4 top-18 w-40 bg-white shadow-lg rounded-md z-20">
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    Mark as read
                  </button>
                  <button className="w-full text-left px-4 py-2 text-sm hover:bg-gray-100">
                    Turn off notifications
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default NotificationAdminComponents;
