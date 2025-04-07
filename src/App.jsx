import React, { useEffect } from "react";
import { Routes, Route } from "react-router-dom";
import SearchPage from "./pages/SearchPage";
import CountryDetails from "./pages/CountryDetails";
import Homepage from "./pages/Homepage";
import Navbar from "./components/navbar";
import { useCountries } from "./context/CountriesContext";

const App = () => {
  return (
    <div className="bg-gradient-to-r from-[#eff4ff] via-[#ffffff] to-[#f2e4f7] h-auto dark:bg-gradient-to-r dark:from-purple-950 dark:via-gray-950 dark:to-blue-950 dark:text-white">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/countries" element={<SearchPage />} />
        <Route path="/countries/:code" element={<CountryDetails />} />
      </Routes>
    </div>
  );
};

export default App;
