import React from "react";
import logo from "../../assets/logo.png";
import "./footer.css";

const Footer = () => {
  return (
    <div className="dealcars__footer section__padding">
      <div className="dealcars__footer-heading">
        <h1 className="gradient__text">Stay in touch with the future</h1>
      </div>

      <div className="dealcars__footer-btn">
        <p>Subscribe</p>
      </div>

      <div className="dealcars__footer-links">
        <div className="dealcars__footer-links_logo">
          <img src={logo} alt="logo" />
          <p>1234 Rainbow Avenue Sunshine City, CA 90210 United States</p>
        </div>
        <div className="dealcars__footer-links_div">
          <h4>Links</h4>
          <p>Social Media</p>
          <p>Counters</p>
          <p>Contact</p>
        </div>
        <div className="dealcars__footer-links_div">
          <h4>Company</h4>
          <p>Terms & Conditions</p>
          <p>Privacy Policy</p>
          <p>Contact</p>
        </div>
        <div className="dealcars__footer-links_div">
          <h4>Get in touch</h4>
          <p>1234 Rainbow Avenue Sunshine City, CA 90210 United States</p>
          <p>085-124992</p>
          <p>info@xta.net</p>
        </div>
      </div>
      <div className="dealcars__footer-copyright">
        <p>
          © 2024 XTA. All rights reserved. Unauthorized duplication or
          distribution is prohibited. XTA and the XTA logo are trademarks of XTA
          Inc. All other trademarks are the property of their respective owners.
        </p>
      </div>
    </div>
  );
};

export default Footer;
