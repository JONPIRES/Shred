import React, { useState, useEffect } from "react";
import * as exercisesAPI from "../../utilities/exercises-api";

import { useParams } from "react-router-dom";

const ExerciseDetail = () => {
  const [exercise, setExercise] = useState();
  const { id } = useParams();

  useEffect(() => {
    async function fetchExercise() {
      const exercise = await exercisesAPI.detail(id);
      setExercise(exercise);
    }
    fetchExercise();
  }, []);
  console.log(exercise);

  return <div>{exercise.name}</div>;
};

export default ExerciseDetail;
