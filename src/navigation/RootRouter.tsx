import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootComponent from "../modules/shared/components/RootComponent";
import DashboardScreen from "../modules/dashboard/screens/Dashboard.screen";
import CreateApartamentScreen from "../modules/create-apartament/screens/CreateApartament.screen";
import EditProfileScreen from "../modules/profile/screens/EditProfile.screen";

const RootRouter: React.FC = () => {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootComponent />,
      children: [
        {
          path: "/",
          element: <DashboardScreen />,
        },
        {
          path: "/create-entry",
          element: <CreateApartamentScreen />,
        },
        {
          path: "/edit-profile",
          element: <EditProfileScreen />,
        },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RootRouter;
