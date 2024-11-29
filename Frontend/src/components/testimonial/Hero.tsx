import React from "react";
import { assets } from "../../assets/images/assets";

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 w-full h-full">
      <div className="max-w-7xl mx-auto flex items-center justify-center">
        {/* Text Content */}
        <div className="w-1/2 ml-6 mb-8  lg:pr-16">
          <h2 className=" font-heading text-4xl font-bold leading-tight text-gray-800 mb-6">
            Success Stories made simple with JBG
          </h2>
          <p className="font-body text-lg leading-relaxed text-gray-600">
            JBG company and culture are a lot like our product. They’re crafted,
            not cobbled, for a delightful experience.
          </p>
          <button className="mt-4 px-6 py-3 bg-blue text-white font-semibold rounded-lg shadow-md">
            Learn More
          </button>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={assets.testimonialImage1}
            alt="HubSpot Team"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
