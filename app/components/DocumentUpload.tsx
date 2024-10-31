import React, { useState } from "react";
import { uploadDocument } from "../services/api";


const DocumentUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [message, setMessage] = useState<string>("");

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      console.log(e.target.files[0]);
      setFile(e.target.files[0]);
      setMessage(`Uploaded: ${e.target.files[0].name}`);
    }
  };

  const handleUpload = async () => {
    if (!file) return;

    try {
      await uploadDocument(file);
      setFile(null);
      setMessage("File uploaded successfully.");
    } catch (error) {
      setMessage("Upload failed.");
    }
  };

  return (
    <div className="container mt-5">
      <div className="card p-4 shadow-sm">
        <h3 className="mb-4 text-center">Upload Your Document</h3>
        <div className="mb-3">
          <input
            type="file"
            className="form-control"
            onChange={handleFileChange}
          />
        </div>
        <button
          onClick={handleUpload}
          className="btn btn-primary w-100 mb-3"
          disabled={!file}
        >
          Upload
        </button>
        {message && (
          <div className={`alert ${message.includes("failed") ? "alert-danger" : "alert-success"}`} role="alert">
            {message}
          </div>
        )}
      </div>
    </div>
  );
};

export default DocumentUpload;
