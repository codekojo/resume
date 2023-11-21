import React from "react";
import { Navbar, Nav } from "react-bootstrap";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import resume from "../common/resume.pdf";
import cl from "../../../assets/cll.png";

import "./Navbar.css";

function ResumeLink() {
  return (
    <a
      className="link border px-3 py-2 rounded"
      href={resume}
      target="_blank"
      rel="noopener noreferrer"
    >
      Resume
    </a>
  );
}

function NavbarComponent() {
  return (
    <Navbar collapseOnSelect expand="lg" sticky="top" className="px-5 xoxo">
      <Navbar.Brand href="/">
        <img
          src={cl}
          alt="Logo of Cake Cakey Cake"
          className="imgx img-fluid"
          style={{ height: "50px", borderRadius: "50%" }}
        />
      </Navbar.Brand>

      <Navbar.Toggle aria-controls="basic-navbar-nav">
        <HiOutlineMenuAlt3 color="white" />
      </Navbar.Toggle>

      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="mx-auto">
          <Nav.Link href="#about" className="link">
            About
          </Nav.Link>
          <Nav.Link href="#projects" className="link">
            Projects
          </Nav.Link>
          <Nav.Link href="#contact" className="link">
            Contact
          </Nav.Link>
        </Nav>
        {/* <ResumeLink /> */}
      </Navbar.Collapse>
    </Navbar>
  );
}

export default NavbarComponent;
