"use client";

import { useEffect, useState } from "react";

interface Job {
  role: string;
  company: string;
  location: string;
  apply_link: string;
}

export default function SavedJobsPage() {
  const [savedJobs, setSavedJobs] = useState<Job[]>([]);

  useEffect(() => {
    const jobs = JSON.parse(
      localStorage.getItem("savedJobs") || "[]"
    );

    setSavedJobs(jobs);
  }, []);

  function removeJob(indexToRemove: number) {
    const updatedJobs = savedJobs.filter(
      (_, index) => index !== indexToRemove
    );

    setSavedJobs(updatedJobs);

    localStorage.setItem(
      "savedJobs",
      JSON.stringify(updatedJobs)
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Saved Jobs
      </h1>

      {savedJobs.length === 0 ? (
        <p className="text-gray-400">
          No saved jobs yet.
        </p>
      ) : (
        <div className="space-y-6">
          {savedJobs.map((job, index) => (
            <div
              key={index}
              className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl"
            >
              <h2 className="text-2xl font-semibold">
                {job.role}
              </h2>

              <p className="text-gray-400 mt-2">
                {job.company}
              </p>

              <p className="text-gray-500 mt-1">
                {job.location}
              </p>

              <div className="flex gap-4 mt-6">
                <a
                  href={job.apply_link}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <button className="bg-white text-black px-6 py-3 rounded-xl font-semibold hover:opacity-80 transition">
                    Apply
                  </button>
                </a>

                <button
                  onClick={() => removeJob(index)}
                  className="border border-red-500 text-red-500 px-6 py-3 rounded-xl font-semibold hover:bg-red-500 hover:text-white transition"
                >
                  Remove
                </button>
              </div>
            </div>
          ))}
        </div>
      )}
    </main>
  );
}