import { soilRows } from "@/data/agdash";
export default function SoilAnalysisTable() {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-xl font-semibold text-white">
          Soil Analysis Monitoring
        </h2>

        <div className="mt-4 grid gap-4 md:grid-cols-3">
          {/* Monitoring Period */}
          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Monitoring Period
            </label>

            <button className="flex w-full items-center justify-between rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white">
              <span>Baseline → Day 60</span>
              <span className="text-slate-500">▼</span>
            </button>
          </div>

          {/* Pilot */}
          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Pilot
            </label>

            <button className="flex w-full items-center justify-between rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white">
              <span>Agdash</span>
              <span className="text-slate-500">▼</span>
            </button>
          </div>

          {/* Laboratory */}
          <div>
            <label className="mb-2 block text-sm text-slate-400">
              Laboratory
            </label>

            <button className="flex w-full items-center justify-between rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white">
              <span>AQTI</span>
              <span className="text-slate-500">▼</span>
            </button>
          </div>
        </div>
      </div>

      <div className="my-6 border-t border-slate-700" />
      <div className="overflow-x-auto">
  <table className="w-full text-sm">
    <thead>
      <tr className="border-b border-slate-700 text-slate-400">
        <th className="py-3 text-left">Parameter</th>
        <th className="py-3 text-left">Variant</th>
        <th className="py-3 text-center">Baseline</th>
        <th className="py-3 text-center">Day 60</th>
        <th className="py-3 text-center">Δ</th>
        <th className="py-3 text-center">Assessment</th>
      </tr>
    </thead>

    <tbody>
      {soilRows.map((row, index) => (
        <tr
          key={index}
          className="border-b border-slate-700 hover:bg-slate-800/40"
        >
          <td className="py-4">
            {row.parameter && (
              <>
                <div className="font-medium text-white">
                  {row.parameter}
                </div>
                <div className="text-xs text-slate-500">
                  {row.unit}
                </div>
              </>
            )}
          </td>

          <td className="text-white">
            {row.variant}
          </td>

          <td className="text-center text-white">
            {row.baseline}
          </td>

          <td className="text-center text-white">
            {row.day60}
          </td>

          <td className="text-center font-medium text-cyan-400">
            {row.delta}
          </td>

          <td className="text-center">
            <span
              className={`rounded-full px-3 py-1 text-xs font-medium ${
                row.assessment === "Improved"
                  ? "bg-emerald-500/20 text-emerald-400"
                  : row.assessment === "Stable"
                  ? "bg-amber-500/20 text-amber-400"
                  : "bg-slate-700 text-slate-300"
              }`}
            >
              {row.assessment}
            </span>
          </td>
        </tr>
      ))}
    </tbody>
  </table>
</div>
    </div>
  );
}