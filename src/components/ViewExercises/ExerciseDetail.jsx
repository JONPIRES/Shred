import React, { useState, useEffect } from "react";
import * as exercisesAPI from "../../utilities/exercises-api";
import { Link } from "react-router-dom";
import { useParams } from "react-router-dom";
import * as usersAPI from "../../utilities/users-api";

const ExerciseDetail = ({ user }) => {
  const [exercise, setExercise] = useState({
    name: "",
    muscleGroup: "",
    equipments: "",
    img: "",
    explanation: "",
    user: "",
  });

  const { id } = useParams();

  async function handleSubmit(e) {
    e.preventDefault();
    window.location.replace("/exercise");
    try {
      await exercisesAPI.deleteExercise(id);
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    async function fetchExercise() {
      const exercise = await exercisesAPI.detail(id);
      setExercise(exercise);
    }
    fetchExercise();
  }, []);

  const [creator, setCreator] = useState({
    name: "",
  });

  useEffect(() => {
    async function fetchCreator() {
      const exUser = await usersAPI.get(exercise.user);
      setCreator(exUser);
    }
    fetchCreator();
  }, []);

  return (
    <div
      className="container container-fluid"
      style={{ minHeight: "100vh", height: "auto" }}>
      <h1 className="text-center mt-3">{exercise.name}</h1>
      <h3 className="text-center mt-2">Muscle Group: {exercise.muscleGroup}</h3>

      <section className="row d-flex justify-content-center align-items-center">
        <img
          src={exercise.img}
          alt=""
          className="col-lg-6 img-fluid container container-fluid"
          style={{ height: "25em", width: "25em" }}
        />

        <div
          className="col-lg-6 d-flex flex-column justify-content-center container container-fluid"
          style={{
            borderLeft: "solid black 1px",
            height: "15em",
            paddingLeft: "1.5em",
          }}>
          <p>
            {" "}
            <strong>Equipment: </strong> &nbsp; <br /> {exercise.equipment}/
          </p>
          <hr />
          <p>
            <strong>Explanation:</strong> &nbsp; <br />
            {exercise.explanation}
          </p>
        </div>
      </section>

      {user.name && creator.name ? (
        <div className="container text-center d-flex justify-content-center align-items-center">
          <form onSubmit={handleSubmit}>
            <button type="submit" className="btn btn-danger p-2">
              DELETE
            </button>
          </form>

          <Link
            className="text-light link-underline-opacity-0 btn btn-primary p-2"
            to={`/update/${id}`}
            style={{ marginTop: "1em", marginLeft: "2em" }}>
            {" "}
            UPDATE
          </Link>
        </div>
      ) : (
        <p>anuthing</p>
      )}
    </div>
  );
};

export default ExerciseDetail;
