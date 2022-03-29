import React from "react";
import { Heading } from "@chakra-ui/react";
import ProjectDeltika from "./ProjectDeltika";
import ProjectArcade from "./ProjectArcade";

export default function Projects() {
  return (
    <>
      <Heading size="2xl" className="mb-3">
        Projects
      </Heading>
      <ProjectDeltika />
      <ProjectArcade />
    </>
  );
}
