// src/components/ProgressChart.jsx
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from "recharts";

const ProgressChart = ({ workouts }) => {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart data={workouts}>
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Line type="monotone" dataKey="weight" stroke="#8884d8" />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default ProgressChart;
