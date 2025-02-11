import React from "react";

function PredictionTable({ predictions }) {
  if (predictions.length === 0) return null;

  return (
    <div className="mt-6">
      <h3 className="font-bold">Predictions</h3>
      <table className="w-full border-collapse border border-gray-300">
        <thead>
          <tr className="bg-gray-200">
            <th className="border px-4 py-2">ID</th>
            <th className="border px-4 py-2">Prediction</th>
          </tr>
        </thead>
        <tbody>
          {predictions.map((item, index) => (
            <tr key={index} className="text-center">
              <td className="border px-4 py-2">{index + 1}</td>
              <td className="border px-4 py-2">
                {item.Anomaly_Prediction === 1 ? "Anomalous" : "Normal"}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default PredictionTable;
