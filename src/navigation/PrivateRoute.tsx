import React from "react";
import { Navigate, Outlet } from "react-router-dom";
import { useAppSelector } from "../modules/shared/store/hooks";
import { isLogginSelector } from "../modules/shared/store/modules/auth/selectors";

const PrivateRoute: React.FC<{ children?: React.ReactElement }> = ({
  children,
}) => {
  const isLoggin = useAppSelector(isLogginSelector);

  return (
    <>{isLoggin ? children ? children : <Outlet /> : <Navigate to="/" />}</>
  );
};

export default PrivateRoute;
