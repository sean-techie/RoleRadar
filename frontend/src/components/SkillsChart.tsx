"use client";

import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

const data = [
  { skill: "Python", jobs: 400 },
  { skill: "React", jobs: 300 },
  { skill: "SQL", jobs: 280 },
  { skill: "AWS", jobs: 200 },
  { skill: "Docker", jobs: 180 },
];

export default function SkillsChart() {
  return (
    <div className="bg-zinc-900 p-6 rounded-2xl border border-gray-800 mt-8">
      <h2 className="text-white text-xl font-semibold mb-6">
        Top Skills Demand
      </h2>

      <div className="w-full h-80">
        <ResponsiveContainer width="100%" height="100%">
          <BarChart data={data}>
            <XAxis dataKey="skill" />
            <YAxis />
            <Tooltip />

            <Bar dataKey="jobs" radius={[10, 10, 0, 0]} />
          </BarChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}