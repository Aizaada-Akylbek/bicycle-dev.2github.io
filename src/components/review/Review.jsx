import React, { useState } from "react";
import "./Review.css";
import reviewImg from "../../assets/reviewImg/Avatar Image.png";
import star from "../../assets/reviewImg/Stars.svg";
import slack from "../../assets/reviewImg/Black.png";

const Review = () => {
  const slides = [
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      name: "Randy Levin ",
      position: "SEO, Slack",
      img: reviewImg,
      company: slack,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      name: "Adam Sandler",
      position: "Position, Company name",
      img: reviewImg,
      company: slack,
    },
    {
      text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      name: "Text",
      position: "Slack",
      img: reviewImg,
      company: slack,
    },
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? slides.length - 1 : prevSlide - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === slides.length - 1 ? 0 : prevSlide + 1
    );
  };

  return (
    <div className="review dark-blue">
      <img className="zvezda" src={star} alt="" />
      <h3>{slides[currentSlide].text}</h3>
      <div className="review-user">
        <div className="review-user-block">
          <img
            className="review-avatar"
            src={slides[currentSlide].img}
            alt="avatar"
          />
          <div className="review-user-info">
            <h4>{slides[currentSlide].name}</h4>
            <h5>{slides[currentSlide].position}</h5>
          </div>
        </div>
        <div className="review-user-company">
          <img src={slides[currentSlide].company} alt="slack" />
        </div>
      </div>
      <div className="slider-buttons-review">
        <button
          className="slide-button-square"
          onClick={goToPreviousSlide}
        ></button>
        {slides.map((slide, index) => (
          <button
            key={index}
            className={
              index === currentSlide
                ? "slide-button-circle active"
                : "slide-button-circle"
            }
            onClick={() => goToSlide(index)}
          ></button>
        ))}
      </div>
    </div>
  );
};

export default Review;
