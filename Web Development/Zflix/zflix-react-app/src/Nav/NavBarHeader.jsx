import React from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import classes from "./NavBarHeader.module.css"

const NavBarHeader = () => {
  return (
    <Navbar expand="lg" variant="dark" sticky="top" className={classes.navbar}>
      <Container>
        <Navbar.Brand href="#home"><img
        src="img\Zflix.png"
        width="150"
        height="50"
        className="d-inline-block align-top"
        alt="Zflix"
      /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">My List</Nav.Link>
            <Nav.Link href="#login">Login</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default React.memo(NavBarHeader);
