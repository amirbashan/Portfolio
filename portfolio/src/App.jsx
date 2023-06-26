import React, { useEffect, useRef } from 'react';
import { ChakraProvider } from '@chakra-ui/react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Navbar from './Components/Navbar';
import Welcome from './Components/Welcome';
import AboutMe from './Components/AboutMe';
import Skills from './Components/Skills';
import Projects from './Components/Projects';
import ContactMe from './Components/ContactMe';
import whatsapp from './assets/whatsapp.png';

import Aos from 'aos';
import 'aos/dist/aos.css';

function App() {
  const skillsRef = useRef();
  const projectsRef = useRef();
  const aboutRef = useRef();
  const contactRef = useRef();

  useEffect(() => {
    Aos.init({});
  }, []);

  const ClickSkills = () =>
    skillsRef.current.scrollIntoView({ behavior: 'smooth' });
  const ClickAbout = () =>
    aboutRef.current.scrollIntoView({ behavior: 'smooth' });
  const ClickProjects = () =>
    projectsRef.current.scrollIntoView({ behavior: 'smooth' });
  const ClickContact = () =>
    contactRef.current.scrollIntoView({ behavior: 'smooth' });

  return (
    <ChakraProvider>
      <div>
        <Navbar />
        <div id="welcome">
          <Welcome
            ClickAbout={ClickAbout}
            ClickSkills={ClickSkills}
            ClickProjects={ClickProjects}
            ClickContact={ClickContact}
          />
        </div>
        <div className="emptySpace" ref={aboutRef}></div>
        <div id="about">
          <AboutMe />
        </div>
        <div className="emptySpace"></div>
        <div id="projects" ref={projectsRef}>
          <Projects />
        </div>
        <div className="emptySpace" ref={skillsRef}></div>
        <div id="techSkills">
          <Skills />
        </div>
        <div id="contact" ref={contactRef}>
          <ContactMe />
        </div>
        <footer>
          <img src={whatsapp} title="whatsapp" alt={'whatsapp link'} />
          <a target="_blank" href="https://wa.me/0585009044">
            Amir 0585-009044
          </a>
          <img src={whatsapp} title="whatsapp" alt={'whatsapp link'} />
        </footer>
      </div>
    </ChakraProvider>
  );
}

export default App;
