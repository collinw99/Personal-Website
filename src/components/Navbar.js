import React from 'react';
import { Collapse, Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { withRouter } from 'react-router-dom';

const Navigation = (props) => {
    return (
        <Navbar color='dark' dark expand='md'>
            <NavbarBrand href='/'>Collin Wernsman</NavbarBrand>
            <Collapse isOpen navbar>
                <Nav className='mr-auto' navbar>
                    <NavItem>
                        <NavLink href='https://github.com/collinw99' target='_blank'>GitHub</NavLink>
                    </NavItem>
                    <NavItem>
                        <NavLink href='/games'>Games</NavLink>
                    </NavItem>
                </Nav>
            </Collapse>
        </Navbar>
    )
}

export default withRouter(Navigation);