import React, { useState, useEffect } from "react";
import * as exercisesAPI from "../../utilities/exercises-api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const ExerciseDetail = () => {
  const [exercise, setExercise] = useState({
    name: "",
    muscleGroup: "",
    equipments: "",
    img: "",
    explanation: "",
  });
  
  const { id } = useParams();

  console.log(id);
  useEffect(() => {
    async function fetchExercise() {
      const exercise = await exercisesAPI.detail(id);
      setExercise(exercise);
    }
    fetchExercise();
  }, []);
  console.log("this is the exercise: ", exercise);

  return <div className="container" style={{minHeight:"100vh", height:'auto'}}>
    <h1 className="text-center mt-3">{exercise.name}</h1>
    <h3 className="text-center mt-2">Muscle Group: {exercise.muscleGroup}</h3>

    <section className="row" >
      <img src={exercise.img} alt="" className="col-lg-6 img-fluid" />
      <div className="col-lg-6" style={{ marginTop: '5em' }}>
        <p >Equipment: {exercise.equipment}</p>
        <p>Explanation: {exercise.explanation}</p>
      </div>
    </section>
    <div className="container text-center d-flex justify-content-center align-items-center">
      <form method="POST"
      action={`/exercise/${id}?_method=DELETE`}>
        <button type="submit" className="btn btn-danger">DELETE</button>
      </form>
      <Link className="text-light link-underline-opacity-0 btn btn-primary " to='/update/${id}' style={{ marginTop: '1em', marginLeft:'2em'}}> UPDATE</Link>
    </div>
    </div>;

};

export default ExerciseDetail;
