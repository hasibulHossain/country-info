import React, { useContext } from "react";
import PropTypes from "prop-types";
import "./Card.css";

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPlusCircle } from '@fortawesome/free-solid-svg-icons';

function Card(props) {
  const { id, name, capital, alpha2Code, population, flag_url } = props.country;

  return (
    <div className="card">
      <div className="card-inner">
        <div className="card__img-container">
          <div className="card__img">
            <img src={flag_url} alt={name} />
          </div>
        </div>
        <div className="card__info">
          <div>
            <span>Name: </span>
            <span>{name}</span>
          </div>

          <div>
            <span>Capital: </span>
            <span>{capital}</span>
          </div>

          <div>
            <span>Alpha2code: </span>
            <span>{alpha2Code}</span>
          </div>

          <div>
            <span>Population: </span>
            <span>{population}m</span>
          </div>
        </div>
        <div className="card__action">
          <button onClick={() => props.addCountry(id)} >
            <FontAwesomeIcon icon={faPlusCircle} />
            <span style={{marginLeft: '5px'}}>
              Add population
            </span>
          </button>
        </div>
      </div>
    </div>
  );
}

Card.propsTypes = {
  name: PropTypes.string,
  capital: PropTypes.string,
  alpha2Code: PropTypes.string,
  population: PropTypes.number,
  flag_url: PropTypes.string,
};

export default Card;
