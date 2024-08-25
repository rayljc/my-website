import React, { useState } from 'react';

const Analysis = () => {
  const [selectedFile, setSelectedFile] = useState(null);
  const [report, setReport] = useState(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
  };

  const handleUpload = () => {
    if (selectedFile) {
      console.log("Uploading:", selectedFile);
      alert(`File uploaded: ${selectedFile.name}`);
      alert("Computation in progress");

      // Simulate computation process
      setTimeout(() => {
        // Set a mock report after "computation"
        setReport({
          fileName: selectedFile.name,
          findings: [
            "Finding 1: Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            "Finding 2: Vivamus luctus urna sed urna ultricies ac tempor dui sagittis.",
            "Finding 3: In condimentum facilisis porta.",
          ],
          conclusion:
            "The uploaded file shows significant results that align with the expected outcomes.",
        });
      }, 2000); // Adjust the delay as needed
    } else {
      alert("No file selected!");
    }
  };

  return (
    <div className="analysis-container">
      <h1>Tandem Repeats Analysis</h1>

      {/* File Upload Section */}
      <div className="upload-section">
        <p>Please upload your file for analysis:</p>
        <input type="file" onChange={handleFileChange} />
        <button onClick={handleUpload}>Upload and Compute</button>
        {selectedFile && <p>Selected file: {selectedFile.name}</p>}
      </div>

      {/* Report Section */}
      {report && (
        <div className="report-container">
          <h2>Analysis Report</h2>
          <p><strong>File:</strong> {report.fileName}</p>
          <p><strong>Analysis Summary:</strong></p>
          {report.findings.map((finding, index) => (
            <p key={index} style={{ textIndent: '20px' }}>{finding}</p>
          ))}
          <p><strong>Conclusion:</strong> {report.conclusion}</p>
        </div>
      )}
    </div>
  );
};

export default Analysis;
