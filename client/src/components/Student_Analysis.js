import React from "react";
import "../css/Student_Analysis.css";

function Student_Analysis() {
  return (
    <div className="row1">
      <div className="form-group name ">
        <input
          type="text"
          className="form-control "
          id="name"
          placeholder="Topic Name"
          required
        />
        <input type="file" id="myfile" name="filename"></input>
      </div>
    </div>
  );
}

export default Student_Analysis;
