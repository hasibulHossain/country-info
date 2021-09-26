import React, { useContext } from "react";
import "./Status.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import { AppContext } from '../../App';

function Status() {
  const state = useContext(AppContext);

  return (
    <div className="status">
      <div className="status-info">
        <p>Country Added: <span className="status-info-count">{state.selectedCountries.length}</span></p>
        <p>Population count: <span className="status-info-count">{state.totalPopulation.toFixed(2)}m</span></p>
      </div>

      <div className="added-country">
        {
          state.selectedCountries.map(country => (
            <div>
              <p>{country.name}</p>
              <p>Population: {country.population}m</p>
            </div>
          ))
        }
      </div>
      
      <div className="status-action">
        <button onClick={() => state.reset()} >
          <FontAwesomeIcon icon={faTrashAlt} />
          <span style={{marginLeft: '5px'}}>Vanish population</span>
        </button>
      </div>
    </div>
  );
}

export default Status;
