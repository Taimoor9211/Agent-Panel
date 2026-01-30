import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState("Dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

  // Location change par active menu update karein
  useEffect(() => {
    const pathToNameMap = {
      "/": "Dashboard",
      "/dashboard": "Dashboard",
      "/urgent-jobs": "Urgent Jobs",
      "/call-requests": "Call Requests",
      "/notification-admin": "Notification (Admin)",
      "/jobs": "Jobs",
      "/other-requests": "Other Requests",
      "/provider-matching": "Provider Matching",
      "/policies": "Policies",
      "/time-table": "Time Table",
      "/csat": "CSAT",
    };

    const currentPath = location.pathname;
    if (pathToNameMap[currentPath]) {
      setActive(pathToNameMap[currentPath]);
    }
  }, [location]);

  return (
    <div className="flex h-screen">
      <Sidebar
        expanded={expanded}
        setExpanded={setExpanded}
        active={active}
        setActive={setActive}
        darkMode={darkMode}
        setDarkMode={setDarkMode}
      />

      {/* Main Content */}
      <div
        className={`flex-1 transition-all duration-300 ease-in-out ${
          expanded ? "ml-64" : "ml-16"
        }`}
      >
        <Navbar active={active} />
        <main className="p-4">
          <Outlet context={{ active, setActive }} />
        </main>
      </div>
    </div>
  );
};

export default Layout;