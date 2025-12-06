const CountryData = (country, hendleVisitedCountry, hendleVisitedFlags) => {
  console.log(
    "inside contry data",
    country,
    hendleVisitedCountry,
    hendleVisitedFlags
  );
  return (
    <div>
      <p>
        <small>Country Data: {country.name.common}</small>
      </p>
    </div>
  );
};

export default CountryData;
