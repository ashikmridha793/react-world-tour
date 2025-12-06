import CountryData from "../CountryData/CountryData";

const CountryDetail = (props) => {
  // const {country, hendleVisitedCountry, handleVisitedFlags} = props
  return (
    <div>
      <h4>Country Details</h4>
      <hr />
      {/* <CountryData
                  country={country}
                  hendleVisitedCountry={hendleVisitedCountry}
                  handleVisitedFlags={handleVisitedFlags}
                  ></CountryData> */}
      <CountryData {...props}></CountryData>
    </div>
  );
};

export default CountryDetail;
