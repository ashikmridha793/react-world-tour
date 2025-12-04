import { useState } from 'react';
import './Country.css'
const Country = ({ country }) => {
      const {name, flags, population, area, cca3} = country
      const [visited, setVisited] = useState(false);
      const hendleVisited = () => {
            setVisited(!visited)
      }
      return (
            <div className="country">
                  <h3>{name.common}</h3>
                  <img src={flags.png} alt="" />
                  <p>Total Population: {population}</p>
                  <p>Area: {area}</p>
                  <p><small>Code: {cca3}</small></p>
                  <button onClick={hendleVisited}>{visited ? 'Visited':'Visit now'}</button><br />
                  {visited ? 'I have visited this country': 'I want to visit'}
            </div>
      );
};

export default Country;