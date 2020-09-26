import React from "react";
import { Link } from "react-router-dom";
import "../../css/All/Course_card.css";

function Course_card() {
  return (
    <div className="coursecard">
      <div className="flip-card">
        <div className="flip-card-inner">
          <div className="flip-card-front" style={{ paddingTop: "80%" }}>
            {/* <img src="img_avatar.png" alt="Avatar" style="width:300px;height:300px;"> */}
            <h1>Node js</h1>
          </div>
          <div className="flip-card-back">
            <h1>NODE JS</h1>
            <p>Learn for improvement</p>
            <Link to="/course1" style={{ textDecoration: "none" }}>
              <button className="enroll_btn">Enroll</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Course_card;
