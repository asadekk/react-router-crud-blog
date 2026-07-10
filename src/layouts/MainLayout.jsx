import React from "react";
import { NavLink, Outlet } from "react-router";
import '../App.css'
function MainLayout() {
  return (
    <>
      <header>
        <nav>
          <NavLink to="/" end>
            Home
          </NavLink>

          <NavLink to="/blog">
            Blog
          </NavLink>

           <NavLink to="/blog/add">
            Add 
          </NavLink>
        </nav>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;