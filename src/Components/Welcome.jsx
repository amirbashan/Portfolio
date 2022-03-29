import React from "react";
import Button from "react-bootstrap/Button";
import { Heading } from "@chakra-ui/react";

export default function Welcome(props) {
  const { handleBackClick } = props;
  return (
    <div className="welcomeContainer">
      <Heading size="4xl">
        Hi, my name is <span>Amir Bashan</span>
      </Heading>
      <Heading size="4xl">I'm a Full stack developer</Heading>
      <Button variant="outline-success" size="lg" onClick={handleBackClick}>
        See more
      </Button>
    </div>
  );
}
