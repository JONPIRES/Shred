import React, { useState, useEffect } from "react";
import * as exercisesAPI from "../../utilities/exercises-api";
import { useParams } from "react-router-dom";

function UpdateExercise() {
  const { id } = useParams();

  const [exercise, setExercise] = useState({
    name: "",
    muscleGroup: "",
    equipment: "",
    img: "",
    explanation: "",
    id: { id },
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
    setError("");
  }

  useEffect(() => {
    async function fetchExercises() {
      const exercise = await exercisesAPI.detail(id);
      setExercise(exercise);
    }
    fetchExercises();
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    window.location.replace(`/exercise/${id}`);
    try {
      await exercisesAPI.update(exercise);
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <div className="container">
      <h1 className="text-center mt-5">Edit <span className="text-info">{exercise.name}</span></h1>
      
      <div
        className="form-container container mt-5"
        style={{ minHeight: "100vh", height: "auto" }}>
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
          <div className="text-center">
          <button type="submit" className="btn btn-dark mt-3">
            Edit Exercise{" "}
          </button>
          </div>
        </form>
      </div>
      <p className="error-message ">&nbsp;{error}</p>
    </div>
  );
}

export default UpdateExercise;
