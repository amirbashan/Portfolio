import React, { useEffect, useRef } from "react";
import { ChakraProvider } from "@chakra-ui/react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Navbar from "./Components/Navbar";
import Welcome from "./Components/Welcome";
import AboutMe from "./Components/AboutMe";
import Projects from "./Components/Projects";
import Aos from "aos";
import "aos/dist/aos.css";

function App() {
  const aboutRef = useRef();
  const projectsRef = useRef();

  useEffect(() => {
    Aos.init({});
  }, []);

  const handleClickAbout = () => {
    aboutRef.current.scrollIntoView({ behavior: "smooth" });
  };
  const handleClickProjects = () => {
    projectsRef.current.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <ChakraProvider>
      <div>
        <Navbar />
        <div id="welcome">
          <Welcome handleClickAbout={handleClickAbout} handleClickProjects={handleClickProjects} />
        </div>
        <div className="emptySpace" ref={aboutRef}></div>
        <div id="about">
          <AboutMe />
        </div>
        <div className="emptySpace"></div>
        <div id="projects" ref={projectsRef}>
          <Projects />
        </div>
        <div id="contact"></div>
      </div>
    </ChakraProvider>
  );
}

export default App;
