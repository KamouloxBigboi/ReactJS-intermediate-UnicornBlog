import React from "react";
import Navbar from "./Navbar";
import Upload from "./upload";
import Gallery from "./gallery";
import Details from "./details";
import App from "../App";
import { BrowserRouter, 
         Routes,
         Route, 
         Outlet, } from "react-router-dom";

export default function Home () {
    return (
      <>
        <Navbar />
      <Outlet />
    </>
  )
};

