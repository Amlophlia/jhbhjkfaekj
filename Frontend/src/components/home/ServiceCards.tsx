import React from "react";
import { servicecardData } from "./../../data/servicecardData";

const Layout: React.FC = () => {
  return (
    <div className="h-auto w-full flex flex-col justify-center items-center gap-16 font-heading">
      <div className="flex flex-col justify-center items-center gap-y-6 w-[1280px]">
        <h1 className="flex justify-center items-center text-4xl text-black w-[1208px] font-extrabold">
          Maximize Your Digital Presence with Ease
        </h1>
        <p className="flex flex-col text-black text-center font-thin text-base w-[500px] leading-8">
          Juggling content creation and distribution can be overwhelming. Here's
          how our tools can make it simpler.
        </p>
      </div>

      <div className="flex flex-col justify-center items-center w-[1280px] gap-24">
        {servicecardData.map((card, index) => (
          <div
            key={card.id}
            className={`flex justify-around items-center w-full h-[494px] p-4 ${
              index % 2 === 0 ? "flex-row" : "flex-row-reverse"
            }`}
          >
            <div className="flex flex-col gap-y-6 justify-center w-[550px] h-[275px]">
              <h1 className="text-xl font-semibold text-blue">{card.title}</h1>
              <h2 className="text-2xl font-extrabold">{card.heading}</h2>
              <h3 className="text-base w-[528px] leading-6 font-normal">{card.description}</h3>
              <button className="bg-blue text-white px-4 py-2 h-[50px] w-[200px] rounded-3xl transform transition-all duration-300 ease-in-out hover:bg-dark-blue hover:opacity-80">
                {card.buttonText}
              </button>
            </div>

            <div className="rounded-lg flex justify-center items-center h-[494px] w-[550px]">
              <img
                src={card.image}
                alt="Card Image"
                className="w-[550px] rounded-md h-[340px] transform transition-all duration-300 ease-in-out hover:scale-105 hover:shadow-[0px_4px_15px_rgba(0,0,0,0.2),0px_10px_30px_rgba(0,0,0,0.15)]"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Layout;
