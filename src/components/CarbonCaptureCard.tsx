export default function CarbonCaptureCard() {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6">
      <h2 className="text-xl font-semibold text-white">
        Carbon Capture
      </h2>

      <p className="mt-2 text-sm text-slate-400">
        Estimated carbon removal based on Enhanced Rock Weathering (ERW).
      </p>

      <div className="mt-6 flex items-end gap-3">
        <span className="text-4xl font-bold text-white">—</span>
        <span className="pb-1 text-slate-400">
          tCO₂e
        </span>
      </div>

      <p className="mt-4 text-sm text-slate-500">
        Calculation will become available after laboratory validation and MRV processing.
      </p>
    </div>
  );
}