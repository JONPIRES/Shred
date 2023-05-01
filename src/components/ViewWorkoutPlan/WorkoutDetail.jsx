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
        <div className="col-lg-2 bg-primary d-flex justify-content-center align-items-center flex-column">
          <div className="text-center mt-3">
            {plans.map((plan, idx) => {
              return (
                <Link
                  key={plan + idx}
                  to={`/workout/${plan._id}`}
                  className="link-offset-2 link-offset-3-hover m-1
                        link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover text-light">
                  {plan.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-lg-9 container">
          <div className="text-center mt-5 ">
            <h1>{planDetail && planDetail.name}</h1>
            <h1>{planDetail && planDetail.goals}</h1>
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
          <div className="">
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
  );
};

export default WorkoutDetail;
