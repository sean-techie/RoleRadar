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
  { skill: "Python", demand: 95 },
  { skill: "SQL", demand: 88 },
  { skill: "React", demand: 80 },
  { skill: "AWS", demand: 76 },
  { skill: "Docker", demand: 65 },
];

export default function SkillsChart() {
  return (
    <section className="px-8 py-16">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-white mb-8">
          Top In-Demand Skills
        </h2>

        <div className="h-[400px]">
          <ResponsiveContainer width="100%" height="100%">
            <BarChart data={data}>
              <XAxis dataKey="skill" />
              <YAxis />
              <Tooltip />
              <Bar dataKey="demand" radius={[10, 10, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </section>
  );
}