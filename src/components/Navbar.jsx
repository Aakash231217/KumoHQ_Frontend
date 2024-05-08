import React from "react";
import { NavLink } from "react-router-dom";
import './Navbar.css'

function Navbar() {
  return (
    <div className="navbar">
      <NavLink className="nav-logo" to="/"><img src="https://logos-world.net/wp-content/uploads/2021/02/Mailchimp-Logo-2018-present.png" alt="Logo" /></NavLink>
      <div className="navbar-section menu">
        <NavLink className="nav-link" to="/solutions">Solutions and Services</NavLink>
        <NavLink className="nav-link" to="/resources">Resources</NavLink>
        <NavLink className="nav-link" to="/switch">Switch to Mailchimp</NavLink>
        <NavLink className="nav-link" to="/pricing">Pricing</NavLink>
      </div>
      <div className="navbar-section utilities">
        <button className="search-button">Q</button>
        <select className="nav-select">
          <option value="en">EN</option>
        </select>
        <span className="contact-number">Sales: +1 (800) 315-5939</span>
        <NavLink className="nav-button" to="/login">Log In</NavLink>
        <NavLink className="nav-button sign-up" to="/signup">Sign Up</NavLink>
      </div>
    </div>
  );
}

export default Navbar;

