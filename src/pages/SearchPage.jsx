import React, { useEffect, useState } from "react";
import { useCountries } from "../context/CountriesContext";
import CountryCard from "../components/CountryCard";

const SearchPage = () => {
  // get values from context
  const { allCountries, error } = useCountries();
  const [userInput, setUserInput] = useState("");
  const [selectedRegion, setSelectedRegion] = useState("all");

  const handleUserInput = (e) => {
    setUserInput(e.target.value);
  };
  const handleSelectedRegion = (e) => {
    setSelectedRegion(e.target.value);
  };

  // if error comes then show this
  if (error) return <p>{error}</p>;

  // function to get popular countries

  const popularCountries = allCountries
    .sort((a, b) => b.population - a.population)
    .slice(0, 10);
  const filteredCountries = allCountries.filter((item) => {
    const matchesSearch = item.name.common
      .toLowerCase()
      .includes(userInput.toLowerCase());
    const matchesRegion =
      selectedRegion === "all" || item.region === selectedRegion;
    return matchesSearch && matchesRegion;
  });
  return (
    <div className=" max-w-6xl mx-auto px-6 py-6 min-h-screen h-full">
      <div className="  flex flex-col items-center justify-center">
        <h1 className="text-3xl font-semibold text-purple-600 text-center">
          Search a Country
        </h1>
        <div className="flex flex-col  sm:flex-row items-center justify-center gap-6 py-10 == ">
          <input
            type="text"
            placeholder="Search a country..."
            onChange={handleUserInput}
            className="px-4 py-2 border-2 rounded-xl border-purple-600
            w-xs placeholder:text-gray-700 dark:placeholder:text-gray-300 dark:border-purple-700"
          />
          <select
            onChange={handleSelectedRegion}
            className="w-xs px-4 py-2 border-2 rounded-xl border-purple-600 text-gray-700 dark:text-gray-300 dark:border-purple-700"
          >
            <option value="all">All regions</option>
            <option value="Africa">Africa</option>
            <option value="Americas">Americas</option>
            <option value="Asia">Asia</option>
            <option value="Europe">Europe</option>
            <option value="Oceania">Oceania</option>
          </select>
        </div>
      </div>
      <div className="flex gap-4 flex-wrap items-center justify-center py-6">
        {userInput === "" && selectedRegion === "all" ? (
          popularCountries.map((country, index) => (
            <CountryCard
              key={index}
              countryName={country.name.common}
              population={country.population}
              region={country.region}
              countryCode={country.cca3}
            />
          ))
        ) : filteredCountries.length > 0 ? (
          filteredCountries.map((country, index) => (
            <CountryCard
              key={index}
              countryName={country.name.common}
              population={country.population}
              region={country.region}
              countryCode={country.cca3}
            />
          ))
        ) : (
          <p>No Countries found.</p>
        )}
      </div>
    </div>
  );
};

export default SearchPage;
