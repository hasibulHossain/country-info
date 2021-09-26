import React, { useContext } from "react";
import "./CardContainer.css";
import Card from "../../components/Card/Card";

import { AppContext } from '../../App';

function CardContainer() {
  const state = useContext(AppContext);

  return (
    <div className="card-container">
      {state.countries.map((country, index) => (
        <div key={index} className="card-box">
          <Card country={country} addCountry={state.addCountry} />
        </div>
      ))}
    </div>
  );
}

export default CardContainer;
