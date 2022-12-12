import React from "react";
import { Link } from "react-router-dom";

import "./pagenotfound.css";

const PageNotFound = () => {
  return (
    <div className="wrapper setion__padding">
      <div className="landing-page">
        <h1> 404 Error.</h1>
        <p>Nous ne pouvons pas trouver la page que vous recherchez.</p>
        <Link to="/">
          <button className="btn--costum btn--costum_hover">page d'accueil</button>
        </Link>
      </div>
    </div>
  );
};

export default PageNotFound;
