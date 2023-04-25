import React from "react";
import { Link } from "react-router-dom";

const ExerciseCard = ({ key, img, name, muscle, equipment, id }) => {
  return (
    <div className="col-lg-4 mb-4">
      <div className="card">
        <div className="text-center">
          <img
            src={img}
            alt="exercise img"
            className="card-img-top"
            style={{ height: `25em`, width: `25em` }}
          />
        </div>
        <div className="card-body">
          <h2 className="card-title text-center">{name}</h2>
          <p className="card-text">Muscle Group: {muscle}</p>
          <p className="card-text">Equipment: {equipment}</p>
          <Link to={`/exercise/${id}`} className="btn btn-primary">
            View Exercise
          </Link>
        </div>
      </div>
    </div>
  );
};

export default ExerciseCard;
