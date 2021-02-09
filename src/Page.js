import React, { Component } from 'react';
import { Container } from 'react-bootstrap';

export default class Page extends Component {

    constructor(props) {
        super(props);

        this.state = {

        }
    }

    render() {
        return (
            <div className="App">
              <header className="App-header">
                <Container>
                    <h3>Collin Wernsman</h3>
                </Container>
              </header>
            </div>
        );
    }
}