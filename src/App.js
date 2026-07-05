import React from "react";
import "./App.css";
import Header from "./app/components/Header";
import FeaturedProject from "./app/components/sections/FeaturedProject/FeaturedProject";
import GlobalStyle from "./styles/GlobalStyle";

import IconComponentMain from "./app/components/common/IconComponent";
import Contact from "./app/components/sections/Contact/Contact";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <FeaturedProject />
      <Contact />
      <IconComponentMain />
    </div>
  );
}

export default App;
