import React from "react";
import { NavLink } from "react-router-dom";
import logo from "../images/andLogo.jpeg";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <div>
      <Nav
        className="navbar"
        variant="pills"
        activeKey="1"
        onSelect={handleSelect}
      >
        <NavDropdown title="Products" id="nav-dropdown">
          <NavDropdown.Item eventKey="4.1">Womens</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.2">
            Mens & Patriotic / Political
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.3">Youth</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.4">
            Holidays / Seasonal
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.5">
            Students & Teachers
          </NavDropdown.Item>
          <NavDropdown.Item eventKey="4.6">Tumblers</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.7">Specialty Items</NavDropdown.Item>
          <NavDropdown.Item eventKey="4.8">Tutu's</NavDropdown.Item>

          <NavDropdown.Divider />
          <NavDropdown.Item eventKey="4.4">Follow us!</NavDropdown.Item>
        </NavDropdown>
        <Nav.Item>
          <NavLink exact className="nav-link" eventKey="1" to="/">
            Home
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" eventKey="1" to="/about">
            About
          </NavLink>
        </Nav.Item>
        <Nav.Item>
          <NavLink className="nav-link" eventKey="1" to="/contact">
            Contact
          </NavLink>
        </Nav.Item>

        <Nav.Item>
          <img className="nav-logo" src={logo} alt="logo" />
        </Nav.Item>
      </Nav>
    </div>
  );

  // <div className="navbar">
  //   <img className="nav-logo" src={logo} alt="logo" />
  //   <h1>A.N.D. Designs</h1>
  // </div>
  //);
}

export default Navbar;
