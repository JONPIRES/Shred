import React, { useState } from "react";
import * as planAPI from "../../utilities/plan-api";
import { Link, useParams } from "react-router-dom";

const WorkoutExerciseCard = ({ exercise, allExercises }) => {
  const { id } = useParams();

  const [newNote, setNewNote] = useState("");

  let index = allExercises.indexOf(exercise);

  function handleChange(e) {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  }

  async function handleNoteSubmit(e) {
    e.preventDefault();
    window.location.replace(`workout/${id}`);
    try {
      await planAPI.updateNotes(id, index);
    } catch (err) {
      console.log(err);
    }
  }

  //   need to fininsh the path for this function

  async function handleDeleteSubmit(e) {
    // e.preventDefault();
    // window.location.replace(`workout/${id}`);
    // try {
    //   await planAPI.updateNotes(id, index);
    // } catch (err) {
    //   console.log(err);
    // }
  }

  return (
    <>
      <Link to={`/exercise/${exercise.exercise}`}>
        <h1>{exercise.name}</h1>
      </Link>
      <h1>{exercise.muscleGroup}</h1>
      <h1>{exercise.sets}</h1>
      <h1>{exercise.reps}</h1>
      <h1>{exercise.notes}</h1>
      {exercise.duration ? <h1>{exercise.duration}</h1> : null}
      <form onSubmit={handleDeleteSubmit}>
        <button type="submit" className="btn btn-danger p-2">
          DELETE
        </button>
      </form>
      <form onSubmit={handleNoteSubmit}>
        <label htmlFor="">Log New Weight</label>
        <input onChange={handleChange} type="text" name="notes" />
      </form>
    </>
  );
};

export default WorkoutExerciseCard;
