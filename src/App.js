import React, { useRef } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Welcome from "./Components/Welcome";
import AboutMe from "./Components/AboutMe";

function App() {
  const aboutRef = useRef();

  const handleBackClick = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ChakraProvider>
      <div>
        <div id="welcome">
          <Welcome handleBackClick={handleBackClick} />
        </div>
        <div id="about" ref={aboutRef}>
          <AboutMe />
        </div>
        <div id="projects"></div>
        <div id="contact"></div>
      </div>
    </ChakraProvider>
  );
}

export default App;
