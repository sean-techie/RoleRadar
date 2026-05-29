export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6 hidden lg:block">
      <h1 className="text-3xl font-bold text-white mb-12">
        RoleRadar
      </h1>

      <nav className="flex flex-col gap-6 text-gray-400">
        <a href="#" className="hover:text-white transition">
          Dashboard
        </a>

        <a href="#" className="hover:text-white transition">
          Skills
        </a>

        <a href="#" className="hover:text-white transition">
          Trends
        </a>

        <a href="#" className="hover:text-white transition">
          Jobs
        </a>

        <a href="#" className="hover:text-white transition">
          Analytics
        </a>
      </nav>
    </aside>
  );
}