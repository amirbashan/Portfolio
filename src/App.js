import React, { useRef } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Welcome from "./Components/Welcome";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";

function App() {
  const aboutRef = useRef();
  const projectsRef = useRef();

  const handleClickAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ChakraProvider>
      <div>
        <div id="welcome">
          <Welcome handleClickAbout={handleClickAbout} handleClickProjects={handleClickProjects} />
        </div>
        <div id="about" ref={aboutRef}>
          <AboutMe />
        </div>
        <div id="projects" ref={projectsRef}>
          <Projects />
        </div>
        <div id="contact"></div>
      </div>
    </ChakraProvider>
  );
}

export default App;
