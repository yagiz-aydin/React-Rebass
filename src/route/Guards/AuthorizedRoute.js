import React, { useContext } from "react";
import { useLocation, Navigate } from "react-router-dom";
import { Context as AuthContext } from 'context/AuthContext';
import { PATH } from "route/manager";

export default function AuthenticatedRoute({ children, perm }) {
  const { state } = useContext(AuthContext);
  let location = useLocation();
  
  if(state.token) {
    if(perm && perm === "profilemanagerperm") return children;
      return <Navigate to={PATH[403]} state={{ from: location }} replace />;
  } else return <Navigate to={PATH.LOGIN} state={{ from: location }} replace />;

}
