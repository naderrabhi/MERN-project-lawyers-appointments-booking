import React from "react";
import { Link } from 'react-router-dom'

const WelcomeContent = ({setSerchInput}) => {
  return (
    <div className="welcome--page_content">
      <h1>Droit devant</h1>
      <p>Plateforme de prise de rendez-vous pour avocats</p>
      <Link to="/avocats">
        <button onClick={()=>setSerchInput("tout")} className="btn--costum btn--costum_hover">prendre rdv</button>
      </Link>
    </div>
  );
};

export default WelcomeContent;
