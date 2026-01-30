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
      className={`px-2 bg-gray-50 border-r border-gray-200 shadow-lg
  transition-all duration-300 ease-in-out
  flex flex-col
  ${expanded ? "w-64" : "w-20"} 
  min-h-screen`} // <-- use min-h-screen for full page height
    >
      {/* Toggle */}
      <div className="flex justify-end p-4">
        <button
          onClick={() => setExpanded(!expanded)}
          className="p-2 bg-blue-600 hover:bg-blue-700 rounded-lg text-white"
        >
          {expanded ? <ChevronLeft size={20} /> : <ChevronRight size={20} />}
        </button>
      </div>

      {/* Menu */}
      <div className="px-2 py-14 flex flex-col flex-1">
        <ul className="space-y-2">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = active === item.name;

            return (
              <li key={item.name}>
                <Link
                  to={item.path}
                  onClick={() => setActive(item.name)}
                  className={`flex items-center rounded-lg transition-all
                    ${
                      expanded
                        ? "gap-4 px-4 py-2 justify-start"
                        : "justify-center py-3"
                    }
                    ${
                      isActive
                        ? "bg-[#515DEF] text-white font-medium"
                        : "text-gray-600 hover:bg-gray-100"
                    }`}
                >
                  {/* Icon Wrapper – FIXED SIZE */}
                  <div className="w-10 h-10 flex items-center justify-center">
                    <Icon size={22} />
                  </div>

                  {expanded && (
                    <span className="text-[15px] whitespace-nowrap">
                      {item.name}
                    </span>
                  )}
                </Link>
              </li>
            );
          })}
        </ul>

        {/* Bottom Section */}
        <div className="pt-30 space-y-4">
          {/* Dark Mode */}
          <div
            className={`flex items-center rounded-lg hover:bg-gray-100 transition-all
    ${expanded ? "justify-between px-4 py-3" : "justify-center py-3"}`}
          >
            <div className="flex items-center gap-4 text-gray-600 text-[15px]">
              <div className="w-10 h-10 flex items-center justify-center">
                <Moon size={22} />
              </div>
              {expanded && <span>Dark Mode</span>}
            </div>

            {expanded && (
              <button
                onClick={() => setDarkMode(!darkMode)}
                className={`w-11 h-5 rounded-full relative transition ${
                  darkMode ? "bg-blue-600" : "bg-gray-300"
                }`}
              >
                <span
                  className={`absolute top-0.5 left-0.5 w-4 h-4 bg-white rounded-full transition ${
                    darkMode ? "translate-x-6" : ""
                  }`}
                />
              </button>
            )}
          </div>

          {/* Logout */}
          <button
            className={`flex items-center rounded-lg transition-all
    ${expanded ? "gap-4 px-4 py-3 justify-start" : "justify-center py-3"}
    text-red-500 hover:bg-red-50`}
          >
            <div className="w-10 h-10 flex items-center justify-center">
              <LogOut size={22} />
            </div>
            {expanded && <span className="text-[15px]">Logout</span>}
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
