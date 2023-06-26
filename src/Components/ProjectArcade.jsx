import React from 'react';
import { Heading } from '@chakra-ui/react';

export default function ProjectArcade() {
  return (
    <div className="projectFrame">
      <div data-aos="fade-right" className="projectInfo">
        <Heading size="lg" className="mb-1">
          Retro Arcade
        </Heading>
        <div className="skills">
          <button className="skill btn-secondary btn-sm">React</button>
          <button className="skill btn-secondary btn-sm">React-Router</button>
          <button className="skill btn-secondary btn-sm">Node-js</button>
          <button className="skill btn-secondary btn-sm">Express</button>
          <button className="skill btn-secondary btn-sm">MySQL</button>
        </div>
        <div>
          <p>This project was done as a part of our ITC coding Bootcamp.</p>
          <p>
            We coded website, games logic ,created and connected to a users &
            scores database
          </p>
          <p className="note">
            <b>Note:</b> All work was done as a 1-week exercise.
          </p>
        </div>
        <div className="buttonStyle">
          <a target="_blank" href="https://retro-arcade.herokuapp.com/">
            See Live
          </a>
          <a target="_blank" href="https://github.com/amirbashan/RetroArcade">
            Source Code
          </a>
        </div>
      </div>
      <div data-aos="fade-left" className="projectView">
        <iframe
          src="https://www.youtube.com/embed/zub5VDROQVI?rel=0&mute=1&showinfo=0&autoplay=1&loop=1"
          width="100%"
          height="315"
          frameBorder="0"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
}
