import React from "react";
import { Link } from "react-router-dom";
import "../../css/Login1/Login.css";
import axios from "axios";
import loginside from "../../images/loginside.jpg";

function Login() {
  return (
    <div className="login row">
      <div className="col-8">
        <img src={loginside} alt="loginside" />
      </div>
      <div className="col-4">
        <div class="container1  ">
          <div class="row">
            <div class="col-md-6 mx-auto">
              <h1
                className="display-4 d-flex justify-content-center my-3 text"
                style={{ textDecoration: "underline" }}
              >
                Log In
              </h1>
              <form>
                <div class="form-group">
                  <label>Email Id*</label>
                  <input
                    type="email"
                    class="form-control"
                    id="name"
                    placeholder="Name"
                    required
                  />
                </div>
                <div class="form-group">
                  <label>Password*</label>
                  <input
                    type="text"
                    class="form-control"
                    placeholder="Password"
                    required
                  />
                </div>
                <Link to="/student" style={{ textDecoration: "none" }}>
                  <input
                    type="submit"
                    value="Log In"
                    id="proceed"
                    class="btn"
                  />
                </Link>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;
