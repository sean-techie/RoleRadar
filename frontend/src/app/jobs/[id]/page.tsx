"use client";

import { useEffect, useState } from "react";
import { useParams } from "next/navigation";
import { fetchJobs } from "@/services/api";

interface Job {
  role: string;
  company: string;
  location: string;
  apply_link: string;
}

export default function JobDetailsPage() {
  const params = useParams();

  const [job, setJob] = useState<Job | null>(null);
  const [saved, setSaved] = useState(false);

  useEffect(() => {
    async function loadJob() {
      const jobs = await fetchJobs();

      const selectedJob = jobs[Number(params.id)];

      setJob(selectedJob);
    }

    loadJob();
  }, [params]);

  function saveJob() {
    if (!job) return;

    const savedJobs = JSON.parse(
      localStorage.getItem("savedJobs") || "[]"
    );

    savedJobs.push(job);

    localStorage.setItem(
      "savedJobs",
      JSON.stringify(savedJobs)
    );

    setSaved(true);
  }

  if (!job) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        <h1 className="text-3xl">Loading job...</h1>
      </main>
    );
  }

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold">
        {job.role}
      </h1>

      <p className="text-2xl text-gray-400 mt-4">
        {job.company}
      </p>

      <p className="text-xl text-gray-500 mt-2">
        {job.location}
      </p>

      <a
        href={job.apply_link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <button className="mt-10 bg-white text-black px-8 py-4 rounded-xl font-semibold hover:opacity-80 transition">
          Apply Now
        </button>
      </a>

      <div>
        <button
          onClick={saveJob}
          className="mt-4 border border-white px-8 py-4 rounded-xl font-semibold hover:bg-white hover:text-black transition"
        >
          {saved ? "Saved ✓" : "Save Job"}
        </button>
      </div>
    </main>
  );
}