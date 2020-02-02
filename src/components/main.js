import React from 'react';
import { Switch, Route } from 'react-router-dom';
import LandingPage from './landingPage';
import AboutMe from './aboutMe';
import Projects from './projects';
import Resume from './resume'
import Contact from './contactMe'


const Main = (props) => (
            <Switch>
                <Route exact path="/" component={LandingPage}></Route>
                <Route path="/aboutme" component={AboutMe}></Route>
                <Route path="/projects" component={Projects}></Route>
                <Route path="/resume" component={Resume}></Route>
                <Route path="/contact" component={Contact}></Route>
            </Switch>
    );

export default Main;