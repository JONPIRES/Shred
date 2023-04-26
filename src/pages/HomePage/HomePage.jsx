import React from "react";
import "../HomePage/HomePage.css";


function HomePage() {
  return (
    <div className="homepage container-fluid container">
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

        <div className="text-center">
          <button type="button" className="btn btn-primary">
            SIGN UP
          </button>
        </div>

      </div>
    </div>
  );
}
export default HomePage;
