import { useState } from "react";
import "./Country.css";
import CountryDetail from "../../CountryDetail/CountryDetail";
const Country = ({ country, hendleVisitedCountry, hendleVisitedFlags }) => {
  const { name, flags, population, area, cca3 } = country;
  const [visited, setVisited] = useState(false);
  const hendleVisited = () => {
    setVisited(!visited);
  };

  return (
    <div className={`country ${visited ? "visited" : "non-visited"}`}>
      <h3 style={{ color: visited ? "purple" : "white" }}>{name.common}</h3>
      <img src={flags.png} alt="" />
      <p>Total Population: {population}</p>
      <p>Area: {area}</p>
      <p>
        <small>Code: {cca3}</small>
      </p>
      <button onClick={() => hendleVisitedCountry(country)}>
        Mark visited
      </button>
      <br />
      <button onClick={hendleVisitedFlags(country.flags.png)}>Add Flag</button>
      <br />
      <button onClick={hendleVisited}>
        {visited ? "Visited" : "Visit now"}
      </button>
      <br />
      {visited ? "I have visited this country" : "I want to visit"}
      <hr />
      <CountryDetail
        country={Country}
        hendleVisitedCountry={hendleVisitedCountry}
        hendleVisitedFlags={hendleVisitedFlags}
      ></CountryDetail>
    </div>
  );
};

export default Country;
