import React, { useState } from "react";
import slides from "../../data/slider";
import Button from "../home/Button";
import { createBackgroundStyle } from "../../utils/styles";

const Hero: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
  };

  return (
    <div className="relative w-full h-screen overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${currentIndex * 100}%)` }}
      >
        {slides.map((slide) => (
          <div
            key={slide.id}
            className="w-full h-screen flex-shrink-0 relative z-10"
            style={createBackgroundStyle(slide.image)}
          >
            <div className="absolute inset-0 bg-black bg-opacity-40"></div>
            <div className="flex flex-col items-center justify-center h-full text-center">
              <h1 className=" font-heading text-6xl text-white font-bold md:text-8xl">
                {slide.text}
              </h1>
              <p className="text-lg  font-body text-white font-semibold md:text-2xl">
                {slide.subText}
              </p>
              <button className="w-auto font-body px-4 py-2 mt-4 font-bold text-white bg-blue hover:bg-blu focus:outline-none">
                Learn More
              </button>
            </div>
          </div>
        ))}
        <div
          className="absolute inset-0 h-full w-full bg-cover bg-center bg-no-repeat"
          style={createBackgroundStyle(slides[currentIndex].image)}
        ></div>
      </div>
      <Button onClick={handlePrev} direction="prev" />
      <Button onClick={handleNext} direction="next" />
    </div>
  );
};

export default Hero;
