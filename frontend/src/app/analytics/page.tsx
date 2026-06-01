import StatsCards from "@/components/StatsCards";
import SkillsChart from "@/components/SkillsChart";

export default function AnalyticsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Analytics Dashboard
      </h1>

      <StatsCards />
      <div className="mt-10">
        <SkillsChart />
      </div>
    </main>
  );
}