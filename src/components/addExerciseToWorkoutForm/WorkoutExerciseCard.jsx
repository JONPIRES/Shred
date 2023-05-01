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
    <div className="col-lg-4 col-sm-12 col-md-6 mb-4">
      <div className="card p-2 " style={{width:'19em'}} >

        <Link to={`/exercise/${exercise.exercise}`} className="link-offset-2 link-offset-3-hover m-1
                    link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover text-info">
          <h3 className="text-center my-3 ">{exercise.name}</h3>
        </Link>
        <h4 className="text-center">Muscle Group: {exercise.muscleGroup}</h4>

        <h5 className="text-center">Sets: {exercise.sets}</h5>
        <h5 className="text-center">Reps: {exercise.reps}</h5>
        <br />
        <div className="mx-3 ">
          <h4 className="text-center">Weight Log</h4>
          <ul className="list-group">
            {exercise.notes.map((note, idx) => {
              return <ExerciseNotes key={note + idx} note={note} />;
            })}
          </ul>

        </div>
        {exercise.duration ? <h4 className="m-3 text-center">{exercise.duration} minutes</h4> : null}
        <form onSubmit={handleNoteSubmit} className="form-control my-2">
          <label className="form-label">New Weight</label>
          <input onChange={handleChange} type="text" name="notes" className="form-control" />
          <div className="text-center"><button type="submit" className="btn btn-dark m-1 p-2">
            Log
          </button></div>

        </form>
        <form onSubmit={handleDeleteSubmit} className="text-center m-2">
          <button  type="submit" className="btn btn-danger p-2">
            DELETE
          </button>
        </form>
      </div>
    </div>
  );
};

export default WorkoutExerciseCard;
