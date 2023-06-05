import React, { useState } from "react";

function Upload() {
  const [imageFile, setImageFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileUpload = (event, fileType) => {
    const file = event.target.files[0];
    if (file) {
      if (file.type.includes("image") && fileType === "image") {
        setImageFile(file);
        setErrorMessage("");
      } else if (file.type === "application/pdf" && fileType === "pdf") {
        setPdfFile(file);
        setErrorMessage("");
      } else {
        setErrorMessage(
          fileType === "image"
            ? "Please select a valid image file."
            : "Please select a valid PDF file."
        );
      }
    } else {
      setImageFile(null);
      setPdfFile(null);
      setErrorMessage("");
    }
  };

  const handleRemoveFile = (fileType) => {
    if (fileType === "image") {
      setImageFile(null);
    } else if (fileType === "pdf") {
      setPdfFile(null);
    }
  };

  return (
    <div className="flex mt-5">
      <label className="text-gray-500 text-small">
        Upload ID File
        <input
          className="border-gray-400 font-body rounded"
          type="file"
          accept=".pdf, image/*"
          onChange={(event) => handleFileUpload(event, "image")}
        />
        {imageFile && (
          <div>
            <p>Selected Image:</p>
            <img src={URL.createObjectURL(imageFile)} alt="Uploaded" />
            <button onClick={() => handleRemoveFile("image")}>Remove</button>
          </div>
        )}
      </label>

      <label className="text-gray-500 text-small">
        Upload KRA Pin File
        <input
          className="border-gray-400 font-body rounded"
          type="file"
          accept=".pdf, image/*"
          onChange={(event) => handleFileUpload(event, "pdf")}
        />
        {pdfFile && (
          <div>
            <p>Selected PDF: {pdfFile.name}</p>
            <button
            className="rounded-full py-2 px-3 text-xs font-bold cursor-pointer tracking-wider bg-secondary-500 text-white"
            onClick={() => handleRemoveFile("pdf")}>Remove</button>
          </div>
        )}

        {errorMessage && (
          <p className="error text-secondary-500">{errorMessage}</p>
        )}
      </label>
    </div>
  );
}

export default Upload;
