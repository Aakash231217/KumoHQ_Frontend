import React from "react";
import "./Footer.css"

function Footer() {
  return (
    <div className="footer-container">
      <div className="footer-content">
        <div className="footer-section">
          <h2 className="list-header">Related Links:</h2>
          <a href="#" className="footer-link">How to Build a Great Website</a>
          <a href="#" className="footer-link">Start an Online eCommerce Business</a>
          <a href="#" className="footer-link">How to Sell Anything to Any Audience</a>
        </div>
        <div className="footer-section">
          <h2 className="list-header">Product</h2>
          <a href="#" className="footer-link">Why Mailchimp?</a>
          <a href="#" className="footer-link">Product Updates</a>
          <a href="#" className="footer-link">Email Marketing</a>
          <a href="#" className="footer-link">Transactional Email</a>
          <a href="#" className="footer-link">Websites</a>
          <a href="#" className="footer-link">How We Compare</a>
          <a href="#" className="footer-link">GDPR Compliance</a>
          <a href="#" className="footer-link">Security</a>
          <a href="#" className="footer-link">Status</a>
          <a href="#" className="footer-link">Mobile App</a>
        </div>
        <div className="footer-section">
          <h2 className="list-header">Resources</h2>
          <a href="#" className="footer-link">Marketing Library</a>
          <a href="#" className="footer-link">Free Marketing Tools</a>
          <a href="#" className="footer-link">Marketing Glossary</a>
          <a href="#" className="footer-link">Integrations Directory</a>
        </div>
        <div className="footer-section app-links">
          <img src="https://eep.io/images/yzco4xsimv0y/1u3hha7FE0Q402e2qsMu6a/5e403548149c1618b64034284f692ff1/icon-ios.svg?w=320&fm=webp&q=80" alt="iOS App" />
          <img src="https://eep.io/images/yzco4xsimv0y/64EpnI4RsQI66c2y2O60G2/4c34d7bc4dd7a4362c7e19a06c109e21/icon-android.svg?w=320&fm=webp&q=80" alt="Android App" />
        </div>
      </div>
    </div>
  );
}

export default Footer;
