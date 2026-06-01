"use client";

import { useEffect, useState } from "react";
import { fetchJobs } from "@/services/api";

interface Job {
  role: string;
  company: string;
  location: string;
}

export default function JobDetailsPage({
  params,
}: {
  params: { id: string };
}) {
  const [job, setJob] = useState<Job | null>(null);

  useEffect(() => {
    async function loadJob() {
      const jobs = await fetchJobs();
      setJob(jobs[Number(params.id)]);
    }

    loadJob();
  }, [params.id]);

  if (!job) {
    return (
      <main className="min-h-screen bg-black text-white p-10">
        Loading...
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

      <div className="mt-10">
        <button className="bg-white text-black px-8 py-4 rounded-xl font-semibold hover:opacity-80 transition">
          Apply Now
        </button>
      </div>
    </main>
  );
}