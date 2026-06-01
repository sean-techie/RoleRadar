import Link from "next/link";

export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-zinc-950 border-r border-zinc-800 p-6">
      <h1 className="text-3xl font-bold text-white mb-10">
        RoleRadar
      </h1>

      <nav className="flex flex-col gap-4">
        <Link href="/">
          <button className="text-left text-gray-300 hover:text-white transition">
            Dashboard
          </button>
        </Link>

        <Link href="/jobs">
          <button className="text-left text-gray-300 hover:text-white transition">
            Jobs
          </button>
        </Link>

        <Link href="/analytics">
          <button className="text-left text-gray-300 hover:text-white transition">
            Trends
          </button>
        </Link>

        <Link href="/saved-jobs">
          <button className="text-left text-gray-300 hover:text-white transition">
            Saved Jobs
          </button>
        </Link>

        <Link href="/skills">
          <button className="text-left text-gray-300 hover:text-white transition">
            Skills
          </button>
        </Link>
      </nav>
    </aside>
  );
}