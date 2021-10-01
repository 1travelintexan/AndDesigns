import React from "react";
import logo from "../images/andLogo.jpeg";
import { SocialIcon } from "react-social-icons";

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-icons">
        <SocialIcon
          url="https://www.instagram.com/anddesigns.20/"
          target="_blank"
          fgColor="#fff"
          style={{ height: 80, width: 80 }}
        />
        <SocialIcon
          url="https://www.facebook.com/groups/anddesignsauctionsales"
          target="_blank"
          fgColor="#fff"
          style={{ height: 80, width: 80 }}
        />
      </div>
      <div>
        <h3>Family owned and operated</h3>
        <img className="footer-logo" src={logo} alt="logo" />
      </div>

      <div></div>
    </div>
  );
}

export default Footer;
