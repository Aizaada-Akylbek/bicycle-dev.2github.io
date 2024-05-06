import React from "react";
import "./MakeBusiness.css";
//img
import macbook from "../../assets/makeBusiness/mackbook.png";
import notebook from "../../assets/makeBusiness/oyourbusiness.png";

const MakeBusiness = () => {
  return (
    <div className="make-your-banner">
      <div className="container">
        <div className="make-your-banner-text poppins">
          {" "}
          <span className="make-span">
            Make
            <img src={macbook} alt="macbook" className="macbook" />
          </span>
          <br />
          your{" "}
          <span>
            <img className="notebook" src={notebook} alt="makeYour" />
          </span>
          business
          <br />
          effectual!
        </div>
      </div>
    </div>
  );
};

export default MakeBusiness;
