import React from "react";
import { Outlet, useNavigate } from "react-router-dom";
import { useAppDispatch } from "../app/hooks";
import { toggleTheme } from "../app/features/themeSlice";
import { Box, Button, Stack, Typography } from "@mui/material";

export const Navbar = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();

  return (
    <Box>
      <Stack
        direction="row"
        justifyContent="space-between"
        alignItems="center"
        sx={{
          paddingX: "2rem",
          paddingY: "1.5rem",
          boxShadow: "0px 4px 8px 0px rgba(0,0,0,0.12)",
          marginBottom: "1rem",
        }}
      >
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "1rem", md: "1.5rem" },
            fontWeight: 700,
            cursor: "pointer",
          }}
          onClick={() => navigate("/")}
          role="link"
          aria-label="Home"
        >
          Where in the World?
        </Typography>

        <Button onClick={() => dispatch(toggleTheme())}>Theme</Button>
      </Stack>
      <div>
        <Outlet />
      </div>
    </Box>
  );
};
