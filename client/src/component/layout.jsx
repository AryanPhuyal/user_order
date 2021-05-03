import React from "react";

import { Link } from "react-router-dom";
const Layout = ({ children }) => {
  return (
    <>
      <div className="row px-5 pt-4 bg-dark">
        <nav class="nav nav-pills nav-fill">
          <Link
            className="nav-link active-pill text-light"
            aria-current="page"
            to="/"
          >
            Profile
          </Link>
          <Link className="nav-link text-light" to="/users">
            Users
          </Link>
          <Link className="nav-link text-light" to="/role">
            Role
          </Link>
          <Link
            className="nav-link text-light "
            href="#"
            tabindex="-1"
            aria-disabled="true"
          >
            User
          </Link>
        </nav>
      </div>
      {children}
      <div className="footer"></div>
    </>
  );
};

export default Layout;
