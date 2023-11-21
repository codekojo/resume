import React from "react";
import "./App.css";
import Header from "./app/components/Header";
import FeaturedProject from "./app/components/sections/FeaturedProject/FeaturedProject";
import OtherProjects from "./app/components/sections/OtherProject/OtherProject";
import GlobalStyle from "./styles/GlobalStyle";

import IconComponentMain from "./app/components/common/IconComponent";
import Contact from "./app/components/sections/Contact/Contact";
import About from "./app/components/sections/About/About";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <About />
      <FeaturedProject />
      <OtherProjects />
      <Contact />
      <IconComponentMain />
    </div>
  );
}

export default App;
