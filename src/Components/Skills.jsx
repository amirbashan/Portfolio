import React from "react";
import { Heading } from "@chakra-ui/react";
import html5 from "../Img/Logo/HTML5.png";
import css3 from "../Img/Logo/CSS3.png";
import JavaScript from "../Img/Logo/JavaScript.png";
import reactIcon from "../Img/Logo/reactIcon.png";
import mapbox from "../Img/Logo/mapbox.png";
import BootstrapIcon from "../Img/Logo/Bootstrap.png";
import nodejsIcon from "../Img/Logo/nodejs.png";
import mysql from "../Img/Logo/mysql.png";
import postgresql from "../Img/Logo/postgresql.png";
import firebase from "../Img/Logo/firebase.png";
import mongodb from "../Img/Logo/mongodb.png";
import express from "../Img/Logo/express.png";
import github from "../Img/Logo/github.png";
import jira from "../Img/Logo/jira.png";
import heroku from "../Img/Logo/heroku.png";

export default function Skills() {
  return (
    <>
      <Heading size="2xl">SKILLS</Heading>
      <div className="SkillsContainer">
        <div id="skillsFront" className="SkillsInner">
          <Heading size="md">Front-End</Heading>
          <div className="miniSkillsContainer">
            <div className="miniSkill">
              <img src={html5} alt={"HTML5"} />
              <p>HTML5</p>
            </div>
            <div className="miniSkill">
              <img src={css3} alt={"CSS3"} />
              <p>CSS3</p>
            </div>
            <div className="miniSkill">
              <img src={JavaScript} alt={"JavaScript"} />
              <p>JavaScript</p>
            </div>
            <div className="miniSkill">
              <img src={reactIcon} alt={"React"} />
              <p>React</p>
            </div>
            <div className="miniSkill">
              <img src={mapbox} alt={"mapbox"} />
              <p>Mapbox</p>
            </div>
            <div className="miniSkill">
              <img src={BootstrapIcon} alt={"Bootstrap"} />
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
        <div id="skillsBack" className="otherTools SkillsInner">
          <Heading size="sm">Other-Tools</Heading>
          <div className="miniSkillsContainer">
            <div className="miniSkill">
              <img src={github} alt={"github"} />
              <p>Github</p>
            </div>
            <div className="miniSkill">
              <img src={jira} alt={"jira"} />
              <p>Jira</p>
            </div>
            <div className="miniSkill">
              <img src={heroku} alt={"heroku"} />
              <p>Heroku</p>
            </div>
          </div>
        </div>
        <div id="skillsTools" className="SkillsInner">
          <Heading size="sm">Back-End</Heading>
          <div className="miniSkillsContainer">
            <div className="miniSkill">
              <img src={nodejsIcon} alt={"nodejs"} />
              <p>nodejs</p>
            </div>
            <div className="miniSkill">
              <img src={mysql} alt={"mysql"} />
              <p>MySQL</p>
            </div>
            <div className="miniSkill">
              <img src={postgresql} alt={"postgresql"} />
              <p>PostgreSQL</p>
            </div>
            <div className="miniSkill">
              <img src={firebase} alt={"firebase"} />
              <p>Firebase</p>
            </div>
            <div className="miniSkill">
              <img src={mongodb} alt={"mongodb"} />
              <p>Mongodb</p>
            </div>
            <div className="miniSkill">
              <img src={express} alt={"express"} />
              <p>Express</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
