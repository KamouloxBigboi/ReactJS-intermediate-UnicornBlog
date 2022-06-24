import React from "react";
import Navbar from "./Navbar";

import { Outlet, } from "react-router-dom";

export default function Home () {
    return (
      <>
        <Navbar />
        {/* Outlet : Keep the information displayed when changing page */}
      <Outlet />
    </>
  )
};
