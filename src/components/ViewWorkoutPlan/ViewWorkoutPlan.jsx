import React, { useState, useEffect } from "react";
import * as planAPI from "../../utilities/plan-api";
import * as exercisesAPI from "../../utilities/exercises-api";
import { Link } from "react-router-dom";

function ViewWorkoutPlan({ user }) {
  const [plan, setPlans] = useState([]);

  async function fetchPlan() {
    if (user) {
      const plans = await planAPI.get();
      setPlans(plans);
    }
  }
  useEffect(() => {
    fetchPlan();
  }, []);
  return (
    <div className="" style={{ minHeight: "100vh", height: "auto" }}>
      <div
        className="row  container-fluid"
        style={{ minHeight: "100vh", height: "auto" }}>
        <div
          className="col-2 d-flex justify-content-center align-items-center flex-column"
          style={{ backgroundColor: "#243a4f", minHeight: "100vh", height: "auto" }}>
          <div className="text-center mt-3 d-flex flex-column">
            {plan.map((plan, idx) =>
              user._id === plan.user ? (
                <Link
                  key={plan + idx}
                  to={`/workout/${plan._id}`}
                  className="link-offset-2 link-offset-3-hover m-1
                    link-underline-light link-underline-opacity-0 link-underline-opacity-75-hover text-light">
                  {plan.name}
                </Link>
              ) : null
            )}
          </div>
        </div>
        <div className="col-9 container">
          <div className="">{/* Include a sample workout here */}</div>
        </div>
      </div>
    </div>
  );
}

export default ViewWorkoutPlan;
