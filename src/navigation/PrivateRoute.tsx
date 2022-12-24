import React from "react";
import { Navigate, Outlet } from "react-router-dom";

const PrivateRoute: React.FC<{ children?: React.ReactElement }> = ({
  children,
}) => {
  const isLogged = true;

  return (
    <>{isLogged ? children ? children : <Outlet /> : <Navigate to="/" />}</>
  );
};

export default PrivateRoute;
