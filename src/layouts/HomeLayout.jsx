import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

function HomeLayout() {
  return (
    <>
      <section>
        <h1>Star Wars Info</h1>
        <Navbar />
        <div className="content">
          <Outlet />
        </div>
      </section>
    </>
  );
}

export default HomeLayout;
