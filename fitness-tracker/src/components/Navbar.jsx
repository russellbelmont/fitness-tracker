// src/components/Navbar.jsx
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="bg-gray-800 p-4 text-white flex justify-between">
      <h1 className="text-xl font-bold">Fitness Tracker</h1>
      <div className="space-x-4">
        <Link to="/" className="hover:text-gray-400">Home</Link>
        <Link to="/log" className="hover:text-gray-400">Log Workout</Link>
        <Link to="/history" className="hover:text-gray-400">History</Link>
      </div>
    </nav>
  );
};

export default Navbar;
