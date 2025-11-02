import React, { useState } from 'react';
import { Download, FileText, Loader, FileCheck } from 'lucide-react';
import './DownloadButtons.css';

const DownloadButtons = ({ onDownloadText, onDownloadPDF, onDownloadCleanPDF }) => {
  const [isDownloadingText, setIsDownloadingText] = useState(false);
  const [isDownloadingPDF, setIsDownloadingPDF] = useState(false);
  const [isDownloadingCleanPDF, setIsDownloadingCleanPDF] = useState(false);

  const handleDownloadText = async () => {
    setIsDownloadingText(true);
    try {
      await onDownloadText();
    } catch (error) {
      alert('Failed to download text file. Please try again.', error);
    } finally {
      setTimeout(() => setIsDownloadingText(false), 1000);
    }
  };

  const handleDownloadPDF = async () => {
    setIsDownloadingPDF(true);
    try {
      await onDownloadPDF();
    } catch (error) {
      alert('Failed to generate PDF. Please try again.', error);
    } finally {
      setTimeout(() => setIsDownloadingPDF(false), 2000);
    }
  };

  const handleDownloadCleanPDF = async () => {
    setIsDownloadingCleanPDF(true);
    try {
      await onDownloadCleanPDF();
    } catch (error) {
      alert('Failed to generate clean PDF. Please try again.', error);
    } finally {
      setTimeout(() => setIsDownloadingCleanPDF(false), 2000);
    }
  };

  return (
    <div className="download-buttons no-print">
      <button
        onClick={handleDownloadText}
        disabled={isDownloadingText}
        className="download-btn"
      >
        {isDownloadingText ? (
          <Loader size={20} className="spin" />
        ) : (
          <FileText size={20} />
        )}
        <span>{isDownloadingText ? 'Downloading...' : 'Download as TXT'}</span>
      </button>
      <button
        onClick={handleDownloadPDF}
        disabled={isDownloadingPDF}
        className="download-btn pdf-btn"
      >
        {isDownloadingPDF ? (
          <Loader size={20} className="spin" />
        ) : (
          <Download size={20} />
        )}
        <span>{isDownloadingPDF ? 'Generating...' : 'Styled PDF'}</span>
      </button>
      <button
        onClick={handleDownloadCleanPDF}
        disabled={isDownloadingCleanPDF}
        className="download-btn clean-pdf-btn"
      >
        {isDownloadingCleanPDF ? (
          <Loader size={20} className="spin" />
        ) : (
          <FileCheck size={20} />
        )}
        <span>{isDownloadingCleanPDF ? 'Generating...' : 'Clean PDF (ATS)'}</span>
      </button>
    </div>
  );
};

export default DownloadButtons;