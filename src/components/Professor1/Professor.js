import React from "react";
import "../../css/Professor1/Professor.css";
import Mycourse from "./Mycourse.js";
import Stdtable from "./Stdtable.js";
import user from "../../images/user.png";

function Professor() {
  return (
    <div className="professorinfo">
      <div className="student">
        <div className="stdinfo">
          <div className="infoleft">
            <img class="rounded-circle" src={user} alt="user" />
            <h1>Sunil Kumhar</h1>
            <p>Hi,I am A Professor</p>
          </div>
          <div className="rightinfo">
            <div id="information">
              <div style={{ display: "flex" }}>
                <h2>User Id :</h2>
                <h3 style={{ paddingTop: "4px", paddingLeft: "5px" }}>
                  {" "}
                  Sunil_02
                </h3>
              </div>
              <div style={{ display: "flex" }}>
                <h2>Email :</h2>
                <h3 style={{ paddingTop: "4px", paddingLeft: "5px" }}>
                  skumhar2002@gmail.com
                </h3>
              </div>
              <div style={{ display: "flex" }}>
                <h2>Phone :</h2>
                <h3 style={{ paddingTop: "4px", paddingLeft: "5px" }}>
                  7378577964
                </h3>
              </div>
              <div style={{ display: "flex" }}>
                <h2>Experience :</h2>
                <h3 style={{ paddingTop: "4px", paddingLeft: "5px" }}>
                  3 Years
                </h3>
              </div>
              <div style={{ display: "flex" }}>
                <h2>Specialization :</h2>
                <h3 style={{ paddingTop: "4px", paddingLeft: "5px" }}>
                  Node js ,Mongodb
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="mycoursees">
        <h1>My Courses :</h1>
      </div>
      <div className="mycourse">
        <div className="row">
          <div className="col-3">
            <Mycourse />
          </div>
          <div className="col-3">
            <Mycourse />
          </div>
          <div className="col-3">
            <Mycourse />
          </div>

          <div className="col-3">
            <Mycourse />
          </div>
        </div>
      </div>
      <div className="mycoursees">
        <h1>Students Associated With Your Course :</h1>
      </div>
      <div className="totalstd">
        <Stdtable />
      </div>
    </div>
  );
}

export default Professor;
