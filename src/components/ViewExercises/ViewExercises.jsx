import React, { useState, useEffect } from "react";
import * as exercisesAPI from "../../utilities/exercises-api";
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
    <div className="container-fluid container ">
      <h1 className="text-center">Exercises </h1>
      <div className="row d-flex justify-content-center">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            img={exercise.img}
            name={exercise.name}
            muscle={exercise.muscleGourp}
            equipment={exercise.equipment}
            id={exercise._id}
          />
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
