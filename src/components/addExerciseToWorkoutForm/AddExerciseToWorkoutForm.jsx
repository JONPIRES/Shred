import React, { useState, useEffect } from "react";
import * as planAPI from "../../utilities/plan-api";
import * as exercisesAPI from "../../utilities/exercises-api";
import { useParams } from "react-router-dom";

function AddExerciseToWorkoutPlan() {
  const { id } = useParams();

  const [exercises, setExercises] = useState([]);

  const [exercise, setExercise] = useState({
    exercise: "",
    sets: "",
    reps: "",
    duration: "",
    notes: "",
  });

  function handleChange(e) {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
  }

  async function handleSubmit(e) {
    // Prevent form from being submitted to the server
    e.preventDefault();
    // window.location.replace(`/workout/${id}`);
    // try {
    //   // this still needs to be created
    //   await planAPI.addExercise(exercise, id);
    // } catch {
    //   setError("Create Exercise Failed - Try Again");
    // }
  }

  // this is for displaying the exercises as options in the select field in the form
  useEffect(() => {
    async function fetchExercises() {
      const exercises = await exercisesAPI.get();
      setExercises(exercises);
    }
    fetchExercises();
  }, []);

  return (
    <div>
      <h1> Add Exercise</h1>
      <br />
      <form onSubmit={handleSubmit}>
        <label className="form-label">Exercise</label>
        <select name="" id="">
          {exercises.map((exercise) => {
            return (
              <option value="exercise._id">
                {exercise.name}/{exercise.muscleGroup}
              </option>
            );
          })}
        </select>
        <label className="form-label">Sets</label>
        <input
          type="text"
          name="exercise[0].sets"
          onChange={handleChange}
          required
          className="form-control"
        />
        <label className="form-label">Reps</label>
        <input
          type="text"
          name="exercise[0].reps"
          onChange={handleChange}
          required
          className="form-control"
        />
        <label className="form-label">Duration</label>
        <input
          type="text"
          name="exercise[0].duration"
          onChange={handleChange}
          required
          className="form-control"
        />
        <label className="form-label">Notes</label>
        <input
          type="text"
          name="exercise[0].notes"
          onChange={handleChange}
          required
          className="form-control"
        />
      </form>
    </div>
  );
}

export default AddExerciseToWorkoutPlan;
