export default function Sidebar() {
  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h2 className="text-2xl font-bold">
        AZERBAZALT
      </h2>

      <p className="mb-8 text-slate-400">
        ClimateOS
      </p>

      <nav className="space-y-2">

        <div className="cursor-pointer rounded-lg px-4 py-3 hover:bg-slate-800">
          Dashboard
        </div>

        <div className="cursor-pointer rounded-lg px-4 py-3 hover:bg-slate-800">
          Projects
        </div>

        <div className="ml-6 space-y-2 text-slate-400">

          <div>▼ Pilot 1</div>

          <div className="ml-4 cursor-pointer hover:text-white">
            Overview
          </div>

          <div className="ml-4 cursor-pointer hover:text-white">
            Ujar
          </div>

          <div className="ml-4 cursor-pointer hover:text-white">
            Agdash
          </div>

          <div className="ml-4 cursor-pointer hover:text-white">
            Khachmaz
          </div>

          <div className="ml-4 cursor-pointer hover:text-white">
            Lankaran
          </div>

        </div>

        <div className="cursor-pointer rounded-lg px-4 py-3 hover:bg-slate-800">
          Laboratory
        </div>

        <div className="cursor-pointer rounded-lg px-4 py-3 hover:bg-slate-800">
          MRV
        </div>

        <div className="cursor-pointer rounded-lg px-4 py-3 hover:bg-slate-800">
          Carbon Credits
        </div>

        <div className="cursor-pointer rounded-lg px-4 py-3 hover:bg-slate-800">
          Documents
        </div>

        <div className="cursor-pointer rounded-lg px-4 py-3 hover:bg-slate-800">
          Users
        </div>

        <div className="cursor-pointer rounded-lg px-4 py-3 hover:bg-slate-800">
          Settings
        </div>

      </nav>
    </aside>
  );
}