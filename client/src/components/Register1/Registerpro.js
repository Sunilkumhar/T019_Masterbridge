import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import "../../css/Register1/Registerpro.css";

function Register() {
  const [name, setname] = useState("");
  const [email, setemail] = useState("");
  const [userID, setuserID] = useState("");
  const [password, setpassword] = useState("");
  const [experience, setexperience] = useState();
  const [specialization, setspecialization] = useState("");
  // const [todos, settodos] = useState([]);

  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/todos")
  //     .then((response) => response.json())
  //     .then((json) => settodos(json));
  // }, []);

  const handleChangeName = (e) => {
    setname({ name: e.target.value });
  };
  const handleChangeuserID = (e) => {
    setuserID({ userID: e.target.value });
  };
  const handleChangeEmail = (e) => {
    setemail({ email: e.target.value });
  };
  const handleChangePass = (e) => {
    setpassword({ password: e.target.value });
  };
  const handleChangeExp = (e) => {
    setexperience({ experience: e.target.value });
  };
  const handleChangeSpeci = (e) => {
    setspecialization({ specialization: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      userID,
      email,
      password,
      experience,
      name,
      specialization,
    };

    console.log(user);

    axios.post("http://localhost:4000/teachers/signup", user).then((res) => {
      console.log(res);
    });

    window.location = "/loginpro";
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
        <form onSubmit={handleSubmit}>
          <div className="row1">
            <div class="form-group name">
              <label>Name*</label>
              <input
                type="text"
                class="form-control"
                id="name"
                placeholder="Name"
                required
                onChange={handleChangeName}
              />
            </div>
            <div class="form-group userID">
              <label>User Id*</label>
              <input
                type="text"
                class="form-control"
                id="userID"
                placeholder="Name"
                required
                onChange={handleChangeuserID}
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
                onChange={handleChangeEmail}
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
                // onChange  ={handleChange}
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
                onChange={handleChangePass}
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
                onChange={handleChangeExp}
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
              // onChange  ={handleChange}
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
              onChange={handleChangeSpeci}
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
              // onChange  ={handleChangeBio}
            ></textarea>
          </div>
          {/* <Link to="/loginpro" style={{ textDecoration: "none" }}> */}
          <input
            type="submit"
            value="Register as Professor"
            id="proceed"
            class="btn"
          />
          {/* </Link> */}
        </form>
      </div>
    </div>
  );
}

export default Register;
