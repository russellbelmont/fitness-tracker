// src/components/ExerciseCard.jsx
const ExerciseCard = ({ exercise }) => {
    return (
      <div className="bg-gray-700 p-4 rounded-lg">
        <h2 className="text-white font-bold">{exercise.name}</h2>
        <p className="text-gray-300">{exercise.description}</p>
        {exercise.image && <img src={exercise.image} alt={exercise.name} className="w-full mt-2" />}
      </div>
    );
  };
  
  export default ExerciseCard;
  