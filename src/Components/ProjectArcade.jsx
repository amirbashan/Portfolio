import React from "react";
import { Heading } from "@chakra-ui/react";
import Arcade from "../Img/Arcade.png";

export default function ProjectArcade() {
  return (
    <div className="projectFrame">
      <div data-aos="fade-right" className="projectInfo">
        <Heading size="lg" className="mb-1">
          Old Arcade
        </Heading>
        <div className="skills">
          <button className=" btn-secondary btn-sm">React</button>
          <button className=" btn-secondary btn-sm">React-Router</button>
          <button className=" btn-secondary btn-sm">Node-js</button>
          <button className=" btn-secondary btn-sm">Express</button>
          <button className=" btn-secondary btn-sm">SQL</button>
        </div>
        <div>
          <p>
            <b>Collaborator:</b> Shahar Knafo.
          </p>
          <p>This project was done as a part of our ITC coding Bootcamp.</p>
          <p>We coded website, games logic ,created and connected to a users & scores database</p>
          <p className="note">
            <b>Note:</b> All work was done as a 1-week exercise.
          </p>
        </div>
        <div className="buttonStyle">
          <a target="_blank" href="">
            See Live
          </a>
          <a target="_blank" href="https://github.com/amirbashan/oldArcade">
            Sorce Code
          </a>
        </div>
      </div>
      <div data-aos="fade-left" className="projectImg">
        <img src={Arcade} alt={"Arcade Website"} />
      </div>
    </div>
  );
}
