import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HiOutlineMenuAlt3 } from "react-icons/hi";

import "./Navbar.css";

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="px-5 xoxo">
      <Navbar.Brand href="#home">
        <img
          src="https://pbs.twimg.com/profile_images/1350017383470166016/YYDFd-u9.jpg"
          alt="Logo of Cake Cakey Cake"
          className="imgx img-fluid"
          style={{ height: "50px", borderRadius: "50%" }}
        />
      </Navbar.Brand>

      {/* <Navbar.Toggle aria-controls="basic-navbar-nav" /> */}

      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <HiOutlineMenuAlt3 color="white" />
      </Navbar.Toggle>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#" className="link">
            About
          </Nav.Link>
          <Nav.Link href="#about" className="link">
            Work
          </Nav.Link>
          <Nav.Link href="#featured" className="link">
            Projects
          </Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
