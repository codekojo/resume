import "./App.css";
import Header from "./app/components/Header";
import FeaturedProject from "./app/components/sections/FeaturedProject/FeaturedProject";
import OtherProjects from "./app/components/sections/OtherProject/OtherProject";
import GlobalStyle from "./styles/GlobalStyle";

import IconComponentMain from "./app/components/common/IconComponent";
import Contact from "./app/components/sections/Contact/Contact";

function App() {
  return (
    <div className="App">
      <GlobalStyle />
      <Header />
      <FeaturedProject />
      <OtherProjects />
      <Contact />
      <IconComponentMain />
    </div>
  );
}

export default App;

// function IconComponent({ icon, name }) {
//   return (
//     <div className="icons__set" className="okk">
//       <p className="icons__title ">
//         <span>{icon}</span>
//       </p>
//     </div>
//   );
// }
