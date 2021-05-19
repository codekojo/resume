import React from "react";
import NavbarComponent from "./navbar/Navbar";
import Banner from "./sections/Banner/Banner";

function Header() {
  return (
    <header id="header">
      <NavbarComponent />
      <Banner />
    </header>
  );
}

export default Header;
