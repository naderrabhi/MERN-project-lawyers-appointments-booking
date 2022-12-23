import React from "react";
import { useSelector } from "react-redux";

import "./alerts.css";

const Alerts = () => {
  const alerts = useSelector((state) => state.alert);

  return (
    alerts &&
    alerts.map((alert, index) => (
      <div key={index} className="alert">
          <h3>{alert.msg}</h3>
      </div>
    ))
  );
};

export default Alerts;
