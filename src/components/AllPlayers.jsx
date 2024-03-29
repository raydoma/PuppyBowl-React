import React, { useState, useEffect } from "react";
import { fetchAllPlayers } from "../API";
import { useNavigate } from "react-router-dom";

export default function AllPlayers() {
  const navigate = useNavigate();
  const [players, setPlayers] = useState(null);

  useEffect(() => {
    async function fetchPlayers() {
      const allPlayers = await fetchAllPlayers();
      setPlayers(allPlayers);
    }
    fetchPlayers();
  }, []);

  return (
    <div className="all-players-container-1">
      <div className="all-players-title-bar-1">
        <h1>Players</h1>
      </div>
      <div className="all-players-1">
        {players ? (
          players.map((player) => {
            return (
              <div className="player-card" key={player.id}>
                <h2 className="player-name">{player.name}</h2>
                <div className="player-img-container">
                  <img src={player.imageUrl} alt="Image Not Found" />
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
          <h1>players not found</h1>
        )}
      </div>
      <div className="all-players-footer">
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
