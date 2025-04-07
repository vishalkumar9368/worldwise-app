import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { useCountries } from "../context/CountriesContext";

const CountryDetails = () => {
  const navigate = useNavigate();
  const { code } = useParams();
  const { allCountries } = useCountries(); // Get theme from context

  const country = allCountries.find((country) => country.cca3 === code);

  if (!country) return <p>Country not Found.</p>;

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <div className="max-w-6xl mx-auto p-6">
      <div className="flex flex-col  max-w-xl mx-auto p-8 items-start rounded-lg bg-white shadow-2xl gap-1 border-1 border-y-pink-300 border-x-purple-400  dark:bg-gray-900 dark:text-gray-300 ">
        <button onClick={handleBack}>&larr; Back</button>
        <h1 className="text-3xl font-semibold text-center w-full py-4 text-purple-700 dark:text-purple-300 ">
          {country.name.common}
        </h1>
        <div>
          <strong> Flag:</strong>{" "}
          <img
            src={country.flags.png}
            alt={country.flags.alt}
            className="h-30"
          />
        </div>
        <p>
          <strong>Region:</strong> {country.region}
        </p>
        <p>
          <strong>Subregion:</strong> {country.subregion || "N/A"}
        </p>
        <p>
          <strong>Continents:</strong> {country.continents.join(", ")}
        </p>
        <p>
          <strong>Population:</strong> {country.population.toLocaleString()}
        </p>
        <p>
          <strong>Capital:</strong>{" "}
          {country.capital ? country.capital[0] : "N/A"}
        </p>
        <p>
          <strong>Area:</strong> {country.area.toLocaleString()} km²
        </p>
        <p>
          <strong>Languages:</strong>{" "}
          {country.languages
            ? Object.values(country.languages).join(", ")
            : "N/A"}
        </p>
        <p>
          <strong>Currencies:</strong>{" "}
          {country.currencies
            ? Object.values(country.currencies)
                .map((c) => c.name)
                .join(", ")
            : "N/A"}
        </p>
        {/* Add additional information */}
        {country.borders && country.borders.length > 0 && (
          <p>
            <strong>Borders with:</strong> {country.borders.join(", ")}
          </p>
        )}
      </div>
    </div>
  );
};

export default CountryDetails;
