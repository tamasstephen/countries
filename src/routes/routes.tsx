import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { CountryList } from "../pages/CountryList";
import { RouterProvider } from "react-router-dom";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Navbar />,
    children: [
      {
        path: "/",
        element: <CountryList />,
      },
    ],
  },
]);

export const AppRouter = () => {
  return <RouterProvider router={routes} />;
};
