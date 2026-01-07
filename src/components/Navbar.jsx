import React from "react";
import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/">Form</Link>
        </li>
        <li>
          <Link to="/countries">Countries Info</Link>
        </li>
        <li>
          <Link to="/otp">OTP Generator</Link>
        </li>
        <li>
          <Link to="/task">Task</Link>
        </li>
        <li>
          <Link to="/invoice">Invoice Generator</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
