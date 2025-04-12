import React from "react";
import { Link } from "react-router-dom";

const CountryCard = (props) => {
  const { countryName, population, region, countryCode } = props;

  return (
    <Link
      to={`/countries/${countryCode}`}
      style={{ textDecoration: "none", color: "inherit" }}
    >
      <div
        className="w-60 h-40 p-6 bg-white rounded-lg  shadow-2xl border-1 border-y-pink-300 
      hover:bg-[#fcfcfc]
      border-x-purple-400 dark:bg-gray-900 dark:hover:bg-gray-950"
      >
        <h3 className="text-purple-600 dark:text-purple-300 text-xl mb-3">
          {countryName}
        </h3>
        <p className="text-gray-700 dark:text-gray-300">Region: {region}</p>
        <p className="text-gray-700 dark:text-gray-300">
          Population: {population}
        </p>
      </div>
    </Link>
  );
};

export default CountryCard;
