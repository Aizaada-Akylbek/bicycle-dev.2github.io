import React, { useState } from 'react';
import './PartnersFeedback.css';
import kamasys from '../../assets/partners/kamasys.svg';
import avatarkamasys from '../../assets/partners/AvatarKamasys.png';

const PartnersFeedback = () => {
  const slides = [
    {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      name: 'Max ',
      position: 'Frontend Dev',
      img:avatarkamasys
    },
    {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      name: 'Name Surname',
      position: 'Position, Company name',
      img:avatarkamasys
    },
    {
      text:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.",
      name: 'Name Surname',
      position: 'Osma group',
      img:avatarkamasys
    },
    // Add more slides as needed
  ];

  const [currentSlide, setCurrentSlide] = useState(0);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  const goToPreviousSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === 0 ? slides.length - 1 : prevSlide - 1));
  };

  const goToNextSlide = () => {
    setCurrentSlide((prevSlide) => (prevSlide === slides.length - 1 ? 0 : prevSlide + 1));
  };

  return (
    <div className='partners dark-blue'>
      <div className="container">
        <img src={kamasys} alt="#" className='company-title' />
        <h2>{slides[currentSlide].text}</h2>
        <div className='partner-user'>
          <img src={slides[currentSlide].img} alt="avatar" />
          <h4>{slides[currentSlide].name}</h4>
          <h5>{slides[currentSlide].position}</h5>
        </div>
        <div className="slider-buttons">
          <button className='slide-button-square' onClick={goToPreviousSlide}></button>
          {slides.map((slide, index) => (
            <button
              key={index}
              className={index === currentSlide ? 'slide-button-circle active' : 'slide-button-circle'}
              onClick={() => goToSlide(index)}
            >
              
            </button>
          ))}
          {/* <button className='slide-button-circle' onClick={goToNextSlide}></button> */}
        </div>
      </div>
    </div>
  );
};

export default PartnersFeedback;