import React from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer-content">
      <div className="footer-text">
        <h3>Tourist Guide BD</h3>
        <p>
          <p>
            Tourist Guide Bangladesh (TGB) was formed in the year 2009 to meet
            the demand of local and foreign tourist for guiding throughout
            Bangladesh.
          </p>
          <small> Copyright @2023</small>

          {/* <span class="fa-stack">
            <i class="fa fa-circle-thin fa-stack-2x"></i>
            <i class="fa fa-twitter fa-stack-1x"></i>
          </span> */}

          <ul className="socials">
            <span class="fa-stack">
              <i class="fa fa-circle-thin fa-stack-2x"></i>
              <i class="fa fa-twitter fa-stack-1x"></i>
            </span>
            <span class="fa-stack">
              <i class="fa fa-circle-thin fa-stack-2x"></i>
              <i class="fa fa-facebook fa-stack-1x"></i>
            </span>
            <span class="fa-stack">
              <i class="fa fa-circle-thin fa-stack-2x"></i>
              <i class="fa fa-linkedin fa-stack-1x"></i>
            </span>
          </ul>
        </p>
      </div>
    </footer>
  );
};

export default Footer;
