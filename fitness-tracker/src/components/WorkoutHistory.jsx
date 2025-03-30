import { useState } from "react";

const WorkoutHistory = () => {
  const [workouts, setWorkouts] = useState([]);

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Workout History</h2>
      {workouts.length === 0 ? (
        <p className="text-gray-500">No workouts logged yet.</p>
      ) : (
        <ul className="space-y-2">
          {workouts.map((workout, index) => (
            <li key={index} className="p-4 border rounded">
              <p><strong>Exercise:</strong> {workout.exercise}</p>
              <p><strong>Sets:</strong> {workout.sets}, <strong>Reps:</strong> {workout.reps}</p>
              <p><strong>Weight:</strong> {workout.weight} kg</p>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default WorkoutHistory;
