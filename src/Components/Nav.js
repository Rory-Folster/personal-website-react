import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import {LinkContainer} from 'react-router-bootstrap'

function MainNav() {
  return (
    <Navbar bg="dark" variant="dark">
        <Container>
        <LinkContainer to="/">
          <Navbar.Brand><span className='logo-span'>Rory's</span> Developer Website</Navbar.Brand>
          </LinkContainer>
          <Nav className="justify-content-end">
            <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
            </LinkContainer>
            <LinkContainer to="/projects">
            <Nav.Link>Projects</Nav.Link>
            </LinkContainer>
          </Nav>
        </Container>
    </Navbar>
  )
}

export default MainNav;