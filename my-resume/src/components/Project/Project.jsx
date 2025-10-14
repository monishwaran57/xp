import React from 'react';
import './Project.css';

const Project = ({ title, description, achievements, techStack }) => {
  return (
    <div className="project">
      <h3 className="project-title">{title}</h3>
      <p className="project-description">{description}</p>
      <ul className="project-achievements">
        {achievements.map((achievement, index) => (
          <li key={index} className="achievement-item">
            {achievement}
          </li>
        ))}
      </ul>
      <div className="tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-tag">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
};

export default Project;