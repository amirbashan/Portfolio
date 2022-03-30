import React from "react";
import { Heading } from "@chakra-ui/react";

export default function AboutMe() {
  return (
    <div data-aos="fade-in" className="aboutContainer">
      <Heading size="2xl" className="aboutHeader">
        ABOUT ME
      </Heading>
      <div className="textContainer">
        <p>I'm a Hardworking and efficient full-stack developer who loves to code.</p>
        <p>
          In 2021, I took a leap and trained in ITC FullStack Coding Bootcamp. I quickly absorbed new concepts with
          positive attitude to every challenge.
        </p>
        <p>
          I'm a highly motivated, self-driven person with high technical skills, fast learning with additional
          experience in owning a Business, Sales and Project management in Construction.
        </p>
      </div>
    </div>
  );
}
