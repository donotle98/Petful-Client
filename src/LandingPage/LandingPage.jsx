import React, { Component } from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";

class LandingPage extends Component {
    state = {};
    render() {
        return (
            <div className='landingpage-div'>
                <div className='landingpics'>
                    <div className='dogpic'></div>
                    <div className='catpic'></div>
                </div>
                <h1>Adoption Process</h1>
                <p>You can only adopt dogs or cats.</p>
                <p>
                    And the only dogs and cats you can adopt are the ones that
                    have been in this shelter the longest
                </p>
                <p>
                    There is a wait to adopt, once you submit your name you will
                    be put at the back of the line
                </p>
                <div className='getStarted-btn'>
                    <NavLink to={"/adopt"}>
                        <input
                            type='button'
                            name='adopt'
                            value='Start Process'
                            className='btn'
                        />
                    </NavLink>
                </div>
            </div>
        );
    }
}

export default LandingPage;
