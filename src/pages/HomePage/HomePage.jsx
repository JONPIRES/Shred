import React from "react";
import { Routes, Route } from "react-router-dom";
import "../HomePage/HomePage.css";
import Footer from "../../components/Footer/Footer";

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
        <h2 className="homepage-quote">QUOTE / SLOGAN</h2>

        <div class="text-center">
          <button type="button" class="btn btn-primary">
            SIGN UP
          </button>
        </div>

      </div>
    </>
  );
}
export default HomePage;
