import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import { Breadcrumbs } from "../components/Breadcrumbs";

function RootLayout() {
  return (
    <div className="root-layout">
      <header>
        <nav>
          <div className="nav_wrapper">
            <Link to="/">
              <h1>Job</h1>
            </Link>
            <div className="nav_btns">
            <NavLink to="/">Home</NavLink>
            <NavLink to="/careers">Career</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="help">Help</NavLink>
            </div>
          </div>
        </nav>
        <Breadcrumbs/>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}
export default RootLayout;
