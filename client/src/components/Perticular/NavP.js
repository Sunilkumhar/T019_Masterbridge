import React from "react";
import { Link } from "react-router-dom";
import "../../css/NavP.css";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import { IconButton } from "@material-ui/core";

function NavP() {
  return (
    <div className="navp">
      <nav class="navbar sticky-top navbar-light bg-dark">
        <Link to="/" class="navbar-brand" style={{ color: "White" }}>
          OnlineLearning
        </Link>
        <div className="usericon btn  my-2 my-sm-0">
          <Link to="/student" style={{ textDecoration: "none" }}>
            <div className="btn welcome">
              <h4>Welcome</h4>
              <AccountCircleIcon />
            </div>
          </Link>
        </div>
        {/* <h4 className=" welcome btn  mr-3">Welcome</h4> */}
      </nav>
    </div>
  );
}

export default NavP;
