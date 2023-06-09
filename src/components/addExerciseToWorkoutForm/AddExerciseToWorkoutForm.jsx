import React, { useState, useEffect } from "react";
import * as planAPI from "../../utilities/plan-api";
import * as exercisesAPI from "../../utilities/exercises-api";
import { useParams } from "react-router-dom";
import CreateWorkoutExerciseCard from "./CreateWorkoutExerciseCard";

function AddExerciseToWorkoutPlan() {
  const { id } = useParams();

  const [exercises, setExercises] = useState([]);

  const [exercise, setExercise] = useState({
    exercise: "",
    name: "",
    muscleGroup: "",
    sets: "",
    reps: "",
    duration: "",
    notes: "",
  });

  // now I need to update the schema for the exercise in the plan and also drop the colection in mongo"

  function handleChange(e) {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  }
  function handleSelectChange(e) {
    if (e.target.name === "exercise") {
      const selectedExercise = exercises.find(
        (exercise) => exercise._id === e.target.value
      );
      setExercise({
        ...exercise,
        muscleGroup: selectedExercise.muscleGroup,
        name: selectedExercise.name,
        exercise: selectedExercise._id,
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    window.location.replace(`/workout/${id}`);
    try {
      await planAPI.addExercise(exercise, id);
    } catch {}
  }

  // this is for displaying the exercises as options in the select field in the form
  async function fetchExercises() {
    const exercises = await exercisesAPI.get();
    setExercises(exercises);
  }
  useEffect(() => {
    fetchExercises();
  }, []);

  return (
    <div
      className="container container-fluid d-flex flex-column justify-content-center align-items-center mt-2"
      style={{ minHeight: "100vh", height: "auto" }}>
      <h1 className="text-center mt-5"> Add Exercise</h1>
      <br />
      <form
        onSubmit={handleSubmit}
        style={{
          width: "25em",
          border: "solid black 3px",
          borderRadius: "1.5em",
        }}
        className="p-4">
        <label className="form-label">Exercise</label> <br />
        <select name="exercise" onChange={handleSelectChange}>
          <option disabled selected="selected">
            Choose One
          </option>
          {exercises.map((exercise, idx) => {
            return (
              <CreateWorkoutExerciseCard
                key={exercise + idx}
                exercise={exercise}
              />
            );
          })}
        </select>
        <br />
        <label className="form-label mt-2">Sets</label>
        <input
          type="text"
          name="sets"
          onChange={handleChange}
          required
          className="form-control"
        />
        <label className="form-label">Reps</label>
        <input
          type="text"
          name="reps"
          onChange={handleChange}
          required
          className="form-control"
        />
        <label className="form-label">Duration</label>
        <input
          type="text"
          name="duration"
          onChange={handleChange}
          className="form-control"
        />
        <label className="form-label">Initial Weight (lbs)</label>
        <input
          type="text"
          name="notes"
          onChange={handleChange}
          required
          className="form-control"
        />
        <button type="submit" className="btn btn-dark mt-2">
          Add Exercise{" "}
        </button>
      </form>
    </div>
  );
}

export default AddExerciseToWorkoutPlan;
