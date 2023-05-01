import React from "react";
import "../HomePage/HomePage.css";
import {Link} from "react-router-dom"

function HomePage() {
  return (
    <div className="homepage d-flex" style={{ backgroundImage: `url("https://static.vecteezy.com/system/resources/previews/007/768/103/original/one-continuous-line-drawing-of-young-sporty-man-working-out-with-crossover-cable-machine-in-fitness-gym-club-center-healthy-fitness-sport-concept-dynamic-single-line-draw-design-illustration-vector.jpg")` }}>
      
        <div className="container-fluid container d-flex flex-column mt-5 fade-down" style={{marginLeft:'5em'}}>
          <div className="row flex-column container-fluid">
            <div className="col-5 mt-5 ms-5">
            <p className="text-justify fs-4">Welcome to <span className="text-danger fs-2" >SHRED</span>, where we are committed to helping you achieve your fitness goals. 
             <br /> <hr /> Whether you're a beginner or a seasoned athlete, we have everything you need to get started and stay motivated. 
            Our platform offers a variety of workout plans, challenges, and resources designed to help you build strength, improve your endurance, and enhance your overall fitness level. <br /> <hr /> Our team of experienced trainers and nutritionists are dedicated to providing you with the best possible guidance and support to help you reach your full potential. Join us today and begin your journey towards a healthier, stronger, and more confident you.</p>
            </div>
            <div className="col-7 mt-5">
            <p className="fs-2 text-dark mt-5 " style={{ textShadow:' 1px 1px 2px red'}}> <i>"Unleash your potential, SHRED your limits with us."</i> </p>
            </div>
          </div>

          <div className=" container-fluid text-center d-flex mt-5 mb-5" style={{}}>
            <p className="border border-dark bg-light text-center fs-2 mt-4" style={{padding:'25px 50px', marginLeft:'1.1em', borderRadius:'0.5em'}}>SHRED YOUR GOALS TODAY <span><Link className="btn btn-dark tex-light ms-3 fs-3 btn-pulse" to="/signup"> SIGN UP </Link></span></p>
          </div>
        </div>
     


    </div>
  );
}
export default HomePage;
