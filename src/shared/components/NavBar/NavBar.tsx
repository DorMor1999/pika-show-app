import React from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//my components
import MoonIcon from '../../assets/NavBar icons/MoonIcon';
import SunIcon from '../../assets/NavBar icons/SunIcon';

const NavBar: React.FC = () => {
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className="bg-body-tertiary"
      bg="dark"
      data-bs-theme="dark"
    >
      <Container>
        <Navbar.Brand href="/">Home</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link href="/movies">Movies</Nav.Link>
            <Nav.Link href="/series">Series</Nav.Link>
          </Nav>
          <Nav>
            <NavDropdown title="Theme" id="collapsible-nav-dropdown">
              <NavDropdown.Item >{<SunIcon/>} Light</NavDropdown.Item>
              <NavDropdown.Item >
              {<MoonIcon/>} Dark
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
