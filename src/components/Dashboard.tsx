import StatsCard from "@/components/StatsCard";

export default function Dashboard() {
  return (
    <div className="p-10">

      <div className="mb-10">
        <h1 className="text-4xl font-bold text-slate-900">
          AZERBAZALT ClimateOS
        </h1>

        <p className="mt-2 text-lg text-slate-500">
          Enterprise Climate Management Platform
        </p>
      </div>

      {/* Statistics */}

      <div className="grid grid-cols-4 gap-6">

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
          value="6"
          status="Received"
        />

        <StatsCard
          title="Carbon Credits"
          value="Pending"
          status="Monitoring"
        />

      </div>

      {/* Second Row */}

      <div className="mt-8 grid grid-cols-2 gap-6">

        {/* Progress */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <h2 className="text-xl font-semibold text-slate-800">
            Pilot Progress
          </h2>

          <div className="mt-8">

            <div className="mb-2 flex justify-between">

              <span className="text-slate-500">
                Overall Progress
              </span>

              <span className="font-semibold">
                74%
              </span>

            </div>

            <div className="h-3 rounded-full bg-slate-200">

              <div className="h-3 w-3/4 rounded-full bg-green-500"></div>

            </div>

          </div>

        </div>

        {/* Activity */}

        <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">

          <h2 className="text-xl font-semibold text-slate-800">
            Latest Activity
          </h2>

          <div className="mt-6 space-y-4 text-sm">

            <div>✅ Agdash soil sampling completed</div>

            <div>✅ Ujar laboratory report received</div>

            <div>✅ Khachmaz monitoring updated</div>

            <div>🕒 Lankaran laboratory analysis in progress</div>

          </div>

        </div>

      </div>

    </div>
  );
}