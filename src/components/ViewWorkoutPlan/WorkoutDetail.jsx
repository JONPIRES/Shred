import React, { useState, useEffect } from "react";
import * as planAPI from "../../utilities/plan-api";
import { Link, useParams } from "react-router-dom";
import WorkoutExerciseCard from "../addExerciseToWorkoutForm/WorkoutExerciseCard";

const WorkoutDetail = ({ user }) => {
  const { id } = useParams();

  //   Still need to import the details for the workout coming in the params by accessing the detail function in the planAPI
  const [plans, setPlan] = useState([]);

  const [planDetail, setPlanDetail] = useState("");

  async function fetchDetail() {
    if (user) {
      const plan = await planAPI.detail(id);
      setPlanDetail(plan);
    }
  }
  async function fetchPlan() {
    const plans = await planAPI.get();
    setPlan(plans);
  }

  useEffect(() => {
    fetchDetail();
  }, [id]);

  useEffect(() => {
    fetchPlan();
  }, []);

  return (
    <div className="" style={{ minHeight: "100vh", height: "auto" }}>
      <div
        className="row  container-fluid"
        style={{ minHeight: "100vh", height: "auto" }}>
        <div className="col-2 d-flex justify-content-center align-items-center" style={{ backgroundColor: "#243a4f", minHeight: "100vh", height: "auto" }}>
          <div className="text-center d-flex flex-column">
            {plans.map((plan, idx) => {
              return (
                <Link
                  key={plan + idx}
                  to={`/workout/${plan._id}`}
                  className=" fs-2 link-offset-2 link-offset-3-hover m-1
                        link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover text-light">
                  {plan.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-10 container container-fluid">
          <div className="text-center mt-5 ">
            <h1>{planDetail && planDetail.name}</h1>
            <h4>Goals: {planDetail && planDetail.goals}</h4>
            <hr />
          </div>
          <div className="text-center">
            <Link
              to={`/workout/${id}/add-exercise`}
              className="text-center link-offset-2 link-offset-2-hover
                link-underline-dark link-underline-opacity-0 link-underline-opacity-75-hover text-dark">
              Add exercise
            </Link>
          </div>
          <div className="d-flex justify-content-center">
          <div className="row ">
            {planDetail &&
              planDetail.exercise.map((exercise, idx) => {
                return (
                  <WorkoutExerciseCard
                    allExercises={planDetail.exercise}
                    exercise={exercise}
                    key={exercise + idx}
                  />
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </div>

  );
};

export default WorkoutDetail;
