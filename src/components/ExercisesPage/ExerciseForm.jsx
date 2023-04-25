import { useState } from "react";
import React from "react";
import * as ExerciseService from "../../utilities/exercise-services.js";

const ExerciseForm = () => {
  const [exercise, setExercise] = useState({
    name: "",
    muscleGroup: "",
    equipment: "",
    img: "",
    explanation: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
    setError("");
  }

  async function handleSubmit(e) {
    // Prevent form from being submitted to the server
    e.preventDefault();
    window.location.replace("/exercise");
    try {
      // this still needs to be created
      await ExerciseService.create(exercise);

      //   setExercise(newExercise);
    } catch {
      setError("Create Exercise Failed - Try Again");
    }
  }

  return (
    <div>
      <div className="form-container container mt-5">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={exercise.name}
            onChange={handleChange}
            required
            className="form-control"
          />
          <label className="form-label">Muscle Group:</label>
          <input
            type="text"
            name="muscleGroup"
            value={exercise.muscleGroup}
            onChange={handleChange}
            required
            className="form-control"
          />
          <label className="form-label">Equipment:</label>
          <input
            type="text"
            name="equipment"
            value={exercise.equipment}
            onChange={handleChange}
            required
            className="form-control"
          />
          <label className="form-label">Image URL:</label>
          <input
            type="text"
            name="img"
            value={exercise.img}
            onChange={handleChange}
            required
            className="form-control"
          />
          <label className="form-label">Explanation:</label>
          <input
            type="text"
            name="explanation"
            value={exercise.explanation}
            onChange={handleChange}
            required
            className="form-control"
          />
          <button type="submit" className="btn btn-dark mt-2">Create Exercise </button>
        </form>
      </div>
      <p className="error-message ">&nbsp;{error}</p>
    </div>
  );
};

export default ExerciseForm;
