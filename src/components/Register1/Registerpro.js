import React from "react";
import { Link } from "react-router-dom";
import "../../css/Register1/Registerpro.css";

function Register() {
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
              />
            </div>
            <div class="form-group userid">
              <label>User Id*</label>
              <input
                type="text"
                class="form-control"
                id="name"
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
                id="pass"
                placeholder="Password"
                required
              />
            </div>
            <div class="form-group exp">
              <label>Experience*</label>
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
          <Link to="/login" style={{ textDecoration: "none" }}>
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
