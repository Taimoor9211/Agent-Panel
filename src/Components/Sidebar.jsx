import React from "react";
import {
  LayoutDashboard,
  AlertCircle,
  PhoneCall,
  Bell,
  Briefcase,
  Layers,
  Users,
  Shield,
  Calendar,
  BarChart,
  Moon,
  LogOut,
  ChevronLeft,
  ChevronRight,
} from "lucide-react";
import { Link } from "react-router-dom";

const Sidebar = ({
  expanded,
  setExpanded,
  active,
  setActive,
  darkMode,
  setDarkMode,
}) => {
  const menuItems = [
    { name: "Dashboard", icon: LayoutDashboard, path: "/dashboard" },
    { name: "Urgent Jobs", icon: AlertCircle, path: "/urgent-jobs" },
    { name: "Call Requests", icon: PhoneCall, path: "/call-requests" },
    { name: "Notification (Admin)", icon: Bell, path: "/notification-admin" },
    { name: "Jobs", icon: Briefcase, path: "/jobs" },
    { name: "Other Requests", icon: Layers, path: "/other-requests" },
    { name: "Provider Matching", icon: Users, path: "/provider-matching" },
    { name: "Policies", icon: Shield, path: "/policies" },
    { name: "Time Table", icon: Calendar, path: "/time-table" },
    { name: "CSAT", icon: BarChart, path: "/csat" },
  ];

  return (
    <div
      className={`fixed left-0 top-0 px-2 bg-gray-50 border-r border-gray-200 shadow-lg z-10
      transition-all duration-300 ease-in-out overflow-hidden
      ${expanded ? "w-64" : "w-16"}`}
      style={{ height: "1286px" }}
    >
      {/* Toggle Button */}
      <div className="flex items-center justify-end p-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-1 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
        >
          {expanded ? <ChevronLeft size={18} /> : <ChevronRight size={18} />}
        </button>
      </div>

      {/* Menu */}
      <div className="px-2 py-20 flex flex-col h-full">
        <ul className="space-y-1">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.name;

            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setActive(item.name)}
                  className={`flex items-center gap-3 w-full p-2 rounded-lg text-sm transition-colors
                    ${
                      isActive
                        ? "bg-[#515DEF] text-white font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }
                    ${!expanded ? "justify-center" : ""}`}
                >
                  <Icon size={18} />
                  {expanded && <span>{item.name}</span>}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Bottom Section */}
        <div className="mt-auto pt-10">
          {/* Dark Mode */}
          <div
            className={`flex items-center ${
              expanded ? "justify-between" : "justify-center"
            } p-2 rounded-lg hover:bg-gray-100 my-2`}
          >
            <div className="flex items-center gap-3 text-gray-600">
              <Moon size={18} />
              {expanded && <span>Dark Mode</span>}
            </div>

            {expanded && (
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-10 h-5 rounded-full relative transition ${
                  darkMode ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition
                    ${darkMode ? "translate-x-5" : "translate-x-0"}`}
                />
              </button>
            )}
          </div>

          {/* Logout */}
          <button
            className={`flex items-center gap-3 w-full p-2 rounded-lg text-red-500 hover:bg-red-50
              ${!expanded ? "justify-center" : ""}`}
          >
            <LogOut size={18} />
            {expanded && <span>Logout</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
