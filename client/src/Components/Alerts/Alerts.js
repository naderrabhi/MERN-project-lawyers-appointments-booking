import React from "react";
import { useSelector } from "react-redux";

import "./alerts.css";

const Alerts = () => {
  const alerts = useSelector((state) => state.alert);

  return (
    alerts &&
    alerts.map((alert) => (
      <div className="alert">
          <h3>{alert.msg}</h3>
      </div>
    ))
  );
};

export default Alerts;
