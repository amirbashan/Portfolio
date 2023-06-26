import React from 'react';
import resume from '../assets/resume.png';
import gitIcon from '../assets/github.png';
import linkedinIcon from '../assets/linkedin.png';

export default function Navbar() {
  return (
    <div id="navbar">
      <a
        target="_blank"
        href="https://drive.google.com/file/d/1ixxJBlCQJKo3z34rxlIEwH34bbFEIqD9/view?usp=sharing"
      >
        <img src={resume} alt={'My Resume'} title="My Resume" />
      </a>
      <a
        target="_blank"
        href="https://www.linkedin.com/in/amir-bashan-2a48a8124/"
      >
        <img src={linkedinIcon} title="linkedin" alt={'linkedin link'} />
      </a>
      <a target="_blank" href="https://github.com/amirbashan">
        <img src={gitIcon} alt={'github link'} title="github" />
      </a>
    </div>
  );
}
