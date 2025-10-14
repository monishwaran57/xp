import React from 'react';
import './Resume.css';
import DownloadButtons from '../DownloadButtons/DownloadButtons';
import Header from '../Header/Header';
import Section from '../Section/Section';
import Experience from '../Experience/Experience';
import Project from '../Project/Project';
import EducationItem from '../EducationItem/EducationItem';
import Certification from '../Certification/Certification';
import TechSkills from '../TechSkills/TechSkills';
import { 
  personalInfo, 
  experiences, 
  personalProjects, 
  education, 
  certifications, 
  technicalSkills 
} from '../../data/resumeData';
import { generateResumeText, downloadAsText, printResume } from '../../utils/downloadUtils';

const Resume = () => {
  const handleDownloadText = () => {
    const resumeData = {
      personalInfo,
      experiences,
      personalProjects,
      education,
      certifications,
      technicalSkills
    };
    const textContent = generateResumeText(resumeData);
    downloadAsText(textContent);
  };

  return (
    <div className="resume-wrapper">
      <DownloadButtons 
        onDownloadText={handleDownloadText}
        onPrint={printResume}
      />
      
      <div className="resume-container">
        <Header personalInfo={personalInfo} />
        
        <div className="resume-content">
          {/* Professional Experience */}
          <Section title="Professional Experience">
            {experiences.map((exp, index) => (
              <Experience 
                key={index}
                company={exp.company}
                duration={exp.duration}
              >
                {exp.projects.map((project, projIndex) => (
                  <Project
                    key={projIndex}
                    title={project.title}
                    description={project.description}
                    achievements={project.achievements}
                    techStack={project.techStack}
                  />
                ))}
              </Experience>
            ))}
          </Section>

          {/* Personal Projects */}
          <Section title="Personal Projects">
            {personalProjects.map((project, index) => (
              <Project
                key={index}
                title={project.title}
                description={project.description}
                achievements={project.achievements}
                techStack={project.techStack}
              />
            ))}
          </Section>

          {/* Education */}
          <Section title="Education">
            {education.map((edu, index) => (
              <EducationItem
                key={index}
                degree={edu.degree}
                institution={edu.institution}
                duration={edu.duration}
                grade={edu.grade}
              />
            ))}
          </Section>

          {/* Certifications */}
          <Section title="Certifications">
            {certifications.map((cert, index) => (
              <Certification
                key={index}
                title={cert.title}
                score={cert.score}
              />
            ))}
          </Section>

          {/* Technical Skills */}
          <Section title="Technical Skills">
            <TechSkills skills={technicalSkills} />
          </Section>
        </div>
      </div>
    </div>
  );
};

export default Resume;