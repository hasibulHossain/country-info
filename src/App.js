import React, { useState, useEffect } from "react";
import "./App.css";
import Homepage from "./pages/homepage/Homepage";
import COUNTRIES from './data/data';

const AppContext = React.createContext();

function App() {
  const [countries, setCountries] = useState([]);
  const [selectedCountries, setSelectedCountries] = useState([]);
  const [totalPopulation, setTotalPopulation] = useState(0)

  const addCountry = id => {
    const selectedCountry = countries.filter(item => item.id === id);
    const uniqueSelectedCountries = [...new Set(selectedCountries.concat(selectedCountry))]

    const totalPopulationCount = uniqueSelectedCountries.reduce((accumulator, currentVal) => {
      return accumulator + currentVal.population
    }, 0)

    setSelectedCountries(uniqueSelectedCountries);
    setTotalPopulation(totalPopulationCount)
  }

  const reset = () => {
    setSelectedCountries([]);
    setTotalPopulation(0)
  } 

  useEffect(() => {
    setCountries(COUNTRIES);
  }, [totalPopulation]);

  return (
    <AppContext.Provider value={{ countries: countries, totalPopulation: totalPopulation, selectedCountries: selectedCountries, addCountry: addCountry, reset: reset }}>
      <Homepage />
    </AppContext.Provider>
  );
}

export { App as default, AppContext };
