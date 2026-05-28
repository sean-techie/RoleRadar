import Navbar from "@/components/Navbar";
import Sidebar from "@/components/Sidebar";
import SkillsChart from "@/components/SkillsChart";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">
      <Navbar />

      <div className="flex">
        <Sidebar />

        <section className="flex-1 p-8 text-white">
          <h1 className="text-4xl font-bold mb-4">
            Job Market Dashboard
          </h1>

          <p className="text-gray-400 mb-8">
            Analyze job trends and in-demand skills.
          </p>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-zinc-900 p-6 rounded-2xl border border-gray-800">
              <h2 className="text-gray-400 mb-2">
                Total Jobs
              </h2>

              <p className="text-3xl font-bold">
                12,540
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-gray-800">
              <h2 className="text-gray-400 mb-2">
                Top Skill
              </h2>

              <p className="text-3xl font-bold">
                Python
              </p>
            </div>

            <div className="bg-zinc-900 p-6 rounded-2xl border border-gray-800">
              <h2 className="text-gray-400 mb-2">
                Remote Roles
              </h2>

              <p className="text-3xl font-bold">
                68%
              </p>
            </div>
          </div>

          <SkillsChart />
        </section>
      </div>
    </main>
  );
}