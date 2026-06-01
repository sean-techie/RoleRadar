import SkillsChart from "@/components/SkillsChart";

export default function SkillsPage() {
  return (
    <main className="min-h-screen bg-black text-white p-10">
      <h1 className="text-5xl font-bold mb-10">
        Skills Analytics
      </h1>

      <SkillsChart />
    </main>
  );
}