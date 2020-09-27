import React from "react";
import { Link } from "react-router-dom";
import "../../css/Professor1/Stdtable.css";

function Quiz() {
  return (
    <div className="quiztable">
      <table>
        <tr>
          <th>Name</th>
          <th>Course Name</th>
          <th>Quiz Number</th>
          <th>Marks Obtained</th>
          <th>Remarks</th>
          <th>Student Profile</th>
        </tr>
        <tr>
          <td>Sunil</td>
          <td>Node js</td>
          <td>1</td>
          <td>10</td>
          <td>Good</td>
          <Link to="/student" style={{ textDecoration: "none" }}>
            <td>
              <button>View</button>
            </td>
          </Link>
        </tr>
        <tr>
          <td>Parth</td>
          <td>Node js</td>
          <td>2</td>
          <td>10</td>
          <td>Good</td>
          <Link to="/student" style={{ textDecoration: "none" }}>
            <td>
              <button>View</button>
            </td>
          </Link>
        </tr>
        <tr>
          <td>Milan</td>

          <td>Node js</td>
          <td>3</td>
          <td>10</td>
          <td>Good</td>

          <Link to="/student" style={{ textDecoration: "none" }}>
            <td>
              <button>View</button>
            </td>
          </Link>
        </tr>
        <tr>
          <td>Parth</td>

          <td>Node js</td>
          <td>4</td>
          <td>10</td>
          <td>Good</td>
          <Link to="/student" style={{ textDecoration: "none" }}>
            <td>
              <button>View</button>
            </td>
          </Link>
        </tr>
        <tr>
          <td>Sunil</td>

          <td>Node js</td>
          <td>5</td>
          <td>10</td>
          <td>Good</td>
          <Link to="/student" style={{ textDecoration: "none" }}>
            <td>
              <button>View</button>
            </td>
          </Link>
        </tr>
      </table>
    </div>
  );
}

export default Quiz;
