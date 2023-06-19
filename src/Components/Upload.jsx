import React, { useState } from "react";

function Upload() {
  const [imageFile, setImageFile] = useState(null);
  const [pdfFile, setPdfFile] = useState(null);
  const [errorMessage, setErrorMessage] = useState("");

  const handleFileUpload = (event, fileType) => {
    const file = event.target.files[0];

    if (file) {
      if (file.type.includes("image") && fileType === "image") {
        convertFileToBase64(file, (base64Data) => {
          setImageFile(base64Data);
        });
        setErrorMessage("");
      } else if (file.type === "application/pdf" && fileType === "pdf") {
        convertFileToBase64(file, (base64Data) => {
          setPdfFile(base64Data);
        });
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

  const convertFileToBase64 = (file, callback) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64Data = reader.result;
      callback(base64Data);
    };
    reader.readAsDataURL(file);
  };

  const handleRemoveFile = (fileType) => {
    if (fileType === "image") {
      setImageFile(null);
    } else if (fileType === "pdf") {
      setPdfFile(null);
    }
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    // Handle the submission logic here, such as sending the Base64 data to the server

    // Example: Create a FormData object and append the Base64 data
    const formData = new FormData();
    if (imageFile) {
      formData.append("imageFile", imageFile);
    }
    if (pdfFile) {
      formData.append("pdfFile", pdfFile);
    }

    try {
      const response = await fetch("http://localhost:8000/uploads", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      console.log(data);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <div className="flex mt-5">
        <label className="text-gray-500 text-small">
          Upload ID File
          <input
            className="border-gray-400 font-body rounded"
            type="file"
            id="id"
            accept=".pdf, image/*"
            onChange={(event) => handleFileUpload(event, "image")}
          />
          {imageFile && (
            <div>
              <p>Selected Image:</p>
              <img src={imageFile} alt="Uploaded" />
              <button
                className="rounded-full py-2 px-3 text-xs font-bold cursor-pointer tracking-wider bg-secondary-500 text-white"
                onClick={() => handleRemoveFile("image")}
              >
                Remove
              </button>
            </div>
          )}
        </label>

        <label className="text-gray-500 text-small">
          Upload KRA Pin File
          <input
            className="border-gray-400 font-body rounded"
            type="file"
            id="kra"
            accept=".pdf, image/*"
            onChange={(event) => handleFileUpload(event, "pdf")}
          />
          {pdfFile && (
            <div>
              <p>Selected PDF: {pdfFile.name}</p>
              <button
                className="rounded-full py-2 px-3 text-xs font-bold cursor-pointer tracking-wider bg-secondary-500 text-white"
                onClick={() => handleRemoveFile("pdf")}
              >
                Remove
              </button>
            </div>
          )}

          {errorMessage && (
            <p className="error text-secondary-500">{errorMessage}</p>
          )}
        </label>
      </div>
      <button 
      type="submit"
      className="rounded-full py-2 px-3 text-xs bg-secondary-400 cursor-pointer tracking-wider">Submit</button>
    </form>
  );
}

export default Upload;
