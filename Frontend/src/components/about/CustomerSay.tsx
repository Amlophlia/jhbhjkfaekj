// src/components/CustomerSays.tsx
import React from "react";
import { CustomerSaysProps, Card } from "../../types";

const CustomerSay: React.FC<CustomerSaysProps> = ({
  title,
  content,
  imageSrc,
  cards,
}) => {
  return (
    <section className="w-full h-full flex flex-col justify-center items-center gap-16 p-10 bg-gray-100">
      <div className="flex w-[1280px] h-full justify-center p-8">
        <div className="flex h-[500px] flex-col justify-center items-center gap-8 p-8">
          <h1 className="flex text-4xl font-bold justify-center items-center text-blue">
            {title}
          </h1>
          <p className="flex justify-center items-center w-full text-center text-xl">
            {content}
          </p>
          <div className="flex justify-center items-center w-full">
            <button className="bg-blue-600 text-white py-2 px-6 bg-blue rounded-lg text-lg shadow-lg transition-all">
              Click Me
            </button>
          </div>
        </div>

        <div className="flex h-[500px] justify-center items-center w-full">
          <img
            src={imageSrc}
            alt="Related visual"
            className="w-full h-[390px] rounded-lg"
          />
        </div>
      </div>

      <div className="flex">
        {cards.map((card: Card) => (
          <div
            key={card.id}
            className="flex flex-col border justify-center p-8 bg-white rounded-lg shadow-lg mx-4 text-center max-w-xs gap-6"
          >
            <div className="flex justify-evenly items-center text-4xl">
              <card.icon className="w-16 h-12 text-blue" />
              <h3 className="text-xl font-bold">{card.heading}</h3>
            </div>
            <p className="text-lg text-gray-600">{card.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default CustomerSay;
