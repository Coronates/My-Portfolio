import React, { Component } from "react";
import {
  Grid,
  Cell,
  Card,
  CardActions,
  CardTitle,
  CardText,
  Button,
  IconButton
} from "react-mdl";

//styles
import "./projects.scss";
//assets

class Projects extends Component {
  render() {
    return (
      <div className="projects-view">
        <section className="projects-grid">
          <Grid className="projects-grid">
            <Cell col={4}>
              <div className="category">
                <Card
                  shadow={10}
                  style={{
                    color: "#fff",
                    fontWeight:"bolder",
                    justifyContent: "flex-end",
                    padding:"5px",
                    fontSize:"25px",
                    textAlign:"left",
                    textJustify:"bottom",
                    height: "176px",
                    background:
                      "url(" +
                      require("../assets/pacific-battleship.png") +
                      ") center / cover"
                  }}
                >
                  Pacific Adventure
                </Card>
              </div>
            </Cell>
            <Cell col={4}>
              <div className="category">
                <Card
                  shadow={2}
                  style={{ width: "320px", height: "320px", margin: "auto" }}
                >
                  <CardTitle
                    expand
                    style={{
                      color: "#fff",
                      background:
                        "url(http://www.getmdl.io/assets/demos/dog.png) bottom right 15% no-repeat #46B6AC"
                    }}
                  >
                    Update
                  </CardTitle>
                  <CardText>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Aenan convallis.
                  </CardText>
                  <CardActions border>
                    <Button colored>View Updates</Button>
                  </CardActions>
                </Card>
              </div>
            </Cell>
            <Cell col={4}>
              <div className="category">
                <h1>this is 3 project</h1>
              </div>
            </Cell>
            <Cell col={4}>
              <div className="category">
                <h1>this is 4 project</h1>
              </div>
            </Cell>
            <Cell col={4}>
              <div className="category">
                <h1>this is 5 project</h1>
              </div>
            </Cell>
          </Grid>
        </section>
      </div>
    );
  }
}

export default Projects;
