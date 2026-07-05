import React from "react";
import { Navbar } from "react-bootstrap";
import cl from "../../../assets/cll.png";

import "./Navbar.css";

function NavbarComponent() {
  return (
    <Navbar sticky="top" className="px-5 xoxo navbar-minimal">
      <Navbar.Brand href="/">
        <img
          src={cl}
          alt="Clinton Agyemang Duah"
          className="imgx img-fluid"
          style={{ height: "50px", borderRadius: "50%" }}
        />
      </Navbar.Brand>
    </Navbar>
  );
}

export default NavbarComponent;
