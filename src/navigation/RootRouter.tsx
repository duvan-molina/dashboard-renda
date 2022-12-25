import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

import DashboardScreen from "../modules/dashboard/screens/Dashboard.screen";
import CreateApartamentScreen from "../modules/create-apartament/screens/CreateApartament.screen";
import EditProfileScreen from "../modules/profile/screens/EditProfile.screen";
import PrivateRoute from "./PrivateRoute";
import LoginScreen from "../modules/auth/screens/Login.screen";
import Navbar from "../modules/shared/components/RootComponent";
import { useAppSelector } from "../store/hooks";
import { isLogginSelector } from "../store/modules/auth/selectors";

const RootRouter: React.FC = () => {
  const isLoggin = useAppSelector(isLogginSelector);

  return (
    <BrowserRouter>
      {isLoggin && <Navbar />}
      <Routes>
        <Route index element={<LoginScreen />} />
        <Route element={<PrivateRoute />}>
          <Route path="/home" element={<DashboardScreen />} />
          <Route path="/create-entry" element={<CreateApartamentScreen />}>
            <Route path=":apartamentId" element={<CreateApartamentScreen />} />
            <Route path="" element={<CreateApartamentScreen />} />
          </Route>
          <Route path="/edit-profile" element={<EditProfileScreen />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default RootRouter;
