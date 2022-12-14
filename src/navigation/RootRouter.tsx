import React from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";

import RootComponent from "../modules/shared/components/RootComponent";
import DashboardScreen from "../modules/dashboard/screens/Dashboard.screen";

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
      ],
    },
  ]);

  return <RouterProvider router={router} />;
};

export default RootRouter;
