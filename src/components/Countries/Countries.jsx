import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
// import { Linter } from "eslint";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);
  const [visitedFlags, setVisitedFlag] = useState([])

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const handleVisitedFlags = flag => {
    const newVisitedFlags = [...visitedFlags, flag]
    setVisitedFlag(newVisitedFlags);
  }

  const hendleVisitedCountry = (country) =>{
    console.log('add to your visited country')
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  } 

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      {/* visited country */}
      <div>
        <h4>Visited Countries: {visitedCountries.length}</h4>
        <ul>
          {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>
      <div className="flag-container">
          {
            visitedFlags.map(flag => <img src={flag}></img>)
          }
      </div>
      {/* display country */}
      <div className="country-container">
        {countries.map((country) => (
          <Country 
          key={country.cca3} 
          hendleVisitedCountry={hendleVisitedCountry} 
          handleVisitedFlags={handleVisitedFlags}
          country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
