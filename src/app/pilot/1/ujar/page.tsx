import InfoCard from "@/components/InfoCard";
import StatusBadge from "@/components/StatusBadge";
import { pilots } from "@/data/pilots";

export default function UjarPage() {
  const pilot = pilots.ujar;

  return (
    <div className="space-y-8">
      {/* Header */}

      <div className="flex items-start justify-between">
        <div>
          <h1 className="text-3xl font-bold text-white">
            {pilot.name}
          </h1>

          <p className="mt-2 text-slate-400">
            {pilot.region} • {pilot.crop} • {pilot.area}
          </p>
        </div>

        <StatusBadge status={pilot.status} />
      </div>

      {/* Information */}

      <div className="grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-3">
        <InfoCard
          title="Crop"
          value={pilot.crop}
        />

        <InfoCard
          title="Area"
          value={pilot.area}
        />

        <InfoCard
          title="Application Date"
          value={pilot.applicationDate}
        />

        <InfoCard
          title="Region"
          value={pilot.region}
        />

        <InfoCard
          title="Samples"
          value="Soil / Plant"
        />

        <InfoCard
          title="Photos"
          value="Available"
        />
      </div>

      {/* Timeline */}

      <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6">
        <h2 className="mb-5 text-xl font-semibold text-white">
          Timeline
        </h2>

        <div className="space-y-4 text-slate-300">
          <div>✅ Basalt Applied — 12 May 2026</div>

          <div>🧪 Soil Sampling</div>

          <div>🌱 Plant Sampling</div>

          <div>🔬 Laboratory Analysis (Pending)</div>

          <div>📈 Monitoring</div>
        </div>
      </div>

      {/* Documents */}

      <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6">
        <h2 className="mb-5 text-xl font-semibold text-white">
          Documents
        </h2>

        <ul className="space-y-2 text-slate-300">
          <li>• Field Report</li>

          <li>• GPS Coordinates</li>

          <li>• Field Photos</li>

          <li>• Laboratory Results (Pending)</li>
        </ul>
      </div>

      {/* Notes */}

      <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6">
        <h2 className="mb-5 text-xl font-semibold text-white">
          Notes
        </h2>

        <p className="leading-7 text-slate-300">
          Cotton pilot established under the{" "}
          <span className="font-semibold text-cyan-400">
            AZERBAZALT Enhanced Rock Weathering (ERW)
          </span>{" "}
          program. Soil and plant samples have been collected.
          Monitoring activities are ongoing.
        </p>
      </div>
    </div>
  );
}