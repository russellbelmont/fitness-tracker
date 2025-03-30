import { useState } from "react";

const ExerciseInfo = () => {
  const [exercise, setExercise] = useState(null);
  const [query, setQuery] = useState("");

  const fetchExercise = async () => {
    try {
      const response = await fetch(`https://wger.de/api/v2/exercise/?name=${query}`);
      const data = await response.json();
      setExercise(data.results[0]); // Assuming first result is relevant
    } catch (error) {
      console.error("Error fetching exercise:", error);
    }
  };

  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Exercise Info</h2>
      <div className="flex gap-2">
        <input
          type="text"
          placeholder="Search Exercise..."
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          className="w-full px-4 py-2 border rounded"
        />
        <button onClick={fetchExercise} className="bg-blue-500 text-white px-4 py-2 rounded">
          Search
        </button>
      </div>

      {exercise && (
        <div className="mt-6">
          <h3 className="text-xl font-bold">{exercise.name}</h3>
          <p>{exercise.description}</p>
        </div>
      )}
    </div>
  );
};

export default ExerciseInfo;
