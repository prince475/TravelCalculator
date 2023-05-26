import React, { useState } from "react";

function Upload() {
  const [imageFile, setImageFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleImageUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type.includes("image")) {
      setImageFile(file);
      setErrorMessage("");
    } else {
      setImageFile(null);
      setErrorMessage("Please select a valid image file.");
    }
  };

  const handlePdfUpload = (event) => {
    const file = event.target.files[0];
    if (file && file.type === "application/pdf") {
      setPdfFile(file);
      setErrorMessage("");
    } else {
      setPdfFile(null);
      setErrorMessage("Please select a valid PDF file.");
    }
  };

  return (
    <div className="flex mt-5">
      <label className="text-gray-500 text-small">
        Upload ID Image
        <input 
        className=" border-gray-400 font-body rounded"
        type="file"
        accept="image/*" 
        onChange={handleImageUpload} />
        {imageFile && (
          <div>
            <p>Selected Image:</p>
            <img src={URL.createObjectURL(imageFile)} alt="Uploaded" />
          </div>
        )}
      </label>

      <label className="text-gray-500 text-small">
        Upload PDF File
      <input 
      className=" border-gray-400 font-body rounded"
      type="file" 
      accept="application/pdf" 
      onChange={handlePdfUpload} />

{pdfFile && (
  <div>
    <p>Selected PDF: {pdfFile.name}</p>
  </div>
)}

{errorMessage && <p className="error text-secondary-500">{errorMessage}</p>}

      </label>
     
    </div>
  );
}

export default Upload;
