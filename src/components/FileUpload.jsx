import React, { useState } from "react";
import axios from "axios";

const BACKEND_URL = "https://anomaly-detection-u6p2.onrender.com";

function FileUpload({ setPredictions }) {
  const [file, setFile] = useState(null);
  const [downloadLink, setDownloadLink] = useState(null);

  const handleFileChange = (event) => {
    setFile(event.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) return;
    
    const formData = new FormData();
    formData.append("file", file);

    try {
      const response = await axios.post(`${BACKEND_URL}/predict/`, formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });

      setPredictions(response.data.predictions);
      setDownloadLink(`${BACKEND_URL}/download/`);
    } catch (error) {
      console.error("Error uploading file:", error);
    }
  };

  return (
    <div>
      <input type="file" onChange={handleFileChange} className="mb-4 border p-2" />
      <button onClick={handleUpload} className="bg-blue-500 text-white px-4 py-2 rounded">Upload & Predict</button>
      {downloadLink && <a href={downloadLink} download className="text-blue-500 mt-4 block">Download Results</a>}
    </div>
  );
}

export default FileUpload;
