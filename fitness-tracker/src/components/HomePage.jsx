import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 text-gray-900">
      <h1 className="text-4xl font-bold mb-4">Fitness Tracker</h1>
      <p className="text-lg text-gray-600">Track your workouts and monitor your progress.</p>
      <Link to="/log-workout" className="mt-6 px-6 py-3 bg-blue-500 text-white rounded-lg">
        Start Tracking
      </Link>
    </div>
  );
};

export default HomePage;
