import React from "react";
import { Link } from "react-router-dom";
import "../../css/NavP.css";
import LocalLibraryIcon from "@material-ui/icons/LocalLibrary";
import { IconButton } from "@material-ui/core";

function NavP() {
  return (
    <div className="navp">
      <nav class="navbar sticky-top navbar-light bg-dark">
        <Link to="/" class="navbar-brand" style={{ color: "White" }}>
          OnlineLearning
        </Link>
        <div className="usericon btn  my-2 my-sm-0">
          <Link to="/course1" style={{ textDecoration: "none" }}>
            <div className="btn welcome">
              <LocalLibraryIcon />
              <h4>Courses</h4>
            </div>
          </Link>
        </div>
        {/* <h4 className=" welcome btn  mr-3">Welcome</h4> */}
      </nav>
    </div>
  );
}

export default NavP;
