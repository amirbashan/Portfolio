import React from "react";
import { Heading } from "@chakra-ui/react";
import Deltika from "../Img/Deltika.png";

export default function ProjectDeltika() {
  return (
    <div className="projectFrame">
      <div className="projectInfo">
        <Heading size="lg" className="mb-1">
          Deltika website
        </Heading>
        <div className="skills">
          <button className=" btn-secondary btn-sm">React</button>
          <button className=" btn-secondary btn-sm">react-router</button>
          <button className=" btn-secondary btn-sm">Mapbox</button>
          <button className=" btn-secondary btn-sm">Python</button>
          <button className=" btn-secondary btn-sm">PostgreSql</button>
        </div>
        <div>
          <p>
            <b>Collaborator:</b> Ornit Bhonkar.
          </p>
          <p>
            Deltika uses explainable AI analytics that translates your data into proactive insights. Currently focused
            on US real estate market.
          </p>
          <p>Site includes complex database queries, dynamic map and more.</p>
          <p className="note">
            <b>Note:</b> Site it targeted for desktop and not showing well on small screens.
          </p>
        </div>
        <div className="buttonStyle">
          <a target="_blank" href="https://app.deltika.com/">
            See Live
          </a>
        </div>
      </div>
      <div className="projectImg">
        <img src={Deltika} alt={"deltika website"} />
      </div>
    </div>
  );
}
