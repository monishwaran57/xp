import React from 'react';
import './Experience.css';

const Experience = ({ company, duration, children }) => {
  return (
    <div className="experience">
      <div className="experience-header">
        <div className="experience-company">{company}</div>
        <div className="experience-duration">{duration}</div>
      </div>
      <div className="experience-content">{children}</div>
    </div>
  );
};

export default Experience;