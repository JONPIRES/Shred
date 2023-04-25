import React from "react";
import * as exercisesAPI from "./exercises-api";

const ExerciseList = () => {
  const [exercise, setExercise] = useState([]);

  const exercises = exercisesAPI.get();

  return (
    <div>
      {exercises.map((exercise) => (
        <div key={exercise._id}>
          <div className="card-img">
            <img src="{exercise.img}" alt="" />
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
