import React from "react";
import "../styles/Partners.css";
import PartnersCards from "../components/partnersCards/PartnersCards";
import PartnersFeedback from "../components/partnersFeedback/PartnersFeedback";
import Review from "../components/review/Review";
import DevOperations from "../components/ui/devOperations/DevOperations";

const Partners = () => {
  return (
    <div className="container">
      <div className="hero-partners">
        <div>
          <h2 className="main-title poppins">
            Partners success <br />
            is our success
          </h2>
          <p className="main-title-info">
            Step into our multicultural environment <br /> filled with creative
            and driven individuals. 
          </p>

          <button className="main-btn">Label</button>
        </div>
      </div>
      <PartnersCards />
      <Review />
      <DevOperations />
    </div>
  );
};

export default Partners;
