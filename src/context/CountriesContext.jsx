import { createContext, useContext, useEffect, useState } from "react";

const CountriesContext = createContext();

// we need to export this as we will wrap main component with it
export const CountriesProvider = ({ children }) => {
  const [allCountries, setAllCountries] = useState([]);
  const [error, setError] = useState("");
  const [theme, setTheme] = useState(
    localStorage.getItem("world_wise_theme") || "light"
  );

  const fetchCountries = async () => {
    try {
      const response = await fetch("https://restcountries.com/v3.1/all", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();
      // console.log(data);
      setAllCountries(data);
    } catch (error) {
      setError("Error fetching countries data.");
      console.log(error);
    }
  };

  // do it only once since we are not performing any crid operation on this data
  useEffect(() => {
    fetchCountries();
  }, []);

  // a function to manage theme
  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  //whenever theme changes run this effect
  // Persist theme to localStorage
  useEffect(() => {
    localStorage.setItem("world_wise_theme", theme);
    if (theme === "dark") {
      document.documentElement.classList.add("dark"); // Add dark class to html
    } else {
      document.documentElement.classList.remove("dark"); // Remove dark class
    }
  }, [theme]);

  return (
    <CountriesContext.Provider
      value={{ allCountries, toggleTheme, error, theme }}
    >
      {children}
    </CountriesContext.Provider>
  );
};

export const useCountries = () => {
  return useContext(CountriesContext);
};
