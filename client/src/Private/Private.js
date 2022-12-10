import React from "react";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

import ProfileLawyer from "../Pages/ProfileLawyer/ProfileLawyer";
import CreateProfile from "../Pages/CreateProfile/CreateProfile";
import ProfileClient from "../Pages/ProfileClient/ProfileClient";

const Private = () => {
  
  const User = useSelector((state) => state.auth.User);
  
  return (
    <>
      {User && User.role === "lawyer" && User.isHasProfile ? (
        <ProfileLawyer />
      ) : User && User.role === "lawyer" && !User.isHasProfile ? (
        <CreateProfile />
      ) : User && User.role === "client" ? (
        <ProfileClient />
      ) : User && User.role === "admin" ? (
        <Navigate to="/tableau-de-bord" />
      ) : <Navigate to="/" /> }
    </>
  );
};

export default Private;
