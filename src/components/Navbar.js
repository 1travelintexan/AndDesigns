import React from "react";
import logo from "../images/andLogo.jpeg";

function Navbar() {
  return (
    <div className="navbar">
      <img className="nav-logo" src={logo} alt="logo" />
      <h1>A.N.D. Designs</h1>
    </div>
  );
}

export default Navbar;
