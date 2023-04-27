import React, { useState, useEffect, useParams } from "react";
import * as exercisesAPI from "../../utilities/exercises-api";

function AddExerciseToWorkoutPlan() {
  const [exercises, setExercises] = useState([]);

  const [exercise, setExercise] = useState({
    exercise: "",
    sets: "",
    reps: "",
    duration: "",
    notes: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
    setError("");
  }

  // async function handleSubmit(e) {
  //     // Prevent form from being submitted to the server
  //     e.preventDefault();
  //     window.location.replace("/exercise");
  //     try {
  //         // this still needs to be created
  //         await ExerciseService.create(exercise);

  //         //   setExercise(newExercise);
  //     } catch {
  //         setError("Create Exercise Failed - Try Again");
  //     }
  // }

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
      <form>
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
