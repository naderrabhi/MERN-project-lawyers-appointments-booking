import React from "react";
import Links from "../Links";
import WelcomeHeaderSmallScreen from "./WelcomeHeaderSmallScreen";

const WelcomeHeader = ({toggleMenu,setToggleMenu}) => {
  return (
    <div className="welcome--page_header">
      <p className="welcome--page_header-p">
        l'accès au professionnel du droit en un clic
      </p>
      <ul className="welcome--page_links">
        <Links />
      </ul>
      <WelcomeHeaderSmallScreen toggleMenu={toggleMenu} setToggleMenu={setToggleMenu} />
    </div>
  );
};

export default WelcomeHeader;
