import React from "react";

// We import bootstrap to make our application look better.
import "bootstrap/dist/css/bootstrap.css";

// We import NavLink to utilize the react router.
import { NavLink } from "react-router-dom";

// Here, we display our Navbar
export default function Navbar() {
  return (
    <div className="container">
      <nav className="navbar navbar-inverse navbar-expand-lg navbar-light justify-content-between">
        <NavLink className="navbar-brand" to="/">
          <p>CEN4031 Titan Help Project</p>
        </NavLink>
        <NavLink className="nav-link" to="/create">
          <button type="button" className="btn btn-primary">
            Create Ticket
          </button>
        </NavLink>
      </nav>
    </div>
  );
}
