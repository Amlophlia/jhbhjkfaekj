import React, { useState } from "react";
import { testimonialpages } from "../../data/testimonial";

const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction: "prev" | "next") => {
    setCurrentIndex((prevIndex) =>
      direction === "next"
        ? (prevIndex + 1) % testimonialpages.length
        : (prevIndex - 1 + testimonialpages.length) % testimonialpages.length
    );
  };

  const renderStars = (rating: number) =>
    Array.from({ length: 5 }, (_, i) => (
      <svg
        key={i}
        xmlns="http://www.w3.org/2000/svg"
        className={`h-6 w-6 ${
          i < rating ? "text-yellow-500" : "text-gray-300"
        }`}
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <polygon points="12 17.27 18.18 21 15.54 13.97 21 9.24 13.81 9.24 12 2 10.19 9.24 3 9.24 8.46 13.97 5.82 21 12 17.27" />
      </svg>
    ));

  return (
    <div className="relative w-full h-full flex  items-center mt-20  mb-20 justify-center">
      <div className=" max-w-7xl  mx-auto    justify-center items-center">
        <div className=" flex items-center w-full h-full justify-center">
          {/* Image Section */}
          <div className=" w-full h-[450px]  pl-20 ">
            <img
              src={testimonialpages[currentIndex].image}
              alt={testimonialpages[currentIndex].author}
              className=" w-[300px] h-full object-fill "
            />
          </div>

          {/* Text Section */}
          <div className=" w-full ml-10 md:ml-20 flex flex-col items-center md:items-start">
            {/* Star Ratings */}
            <div className="flex  justify-center mb-20">
              {renderStars(testimonialpages[currentIndex].rating)}
            </div>

            {/* Testimonial Text */}
            <p className="font-body mt-4 mb-4 text-gray-600 text-center md:text-left">
              {testimonialpages[currentIndex].description}
            </p>
            <p className="mt-2 w-3/4 md:mt-4 text-gray-500 text-center md:text-left">
              <strong>- {testimonialpages[currentIndex].author}</strong>
            </p>

            {/* Navigation Buttons */}
            <div className="flex justify-between w-1/4 items-center mt-4">
              {/* Previous Button */}
              <button
                onClick={() => handleNavigation("prev")}
                aria-label="Previous"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="15 18 9 12 15 6"></polyline>
                </svg>
              </button>

              {/* Indicator */}
              <div className="flex space-x-1">
                {testimonialpages.map((_, index) => (
                  <div
                    key={index}
                    onClick={() => setCurrentIndex(index)}
                    className={`w-3 h-3 rounded-full cursor-pointer ${
                      currentIndex === index
                        ? "bg-gray-800"
                        : "bg-gray-400 hover:bg-gray-500"
                    }`}
                  ></div>
                ))}
              </div>

              {/* Next Button */}
              <button
                onClick={() => handleNavigation("next")}
                aria-label="Next"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polyline points="9 18 15 12 9 6"></polyline>
                </svg>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Testimonials;
