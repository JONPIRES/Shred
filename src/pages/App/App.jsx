import { useState } from "react";
import { Routes, Route } from "react-router-dom";
// import "./App.css";
import AuthPage from "../AuthPage/AuthPage";
import ExerciseFrom from "../../components/ExercisesPage/ExerciseForm";
import ViewExercise from "../../components/ViewExercises/ViewExercises";
import ViewWorkoutPlan from "../../components/ViewWorkoutPlan/ViewWorkoutPlan";
import NavBar from "../../components/NavBar/NavBar";
import { getUser } from "../../utilities/users-service";
import LoginForm from "../../components/LoginForm/LoginForm";
import SignUpForm from "../../components/SignUpForm/SignUpForm";
import HomePage from "../HomePage";

export default function App() {
  const [user, setUser] = useState(getUser());

  return (
    <main className="App">
      {user ? (
        <>
          <NavBar user={user} setUser={setUser} />
          <Routes>
            {/* Route components in here */}
            <Route path="/create-exercise" element={<ExerciseFrom />} />
            <Route path="/exercise" element={<ViewExercise />} />
            <Route path="/workout" element={<ViewWorkoutPlan />} />
            <Route path="/" element={<HomePage />} />
            
            
          </Routes>
        </>
      ) : (
        <>
          <Routes>
              <Route path="/signup" element={<SignUpForm />} />
          </Routes>
          
            <LoginForm setUser={setUser} />
        </>
        
      )}
    </main>
  );
}
