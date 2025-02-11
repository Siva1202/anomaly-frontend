import React, { useState } from "react";
import FileUpload from "../components/FileUpload";
import PredictionTable from "../components/PredictionTable";

function AnomalyDetector() {
  const [predictions, setPredictions] = useState([]);

  return (
    <div className="p-6 bg-white shadow-lg rounded-xl">
      <h2 className="text-2xl font-bold mb-4">Anomaly Detector</h2>
      <FileUpload setPredictions={setPredictions} />
      <PredictionTable predictions={predictions} />
    </div>
  );
}

export default AnomalyDetector;
