import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LandingPage from "../LandingPage/LandingPage";
import Adopt from "../Adopt/Adopt";
import { PetfulProvider } from "../Context/Context";
import "./Root.css";

class Root extends Component {
    state = {};
    render() {
        return (
            <PetfulProvider>
                <Router>
                    <div className='header'>
                        <h1>FIFO Petful</h1>
                    </div>
                    <Switch>
                        <Route exact path='/' component={LandingPage} />
                        <Route path='/adopt' component={Adopt} />
                    </Switch>
                </Router>
            </PetfulProvider>
        );
    }
}

export default Root;
