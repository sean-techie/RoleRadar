const jobs = [
  {
    role: "Frontend Developer",
    company: "Google",
    location: "Remote",
  },
  {
    role: "Data Engineer",
    company: "Microsoft",
    location: "Cape Town",
  },
  {
    role: "AI Engineer",
    company: "OpenAI",
    location: "Remote",
  },
  {
    role: "Backend Developer",
    company: "Amazon",
    location: "Johannesburg",
  },
];

export default function RecentJobs() {
  return (
    <section className="px-8 py-16">
      <div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8">
        <h2 className="text-3xl font-bold text-white mb-8">
          Recent Job Listings
        </h2>

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