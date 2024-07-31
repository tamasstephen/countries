import React from "react";
import { Outlet } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { toggleTheme } from "../app/features/themeSlice";
import { Box, Button } from "@mui/material";

export const Navbar = () => {
  const dispatch = useAppDispatch();

  return (
    <Box>
      <div>Navbar</div>
      <Button onClick={() => dispatch(toggleTheme())}>Theme</Button>
      <div>
        <Outlet />
      </div>
    </Box>
  );
};
