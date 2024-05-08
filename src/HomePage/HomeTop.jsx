import React from "react";
import { Link } from "react-router-dom";
import "./HomeTop.css"
function HomeTop() {
  return (
    <>
      <div className="container">
        <h1 className="heading">
          Turn Emails into Revenue
        </h1>
        <p className="text">
          Win new customers with the #1 email marketing and automations brand*
          that recommends ways to get more opens, clicks, and sales.
        </p>
        <Link to="/signup" className="button signup">
          Sign Up
        </Link>
      </div>

      <div className="features">
        <div className="feature" style={{ backgroundColor: '#dfdcd4' }}>
          <h2>Convert With Automotion</h2>
        </div>
        <div className="feature" style={{ backgroundColor: '#e4d6ca' }}>
          <h2>Optimize with AI & Analytics</h2>
        </div>
        <div className="feature" style={{ backgroundColor: '#dbd9da' }}>
          <h2>Target With Segmentation</h2>
        </div>
        <div className="feature" style={{ backgroundColor: '#c7b5a7' }}>
          <h2>Sync With Integration</h2>
        </div>
      </div>

      <div className="images">
        <img src="https://eep.io/images/yzco4xsimv0y/33f3mgIWbzKjIpIRJi2f5v/6bd36bba38b7f6a94d587605ab9a7d75/Desktop_Feature_Cards_1_Automations.jpeg?w=630&fm=webp&q=80"
          width={"25%"}
           alt="Automations" />
        <img  src="https://eep.io/images/yzco4xsimv0y/hBcOt3RZ5DOhMJD2Hi2Z2/96b28d17c45e9376731ad825b002b0ff/Desktop_Feature_Cards_2_Analytics.png?w=630&fm=webp&q=80"
          width={"25%"}
          alt="p1" />
        <img src="https://eep.io/images/yzco4xsimv0y/5xqzo6y8Z7anw9VQXJarpj/5f91182af7bf16ecc34b487a619d0a54/Desktop_Feature_Cards_3_Segmentation.jpeg?w=630&fm=webp&q=80"
          width={"25%"}
          alt="p1"
 />
        <img src="https://eep.io/images/yzco4xsimv0y/lsHRpmOI81ZcFS1Yld0Bs/1e2812587cd0f3089061bd4b513fd6d0/Desktop_Feature_Cards_4_Integrations.png?w=630&fm=webp&q=80"
          width={"25%"}
          alt="p1" />
      </div>

      <div className="call-to-actions">
        <div className="cta" style={{ backgroundColor: 'rgb(217,149,54)' }}>
          <p>Send the right message at the right time to convert more customers.</p>
          <button className="button learn-more">Learn More</button>
        </div>
        <div className="cta" style={{ backgroundColor: 'rgb(231,183,95)' }}>
          <p>Send the right message at the right time to convert more customers.</p>
          <button className="button learn-more">Learn More</button>
        </div>
        <div className="cta" style={{ backgroundColor: 'rgb(253,248,234)' }}>
          <p>Send the right message at the right time to convert more customers.</p>
          <button className="button learn-more">Learn More</button>
        </div>
        <div className="cta" style={{ backgroundColor: '#fff' }}>
          <p>Send the right message at the right time to convert more customers.</p>
          <button className="button learn-more">Learn More</button>
        </div>
      </div>

      <div class="stats-container">
    <div class="stat">
        <h1>Find out why we're best-in-class</h1>
        <p>The #1 email marketing and automations platform that recommends ways to get more opens, clicks, and sales.</p>
    </div>
    <div class="stat">
        <h2>Up to 39x ROI</h2>
        <p>seen by Mailchimp users</p>
        <p>12M+ Users of Mailchimp globally</p>
    </div>
    <div class="stat">
        <h2>22 years experience</h2>
        <p>helping businesses sell more</p>
        <p>$1.7K per campaign generated on average</p>
    </div>
</div>
    </>
  );
}

export default HomeTop;

