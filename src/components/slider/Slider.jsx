import React, { useState, useEffect } from "react";
//img
import samsung from "../../assets/companyLogos/samsung.png";
import google from "../../assets/companyLogos/google.svg";
import lg from "../../assets/companyLogos/lg.svg";
import microsoft from "../../assets/companyLogos/microsoft.svg";
import slack from "../../assets/companyLogos/slack.svg";
import sony from "../../assets/companyLogos/sony.png";
import kamasys from "../../assets/partners/kamasys_logo.jpg";
import htpkr from "../../assets/partners/Copy_of_htpkr_logo.png";
import mkLogic from "../../assets/partners/mk_logic_rgb_338_white.png";
import osma from "../../assets/partners/osma.svg";
//css
import "./Slider.css";
import Marquee from "react-marquee-slider";

const Slider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const slides = [kamasys, htpkr, mkLogic, osma, kamasys, htpkr, mkLogic, osma];
  const slideCount = slides.length;

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slideCount);
    }, 4000); // Adjust the interval duration (in milliseconds) based on your preference

    return () => clearInterval(interval);
  }, [slideCount]);

  return (
    <div className="slider">
      <Marquee velocity={40}>
        {slides.map((img, index) => (
          <div key={index} className="slide">
            <img src={img} alt="company" />
          </div>
        ))}
      </Marquee>
    </div>
  );
};

export default Slider;
