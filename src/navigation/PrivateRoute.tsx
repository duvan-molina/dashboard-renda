import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../store/hooks";
import { isLogginSelector } from "../store/modules/auth/selectors";

const PrivateRoute: React.FC<{ children?: React.ReactElement }> = ({
  children,
}) => {
  const isLoggin = useAppSelector(isLogginSelector);

  return (
    <>{isLoggin ? children ? children : <Outlet /> : <Navigate to="/" />}</>
  );
};

export default PrivateRoute;
