import React, { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const [players, setPlayers] = useState(null);
  const navigate = useNavigate();

  // Fethcing all players using a function from API folder
  useEffect(() => {
    async function fetchPlayers() {
      const allPlayers = await fetchAllPlayers();
      setPlayers(allPlayers);
    }
    fetchPlayers();
  }, []);

  return (
    <div className="all-players-container">
      <div className="all-players-title-bar">
        <h1>Welcome to Puppy Bowl!</h1>
      </div>
      <div className="all-players">
        {players ? (
          players.map((player) => {
            return (
              <div key={player.id} className="player-card">
                <h2 className="player-name">{player.name}</h2>
                <div className="player-img-container">
                  <img src={player.imageUrl} alt="Image Not Found!" />
                </div>
                <div className="buttons-div">
                  <button
                    onClick={() => {
                      navigate(`/players/${player.id}`);
                    }}
                  >
                    See Details
                  </button>
                  <button className="remove-button">Remove</button>
                </div>
              </div>
            );
          })
        ) : (
          <p>players not found</p>
        )}
      </div>
      <div className="all-players-footer">
        <button
          className="footer-buttons"
          onClick={() => {
            navigate("/players");
          }}
        >
          View All Players!
        </button>
        <button
          className="footer-buttons"
          onClick={() => {
            navigate("/newPlayerForm");
          }}
        >
          Add New Player
        </button>
      </div>
    </div>
  );
}
