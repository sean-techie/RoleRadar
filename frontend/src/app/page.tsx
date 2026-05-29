import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsCards from "@/components/StatsCards";
import SkillsChart from "@/components/SkillsChart";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-black via-zinc-950 to-black">
      <Navbar />
      <Hero />
      <StatsCards />
      <SkillsChart />
    </main>
  );
}