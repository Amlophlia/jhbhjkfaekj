import React from "react";
import { assets } from "../../assets/images/assets";

const Hero: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
        {/* Text Content */}
        <div className="md:w-1/2 mb-8 md:mb-0 lg:pr-16">
          <h2 className=" font-heading text-4xl font-bold leading-tight text-gray-800 mb-6">
            About Us
          </h2>
          <p className="font-body text-lg leading-relaxed text-gray-600">
            JBG company and culture are a lot like our product. They’re crafted,
            not cobbled, for a delightful experience.
          </p>
        </div>

        {/* Image */}
        <div className="md:w-1/2">
          <img
            src={assets.Aboutus}
            alt="HubSpot Team"
            className="rounded-lg shadow-lg"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
