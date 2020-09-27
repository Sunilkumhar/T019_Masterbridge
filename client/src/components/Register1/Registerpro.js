import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/Register1/Registerpro.css";

function Register() {
  const [name, setname] = useState("");

  const handleChange = (event) => {
    setname({ name: event.target.value });
    console.log(name);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    const user = {
      name,
    };

    axios.post(`http://localhost/teachers/signup`, { user }).then((res) => {
      console.log(res);
      console.log(res.data);
    });
  };

  return (
    <div className="register">
      <div class="container1">
        <h1
          style={{
            textDecoration: "underline",
          }}
        >
          Please Enter All the Details :{" "}
        </h1>
        <form>
          <div className="row1">
            <div class="form-group name">
              <label>Name*</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Name"
                required
                onClick={handleChange}
              />
            </div>
            <div class="form-group userid">
              <label>User Id*</label>
              <input
                type="text"
                class="form-control"
                id="userID"
                placeholder="Name"
                required
              />
            </div>
          </div>
          <div className="row1">
            <div class="form-group email">
              <label>Email*</label>
              <input
                type="text"
                class="form-control"
                id="email"
                placeholder="Email"
                required
              />
            </div>
            <div class="form-group phone">
              <label>Phone Number*</label>
              <input
                type="text"
                class="form-control"
                id="phone"
                placeholder="Phone Number"
                required
              />
            </div>
          </div>
          <div className="row1">
            <div class="form-group pass">
              <label>Password*</label>
              <input
                type="text"
                class="form-control"
                id="password"
                placeholder="Password"
                required
              />
            </div>
            <div class="form-group exp">
              <label>experience*</label>
              <input
                type="number"
                class="form-control"
                id="exp"
                placeholder="Zero"
                required
              />
            </div>
          </div>
          <div class="form-group cpass">
            <label>Confirm Password*</label>
            <input
              type="text"
              class="form-control"
              id="pass1"
              placeholder="Confirm Password"
              required
            />
          </div>
          <div class="form-group pass">
            <div className="specialization" style={{ display: "flex" }}>
              <label>Specialization* </label>
              <p style={{ paddingTop: "10px" }}>
                (Enter comma seprated values)
              </p>
            </div>
            <input
              type="text"
              class="form-control"
              id="specialization"
              placeholder="Specialization"
              required
            />
          </div>

          <div class="form-group bio">
            <label for="comment">Bio</label>
            <textarea
              class="form-control"
              rows="3"
              cols="30"
              id="Bio"
              placeholder="Enter Your Message"
            ></textarea>
          </div>
          <Link to="/loginpro" style={{ textDecoration: "none" }}>
            <input
              type="submit"
              value="Register as Professor"
              id="proceed"
              class="btn"
            />
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Register;
