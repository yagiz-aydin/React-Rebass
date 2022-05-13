import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Context as AuthContext } from 'context/AuthContext';
import { PATH } from "route/manager";

export default function UnauthRoute({ children }) {
  const { state } = useContext(AuthContext);
  let location = useLocation();
  
  if(!state.token) return children
  else return <Navigate to={PATH.HOME} state={{ from: location }} replace />;
}
