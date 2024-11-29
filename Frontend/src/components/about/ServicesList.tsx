import React, { useState } from "react";
import { serviceList } from "../../data/servicecardData";

const ServicesList: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNavigation = (direction: "prev" | "next") => {
    setCurrentIndex((prevIndex) =>
      direction === "next"
        ? (prevIndex + 1) % serviceList.length
        : (prevIndex - 1 + serviceList.length) % serviceList.length
    );
  };

  return (
    <div className="relative w-full h-screen flex flex-col items-center justify-start overflow-x-hidden">
      {/* Heading Section */}
      <div className="text-center mt-8 mb-6">
        <h1 className="text-4xl md:text-4xl font-extrabold text-gray-800">
          Growing Better Together
        </h1>
      </div>

      {/* Services List */}
      <div className="relative w-[95%] md:w-4/5 lg:w-3/4 bg-white shadow-lg rounded-lg overflow-hidden">
        {/* Service Content */}
        <div className="flex flex-col md:flex-row items-center">
          {/* Image Section */}
          <div className="w-full md:w-1/2 h-60 md:h-auto bg-gray-300">
            <img
              src={serviceList[currentIndex].image}
              alt={serviceList[currentIndex].title}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Text Section */}
          <div className="w-full md:w-1/2 p-6 md:p-8 flex flex-col items-center md:items-start">
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800">
              {serviceList[currentIndex].title}
            </h2>
            <p className="mt-4 text-gray-600 text-center md:text-left">
              {serviceList[currentIndex].description}
            </p>
            <button className="mt-6 bg-blue text-white py-2 px-6 rounded-lg hover:bg-dark-blue transition duration-300 ease-in-out">
              {serviceList[currentIndex].buttonText}
            </button>
          </div>
        </div>

        {/* Navigation Buttons */}
        <button
          onClick={() => handleNavigation("prev")}
          aria-label="Previous"
          className="absolute top-1/2 -translate-y-1/2 left-4 bg-gray-200 text-gray-700 hover:bg-gray-300 p-3 rounded-full shadow-md focus:outline-none transition duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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

        <button
          onClick={() => handleNavigation("next")}
          aria-label="Next"
          className="absolute top-1/2 -translate-y-1/2 right-4 bg-gray-200 text-gray-700 hover:bg-gray-300 p-3 rounded-full shadow-md focus:outline-none transition duration-300 ease-in-out"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
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

      {/* Indicators */}
      <div className="absolute bottom-6 flex space-x-2">
        {serviceList.map((_, index) => (
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
    </div>
  );
};

export default ServicesList;
