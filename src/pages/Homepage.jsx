import React from "react";
import globe from "../assets/globe.avif";
import { MdPublic } from "react-icons/md";
import KeyFeatures from "../components/KeyFeatures";
import Testimonials from "../components/Testimonials";
import { Link } from "react-router-dom";

const Homepage = () => {
  return (
    <>
      <div className="max-w-6xl mx-auto px-6">
        <section className="py-20 flex gap-15 flex-wrap justify-center items-center md:flex-nowrap md:gap-10">
          <div className="flex flex-col gap-10 md:w-3/5 md:items-start items-center ">
            <h1 className="font-bold text-4xl md:text-5xl text-center md:text-start">
              Discover the{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-700 bg-clip-text text-transparent">
                World’s
              </span>{" "}
              Wonders at Your{" "}
              <span className="bg-gradient-to-r from-purple-600 to-purple-600 bg-clip-text text-transparent">
                Fingertips
              </span>
            </h1>
            <p className="font-medium text-lg text-gray-800 text-center md:text-start dark:text-gray-300">
              Get in-depth knowledge about every country on the planet—its
              culture, geography, history, and more. Start exploring today!
            </p>
            <Link to="/countries">
              <button
                className="px-6 py-2.5 bg-gradient-to-r from-pink-500 to-purple-500
          text-white text-lg font-semibold rounded-xl shadow-2xl hover:from-purple-500 hover:to-pink-500 "
              >
                Explore the World
              </button>
            </Link>
          </div>
          <div className="md:w-2/5">
            <img
              src={globe}
              alt="globe-image"
              className="border-8 border-y-pink-300 border-x-purple-300"
            />
          </div>
        </section>
        <section className="py-20 flex items-center justify-center">
          <div className="bg-white shadow-2xl rounded-xl max-w-2xl p-6 flex flex-col gap-4 ">
            <h2 className="text-2xl font-semibold text-purple-700">
              Why Use Worldwise?
            </h2>
            <p className="text-lg text-gray-700">
              Worldwise is your ultimate resource for discovering detailed
              country information. Learn about every country’s history,
              landmarks, culture, economy, and more—all in one place!
            </p>
            <div className="text-4xl flex justify-end">
              <MdPublic className="text-pink-500" />
            </div>
          </div>
        </section>
        <KeyFeatures />
        <Testimonials />
      </div>
      <section className=" bg-purple-950 mt-6 py-3 flex items-center justify-center text-white">
        <p>
          © {new Date().getFullYear()} WorldWise. Made with ❤️ by Vishal Kumar.
        </p>
      </section>
    </>
  );
};

export default Homepage;
