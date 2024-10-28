import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

//my components
import MoonIcon from '../../assets/NavBar icons/MoonIcon';
import SunIcon from '../../assets/NavBar icons/SunIcon';
import ThemeContext from '../../context/ThemeContext';

const NavBar: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  //events
  function onClickTheme(selectedTheme: string): void {
    if (selectedTheme !== theme) {
      toggleTheme();
    }
    console.log(`Theme changed to: ${theme}`);
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`bg-${theme} ${theme}-theme`} 
      data-bs-theme={theme}
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
            <NavDropdown
              title={theme === 'light' ? <SunIcon /> : <MoonIcon />}
              id="collapsible-nav-dropdown"
            >
              <NavDropdown.Item
                onClick={() => onClickTheme('light')}
                className={theme === 'light' ? 'active' : ''}
              >
                <SunIcon /> Light
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => onClickTheme('dark')}
                className={theme === 'dark' ? 'active' : ''}
              >
                <MoonIcon /> Dark
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default NavBar;
