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
    try {
      const createPlan = await planAPI.create(plan);
      const newId = createPlan._id;
      setPlanID(newId);
      window.location.replace(`/workout/${newId}`);
    } catch (err) {
      console.log(err);
      setError("Create Plan Failed - Try Again");
    }
  }

  return (
    <div
      className="edit-workout-plan fade-down"
      style={{ minHeight: "100vh", height: "auto" }}>
      <div className="container container-fluid d-flex flex-column justify-content-center align-items-center mt-2">
        <h1 className="mt-3 text-center">Create Workout Plan</h1>
        <form
          autoComplete="off"
          onSubmit={handleSubmit}
          style={{
            width: "25em",
            border: "solid black 3px",
            borderRadius: "1.5em",
          }}
          className="p-4">
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

          <button type="submit" className="btn btn-dark mt-2 btn-pulse">
            Create Workout Plan
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateWorkoutPlan;
