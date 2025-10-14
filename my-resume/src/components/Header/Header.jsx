import React from 'react';
import './Header.css';

const Header = ({ personalInfo }) => {
  return (
    <div className="header">
      <div className="header-background"></div>
      <h1 className="header-name">{personalInfo.name}</h1>
      <div className="contact-info">
        <span className="contact-item">📧 {personalInfo.email}</span>
        <span className="contact-item">📱 {personalInfo.phone}</span>
        <span className="contact-item">📍 {personalInfo.location}</span>
      </div>
      <div className="contact-links">
        <a href={personalInfo.linkedin.url} className="contact-link">
          💼 {personalInfo.linkedin.display}
        </a>
        <a href={personalInfo.github.url} className="contact-link">
          🔗 {personalInfo.github.display}
        </a>
      </div>
    </div>
  );
};

export default Header;