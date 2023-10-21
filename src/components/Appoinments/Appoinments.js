import React from "react";
import { useState } from "react";
import "../Appoinments/Appoinments.css";
import PendingAppointments from "../PendingAppointments/PendingAppointments";
import AllAppoinments from "../AllAppointments/AllAppointments";
const Appoinments = () => {
  const [tab, setTab] = useState("pendingTab");

  const handleTabSwitch = (tabName) => {
    setTab(tabName);
  };
  return (
    <div className="p-2 pt-4">
      {/* title */}
      <div className="mb-3">
        <h5 className="d-inline">Appoinments</h5><i class="bi bi-pencil-square p-2 pe-3"></i>
      </div>
      {/* Tabs */}
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a
            class={`nav-link ${tab === "pendingTab" ? "active" : ""}`}
            aria-current="page"
            href="#"
            onClick={() => handleTabSwitch("pendingTab")}
          >
            Pending Appointments
          </a>
        </li>
        <li class="nav-item">
          <a
            class={`nav-link ${tab === "appointments" ? "active" : ""}`}
            href="#"
            onClick={() => handleTabSwitch("appointments")}
          >
            All Appoinments
          </a>
        </li>
      </ul>
      {/* tab content */}
      {
      (tab==="pendingTab" ? <PendingAppointments/> : <AllAppoinments/>)
      }
    </div>
  );
};

export default Appoinments;
