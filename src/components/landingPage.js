import React, { Component } from "react";
import { Grid, Cell } from "react-mdl";


//styles
import "./landingPage.scss";
class LandingPage extends Component {
  render() {
    return (
      <div className="landing" style={{ width: "100%", margin: "auto"}}>
        <Grid className="landing-grid">
          <Cell col={12}>
            <img
              className="me"
              src={require("../assets/images/done.png")}
              alt="avatar of my face"
            />
            <div className="profile">
              <h1>I'm Andrés Coronado</h1>
              <h2>Computer Engineer</h2>
              <hr />
              <p>
                {" "}
                HTML5/CSS | JavaScript | React | Redux | Python | Java | SQL{" "}
              </p>
              <div className="social-media-links">
                <a
                  href="https://www.linkedin.com/in/andres-coronado-pinilla-2a5482117/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-linkedin-square" aria-hidden="true" />
                </a>
                <a
                  href="https://github.com/Coronates"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-github-square" aria-hidden="true" />
                </a>
                <a
                  href="https://www.youtube.com/channel/UCOnPP6zjq3TSEBofkWF445g"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-youtube-square" aria-hidden="true" />
                </a>
                <a
                  href="https://twitter.com/andrescoronate"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <i className="fa fa-twitter-square" aria-hidden="true" />
                </a>
              </div>
            </div>
          </Cell>
        </Grid>
      </div>
    );
  }
}

export default LandingPage;
