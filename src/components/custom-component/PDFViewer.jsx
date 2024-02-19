import React, { useState } from "react";
import { Document, Page } from "react-pdf"; // Import correct components

// Example to access PDF file (adjust path accordingly)
const pdfPath = "path/to/your/pdf.pdf";

const PDFViewer = () => {
  const [numPages, setNumPages] = useState(null);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };

  return (
    <div className="pdf-viewer">
      {/* Handle loading state */}
      {!numPages && <p>Loading PDF...</p>}

      {/* Display PDF if loaded */}
      {numPages && (
        <>
          <Document file={pdfPath} onLoadSuccess={onDocumentLoadSuccess}>
            <Page pageNumber={1} />
            {/* Add more Page components for other pages if needed */}
            <p>Page 1 of {numPages}</p>
          </Document>
        </>
      )}
    </div>
  );
};

export default PDFViewer;
