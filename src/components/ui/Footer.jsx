import React from "react";

import "./Footer.css";

const Footer = () => {
  return (
    <>
      <div id="newsletter">
        <span>Subscribe to Get Weekly newsletter: </span>
        <input type="text" placeholder="Enter E-Mail Here" />
        <button>Submit</button>
      </div>

      <footer>
        <div id="top">
          <div className="footeritem" id="about">
            <p className="footerheading">QuickMed</p>
            <p>
              “QuickMed” is a Pharmacy/Medical website. This website enables the
              user to access various different medical services. This includes,
              whether the user wants to place an order for the medicines
              prescribed by a doctor or browse for latest blogs and articles
              related to the medicine industry. We aim to provide a
              user-friendly interface that allows easy access to different
              services.
            </p>
          </div>
          <div className="footeritem">
            <div id="links">
              <a href="index.html">Home</a>
              <a href="store.html">Store</a>
              <a href="labtests.html">Tests</a>
              <a href="firstaid.html">First-Aid</a>
              <a href="blogs.html">Blogs</a>
              <a href="consult.html">Consult</a>
            </div>
          </div>
          <div className="footeritem">
            <p className="footerheading">Contact Us</p>
            <div className="links">
              <ul>
                <li>+91 99887 76655</li>
                <li>info@quickmed.com</li>
                <li>123, Rajpura, Punjab 123456</li>
              </ul>
            </div>
          </div>
        </div>
        <div id="bottom">&copy; 2024 Copyright: QuickMed.com</div>
      </footer>
    </>
  );
};

export default Footer;
