import React from 'react';
import { Heading } from '@chakra-ui/react';

export default function Skills() {
  return (
    <>
      <Heading size="2xl">SKILLS</Heading>
      <div className="SkillsContainer">
        <div id="skillsFront" className="SkillsInner">
          <Heading size="md">Front-End</Heading>
          <div className="miniSkillsContainer">
            <div className="miniSkill">
              <img
                src="https://res.cloudinary.com/amirbashan/image/upload/v1653573182/Portfolio/HTML5_nl78nc.png"
                alt={'HTML5'}
              />
              <p>HTML5</p>
            </div>
            <div className="miniSkill">
              <img
                src="https://res.cloudinary.com/amirbashan/image/upload/v1653573182/Portfolio/CSS3_efsmx0.png"
                alt={'CSS3'}
              />
              <p>CSS3</p>
            </div>
            <div className="miniSkill">
              <img
                src="https://res.cloudinary.com/amirbashan/image/upload/v1653573181/Portfolio/JavaScript_xc5pyz.png"
                alt={'JavaScript'}
              />
              <p>JavaScript</p>
            </div>
            <div className="miniSkill">
              <img
                src="https://res.cloudinary.com/amirbashan/image/upload/v1653573182/Portfolio/reactIcon_j7zdvh.png"
                alt={'React'}
              />
              <p>React</p>
            </div>
            <div className="miniSkill">
              <img
                src="https://res.cloudinary.com/amirbashan/image/upload/v1653573181/Portfolio/mapbox_lbtuv2.png"
                alt={'mapbox'}
              />
              <p>Mapbox</p>
            </div>
            <div className="miniSkill">
              <img
                src="https://res.cloudinary.com/amirbashan/image/upload/v1653573182/Portfolio/Bootstrap_gilfkf.png"
                alt={'Bootstrap'}
              />
              <p>Bootstrap</p>
            </div>
          </div>
        </div>
        <div id="skillsBack" className="otherTools SkillsInner">
          <Heading size="md">Other-Tools</Heading>
          <div className="miniSkillsContainer">
            <div className="miniSkill">
              <img
                src="https://res.cloudinary.com/amirbashan/image/upload/v1653573182/Portfolio/github_ad8lz7.png"
                alt={'github'}
              />
              <p>Github</p>
            </div>
            <div className="miniSkill">
              <img
                src="https://res.cloudinary.com/amirbashan/image/upload/v1653573181/Portfolio/jira_ek60tt.png"
                alt={'jira'}
              />
              <p>Jira</p>
            </div>
            <div className="miniSkill">
              <img
                src="https://res.cloudinary.com/amirbashan/image/upload/v1653573181/Portfolio/heroku_z05jxf.png"
                alt={'heroku'}
              />
              <p>Heroku</p>
            </div>
          </div>
        </div>
        <div id="skillsTools" className="SkillsInner">
          <Heading size="md">Back-End</Heading>
          <div className="miniSkillsContainer">
            <div className="miniSkill">
              <img
                src="https://res.cloudinary.com/amirbashan/image/upload/v1653573181/Portfolio/nodejs_zg4rs8.png"
                alt={'nodejs'}
              />
              <p>nodejs</p>
            </div>
            <div className="miniSkill">
              <img
                src="https://res.cloudinary.com/amirbashan/image/upload/v1653573181/Portfolio/mysql_q4brqh.png"
                alt={'mysql'}
              />
              <p>MySQL</p>
            </div>
            <div className="miniSkill">
              <img
                src="https://res.cloudinary.com/amirbashan/image/upload/v1653573182/Portfolio/postgresql_uimbgt.png"
                alt={'postgresql'}
              />
              <p>PostgreSQL</p>
            </div>
            <div className="miniSkill">
              <img
                src="https://res.cloudinary.com/amirbashan/image/upload/v1653573182/Portfolio/firebase_bbcqiq.png"
                alt={'firebase'}
              />
              <p>Firebase</p>
            </div>
            <div className="miniSkill">
              <img
                src="https://res.cloudinary.com/amirbashan/image/upload/v1653573181/Portfolio/mongodb_q0emy8.png"
                alt={'mongodb'}
              />
              <p>Mongodb</p>
            </div>
            <div className="miniSkill">
              <img
                src="https://res.cloudinary.com/amirbashan/image/upload/v1653573182/Portfolio/express_cgl7wp.png"
                alt={'express'}
              />
              <p>Express</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
