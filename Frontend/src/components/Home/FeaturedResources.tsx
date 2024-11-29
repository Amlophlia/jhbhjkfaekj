import React from "react";
import { featureResource } from "../../data/featureResource";

const FeaturedResources: React.FC = () => {
  return (
    <div className="h-auto w-full flex flex-col justify-center font-heading gap-20 items-center">
      <div className="w-[1280px] h-[700px] flex flex-col gap-20">
        {/* First Part: Heading */}
        <div className="text-center flex justify-center items-center h-20 w-full">
          <h2 className="text-4xl font-bold">Featured Resources</h2>
        </div>

        {/* Second Part: Cards */}
        <div className="flex justify-around gap-10 w-full h-[850px] p-8">
          {featureResource.map((card, index) => (
            <div
              key={index}
              className="flex flex-col p-2 rounded-lg border shadow-lg gap-6 w-full sm:w-80 lg:w-96"
            >
              <div className="flex flex-col p-2 gap-4 h-[180px]">
                <h3 className="text-3xl font-bold text-blue">{card.heading}</h3>
                <p className="text-lg text-gray-500">{card.date}</p>
                <p className="text-black text-base leading-6">{card.content}</p>
              </div>

              {/* Image with zoom and opacity effect on hover */}
              <div className="w-full h-[300px] overflow-hidden flex justify-center items-center">
                <img
                  src={card.imageUrl}
                  alt={card.heading}
                  className="w-full h-[230px] object-cover transition-transform duration-300 ease-in-out hover:scale-105 hover:opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturedResources;
