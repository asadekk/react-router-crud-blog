import React from "react";
import { NavLink, Outlet } from "react-router";
import '../App.css'
function MainLayout() {
  return (
    <>
      <header className="header">
        <div className="header-container">

          <h2 className="logo">
            Dev<span>Blog</span>
          </h2>

          <nav className="navbar">
            <NavLink to="/" end>
              Home
            </NavLink>

            <NavLink to="/blog">
              Blog
            </NavLink>

            <NavLink to="blog/add">
              Add Blog
            </NavLink>
          </nav>

        </div>
      </header>

      <main>
        <Outlet />
      </main>
    </>
  );
}

export default MainLayout;