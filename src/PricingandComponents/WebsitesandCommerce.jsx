import React from "react";
import './WebsitesAndCommerce.css';
function WebsitesAndCommerce() {
  return (
    <>
      <h1 style={{ marginTop: '15px' }}>Websites & Commerce</h1>
      <div className="flex-container">
        <div className="vstack">
          <h2>Plus</h2>
          <p>All websites & commerce features and our lowest transaction fees for scaling businesses.</p>
          <p>Start at</p>
          <h3>₹2,381</h3>
          <p>/Month</p>
          <p>+ .5% transaction fee and Stripe processing fees*</p>
          <button>Buy Now</button>
        </div>
        {/* Repeat for each product or plan */}
      </div>
      <button>Compare our Plans</button>
      <p>
        *All Websites & Commerce plans include access to our Mailchimp stores product...
      </p>
      {/* Add additional sections as necessary */}
    </>
  );
}

export default WebsitesAndCommerce;
