import React from "react";
import Button from "react-bootstrap/Button";
import { Heading } from "@chakra-ui/react";

export default function Welcome(props) {
  const { ClickAbout, ClickProjects, ClickSkills, ClickContact } = props;
  return (
    <div className="welcomeContainer">
      <Heading className="welcomeHeader1">I'm</Heading>
      <Heading className="welcomeHeader2">Amir Bashan</Heading>
      <Heading className="welcomeHeader3">FullStack Developer</Heading>
      <div>
        <Button variant="outline-dark" size="lg" onClick={ClickAbout}>
          About me
        </Button>
        <Button variant="outline-dark" size="lg" onClick={ClickProjects}>
          My Projects
        </Button>
        <Button variant="outline-dark" size="lg" onClick={ClickSkills}>
          Skills
        </Button>
        <Button variant="outline-dark" size="lg" onClick={ClickContact}>
          Contact
        </Button>
      </div>
    </div>
  );
}
