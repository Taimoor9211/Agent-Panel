import React from "react";
import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import Layout from "./Components/Layout.jsx";
import Dashboard from "./Pages/Dashboard.jsx";
import UrgentJobs from "./Pages/UrgentJobs.jsx";
import CallRequests from "./Pages/CallRequests.jsx";
import NotificationAdmin from "./Pages/NotificationAdmin.jsx";
import Jobs from "./Pages/Jobs.jsx";
import OtherRequests from "./Pages/OtherRequests.jsx";
import ProviderMatching from "./Pages/ProviderMatching.jsx";
import Policies from "./Pages/Policies.jsx";
import TimeTable from "./Pages/TimeTable.jsx";
import CSAT from "./Pages/CSAT.jsx";

function App() {
  return (
    <Router>
      <Routes>
        {/* Main layout with dashboard as separate route */}
        <Route path="/" element={<Layout />}>
          <Route index element={<Navigate to="/dashboard" replace />} />
          <Route path="dashboard" element={<Dashboard />} />
          <Route path="urgent-jobs" element={<UrgentJobs />} />
          <Route path="call-requests" element={<CallRequests />} />
          <Route path="notification-admin" element={<NotificationAdmin />} />
          <Route path="jobs" element={<Jobs />} />
          <Route path="other-requests" element={<OtherRequests />} />
          <Route path="provider-matching" element={<ProviderMatching />} />
          <Route path="policies" element={<Policies />} />
          <Route path="time-table" element={<TimeTable />} />
          <Route path="csat" element={<CSAT />} />
        </Route>
      </Routes>
    </Router>
  );
}

export default App;