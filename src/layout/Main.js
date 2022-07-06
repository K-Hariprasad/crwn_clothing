import React from "react";
import { Outlet } from "react-router-dom";
import Navigation from "../components/navigation/Navigation";

function Main() {
  return (
    <>
      <Navigation />
      <Outlet/>
    </>
  );
}

export default Main;
