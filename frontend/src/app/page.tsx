import Sidebar from "@/components/Sidebar";
import Hero from "@/components/Hero";
import StatsCards from "@/components/StatsCards";
import SkillsChart from "@/components/SkillsChart";
import RecentJobs from "@/components/RecentJobs";
import JobsList from "@/components/JobsList";

export default function Home() {
  return (
    <main className="flex bg-black text-white">
      <Sidebar />

      <div className="flex-1">
        <Hero />
        <StatsCards />
        <SkillsChart />
        <RecentJobs />
        <JobsList />
      </div>
    </main>
  );
}