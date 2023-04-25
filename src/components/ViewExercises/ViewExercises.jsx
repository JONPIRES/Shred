import React, { useState, useEffect } from "react";
import * as exercisesAPI from "../../utilities/exercises-api";
import { Link } from "react-router-dom";
const ExerciseList = () => {
    const [exercises, setExercises] = useState([]);

    useEffect(() => {
        async function fetchExercises() {
            const exercises = await exercisesAPI.get();
            setExercises(exercises);
        }
        fetchExercises();
    }, []);

    return (
        <div className="container-fluid container ">
            <h1 className="text-center">Exercises </h1>
            <div className="row d-flex justify-content-center">
                {exercises.map((exercise) => (
                    <div className="col-lg-4 mb-4">
                        <div key={exercise._id} className="card" >
                            <div className="text-center">
                                <img src={exercise.img} alt="exercise img" className="card-img-top" style={{ height: `25em`, width: `25em` }} />
                            </div>
                                <div className="card-body">
                                    <h2 className="card-title text-center">{exercise.name}</h2>
                                    <p className="card-text">Muscle Group: {exercise.muscleGroup}</p>
                                    <p className="card-text">Equipment: {exercise.equipment}</p>
                                    <Link to="/exercise-detail" className="btn btn-primary">View Exercise</Link>
                                </div>
                            </div>
                        </div>
                ))}
                    </div>
        </div>
            );
};

            export default ExerciseList;
