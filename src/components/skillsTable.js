import React from "react";
import Table from "react-bootstrap/Table";
import "./skillsTable.scss";
export default function TableSkills(props) {
  return (
    <div>
      <Table className="large-table" borderless="true" responsive>
        <tbody>
          <tr>
            <td>
              {" "}
              <p className="skill">HTML5</p>
            </td>
            <td>
              {" "}
              <p className="skill">CSS3</p>
            </td>
            <td>
              {" "}
              <p className="skill">JavaScript ES6</p>
            </td>
            <td>
              {" "}
              <p className="skill">Git</p>
            </td>
            <td>
              {" "}
              <p className="skill">React</p>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <p className="skill">Redux</p>
            </td>
            <td>
              {" "}
              <p className="skill">SQL</p>
            </td>
            <td>
              {" "}
              <p className="skill">Active Listening</p>
            </td>
            <td>
              {" "}
              <p className="skill">Communication</p>
            </td>
            <td>
              {" "}
              <p className="skill">Resilience</p>
            </td>
          </tr>
        </tbody>
      </Table>
      <Table className="small-table" borderless="true" responsive="sm">
        <tbody>
          <tr>
            <td>
              {" "}
              <p className="skill">HTML5</p>
            </td>
            <td>
              {" "}
              <p className="skill">CSS3</p>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <p className="skill">JavaScript ES6</p>
            </td>
            <td>
              {" "}
              <p className="skill">Git</p>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <p className="skill">React</p>
            </td>
            <td>
              {" "}
              <p className="skill">Redux</p>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <p className="skill">SQL</p>
            </td>
            <td>
              {" "}
              <p className="skill">Active Listening</p>
            </td>
          </tr>
          <tr>
            <td>
              {" "}
              <p className="skill">Communication</p>
            </td>
            <td>
              {" "}
              <p className="skill">Resilience</p>
            </td>
          </tr>
        </tbody>
      </Table>
    </div>
  );
}
