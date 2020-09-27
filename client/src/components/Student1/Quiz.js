import React from "react";
import "../../css/Student1/Quiz.css";

function Quiz() {
  return (
    <div className="quiztable">
      <table>
        <tr>
          <th>Course Name</th>
          <th>Quiz Number</th>
          <th>Marks Obtained</th>
          <th>Remarks</th>
        </tr>
        <tr>
          <td>Node js</td>
          <td>1</td>
          <td>10</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>Node js</td>
          <td>2</td>
          <td>10</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>Node js</td>
          <td>3</td>
          <td>10</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>Node js</td>
          <td>4</td>
          <td>10</td>
          <td>Good</td>
        </tr>
        <tr>
          <td>Node js</td>
          <td>5</td>
          <td>10</td>
          <td>Good</td>
        </tr>
      </table>
    </div>
  );
}

export default Quiz;
