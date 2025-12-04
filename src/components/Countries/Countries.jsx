import { useEffect, useState } from "react";
import Country from "../Country/Country";
import "./Countries.css";
import { Linter } from "eslint";

const Countries = () => {
  const [countries, setCountries] = useState([]);
  const [visitedCountries, setVisitedCountries] = useState([]);

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/independent?status=true")
      .then((res) => res.json())
      .then((data) => setCountries(data));
  }, []);

  const hendleVisitedCountry = (country) =>{
    console.log('add to your visited country')
    const newVisitedCountries = [...visitedCountries, country];
    setVisitedCountries(newVisitedCountries);
  } 

  return (
    <div>
      <h3>Countries: {countries.length}</h3>
      <div>
        <h4>Visited Countries: {visitedCountries.length}</h4>
        <ul>
          {
            visitedCountries.map(country => <li key={country.cca3}>{country.name.common}</li>)
          }
        </ul>
      </div>
      <div className="country-container">
        {countries.map((country) => (
          <Country key={country.cca3} hendleVisitedCountry={hendleVisitedCountry} country={country}></Country>
        ))}
      </div>
    </div>
  );
};

export default Countries;
