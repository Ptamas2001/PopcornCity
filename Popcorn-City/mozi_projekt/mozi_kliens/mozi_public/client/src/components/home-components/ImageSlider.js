import * as React from "react";
import { useState } from "react";
import "../../App.css";

const ImageSlider = ({ slides }) => {
  const [currentIndex, setCurrentIndex] = useState(0);


  const goToPrevious = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length -1
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex)
  };

  return (
    <div>
      <div className="carousel-cell">
        <div className="carousel-cell-images">
        <img
          src="/back.png"
          className="leftsidearrow"
          onClick={goToPrevious}
          alt={`${slides[currentIndex].title}`}
        />
        <img
          src="/back.png"
          className="rightsidearrow"
          onClick={goToNext}
          alt={`${slides[currentIndex].title}`}
          
        />
        </div>
        <div className="video">
          <video
            muted
            loop
            autoPlay
            preload="metadata"
            src={`${slides[currentIndex].url}`}
            poster=""
          />
        </div>
        <div className="overlay"></div>
        <div className="inner">
          <h2 className="title">{`${slides[currentIndex].title}`}</h2>
          <label className="description">
           {`${slides[currentIndex].description}`}
          </label>
        </div>
      </div>
    </div>
  );
};

export default ImageSlider;
