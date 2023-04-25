import React from "react";
import { Routes, Route } from "react-router-dom";

function HomePage() {
  return (
    <>
      <div className="shred-intro">
        <p className="home-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
        <img
          src="https://static.sportzbusiness.com/uploads/2022/10/Top-10-Gym-Equipment-Feature-Image.jpg"
          className="home-img"
        />
      </div>
      <div className="shred-intro">
        <img
          src="https://static.sportzbusiness.com/uploads/2022/10/Top-10-Gym-Equipment-Feature-Image.jpg"
          className="home-img"
        />
        <p className="home-info" style={{ flex: 1, flexWrap: "wrap" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua.
        </p>
      </div>
      <div>
        <h2>QUOTE</h2>

        <button className="signup-button">SIGN UP</button>
      </div>
    </>
  );
}
export default HomePage;
