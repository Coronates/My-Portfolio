import React, { Component } from "react";
import {Link} from 'react-router-dom'
import {
  Layout,
  Header,
  Navigation,
  Content,
  Drawer
} from "react-mdl";
import Main from './main'

// Components

// Actions

// Style files

class PortfolioLayout extends Component {
  state = {};

  render() {
    let layoutRender = null;
    layoutRender = (
      <>
        <div className="demo-big-content">
          <Layout>
            <Header title="Title" scroll>
              <Navigation>
                <Link to="/">Home</Link>
                <Link to="/resume">Resume</Link>
                <Link to="/projects">My Projects</Link>
                <Link to="/aboutme">About Me</Link>
                <Link to="/contact">Contact Me</Link>
              </Navigation> 
            </Header>
            <Drawer title="Title">
              <Navigation>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
                <a href="/">Link</a>
              </Navigation>
            </Drawer>
            <Content>
              <div className="page-content" />
              <Main />
            </Content>
          </Layout>
        </div>
      </>
    );

    return <>{layoutRender}</>;
  }
}

export default PortfolioLayout;
