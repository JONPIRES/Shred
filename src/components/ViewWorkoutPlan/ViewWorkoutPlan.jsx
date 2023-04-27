import React from "react";
import { Link } from "react-router-dom";

function ViewWorkoutPlan() {
    return (
        <div className="" style={{ minHeight: '100vh', height: 'auto' }}>

            <div className="row  container-fluid" style={{ minHeight: '100vh', height: 'auto' }}>
                <div className="col-lg-2 bg-primary d-flex justify-content-center align-items-center flex-column">
                    <div className="text-center mt-3">
                        <Link to="/" className="link-offset-2 link-offset-3-hover
       link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover text-light">Monday Workout</Link>
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/" className="link-offset-2 link-offset-3-hover
       link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover text-light">Chest Workout</Link>
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/" className="link-offset-2 link-offset-3-hover
       link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover text-light">Tuesday Workout</Link>
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/" className="link-offset-2 link-offset-3-hover
       link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover text-light">Friday Workout</Link>
                    </div>
                    <div className="text-center mt-3">
                        <Link to="/" className="link-offset-2 link-offset-3-hover
       link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover text-light">Leg Workout</Link>
                    </div>
                </div>
                <div className="col-lg-9 container">
                    <div className="text-center mt-5 " >
                        
                        <h1>Name Of Workout</h1>
                        <hr />
                    </div>
                    <div className="text-center">
                        <Link to="workout/:id/add-exercise" className="text-center link-offset-2 link-offset-2-hover
       link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover text-dark">Add exercise</Link>
                    </div>
                    <div className="">
                        <p>Exercise Name</p>
                        <p>Exercise Name</p>
                        <p>Exercise Name</p>
                    </div>
                </div>
            </div>


        </div>
    )

}

export default ViewWorkoutPlan;