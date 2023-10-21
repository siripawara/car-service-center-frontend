import React from 'react'
import Services from '../Services/Services'
import Packages from '../Packages/Packages'
import { useState } from "react";
const PackagesDash = () => {
    const [tab, setTab] = useState("services");
    const handleTabSwitch = (tabName) => {
        setTab(tabName);
      };
  return (
    <div>
        <div className="p-2 pt-4">
      {/* title */}
      <div className="mb-3">
        <h5 className="d-inline">Packages & Services</h5><i class="bi bi-tools p-2 pe-3"></i>
      </div>
      {/* Tabs */}
      <ul class="nav nav-tabs">
        <li class="nav-item">
          <a
            class={`nav-link ${tab === "services" ? "active" : ""}`}
            aria-current="page"
            href="#"
            onClick={() => handleTabSwitch("services")}
          >
            Services
          </a>
        </li>
        <li class="nav-item">
          <a
            class={`nav-link ${tab === "packages" ? "active" : ""}`}
            href="#"
            onClick={() => handleTabSwitch("packages")}
          >
            Packages
          </a>
        </li>
      </ul>
      {/* tab content */}
      {
      (tab==="services" ? <Services/> : <Packages/>)
      }
    </div>
    </div>
  )
}

export default PackagesDash