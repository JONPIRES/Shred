import React from "react";
import "../HomePage/HomePage.css";

function HomePage() {
  return (
    <div className="homepage container-fluid container">
      <div className="shred-intro">
        <p className="home-info">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
        <img
          src="https://st2.depositphotos.com/25557058/42679/v/600/depositphotos_426791560-stock-illustration-one-continuous-line-drawing-young.jpg"
          className="home-img"
        />
      </div>
      <div className="shred-intro">
        <img
          src="https://st2.depositphotos.com/25557058/42679/v/600/depositphotos_426791518-stock-illustration-one-single-line-drawing-fit.jpg"
          className="home-img"
        />
        <p className="home-info" style={{ flex: 1, flexWrap: "wrap" }}>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
        </p>
      </div>
      <div>
        <h2 className="homepage-quote d-flex justify-content-center align-items-center">
          GET SHREDDED TODAY. &nbsp;{" "}
          <button type="button" className="btn btn-light border border-dark">
            SIGN UP
          </button>
        </h2>
      </div>
    </div>
  );
}
export default HomePage;
