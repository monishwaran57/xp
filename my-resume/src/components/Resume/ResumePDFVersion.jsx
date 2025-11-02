import React from 'react';
import './ResumePDFVersion.css';

const ResumePDFVersion = ({ 
  personalInfo, 
  experiences, 
  personalProjects, 
  education, 
  certifications, 
  technicalSkills 
}) => {
  return (
    <div className="pdf-resume" id="pdf-resume-content">
      {/* Header */}
      <div className="pdf-header">
        <h1>{personalInfo.name}</h1>
        <div className="pdf-contact">
          <span>{personalInfo.email}</span>
          <span>•</span>
          <span>{personalInfo.phone}</span>
          <span>•</span>
          <span>{personalInfo.location}</span>
        </div>
        <div className="pdf-contact">
          <span>{personalInfo.linkedin.display}</span>
          <span>•</span>
          <span>{personalInfo.github.display}</span>
        </div>
      </div>

      {/* Professional Experience */}
      <div className="pdf-section">
        <h2 className="pdf-section-title">Professional Experience</h2>
        {experiences.map((exp, index) => (
          <div key={index} className="pdf-experience">
            <div className="pdf-exp-header">
              <strong>{exp.company}</strong>
              <span>{exp.duration}</span>
            </div>
            {exp.projects.map((project, projIndex) => (
              <div key={projIndex} className="pdf-project">
                <h3>{project.title}</h3>
                <p>{project.description}</p>
                <ul>
                  {project.achievements.map((achievement, achIndex) => (
                    <li key={achIndex}>{achievement}</li>
                  ))}
                </ul>
                <p className="pdf-tech">
                  <strong>Tech Stack:</strong> {project.techStack.join(', ')}
                </p>
              </div>
            ))}
          </div>
        ))}
      </div>

      {/* Personal Projects */}
      <div className="pdf-section">
        <h2 className="pdf-section-title">Personal Projects</h2>
        {personalProjects.map((project, index) => (
          <div key={index} className="pdf-project">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <ul>
              {project.achievements.map((achievement, achIndex) => (
                <li key={achIndex}>{achievement}</li>
              ))}
            </ul>
            <p className="pdf-tech">
              <strong>Tech Stack:</strong> {project.techStack.join(', ')}
            </p>
          </div>
        ))}
      </div>

      {/* Education */}
      <div className="pdf-section">
        <h2 className="pdf-section-title">Education</h2>
        {education.map((edu, index) => (
          <div key={index} className="pdf-education">
            <h3>{edu.degree}</h3>
            <p><strong>{edu.institution}</strong> | {edu.duration} | {edu.grade}</p>
          </div>
        ))}
      </div>

      {/* Certifications */}
      <div className="pdf-section">
        <h2 className="pdf-section-title">Certifications</h2>
        {certifications.map((cert, index) => (
          <div key={index} className="pdf-certification">
            <strong>{cert.title}</strong> - Score: {cert.score}
          </div>
        ))}
      </div>

      {/* Technical Skills */}
      <div className="pdf-section">
        <h2 className="pdf-section-title">Technical Skills</h2>
        <p className="pdf-skills">{technicalSkills.join(' • ')}</p>
      </div>
    </div>
  );
};

export default ResumePDFVersion;