import { useState } from "react";
import React from "react";
import * as ExerciseService from "../../utilities/exercise-services.js";

const ExerciseForm = ({ user }) => {
  const [exercise, setExercise] = useState({
    user: user,
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
      await ExerciseService.create(exercise);
    } catch (err) {
      console.log(err);
      setError("Create Exercise Failed - Try Again");
    }
  }

  return (
    <div>
      <div
        className="form-container container mt-5 d-flex justify-content-center align-items-center"
        style={{ minHeight: "100vh", height: "auto" }}>
        <form autoComplete="off" onSubmit={handleSubmit} style={{ width: '25em', border: 'solid black 3px', borderRadius: '1.5em' }} className="p-4">
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            value={exercise.name}
            onChange={handleChange}
            required
            className="form-control"
            // style="text-transform:capitalize"
          />
          <label className="form-label">Muscle Group:</label>
          <input
            type="text"
            name="muscleGroup"
            value={exercise.muscleGroup}
            onChange={handleChange}
            required
            className="form-control"
            // style="text-transform:capitalize"
          />
          <label className="form-label">Equipment:</label>
          <input
            type="text"
            name="equipment"
            value={exercise.equipment}
            onChange={handleChange}
            required
            className="form-control"
            // style="text-transform:capitalize"
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
            // style="text-transform:capitalize"
          />
          <button type="submit" className="btn btn-dark mt-2">
            Create Exercise{" "}
          </button>
        </form>
      </div>
      <p className="error-message ">&nbsp;{error}</p>
    </div>
  );
};

export default ExerciseForm;
