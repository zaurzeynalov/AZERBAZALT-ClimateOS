export default function Sidebar() {
  const menuItems = [
    "Dashboard",
    "Pilot Fields",
    "Laboratory",
    "MRV",
    "Carbon Credits",
    "Documents",
    "Users",
    "Settings",
  ];

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h2 className="text-2xl font-bold">
        AZERBAZALT
      </h2>

      <p className="mb-8 text-slate-400">
        ClimateOS
      </p>

      <nav>
        {menuItems.map((item) => (
          <div
            key={item}
            className="mb-2 cursor-pointer rounded-lg px-4 py-3 hover:bg-slate-800"
          >
            {item}
          </div>
        ))}
      </nav>
    </aside>
  );
}