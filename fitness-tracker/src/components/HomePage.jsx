// src/pages/HomePage.jsx
import React from 'react';
import bgImage from '../assets/bg-fitness.jpg';

const HomePage = () => {
  return (
    <div
      className="min-h-screen bg-cover bg-center flex items-center justify-center"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="bg-black bg-opacity-60 p-10 rounded-2xl shadow-xl text-white text-center">
        <h1 className="text-4xl font-bold mb-4">Welcome to Your Fitness Tracker</h1>
        <p className="mb-6 text-lg">Start logging your workouts and track your progress like a pro 💪</p>
        <button className="px-6 py-3 bg-emerald-500 hover:bg-emerald-600 rounded-full text-white font-semibold shadow-md transition">
          Start Tracking
        </button>
      </div>
    </div>
  );
};

export default HomePage;
