export default function Sidebar() {
  return (
    <aside className="w-64 bg-zinc-950 border-r border-gray-800 min-h-screen p-6">
      <h2 className="text-white text-xl font-semibold mb-8">
        Analytics
      </h2>

      <div className="flex flex-col gap-4 text-gray-400">
        <button className="text-left hover:text-white">
          Overview
        </button>

        <button className="text-left hover:text-white">
          Top Skills
        </button>

        <button className="text-left hover:text-white">
          Locations
        </button>

        <button className="text-left hover:text-white">
          Salaries
        </button>
      </div>
    </aside>
  );
}