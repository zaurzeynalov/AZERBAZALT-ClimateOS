import PilotHero from "@/components/PilotHero";
import PilotKpiCard from "@/components/PilotKpiCard";
import SoilAnalysisTable from "@/components/SoilAnalysisTable";
import FieldPhotoGallery from "@/components/FieldPhotoGallery";

type PilotPageProps = {
  pilot: any;
};

export default function PilotPage({ pilot }: PilotPageProps) {
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

      <SoilAnalysisTable />

<FieldPhotoGallery pilot={pilot.id} />

    </div>
  );
}