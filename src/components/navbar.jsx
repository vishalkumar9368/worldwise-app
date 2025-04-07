import React from "react";
import { Link } from "react-router-dom";
import { FaMoon, FaSun } from "react-icons/fa";
import { IoEarth } from "react-icons/io5";
import { RiSearchLine } from "react-icons/ri"; // Import a different search icon
import { useCountries } from "../context/CountriesContext";

const Navbar = () => {
  const { theme, toggleTheme } = useCountries();
  return (
    <header className="py-6 max-w-6xl mx-auto px-6">
      <nav className="flex justify-between ">
        <Link
          to="/"
          className="flex items-center justify-center gap-1 text-purple-600 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-400"
        >
          <IoEarth className="text-2xl" />
          <p className="text-xl"> WorldWise</p>
        </Link>
        <ul className="flex justify-center items-center gap-5 text-xl">
          <li className="text-purple-600 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-400">
            <Link to="/countries">
              <RiSearchLine className="icon " /> {/* Replaced icon */}
            </Link>
          </li>
          <li className="text-purple-600 hover:text-purple-700 dark:text-purple-300 dark:hover:text-purple-400">
            <button onClick={toggleTheme}>
              {theme === "light" ? <FaMoon /> : <FaSun />}
            </button>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Navbar;
