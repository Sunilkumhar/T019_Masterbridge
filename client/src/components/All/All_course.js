import React from "react";
import "../../css/All/All_course.css";
import Nav from "./Nav";
import Welcome from "./Welcome";
import Course_card from "./Course_card";

function All_course() {
  return (
    <div className="course">
      <Nav />
      <Welcome />
      <div className="courseravail">
        <div className="row">
          <div className="col-3">
            <Course_card />
          </div>
          <div className="col-3">
            <Course_card />
          </div>
          <div className="col-3">
            <Course_card />
          </div>
          <div className="col-3">
            <Course_card />
          </div>
          <div className="col-3">
            <Course_card />
          </div>
          <div className="col-3">
            <Course_card />
          </div>
          <div className="col-3">
            <Course_card />
          </div>
          <div className="col-3">
            <Course_card />
          </div>
          <div className="col-3">
            <Course_card />
          </div>
          <div className="col-3">
            <Course_card />
          </div>

          <div className="col-3">
            <Course_card />
          </div>
        </div>
      </div>
    </div>
  );
}

export default All_course;
