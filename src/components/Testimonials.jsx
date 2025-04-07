import React from "react";

const Testimonials = () => {
  const testimonials = [
    {
      name: "Vishal Kumar",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, laboriosam.",
    },
    {
      name: "Vishal Kumar",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, laboriosam.",
    },
    {
      name: "Vishal Kumar",
      review:
        "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Inventore, laboriosam.",
    },
  ];
  return (
    <div className="max-w-6xl py-20">
      <h2 className="text-3xl font-bold text-center mb-18 text-purple-700 dark:text-purple-300 ">
        What our users say
      </h2>
      <div className="flex flex-wrap gap-10 items-center justify-center">
        {testimonials.map(() => (
          <div className="w-64 h-46 bg-white p-6 rounded-lg shadow-2xl bg-gradient-to-r border-2 border-y-pink-300 border-x-purple-300 dark:bg-gray-900 flex flex-col gap-6">
            <p>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit.
              Inventore, laboriosam.
            </p>
            <i className="text-pink-500 dark:text-pink-300 text-right">
              Vishal kumar
            </i>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
