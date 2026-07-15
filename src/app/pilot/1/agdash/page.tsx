import InfoCard from "@/components/InfoCard";
import StatusBadge from "@/components/StatusBadge";
import { pilots } from "@/data/pilots";
import PilotKpiCard from "@/components/PilotKpiCard";
import PilotHero from "@/components/PilotHero";

export default function AgdashPage() {
  const pilot = pilots.agdash;

  return (
    <div className="space-y-8">

      <PilotHero
  name={pilot.name}
  region={pilot.region}
  crop={pilot.crop}
  area={pilot.area}
  status={pilot.status}
/>

   {/* Pilot KPIs */}

<div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

  <PilotKpiCard
    title="Pilot Health"
    value="96%"
    subtitle="Overall Status"
    status="Excellent"
  />

  <PilotKpiCard
    title="Laboratory"
    value="18"
    subtitle="Analyses Completed"
    status="Operational"
  />

  <PilotKpiCard
    title="MRV"
    value="92%"
    subtitle="Verification Progress"
    status="Monitoring"
  />

  <PilotKpiCard
    title="Carbon"
    value="0.42 tCO₂"
    subtitle="Estimated Removal"
    status="In Progress"
  />

</div>

      {/* Progress */}

      <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6">

        <h2 className="mb-5 text-xl font-semibold text-white">
          Project Progress
        </h2>

        <div className="space-y-4">

          {pilot.progress.map((step) => (
  <div
    key={step.title}
    className="flex items-center justify-between rounded-xl border border-slate-700 bg-slate-900/50 p-4"
  >
    <span className="font-medium text-white">
      {step.title}
    </span>

    <StatusBadge status={step.status} />
  </div>
))}

        </div>

      </div>
    </div>
  );
}