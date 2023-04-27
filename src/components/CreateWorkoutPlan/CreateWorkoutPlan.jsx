import React, { useState, useEffect } from "react";
import * as exercisesAPI from "../../utilities/exercises-api";

function CreateWorkoutPlan() {
  async function handleSubmit(e) {
    e.prevent.default();
  }

  async function handleChange(e) {}

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
          />
          <label className="form-label">Goals:</label>
          <input
            type="text"
            name="muscleGroup"
            onChange={handleChange}
            required
            className="form-control"
          />
          <label className="form-label">Cycle:</label>
          <input
            type="number"
            name="equipment"
            onChange={handleChange}
            required
            className="form-control"
          />

          <button type="submit" className="btn btn-dark mt-2">
            Create Workout Plan{" "}
          </button>
        </form>
      </div>
    </div>
  );
}

export default CreateWorkoutPlan;
