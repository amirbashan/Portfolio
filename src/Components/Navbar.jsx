import React from "react";
import resume from "../Img/resume.png";
import gitIcon from "../Img/github.png";
import linkedinIcon from "../Img/linkedin.png";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import InsertDriveFileIcon from "@mui/icons-material/InsertDriveFile";

export default function Navbar() {
  return (
    <div id="navbar">
      <a target="_blank" href="">
        <img src={resume} alt={"My Resume"} title="My Resume" className="" />
      </a>
      <a target="_blank" href="https://www.linkedin.com/in/amir-bashan-2a48a8124/">
        <img src={linkedinIcon} alt={"linkedin link"} />
      </a>
      <a target="_blank" href="https://github.com/amirbashan">
        <img src={gitIcon} alt={"github link"} className="" />
      </a>
    </div>
  );
}
