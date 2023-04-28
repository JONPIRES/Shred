import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import * as usersAPI from "../../utilities/users-api";

const ExerciseCard = ({ img, name, muscle, equipment, id, user }) => {
  const [creator, setCreator] = useState();

  useEffect(() => {
    async function fetchCreator() {
      const exUser = await usersAPI.get(user);
      setCreator(exUser);
    }
    fetchCreator();
  }, []);

  return (
    <div className="col-lg-4 col-md-6 mb-4">
      <div
        className="card container container-fluid"
        style={{ height: "35em" }}>
        <div className="text-center">
          <img
            src={img}
            alt="exercise img"
            className="card-img-top img-fluid"
            style={{ height: `20em`, width: `20em` }}
          />
        </div>
        <div className="card-body">
          <h2 className="card-title text-center">{name}</h2>
          <p className="card-text">Muscle Group: {muscle}</p>
          <p className="card-text">Equipment: {equipment}</p>
          <p> By: {creator && creator.name}</p>
          <div className="text-center">
            <Link to={`/exercise/${id}`} className="btn btn-primary p-2">
              View Exercise
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
