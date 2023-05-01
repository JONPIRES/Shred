import React, { useState, useEffect } from "react";
import * as planAPI from "../../utilities/plan-api";
import { Link, useParams } from "react-router-dom";
import ExerciseNotes from "./ExerciseNotes";

const WorkoutExerciseCard = ({ exercise, allExercises }) => {
  const { id } = useParams();

  const [newNote, setNewNote] = useState({
    notes: "",
  });
  const [allNotes, setAllNotes] = useState([exercise.notes]);

  const [trigger, setTrigger] = useState("");

  let index = allExercises.indexOf(exercise);

  function handleChange(e) {
    setNewNote({ ...newNote, [e.target.name]: e.target.value });
  }

  async function handleNoteSubmit(e) {
    e.preventDefault();
    window.location.replace(`/workout/${id}`);
    try {
      let createdNote = await planAPI.addNote(id, newNote, index);
      setAllNotes([...allNotes, createdNote]);
      console.log(allNotes);
    } catch (err) {
      console.log(err);
    }
  }

  //   need to fininsh the path for this function

  async function handleDeleteSubmit(e) {
    e.preventDefault();
    window.location.replace(`/workout/${id}`);
    try {
      await planAPI.deleteExercise(id, index);
      setTrigger("triggered");
    } catch (err) {
      console.log(err);
    }
  }

  return (
    <>
      <Link to={`/exercise/${exercise.exercise}`}>
        <h1>{exercise.name}</h1>
      </Link>
      <h1>Muscle Group: {exercise.muscleGroup}</h1>
      <h1>Sets: {exercise.sets}</h1>
      <h1>Reps: {exercise.reps}</h1>
      <br />
      <h1>Weight Log</h1>
      <ul>
        {exercise.notes.map((note, idx) => {
          return <ExerciseNotes key={note + idx} note={note} />;
        })}
      </ul>
      {exercise.duration ? <h1>{exercise.duration}</h1> : null}
      <form onSubmit={handleDeleteSubmit}>
        <button type="submit" className="btn btn-danger p-2">
          DELETE
        </button>
      </form>
      <form onSubmit={handleNoteSubmit}>
        <label htmlFor="">New Weight</label>
        <input onChange={handleChange} type="text" name="notes" />
        <button type="submit" className="btn btn-dark m-1 p-2">
          Log
        </button>
      </form>
    </>
  );
};

export default WorkoutExerciseCard;
