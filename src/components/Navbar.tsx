import React from "react";
import { Outlet } from "react-router-dom";

export const Navbar = () => {
  return (
    <div>
      <div>Navbar</div>
      <div>
        <Outlet />
      </div>
    </div>
  );
};
