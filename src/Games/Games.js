import React, { Component } from 'react';
import './Games.css'

export default class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            navBarOpen: true
        }
    }

    render() {
        return (
            <div className="Games">
                Games page
            </div>
        );
    }
}