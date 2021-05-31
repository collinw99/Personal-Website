import React, { Component } from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavbarToggler, NavItem, NavLink } from 'reactstrap'

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
                {this.renderTopBar()}
            </div>
        );
    }

    renderTopBar() {
        return (
            <Navbar color='dark' dark expand='md'>
                <NavbarBrand href='/'>Collin Wernsman</NavbarBrand>
                <NavbarToggler onClick={() => this.setState({'navBarOpen': !this.state.navBarOpen})}/>
                <Collapse isOpen={this.state.navBarOpen} navbar>
                    <Nav className='mr-auto' navbar>
                        <NavItem>
                            <NavLink href='https://github.com/collinw99'>GitHub</NavLink>
                        </NavItem>
                    </Nav>
                </Collapse>
            </Navbar>
        );
    }
}