import React, { useEffect, useState } from "react";
import axios from "axios";

const Dashboard = () => {
  const [scores, setScores] = useState(null);

  useEffect(() => {
    axios
      .post("http://localhost:5000/api/user-scores", {
        email: "singhdeobasundhara@gmail.com",
      })
      .then((res) => {
        console.log("Response from backend:", res.data);
        setScores(res.data);
      })
      .catch((err) => console.error("Error fetching scores:", err));
  }, []);

  return (
    <div style={{ padding: "20px" }}>
      <h1>User Scores</h1>
      {scores ? (
        <div>
          <h3>Your Test Scores:</h3>
          <ul>
            <li>Depression: {scores.depressionScore}</li>
            <li>Anxiety: {scores.anxietyScore}</li>
            <li>OCD: {scores.ocdScore}</li>
            <li>Wellness: {scores.wellnessScore}</li>
          </ul>
        </div>
      ) : (
        <p>Loading your scores...</p>
      )}
    </div>
  );
};

export default Dashboard;
