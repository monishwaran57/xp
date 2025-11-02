import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';

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

export const generatePDF = async (elementId, filename = 'Monishwaran_C_Resume_Styled.pdf') => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('Resume element not found');
    }

    // Create a clone
    const clone = element.cloneNode(true);
    
    // Style the clone for PDF
    clone.style.position = 'fixed';
    clone.style.left = '0';
    clone.style.top = '0';
    clone.style.width = '210mm';
    clone.style.backgroundColor = '#ffffff';
    clone.style.transform = 'scale(1)';
    clone.style.transformOrigin = 'top left';
    clone.style.zIndex = '10000';
    
    // Remove animations
    const allElements = clone.querySelectorAll('*');
    allElements.forEach(el => {
      el.style.animation = 'none';
      el.style.transition = 'none';
    });
    
    document.body.appendChild(clone);
    
    await new Promise(resolve => setTimeout(resolve, 500));

    const canvas = await html2canvas(clone, {
      scale: 2,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: 794,
      windowWidth: 794
    });

    document.body.removeChild(clone);

    const imgData = canvas.toDataURL('image/png', 1.0);
    
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4'
    });

    const pdfWidth = 210;
    const pdfHeight = 297;
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'PNG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save(filename);
    
    return true;
  } catch (error) {
    console.error('PDF generation failed:', error);
    throw error;
  }
};

export const generatePDFFromCleanVersion = async (elementId, filename = 'Monishwaran_C_Resume_ATS.pdf') => {
  try {
    const element = document.getElementById(elementId);
    if (!element) {
      throw new Error('PDF resume element not found');
    }

    // Make element visible for capture
    const originalPosition = element.style.position;
    const originalLeft = element.style.left;
    const originalZIndex = element.style.zIndex;
    
    element.style.position = 'fixed';
    element.style.left = '0';
    element.style.top = '0';
    element.style.zIndex = '10000';
    element.style.visibility = 'visible';
    element.style.opacity = '1';

    // Wait for render
    await new Promise(resolve => setTimeout(resolve, 500));

    const canvas = await html2canvas(element, {
      scale: 2.5,
      useCORS: true,
      logging: false,
      backgroundColor: '#ffffff',
      width: 794, // A4 width at 96 DPI
      windowWidth: 794
    });

    // Hide element again
    element.style.position = originalPosition;
    element.style.left = originalLeft;
    element.style.zIndex = originalZIndex;

    const imgData = canvas.toDataURL('image/jpeg', 0.98);
    
    const pdf = new jsPDF({
      orientation: 'portrait',
      unit: 'mm',
      format: 'a4',
      compress: true
    });

    const pdfWidth = 210;
    const pdfHeight = 297;
    const imgWidth = pdfWidth;
    const imgHeight = (canvas.height * pdfWidth) / canvas.width;

    let heightLeft = imgHeight;
    let position = 0;

    pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
    heightLeft -= pdfHeight;

    while (heightLeft > 0) {
      position = heightLeft - imgHeight;
      pdf.addPage();
      pdf.addImage(imgData, 'JPEG', 0, position, imgWidth, imgHeight);
      heightLeft -= pdfHeight;
    }

    pdf.save(filename);
    
    return true;
  } catch (error) {
    console.error('PDF generation failed:', error);
    throw error;
  }
};

export const printResume = () => {
  window.print();
};