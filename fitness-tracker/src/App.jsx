import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import WorkoutLog from "./pages/WorkoutLog";
import WorkoutHistory from "./pages/WorkoutHistory";
import ExerciseInfo from "./pages/ExerciseInfo";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/log-workout" element={<WorkoutLog />} />
        <Route path="/history" element={<WorkoutHistory />} />
        <Route path="/exercise-info" element={<ExerciseInfo />} />
      </Routes>
    </Router>
  );
};

export default App;

