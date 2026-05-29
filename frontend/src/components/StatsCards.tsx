export default function StatsCards() {
  const stats = [
    {
      title: "Jobs Analyzed",
      value: "12,450",
    },
    {
      title: "Top Skill",
      value: "Python",
    },
    {
      title: "Remote Jobs",
      value: "68%",
    },
    {
      title: "Trending Role",
      value: "Data Engineer",
    },
  ];

  return (
    <section className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 px-8 py-16">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-zinc-900/80 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-white/20 transition duration-300 hover:-translate-y-1"
        >
          <p className="text-gray-400 mb-2">
            {stat.title}
          </p>

          <h2 className="text-3xl font-bold text-white">
            {stat.value}
          </h2>
        </div>
      ))}
    </section>
  );
}