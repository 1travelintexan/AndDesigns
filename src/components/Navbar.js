import React from "react";
import logo from "../images/andLogo.jpeg";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";

function Navbar() {
  const handleSelect = (eventKey) => alert(`selected ${eventKey}`);

  return (
    <Nav variant="pills" activeKey="1" onSelect={handleSelect}>
      <Nav.Item>
        <Nav.Link eventKey="1" href="#/home">
          Home{" "}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="2" title="Item">
          About us!{" "}
        </Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="3" disabled>
          Contact us!{" "}
        </Nav.Link>
      </Nav.Item>
      <NavDropdown title="Porducts" id="nav-dropdown">
        <NavDropdown.Item eventKey="4.1">Womens</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.2">
          Mens & Patriotic / Political
        </NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Youth</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Holidays / Seasonal</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Students & Teachers</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Tumblers</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Specialty Items</NavDropdown.Item>
        <NavDropdown.Item eventKey="4.3">Tutu's</NavDropdown.Item>

        <NavDropdown.Divider />
        <NavDropdown.Item eventKey="4.4">Follow us!</NavDropdown.Item>
      </NavDropdown>
    </Nav>
  );

  // <div className="navbar">
  //   <img className="nav-logo" src={logo} alt="logo" />
  //   <h1>A.N.D. Designs</h1>
  // </div>
  //);
}

export default Navbar;
