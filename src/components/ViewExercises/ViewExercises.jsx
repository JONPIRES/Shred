import React, { useState, useEffect } from "react";
import * as exercisesAPI from "../../utilities/exercises-api";
import "./ViewExercises.css";

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
    <div>
      <h1>Exercises hit</h1>
      {exercises.map((exercise) => (
        <div key={exercise._id}>
          <div className="card-img">
            <img src={exercise.img} alt="exercise img" />
          </div>
          <h2>{exercise.name}</h2>
          <p>{exercise.muscleGroup}</p>
          <p>{exercise.equipment}</p>
          <p>{exercise.equipment}</p>
          <p>{exercise.explanation}</p>
        </div>
      ))}
    </div>
  );
};

export default ExerciseList;
