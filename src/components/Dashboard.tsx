import StatsCard from "@/components/StatsCard";

export default function Dashboard() {
  return (
    <div className="p-10">
      <h1 className="text-4xl font-bold text-slate-800">
        AZERBAZALT ClimateOS
      </h1>

      <p className="mt-4 text-lg text-slate-600">
        Welcome to the Climate Intelligence Platform
      </p>

      <div className="mt-10 grid grid-cols-4 gap-6">
        <StatsCard
          title="Pilot Projects"
          value="4"
          status="Active"
        />

        <StatsCard
          title="Soil Samples"
          value="17"
          status="Collected"
        />

        <StatsCard
          title="Laboratory Reports"
          value="3"
          status="Received"
        />

        <StatsCard
          title="Carbon Credits"
          value="0"
          status="Pending"
        />
      </div>
    </div>
  );
}