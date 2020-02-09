import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardActions,
  CardTitle,
  CardText,
  Button
} from "react-mdl";
//components
import SkillsTable from "./skillsTable";
//styles
import "./projects.scss";
//assets

class Projects extends Component {
  btnClick(webPage) {
    window.open(webPage);
  }
  render() {
    return (
      <div className="all-view">
        <div className="aboutme-view">
          <header className="project-header">
            <div className="container text-center">
              <h1>About Me</h1>
            </div>
          </header>
          <section className="aboutme-section">
            <Grid className="aboutme-grid">
              <Cell col={8}>
                <div className="about-description">
                  I'm Andrés Coronado a computer engineer with great ability to
                  analyze problems that leads to a balance between the technical
                  and the business areas. I've worked as a front end developer
                  in agile teams. Some of my skills include...
                </div>
              </Cell>
            </Grid>
            <SkillsTable />
          </section>
        </div>
        <div className="projects-view">
          <header className="project-header">
            <div className="container text-center">
              <h1>My Projects</h1>
            </div>
          </header>
          <section className="projects-grid">
            <Grid className="projects-grid">
              <Cell col={4}>
                <div className="category">
                  <Card
                    shadow={10}
                    style={{
                      minWidth: "450",
                      width: "340px",
                      margin: "5px"
                    }}
                  >
                    <CardTitle
                      style={{
                        color: "#fff",
                        fontWeight: "bolder",
                        justifyContent: "flex-start",
                        padding: "6px",
                        paddingLeft: "15px",
                        fontSize: "25px",
                        height: "200px",
                        background:
                          "url(" +
                          require("../assets/images/pacific-battleship.png") +
                          ") left / cover"
                      }}
                    >
                      Pacific Adventure
                    </CardTitle>

                    <CardText>
                      In this 3D unity game you can destroy other ships, try to
                      survive and arrive to the island where you have to fight
                      the final boss.
                    </CardText>
                    <CardActions border>
                      <Button
                        onClick={() =>
                          this.btnClick(
                            "https://github.com/Coronates/Pacific-Adventure"
                          )
                        }
                        colored
                      >
                        Check it on GitHub
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </Cell>
              <Cell col={4}>
                <div className="category">
                  <Card
                    shadow={10}
                    style={{
                      width: "340px",
                      height: "339px",
                      margin: "5px",
                      minWidth: "450"
                    }}
                  >
                    <CardTitle
                      expand
                      style={{
                        color: "#fff",
                        background:
                          "url(" +
                          require("../assets/images/arm.png") +
                          ") bottom right 15% no-repeat #46B6AC",
                        backgroundSize: "contain",
                        height: "200px"
                      }}
                    >
                      Robotic Arm
                    </CardTitle>
                    <CardText>
                      Labview code for robotic arm with three deegrees of
                      freedom, controlled via joystick.
                    </CardText>
                    <CardActions border>
                      <Button
                        onClick={() =>
                          this.btnClick(
                            "https://github.com/Coronates/robotic-arm-labview"
                          )
                        }
                        colored
                      >
                        Check it on GitHub
                      </Button>
                      <Button
                        onClick={() =>
                          this.btnClick(
                            "https://www.youtube.com/watch?v=aFsUZ56XG28"
                          )
                        }
                        colored
                      >
                        See the Demo
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </Cell>
              <Cell col={4}>
                <div className="category">
                  <Card
                    shadow={10}
                    style={{
                      width: "340px",
                      height: "339px",
                      margin: "5px",
                      minWidth: "450"
                    }}
                  >
                    <CardTitle
                      expand
                      style={{
                        color: "#fff",
                        background:
                          "url(" +
                          require("../assets/images/crimial-login.jpg") +
                          ") bottom right no-repeat 	#19e6e6",
                        backgroundSize: "contain",
                        height: "200px"
                      }}
                    >
                      Criminal Browser
                    </CardTitle>
                    <CardText>
                      Criminal Browser, android app with php for criminal Bounty
                      Hunting and Incarcerated visits.
                    </CardText>
                    <CardActions border>
                      <Button
                        onClick={() =>
                          this.btnClick(
                            "https://github.com/Coronates/Criminal-Browser"
                          )
                        }
                        colored
                      >
                        Check it on GitHub
                      </Button>
                    </CardActions>
                  </Card>
                </div>
              </Cell>
            </Grid>
          </section>
        </div>
      </div>
    );
  }
}

export default Projects;
