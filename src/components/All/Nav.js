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
          <Link to="/login" style={{ textDecoration: "none" }}>
            <button class="btn btn-outline-primary mr-3" href="#">
              Sign-In
            </button>
          </Link>
          <Link
            to="/registerstd"
            style={{ textDecoration: "none", marginRight: "10px" }}
          >
            <button class="btn btn-outline-primary" href="#">
              Sign-Up For Student
            </button>
          </Link>
          <Link to="/registerpro" style={{ textDecoration: "none" }}>
            <button class="btn btn-outline-primary" href="#">
              Sign-Up For Professor
            </button>
          </Link>
        </div>
      </nav>
    </div>
  );
}

export default Nav;
