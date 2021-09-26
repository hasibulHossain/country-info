import React, { useContext } from "react";
import "./homepage.css";

import CardContainer from "../../modules/card-container/CardContainer";
import Status from "../../components/Status/Status";

import { AppContext } from "../../App";

function Homepage() {
  const test = useContext(AppContext);

  console.log("context api => ", test);

  return (
    <div className="row">
      <header>
        <h1>Country Information</h1>
        <p>some info Lorem ipsum dolor sit amet.</p>
        <h2>second heading Lorem, ipsum dolor.</h2>
      </header>
      <main className="container">
        <div className="content-left">
          <CardContainer />
        </div>
        <div className="content-right">
          <Status />
        </div>
      </main>
    </div>
  );
}

export default Homepage;
