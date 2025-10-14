import React from 'react';
import './TechSkills.css';

const TechSkills = ({ skills }) => {
  return (
    <div className="tech-skills">
      {skills.map((skill, index) => (
        <span key={index} className="skill-tag">
          {skill}
        </span>
      ))}
    </div>
  );
};

export default TechSkills;