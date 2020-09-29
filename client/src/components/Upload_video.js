import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "../css/Upload_video.css";
import Student_Analysis from "./Student_Analysis";

function Upload_video() {
  const [addmore, setaddmore] = useState(0);
  const [addvideo, setaddvideo] = useState([]);

  // useEffect(() => {
  //   myContent();
  //   console.log(123);
  // }, [addmore]);

  const addmore1 = () => {
    setaddvideo([...addvideo, <Student_Analysis />]);

    // var x = addmore + 1;
    // setaddmore(x);
    // console.log(addmore);
  };

  // const myContent = () => {
  //   if (addmore > 0) {
  //     setaddvideo([...addvideo, <Student_Analysis />]);
  //   }
  // };

  return (
    <div className="uploadv">
      <div className="container1">
        <h1
          style={{
            textDecoration: "underline",
          }}
        >
          Enter Details For video :{" "}
        </h1>
        <form>
          <div className="row1">
            <div className="form-group name">
              <label style={{ textDecoration: "underline" }}>
                Course Name*
              </label>
              <input
                type="text"
                className="form-control"
                id="name"
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div className="form-group bio">
            <label for="comment" style={{ textDecoration: "underline" }}>
              Description*
            </label>
            <textarea
              className="form-control"
              rows="3"
              cols="30"
              id="Bio"
              placeholder="Enter Your Description About the Course"
            ></textarea>
          </div>
          <div className="form-group numberof">
            <label style={{ textDecoration: "underline" }}>
              Upload Videos*
            </label>
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
            {addvideo}
            <button type="button" className="addvideo btn " onClick={addmore1}>
              Add More
            </button>
          </div>

          <Link to="/professor" style={{ textDecoration: "none" }}>
            <input
              type="submit"
              value="Upload Video"
              id="proceed"
              className="btn"
            />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Upload_video;
