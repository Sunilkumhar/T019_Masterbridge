import React from "react";
import { Link } from "react-router-dom";
import "../../css/All/Nav.css";

function Nav() {
  return (
    <div className="nav1">
      <nav class="navbar sticky-top navbar-light bg-dark">
        <a class="navbar-brand" href="#" style={{ color: "White" }}>
          OnlineLearning
        </a>
        <div className="btn  my-2 my-sm-0">
          <Link to="/loginas" style={{ textDecoration: "none" }}>
            <button class="btn btn-outline-primary mr-3">Log-In</button>
          </Link>
          {/* <Link to="/loginpro" style={{ textDecoration: "none" }}>
            <button class="btn btn-outline-primary mr-3">
              Log-In For Professor
            </button>
          </Link> */}
          <Link
            to="/registeras"
            style={{ textDecoration: "none", marginRight: "10px" }}
          >
            <button className="btn btn-outline-primary">Sign-Up</button>
          </Link>
          {/* <Link to="/registerpro" style={{ textDecoration: "none" }}>
            <button className="btn btn-outline-primary">
              Sign-Up As Professor
            </button>
          </Link> */}
        </div>
      </nav>
    </div>
  );
}

export default Nav;
