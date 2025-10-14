import React, { useState } from 'react';
import { Download, FileText } from 'lucide-react';
import './DownloadButtons.css';

const DownloadButtons = ({ onDownloadText, onPrint }) => {
  const [isDownloading, setIsDownloading] = useState(false);

  const handleDownload = async () => {
    setIsDownloading(true);
    await onDownloadText();
    setTimeout(() => setIsDownloading(false), 1000);
  };

  return (
    <div className="download-buttons no-print">
      <button
        onClick={handleDownload}
        disabled={isDownloading}
        className="download-btn"
      >
        <FileText size={20} />
        <span>{isDownloading ? 'Downloading...' : 'Download as TXT'}</span>
      </button>
      <button
        onClick={onPrint}
        className="download-btn print-btn"
      >
        <Download size={20} />
        <span>Print / Save as PDF</span>
      </button>
    </div>
  );
};

export default DownloadButtons;