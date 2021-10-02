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
          style={{ height: 50, width: 50 }}
        />
        <SocialIcon
          url="https://www.facebook.com/ANDDesings.20/"
          target="_blank"
          fgColor="#fff"
          style={{ height: 50, width: 50 }}
        />
        <SocialIcon
          url="https://vm.tiktok.com/ZMR3Jak8n/"
          target="_blank"
          fgColor="#fff"
          style={{ height: 50, width: 50 }}
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
