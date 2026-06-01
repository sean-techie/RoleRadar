"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { fetchJobs } from "@/services/api";

interface Job {
  role: string;
  company: string;
  location: string;
}

export default function JobsPage() {
  const [jobs, setJobs] = useState<Job[]>([]);
  const [search, setSearch] = useState("");

  useEffect(() => {
    async function loadJobs() {
      const data = await fetchJobs();
      setJobs(data);
    }

    loadJobs();
  }, []);

  const filteredJobs = jobs.filter((job) =>
    job.role.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-8">
        Explore Jobs
      </h1>

      <input
        type="text"
        placeholder="Search roles..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full max-w-xl p-4 rounded-xl bg-zinc-900 border border-zinc-800 mb-10"
      />

      <div className="space-y-6">
        {filteredJobs.map((job, index) => (
          <Link href={`/jobs/${index}`} key={index}>
            <div className="bg-zinc-900 border border-zinc-800 p-6 rounded-2xl hover:border-white transition cursor-pointer">
              <h2 className="text-2xl font-semibold">
                {job.role}
              </h2>

              <p className="text-gray-400 mt-2">
                {job.company}
              </p>

              <p className="text-gray-500 mt-1">
                {job.location}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}