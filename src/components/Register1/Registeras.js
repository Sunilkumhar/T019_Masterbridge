import React from "react";
import { Link } from "react-router-dom";
import "../../css/Login1/LoginAs.css";

function Registeras() {
  return (
    <div className="loginas">
      <div className="loginasstd">
        <Link
          to="/registerstd"
          id="next"
          class="btn btn-primary btn-lg active loginbtn"
          role="button"
          aria-pressed="true"
        >
          Student
        </Link>
      </div>
      <div className="loginaspro">
        <Link
          to="/registerpro"
          id="next"
          class="btn btn-primary btn-lg active loginbtn"
          role="button"
          aria-pressed="true"
        >
          Professor
        </Link>
      </div>
    </div>
  );
}

export default Registeras;
