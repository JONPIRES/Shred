import React, { useState, useEffect } from "react";
import * as planAPI from "../../utilities/plan-api";
import * as exercisesAPI from "../../utilities/exercises-api";
import { Link } from "react-router-dom";

function ViewWorkoutPlan() {
  const [plan, setPlans] = useState([]);

  useEffect(() => {
    async function fetchPlan() {
      const plans = await planAPI.get();
      setPlans(plans);
    }
    fetchPlan();
  }, []);
  return (
    <div className="" style={{ minHeight: "100vh", height: "auto" }}>
      <div
        className="row  container-fluid"
        style={{ minHeight: "100vh", height: "auto" }}>
        <div className="col-lg-2 bg-primary d-flex justify-content-center align-items-center flex-column">
          <div className="text-center mt-3">
            {plan.map((plan, idx) => {
              return (
                <Link
                  key={plan + idx}
                  to={`/workout/${plan._id}`}
                  className="link-offset-2 link-offset-3-hover
                    link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover text-light">
                  {plan.name}
                </Link>
              );
            })}
          </div>
        </div>
        <div className="col-lg-9 container">
          <div className="text-center mt-5 ">
            <h1>Name Of Workout</h1>
            <hr />
          </div>
          <div className="">{/* Include a sample workout here */}</div>
        </div>
      </div>
    </div>
  );
}

export default ViewWorkoutPlan;
