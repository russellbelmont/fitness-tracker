import { useState } from "react";

const WorkoutLog = () => {
  const [workout, setWorkout] = useState({
    exercise: "",
    sets: "",
    reps: "",
    weight: "",
  });

  const handleChange = (e) => {
    setWorkout({ ...workout, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Workout Logged:", workout);
    // Save to local storage or state management
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Log Workout</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="exercise"
          placeholder="Exercise Name"
          value={workout.exercise}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          name="sets"
          placeholder="Sets"
          value={workout.sets}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          name="reps"
          placeholder="Reps"
          value={workout.reps}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <input
          type="number"
          name="weight"
          placeholder="Weight (kg)"
          value={workout.weight}
          onChange={handleChange}
          className="w-full px-4 py-2 border rounded"
        />
        <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">
          Save Workout
        </button>
      </form>
    </div>
  );
};

export default WorkoutLog;
