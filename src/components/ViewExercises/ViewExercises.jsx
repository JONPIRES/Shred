import React, { useState, useEffect } from "react";
import * as exercisesAPI from "../../utilities/exercises-api";
import "./ViewExercises.css";
import ExerciseCard from "./ExerciseCard";

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
    <div
      className="container-fluid container"
      style={{ minHeight: "100vh", height: "auto" }}>
      <h1 className="text-center mt-3">Exercises </h1>
      <div className="row d-flex justify-content-center">
        {exercises.map((exercise, idx) => (
          <ExerciseCard
            key={exercise._id}
            img={exercise.img}
            name={exercise.name}
            muscle={exercise.muscleGroup}
            equipment={exercise.equipment}
            id={exercise._id}
          />
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
