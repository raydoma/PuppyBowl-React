import React from "react";
import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import "./App.css";
import SinglePlayer from "./components/SinglePlayer";
import AllPlayers from "./components/AllPlayers";
import NewPlayerForm from "./components/NewPlayerForm";
import Home from "./components/Home";

export default function App () {
  return (
    <>
    <Routes>
      <Route path="/players/:id" element={<SinglePlayer />} /> 
      <Route path="/players" element={<AllPlayers />} /> 
      <Route path="/NewPlayerForm" element={<NewPlayerForm />} /> 
      <Route path="/" element={<Home />} /> 
    </Routes>
    </>
  );
}