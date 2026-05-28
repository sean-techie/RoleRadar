export default function Navbar() {
  return (
    <nav className="w-full flex items-center justify-between px-8 py-6 border-b border-gray-800">
      <h1 className="text-2xl font-bold text-white">
        RoleRadar
      </h1>

      <div className="flex gap-6 text-gray-400">
        <a href="#">Dashboard</a>
        <a href="#">Trends</a>
        <a href="#">Skills</a>
        <a href="#">Jobs</a>
      </div>
    </nav>
  );
}