import { useState, useEffect } from "react";
import axios from "axios";

export default function Rank() {
  const [rankings, setRankings] = useState([]);

  useEffect(() => {
    async function fetchRankings() {
      try {
        const response = await axios.get("/api/users/rank");
        console.log(response);
        setRankings(response.data);
      } catch (error) {
        console.error("Error fetching rankings:", error);
      }
    }
    fetchRankings();
  }, []);

  return (
    <div>
      <h3>Rank</h3>
      <ol className="list-group list-group-numbered">
        {rankings.map((entry, index) => (
          <li
            key={index}
            className="list-group-item d-flex justify-content-between align-items-start"
          >
            <div className="ms-2 me-auto">
              <div className="fw-bold">{entry["User.username"]}</div>
            </div>

            <span className="badge bg-primary rounded-pill">
              {entry.totalpoints}
            </span>
          </li>
        ))}
      </ol>
    </div>
  );
}
