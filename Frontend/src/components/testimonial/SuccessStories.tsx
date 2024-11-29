// SuccessStories.tsx
import React from "react";
import { successStories } from "../../data/successStories";
import { SuccessStory } from "../../types/index";

const SuccessStories: React.FC = () => {
  return (
    <div className="h-full w-full flex flex-col justify-center items-center bg-gray-100">
      <div className="flex flex-col justify-center items-center w-[1280px] space-y-14 h-[480px]">
        <div className="flex justify-center items-center w-full h-20">
          <h1 className="text-4xl font-bold">Success Stories</h1>
        </div>

        <div className="flex justify-between p-6 w-full">
          {successStories.map((story: SuccessStory) => (
            <div
              key={story.id}
              className="flex flex-col w-[460px] max-w-sm p-6 bg-white gap-y-6 border shadow-md rounded-lg"
            >
              <div className="flex items-center space-x-6">
                <div className="flex">
                  <img
                    src={story.imageUrl}
                    alt={story.name}
                    className="w-24 h-24 rounded-full"
                  />
                </div>
                <div className="flex flex-col">
                  <div className="text-lg font-medium text-blue">
                    {story.name}
                  </div>
                  <div className="text-sm text-gray-500">
                    {story.postedTime}
                  </div>
                </div>
              </div>

              <div className="flex flex-col items-start space-y-2">
                {/* Stars */}
                <div className="flex space-x-1">
                  {[...Array(story.stars)].map((_, index) => (
                    <svg
                      key={index}
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      className="w-6 h-6 text-yellow-400"
                    >
                      <path d="M12 17.27l6.18 3.73-1.64-7.03 5.36-4.73-7.07-.61L12 2 9.17 8.63l-7.07.61 5.36 4.73-1.64 7.03L12 17.27z" />
                    </svg>
                  ))}
                </div>

                <p className="text-base text-gray-700">{story.content}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SuccessStories;
