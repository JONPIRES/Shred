import React from "react";
import "../HomePage/HomePage.css";

function HomePage() {
  return (
    <div className="homepage d-flex" style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/007/768/103/original/one-continuous-line-drawing-of-young-sporty-man-working-out-with-crossover-cable-machine-in-fitness-gym-club-center-healthy-fitness-sport-concept-dynamic-single-line-draw-design-illustration-vector.jpg")` }}>
      
        <div className="container-fluid d-flex flex-column mt-5" style={{marginLeft:'50px'}}>
          <div className="row flex-column">
            <div className="col-5 mt-5" style={{}}>
            <p className="text-justify">Welcome to our workout website, where we are committed to helping you achieve your fitness goals. Whether you're a beginner or a seasoned athlete, we have everything you need to get started and stay motivated. Our platform offers a variety of workout plans, challenges, and resources designed to help you build strength, improve your endurance, and enhance your overall fitness level. Our team of experienced trainers and nutritionists are dedicated to providing you with the best possible guidance and support to help you reach your full potential. Join us today and begin your journey towards a healthier, stronger, and more confident you.</p>
            </div>
            <div className="col-7 mt-5">
            <p>Transform your body, transform your life: Start your fitness journey with us!</p>
            </div>
          </div>
        </div>
     


    </div>
  );
}
export default HomePage;
