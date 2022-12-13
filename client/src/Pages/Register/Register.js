import React, { useState } from "react";

import RegisterAsAvocat from "./RegisterAsAvocat";
import RegisterAsClient from "./RegisterAsClient";

import "./register.css";

const Register = () => {
  const [toggle, setToggle] = useState(true);
  
  return (
    <div className="register--page section__padding">
      <div className="register--page_espace">
        <button onClick={() => setToggle(true)} className="btn--costum ">
          Espace Client
        </button>
        <button onClick={() => setToggle(false)} className="btn--costum ">
          Espace Avocat
        </button>
      </div>
      {toggle ? <RegisterAsClient /> : <RegisterAsAvocat />}
    </div>
  );
};

export default Register;
