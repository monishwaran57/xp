export const generateResumeText = (data) => {
  const { personalInfo, experiences, personalProjects, education, certifications, technicalSkills } = data;
  
  let text = `${personalInfo.name}\n`;
  text += `Email: ${personalInfo.email} | Phone: ${personalInfo.phone}\n`;
  text += `Location: ${personalInfo.location}\n`;
  text += `LinkedIn: ${personalInfo.linkedin.display} | GitHub: ${personalInfo.github.display}\n\n`;
  
  text += `PROFESSIONAL EXPERIENCE\n\n`;
  experiences.forEach(exp => {
    text += `${exp.company}\n${exp.duration}\n\n`;
    exp.projects.forEach(project => {
      text += `${project.title}\n`;
      text += `${project.description}\n\n`;
      project.achievements.forEach(achievement => {
        text += `• ${achievement}\n`;
      });
      text += `\nTech Stack: ${project.techStack.join(', ')}\n\n`;
    });
  });
  
  text += `PERSONAL PROJECTS\n\n`;
  personalProjects.forEach(project => {
    text += `${project.title}\n`;
    text += `${project.description}\n\n`;
    project.achievements.forEach(achievement => {
      text += `• ${achievement}\n`;
    });
    text += `\nTech Stack: ${project.techStack.join(', ')}\n\n`;
  });
  
  text += `EDUCATION\n\n`;
  education.forEach(edu => {
    text += `${edu.degree}\n`;
    text += `${edu.institution} | ${edu.duration} | ${edu.grade}\n\n`;
  });
  
  text += `CERTIFICATIONS\n\n`;
  certifications.forEach(cert => {
    text += `${cert.title} - Score: ${cert.score}\n`;
  });
  
  text += `\nTECHNICAL SKILLS\n\n`;
  text += technicalSkills.join(', ');
  
  return text;
};

export const downloadAsText = (content, filename = 'Monishwaran_C_Resume.txt') => {
  const blob = new Blob([content], { type: 'text/plain' });
  const url = URL.createObjectURL(blob);
  const link = document.createElement('a');
  link.href = url;
  link.download = filename;
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
  URL.revokeObjectURL(url);
};

export const printResume = () => {
  window.print();
};