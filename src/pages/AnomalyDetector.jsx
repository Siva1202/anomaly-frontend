const handleUpload = async () => {
  if (!file) return;
  const formData = new FormData();
  formData.append("file", file);

  try {
    const response = await axios.post(
      "https://anomaly-detection-u6p2.onrender.com/predict", // ✅ Use Render backend URL
      formData,
      { headers: { "Content-Type": "multipart/form-data" } }
    );

    setPredictions(response.data.predictions);
    setDownloadLink("https://anomaly-detection-u6p2.onrender.com/download"); // ✅ Update download URL
  } catch (error) {
    console.error("Error uploading file:", error);
  }
};
