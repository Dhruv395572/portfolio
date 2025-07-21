import React, { useState } from 'react';
import PropTypes from 'prop-types';

export default function Navbar(props) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="logo">{props.brend}</div>

      <div className={`nav-links ${isOpen ? 'open' : ''}`}>
        <a href="#HOME">{props.homeText}</a>
        <a href="#about">{props.aboutText}</a>
        <a href="#Projects">{props.projectText}</a>
        <a href="#Skills">{props.skillsText}</a>
        <a href="#Certificates">{props.certifiacteText}</a>
        <a href="#contact">{props.contactText}</a>
      </div>

      <div className="hamburger" onClick={() => setIsOpen(!isOpen)}>
        <span></span>
        <span></span>
        <span></span>
      </div>
    </nav>
  );
}
//
Navbar.propTypes = {
  brend: PropTypes.string,
  homeText: PropTypes.string,
  aboutText: PropTypes.string,
  projectText: PropTypes.string,
  skillsText: PropTypes.string,
  contactText: PropTypes.string,
};

//defult props
Navbar.defaultProps = {
  brend: 'NEXUS',
  homeText: 'HOME',
  aboutText: 'ABOUT',
  projectText: 'PROJECTS',
  skillsText: 'SKILLS',
  contactText: 'CONTACT',
};
