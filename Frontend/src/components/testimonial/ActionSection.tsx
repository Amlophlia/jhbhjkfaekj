import React from "react";
import { ActionSectionProps } from "../../types/index";

const ActionSection: React.FC<ActionSectionProps> = ({
  heading,
  content,
  buttonText,
  buttonAction,
}) => {
  return (
    <div className="h-full w-full flex flex-col items-center justify-center space-y-8 mt-24">
      <div className="w-[1280px] h-64 flex items-center flex-col justify-center gap-y-6">
        <h1 className="text-3xl font-bold text-center text-blue-vivid">
          {heading}
        </h1>

        <p className="text-lg text-center text-gray-700 max-w-2xl">{content}</p>

        <button
          onClick={() => (window.location.href = buttonAction)}
          className="px-8 py-3 bg-blue-600 text-white bg-blue font-semibold rounded-lg shadow-lg transition-transform transform hover:scale-105 focus:outline-none focus:ring-2"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default ActionSection;
