import React from "react";
import { Link } from "react-router-dom";
import './HomeEnd.css';

function HomeEnd() {
  return (
    <>
      <div className="heading-container">
        <h1 className="main-heading">
          Bring in more data, drive more growth with our integrations
        </h1>
      </div>

      <div className="grid-container">
        {[
          { 
            src: "https://eep.io/images/yzco4xsimv0y/egMxvwdsj41K5eESLhWBO/cf823adbd311e33919f97ffc5bf3181d/Canva.jpg?w=196&fm=webp&q=80",
            title: "Canava",
            description: "Create compelling visuals for your marketing.",
          },
          {
            src: "https://eep.io/images/yzco4xsimv0y/51oq4AakIqo8fATlHgqHK0/02a750b1c1a16745296dca6fa7cb830c/Salesforce__1_.jpg?w=196&fm=webp&q=80",
            title: "Mailchimp for Salesforce",
            description:
              "Sync your Mailchimp subscribers and Salesforce leads across platforms.",
          },
          {
            src: "https://eep.io/images/yzco4xsimv0y/67trWJLKtKcvrqlKYSlskE/696ad499e0cc60aa7392521a6a7cfd90/Instagram__1_.jpg?w=196&fm=webp&q=80",
            title: "Instagram",
            description:
              "Promote and share your Instagram posts in email campaigns.",
          },
          {
            src: "https://eep.io/images/yzco4xsimv0y/44dW9Z4hibyDYi0qggfets/b01884985e996ffb5dc133556b92bb7a/Shopify__1_.jpg?w=196&fm=webp&q=80",
            title: "Shopify",
            description:
              "Sync Shopify customers, products, and purchase data to Mailchimp.",
          },
          {
            src: "https://eep.io/images/yzco4xsimv0y/7mpZ7UZrdzk2BmWX1OnRvb/00c7967e994ec1ff1a02b82aa6d61680/Google_Analytics.jpg?w=196&fm=webp&q=80",
            title: "Google Analytics",
            description:
              "Unlock powerful insights with campaign, website, or landing page data.",
          },
          {
            src: "https://eep.io/images/yzco4xsimv0y/2uruOq31Y1FKdghFWn5zMg/8a35f3f9e463ba34038f3c3f16ccb635/WooCommerce.jpg?w=196&fm=webp&q=80",
            title: "Zapier",
            description:
              "Automatically pass data between web services without a single line of code.",
          },
          {
            src: "https://eep.io/images/yzco4xsimv0y/uZVnrVt3DO1G4Ec5G4pvs/e6c9d3c2613827f7dd238f1c5e0b02d9/Quickbooks.jpg?w=196&fm=webp&q=80",
            title: "QuickBooks Online",
            description: "Bring together your marketing tools and invoice data.",
          },
          {
            src: "https://eep.io/images/yzco4xsimv0y/2klSrOoLZKmLuGKZjKT9o3/ca400f60c2f3673f3ab9b52f4d03360d/Squarespace.jpg?w=196&fm=webp&q=80",
            title: "Squarespace Commerce",
            description: "Market your ecommerce business and drive sales.",
          },
          {
            src: "https://eep.io/images/yzco4xsimv0y/26deBkGp3A5Pj7suZ9oV7V/858e8a4603707166988a3282bca7e29b/Zapier.jpg?w=196&fm=webp&q=80",
            title: "Woo Commerce",
            description: "Power your ecommerce store with smart marketing features.",
          },
        ].map((integration, index) => (
          <div key={index} className="grid-item">
            <div className="image-container">
              <img src={integration.src} alt={integration.title} />
            </div>
            <div className="info-container">
              <h2>{integration.title}</h2>
              <p>{integration.description}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="action-button-container">
        <Link to="/all-integrations" className="action-button">
          View All 300 Integrations
        </Link>
      </div>

      <div className="disclaimer-container">
        <p>*Disclaimers</p>
        <p>
          1. Mailchimp Disclaimers is the #1 email marketing and automation brand
          based on competitor brands' publicly available data on worldwide
          numbers of customers in 2021/ 2022.
        </p>
        <p>
          2. Generate up to 4X more orders with Customer Journey Builder
          automations based on orders generated through user's connected stores
          with automations versus when they used bulk emails.
        </p>
        <p>
          3. Get up to 88% more revenue based on emails sent with predicted
          segments against non-predictive segmented emails for users with
          connected stores only. Standard or Premium Plans only. Availability of
          features and functionality varies by plan type. For details, view
          plans and pricing.
        </p>
      </div>
    </>
  );
}

export default HomeEnd;
