import React, { useState } from "react";
import * as planAPI from "../../utilities/plan-api";

function CreateWorkoutPlan({ user }) {
  const [plan, setPlan] = useState({
    user: user._id,
    name: "",
    goals: "",
  });
  const [error, setError] = useState("");

  const [planId, setPlanID] = useState("");

  function handleChange(e) {
    setPlan({ ...plan, [e.target.name]: e.target.value });
    setError("");
  }

  async function handleSubmit(e) {
    e.preventDefault();
    if (planId) {
      window.location.replace(`/workout/${planId}`);
    }
    try {
      const createPlan = await planAPI.create(plan);
      setPlanID(createPlan._id);
      // This console.log is helping to trigger the redirect
      console.log(planId);
    } catch (err) {
      console.log(err);
      setError("Create Plan Failed - Try Again");
    }
  }

  return (
    <div
      className="edit-workout-plan"
      style={{ minHeight: "100vh", height: "auto" }}>
      <div className="container container-fluid">
        <h1 className="mt-3 text-center">Create Workout Plan</h1>
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label className="form-label">Name:</label>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            required
            className="form-control"
            style={{ textTransform: "capitalize" }}
          />
          <label className="form-label">Goals:</label>
          <input
            type="text"
            name="goals"
            onChange={handleChange}
            required
            className="form-control"
            style={{ textTransform: "capitalize" }}
          />

          <button type="submit" className="btn btn-dark mt-2">
            Create Workout Plan
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateWorkoutPlan;
