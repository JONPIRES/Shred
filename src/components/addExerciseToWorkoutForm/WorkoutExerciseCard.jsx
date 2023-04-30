import React from "react";

const WorkoutExerciseCard = ({ exercise }) => {
  return (
    <>
      <input type="hidden" name="muscleGroup" value={exercise.muscleGroup} />
      <input type="hidden" name="name" value={exercise.name} />
      <option value={exercise._id}>
        {exercise.name}/{exercise.muscleGroup}
      </option>
    </>
  );
};

export default WorkoutExerciseCard;
