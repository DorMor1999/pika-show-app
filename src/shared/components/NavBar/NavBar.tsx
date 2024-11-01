import React, { useContext } from 'react';
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { useNavigate } from 'react-router-dom';

//my components
import MoonIcon from '../../assets/NavBar icons/MoonIcon';
import SunIcon from '../../assets/NavBar icons/SunIcon';
import ThemeContext from '../../context/ThemeContext';

const NavBar: React.FC = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);
  const navigate = useNavigate();

  //events
  function onClickTheme(selectedTheme: string): void {
    if (selectedTheme !== theme) {
      toggleTheme();
    }
    console.log(`Theme changed to: ${theme}`);
  }

  function moveToOtherPage(path: string): void {
    navigate(`${path}`);
  }

  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      className={`bg-${theme} ${theme}-theme`}
      data-bs-theme={theme}
    >
      <Container>
        <Nav.Link>
          <Navbar.Brand onClick={() => moveToOtherPage('/')}>Home</Navbar.Brand>
        </Nav.Link>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link onClick={() => moveToOtherPage('/movies')}>
              Movies
            </Nav.Link>
            <Nav.Link onClick={() => moveToOtherPage('/series')}>
              Series
            </Nav.Link>
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
