import React from "react";
import "./navabr.css";

import { Link } from "react-router-dom";
import { Fade, Zoom } from "react-awesome-reveal";

const Navbar = () => {
  return (
    <div className="navbar-wrapper">
      <Fade duration={2000}>
        <Link className="navbar-link link" to="/">
          <h2 className="navbar-logo">Flint</h2>
        </Link>
      </Fade>

      <Fade duration={2000}>
        <button className="btn-primary click">
          <p className="nav-item">Get started</p>
        </button>
      </Fade>
    </div>
  );
};

export default Navbar;
