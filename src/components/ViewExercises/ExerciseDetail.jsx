import React, { useState, useEffect } from "react";
import * as exercisesAPI from "../../utilities/exercises-api";

import { useParams } from "react-router-dom";

const ExerciseDetail = () => {
  const [exercise, setExercise] = useState({
    name: "",
    muscleGroup: "",
    equipments: "",
    img: "",
    explanation: "",
  });
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    async function fetchExercise() {
      const exercise = await exercisesAPI.detail(id);
      setExercise(exercise);
    }
    fetchExercise();
  }, []);
  console.log("this is the exercise: ", exercise);

  return <div>{exercise.name}</div>;
};

export default ExerciseDetail;
