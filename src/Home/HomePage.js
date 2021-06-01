import React, { Component } from 'react';

export default class HomePage extends Component {

    constructor(props) {
        super(props);

        this.state = {
            navBarOpen: true
        }
    }

    render() {
        return (
            <div className="App">
                HomePage
            </div>
        );
    }
}