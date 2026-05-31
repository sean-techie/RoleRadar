"use client";

import { useEffect, useState } from "react";
import { fetchJobs } from "@/services/api";

interface Job {
  role: string;
  company: string;
  location: string;
}

export default function JobsList() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    async function loadJobs() {
      try {
        const data = await fetchJobs();
        setJobs(data);
      } catch (err) {
        setError("Backend API not running");
      } finally {
        setLoading(false);
      }
    }

    loadJobs();
  }, []);

  return (
    <section className="px-8 py-16">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-white mb-8">
          Live Jobs API
        </h2>

        {loading && (
          <p className="text-gray-400 mb-4">
            Loading jobs...
          </p>
        )}

        {error && (
          <p className="text-red-500 mb-4">
            {error}
          </p>
        )}

        <div className="space-y-4">
          {jobs.map((job, index) => (
            <div
              key={index}
              className="flex items-center justify-between border-b border-zinc-800 pb-4"
            >
              <div>
                <h3 className="text-white font-semibold">
                  {job.role}
                </h3>

                <p className="text-gray-400">
                  {job.company}
                </p>
              </div>

              <p className="text-gray-500">
                {job.location}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}