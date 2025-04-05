// src/App.jsx
import { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import WorkoutForm from "./components/WorkoutForm";
import WorkoutList from "./components/WorkoutList";
import ProgressChart from "./components/ProgressChart";

const App = () => {
  const [workouts, setWorkouts] = useState([]);

  const addWorkout = (workout) => {
    setWorkouts([...workouts, workout]);
  };

  return (
    <Router>
      <div className="bg-gray-900 min-h-screen text-white">
        <Navbar />
        <div className="p-4">
          <Routes>
            <Route path="/" element={<h1>Welcome to Fitness Tracker</h1>} />
            <Route path="/log" element={<WorkoutForm onAddWorkout={addWorkout} />} />
            <Route path="/history" element={<WorkoutList workouts={workouts} />} />
          </Routes>
          <ProgressChart workouts={workouts} />
        </div>
      </div>
    </Router>
  );
};

export default App;
