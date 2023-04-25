import React, { useState, useEffect } from "react";
import * as exercisesAPI from "../../utilities/exercises-api";

import { useParams } from "react-router-dom";

const ExerciseDetail = () => {
  const [exercise, setExercise] = useState();
  const { exerciseId } = useParams();

  useEffect(() => {
    async function fetchExercise() {
      const exercise = await exercisesAPI.detail(exerciseId);
      setExercise(exercise);
    }
    fetchExercise();
  }, []);

  return <div>ExerciseDetail</div>;
};

export default ExerciseDetail;
