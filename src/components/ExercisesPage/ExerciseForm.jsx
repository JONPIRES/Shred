import { useState } from "react";
import React from "react";

const ExerciseForm = () => {
  const [exercise, setExercise] = useState({
    name: "",
    muscleGroup: "",
    equipment: "",
    img: "",
    explanation: "",
  });

  const [error, setError] = useState("");

  function handleChange(e) {
    setExercise({ ...exercise, [e.target.name]: e.target.value });
    setError("");
  }

  async function handleSubmit(e) {
    // Prevent form from being submitted to the server
    e.preventDefault();
    try {
      const exercise = await ExerciseService.create(exercise);
      setUser(user);
    } catch {
      setError("Log In Failed - Try Again");
    }
  }

  return (
    <div>
      <div className="form-container">
        <form autoComplete="off" onSubmit={handleSubmit}>
          <label>name</label>
          <input
            type="text"
            name="name"
            value={credentials.email}
            onChange={handleChange}
            required
          />
          <label>Password</label>
          <input
            type="password"
            name="password"
            value={credentials.password}
            onChange={handleChange}
            required
          />
          <button type="submit">LOG IN</button>
        </form>
      </div>
      <p className="error-message">&nbsp;{error}</p>
    </div>
  );
};

export default ExerciseForm;
