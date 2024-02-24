import React, { useState} from 'react';
import '../styles/header.css';
import { Navbar, Nav, Container } from 'react-bootstrap';
import image from '../assets/sd.logo1.jpg';
import { Twitter } from 'react-bootstrap-icons';
import { Link as ScrollLinks } from 'react-scroll';
import { animateScroll as scroll } from 'react-scroll';
import { Link } from 'react-router-dom';

function Header() {
  const [expanded, setExpanded] = useState(false);
  const handleNavItemClick = () => {
    setExpanded(false); // Close the Navbar when a Nav link is clicked
  };
  return (
    <Navbar
      collapseOnSelect
      expand="lg"
      bg="primary"
      variant="dark"
      sticky="top"
    >
      <Container>
        <img
          src={image}
          alt="logo"
          height={40}
          width={70}
          className="navbar-img"
        />
        <Navbar.Toggle aria-controls="responsive-navbar-nav"  onClick={() => setExpanded(expanded ? false : 'expanded')} />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="me-auto" onSelect={handleNavItemClick}>
            <ScrollLinks to="home" smooth={true} duration={500}>
              <Nav.Link>Home</Nav.Link>
            </ScrollLinks>
            <ScrollLinks to="about" smooth={true} duration={500}>
              <Nav.Link>ABOUT</Nav.Link>
            </ScrollLinks>
            <Link to="/resume" onClick={() => scroll.scrollTo("#resume")}>
              <Nav.Link>RESUME</Nav.Link>
            </Link>
            <ScrollLinks to="skill" smooth={true} duration={500}>
              <Nav.Link>SKILLS</Nav.Link>
            </ScrollLinks>
            <ScrollLinks to="services" smooth={true} duration={500}>
              <Nav.Link>SERVICES</Nav.Link>
            </ScrollLinks>
            <ScrollLinks to="latestworks" smooth={true} duration={500}>
              <Nav.Link>LATEST WORKS</Nav.Link>
            </ScrollLinks>
            <ScrollLinks to="contact" smooth={true} duration={500}>
              <Nav.Link>CONTACTS</Nav.Link>
            </ScrollLinks>
          </Nav>

          <Nav>
            <button className="button-1">DOWNLOAD RESUME</button>
          </Nav>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Twitter className="my-3 mx-2 icon-twitter"></Twitter>
          </a>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default Header;
