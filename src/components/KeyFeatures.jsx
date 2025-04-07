import React from "react";
import { FaGlobe, FaCog, FaShieldAlt } from "react-icons/fa"; // import additional icons

const features = [
  {
    icon: <FaGlobe className="text-2xl text-purple-600" />,
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Sequi, repellendus.",
  },
  {
    icon: <FaCog className="text-2xl text-purple-600" />,
    text: "Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
  },
  {
    icon: <FaShieldAlt className="text-2xl text-purple-600" />,
    text: "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip.",
  },
];

const KeyFeatures = () => {
  return (
    <section className="max-w-6xl py-20">
      <h2 className="text-3xl font-bold text-center mb-18 text-purple-700 dark:text-purple-300">
        Key Features
      </h2>
      <div className="flex flex-wrap justify-center items-center   gap-10 md:gap-15 ">
        {features.map((feature, index) => (
          <div
            key={index}
            className="w-52 h-52 bg-gradient-to-b from-pink-300 to-purple-600 p-1 flex items-center justify-center relative text-center rounded-full"
          >
            <div className="z-20 absolute bg-white w-12 h-12 rounded-full flex items-center justify-center top-[-25px] left-1/2 transform -translate-x-1/2 shadow-md shadow-purple-300 dark:shadow-black">
              {feature.icon}
            </div>
            <div className="relative z-10 text-sm text-gray-700 p-3 bg-white rounded-full w-46 h-46 flex items-center justify-center text-center break-words leading-tight dark:bg-gray-900 dark:text-gray-300">
              <p className="sm:text-sm">{feature.text}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default KeyFeatures;
