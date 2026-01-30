import React, { useState, useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Sidebar from "./Sidebar";
import Navbar from "./Navbar";

const Layout = () => {
  const [expanded, setExpanded] = useState(true);
  const [active, setActive] = useState("Dashboard");
  const [darkMode, setDarkMode] = useState(false);
  const location = useLocation();

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

    if (pathToNameMap[location.pathname]) {
      setActive(pathToNameMap[location.pathname]);
    }
  }, [location]);

  return (
    <div className="flex justify-center">
      {/* 1440px Wrapper */}
      <div className="flex w-[1440px]">

        <Sidebar
          expanded={expanded}
          setExpanded={setExpanded}
          active={active}
          setActive={setActive}
          darkMode={darkMode}
          setDarkMode={setDarkMode}
        />

        {/* Main Content */}
        <div className="flex-1 flex flex-col">
          <Navbar active={active} />
          <main className="p-4">
            <Outlet context={{ active, setActive }} />
          </main>
        </div>

      </div>
    </div>
  );
};

export default Layout;
