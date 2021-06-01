import React, { Component } from 'react';

import './Home.css'

export default class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            navBarOpen: true
        }
    }

    render() {
        return (
            <div className="Home">
                Home Page
            </div>
        );
    }
}