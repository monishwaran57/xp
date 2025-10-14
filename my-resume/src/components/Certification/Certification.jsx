import React from 'react';
import './Certification.css';

const Certification = ({ title, score }) => {
  return (
    <div className="certification">
      <div className="certification-title">{title}</div>
      <div className="certification-score">Score: {score}</div>
    </div>
  );
};

export default Certification;