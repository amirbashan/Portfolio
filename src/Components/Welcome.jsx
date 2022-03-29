import React from "react";
import Button from "react-bootstrap/Button";
import { Heading } from "@chakra-ui/react";

export default function Welcome(props) {
  const { handleClickAbout, handleClickProjects } = props;
  return (
    <div className="welcomeContainer">
      <Heading className="welcomeHeader1">I'm</Heading>
      <Heading className="welcomeHeader2">Amir Bashan</Heading>
      <Heading className="welcomeHeader3">FullStack Developer</Heading>
      <div>
        <Button variant="outline-dark" size="lg" onClick={handleClickAbout}>
          About me
        </Button>
        <Button variant="outline-dark" size="lg" onClick={handleClickProjects}>
          My Projects
        </Button>
      </div>
    </div>
  );
}
