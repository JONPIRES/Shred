import { useState } from "react";
import {BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import ExerciseFrom from "../../components/ExercisesPage/ExerciseForm";
import ViewExercises from "../../components/ViewExercises/ViewExercises";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import HomePage from "../HomePage/HomePage";
import Footer from "../../components/Footer/Footer";
import ExerciseDetail from "../../components/ViewExercises/ExerciseDetail";
import UpdateExercise from "../../components/ViewExercises/UpdateExercise";
import CreateWorkoutPlan from "../../components/CreateWorkoutPlan/CreateWorkoutPlan";
import ViewWorkoutPlan from "../../components/ViewWorkoutPlan/ViewWorkoutPlan";
import AddExerciseToWorkoutPlan from "../../components/addExerciseToWorkoutForm/AddExerciseToWorkoutForm";



export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      <>
        <NavBar user={user} setUser={setUser} />
        <Routes>
          {/* Route components in here */}
          <Route path="/create-exercise" element={<ExerciseFrom />} />
          <Route path="/exercise" element={<ViewExercises />} />
          <Route path="/workout" element={<ViewWorkoutPlan/>} />
          <Route path="/exercise/:id" element={<ExerciseDetail />} />
          <Route path="/update/:id" element={<UpdateExercise />} />
          <Route path="/workout/create" element={<CreateWorkoutPlan />}></Route>
          <Route path="/signup" element={<SignUpForm />} />
          <Route path="/login" element={<LoginForm setUser={setUser} />} />
          <Route path="/" element={<HomePage />} />
          <Route path="/workout/:id/add-exercise" element={<AddExerciseToWorkoutPlan/>}></Route>
        </Routes>
        <Footer />
      </>
    </main>
  );
}
