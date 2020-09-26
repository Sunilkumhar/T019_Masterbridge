import React from "react";
import "../../css/Student1/Student.css";
import Coursecomplete from "./Coursecomplete";
import Quiz from "./Quiz";
import user from "../../images/user.png";
import Piechart from "./Piechart";

function Student() {
  return (
    <div className="studentinfo">
      <div className="student">
        <div className="stdinfo">
          <div className="infoleft">
            <img class="rounded-circle" src={user} alt="user" />
            <h1>Sunil Kumhar</h1>
            <p>Hi,I am Sunil</p>
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
                <h2>College Name :</h2>
                <h3 style={{ paddingTop: "4px", paddingLeft: "5px" }}>
                  D.J Sanghvi College Of Engineering
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="enrolled">
        <h1>Enrolled Courses :</h1>
      </div>
      <div className="completed">
        <div className="row">
          <div className="col-3">
            <Coursecomplete />
          </div>
          <div className="col-3">
            <Coursecomplete />
          </div>
          <div className="col-3">
            <Coursecomplete />
          </div>

          <div className="col-3">
            <Coursecomplete />
          </div>
        </div>
      </div>
      <div className="enrolled">
        <h1>Total Quiz Attende By You :</h1>
      </div>
      <div className="quiz">
        <Quiz />
      </div>
      {/* <div className="enrolled">
        <h1>Analysis Of Your Performance to Improve :</h1>
      </div>
      <div className="piechart">
        <Piechart />
      </div> */}
    </div>
  );
}

export default Student;
