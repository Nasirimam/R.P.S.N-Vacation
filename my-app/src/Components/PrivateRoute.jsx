import React from "react";
import { Navigate } from "react-router-dom";
import { useContext, children } from "react";
import { ShowContext } from "../Context/ShowContext";
import { useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const { isAuth } = useContext(ShowContext);
  const location = useLocation();

  if (!isAuth) {
    return <Navigate to="/Login" />;
  }
  return children;
};

export default PrivateRoute;
