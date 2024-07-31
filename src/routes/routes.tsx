import React from "react";
import { createBrowserRouter } from "react-router-dom";
import { Navbar } from "../components/Navbar";
import { CountryList } from "../pages/CountryList";
import { RouterProvider } from "react-router-dom";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import { selectTheme } from "../app/features/themeSlice";
import { useAppSelector } from "../app/hooks";
import CssBaseline from "@mui/material/CssBaseline";

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
  const selectedTheme = useAppSelector(selectTheme);

  const theme = createTheme({
    palette: {
      mode: selectedTheme,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={routes} />
    </ThemeProvider>
  );
};
