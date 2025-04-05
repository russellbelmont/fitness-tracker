// src/components/WorkoutList.jsx
const WorkoutList = ({ workouts }) => {
    return (
      <div className="mt-4">
        {workouts.length === 0 ? (
          <p className="text-gray-400">No workouts logged yet.</p>
        ) : (
          workouts.map((workout, index) => (
            <div key={index} className="bg-gray-800 p-3 rounded-lg mb-2">
              <h3 className="text-white font-bold">{workout.exercise}</h3>
              <p className="text-gray-300">{workout.sets} sets × {workout.reps} reps @ {workout.weight}kg</p>
              <small className="text-gray-500">{new Date(workout.date).toLocaleDateString()}</small>
            </div>
          ))
        )}
      </div>
    );
  };
  
  export default WorkoutList;
  