import React from 'react';
import './EducationItem.css';

const EducationItem = ({ degree, institution, duration, grade }) => {
  return (
    <div className="education-item">
      <h3 className="education-degree">{degree}</h3>
      <p className="education-details">
        <strong>{institution}</strong> | {duration} | {grade}
      </p>
    </div>
  );
};

export default EducationItem;