import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Login from "./components/Login1/Login";
import Loginpro from "./components/Login1/Loginpro";
import LoginAs from "./components/Login1/LoginAs";
import Registeras from "./components/Register1/Registeras";
import Registerstd from "./components/Register1/Registerstd";
import Registerpro from "./components/Register1/Registerpro";
import Student from "./components/Student1/Student";
import Professor from "./components/Professor1/Professor";
import Student_Analysis from "./components/Student_Analysis";
import All_course from "./components/All/All_course";
import Upload_video from "./components/Upload_video";
import Quiz from "./components/Quiz1/Quiz";
import Perticular_course from "./components/Perticular/Perticular_course";
import "./App.css";

function App() {
  return (
    <div className="home1">
      <Router>
        <Switch>
          <Route exact path="/loginas">
            <LoginAs />
          </Route>
          <Route exact path="/Registeras">
            <Registeras />
          </Route>
          <Route exact path="/loginstd">
            <Login />
          </Route>
          <Route exact path="/loginpro">
            <Loginpro />
          </Route>
          <Route exact path="/registerstd">
            <Registerstd />
          </Route>
          <Route exact path="/registerpro">
            <Registerpro />
          </Route>
          <Route exact path="/course1">
            <Perticular_course />
          </Route>
          <Route exact path="/course1/quiz">
            <Quiz />
          </Route>
          <Route path="/student">
            <Student />
          </Route>
          <Route exact path="/professor">
            <Professor />
          </Route>
          <Route exact path="/professor/upload">
            <Upload_video />
          </Route>

          <Route exact path="/">
            <All_course />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
