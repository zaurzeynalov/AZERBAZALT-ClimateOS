export default function PilotOverviewPage() {
  return (
    <div className="p-10">

      <h1 className="text-4xl font-bold text-slate-900">
        Pilot 1
      </h1>

      <p className="mt-2 text-lg text-slate-500">
        Enhanced Rock Weathering Pilot Project
      </p>

      {/* Summary */}

      <div className="mt-8 grid grid-cols-4 gap-6">

        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm text-slate-500">Status</p>
          <p className="mt-2 text-2xl font-bold text-green-600">
            Active
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm text-slate-500">Country</p>
          <p className="mt-2 text-2xl font-bold">
            Azerbaijan
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm text-slate-500">Pilot Sites</p>
          <p className="mt-2 text-2xl font-bold">
            4
          </p>
        </div>

        <div className="rounded-xl border bg-white p-6">
          <p className="text-sm text-slate-500">Start Date</p>
          <p className="mt-2 text-2xl font-bold">
            2026
          </p>
        </div>

      </div>

      {/* Pilot Sites */}

      <div className="mt-10 rounded-xl border bg-white p-6">

        <h2 className="mb-6 text-2xl font-semibold">
          Pilot Sites
        </h2>

        <table className="w-full">

          <thead>

            <tr className="border-b">

              <th className="py-3 text-left">Location</th>

              <th className="text-left">Crop</th>

              <th className="text-left">Status</th>

            </tr>

          </thead>

          <tbody>

            <tr className="border-b">
              <td className="py-4">Agdash</td>
              <td>Rice</td>
              <td className="text-green-600">Active</td>
            </tr>

            <tr className="border-b">
              <td className="py-4">Ujar</td>
              <td>Cotton</td>
              <td className="text-green-600">Active</td>
            </tr>

            <tr className="border-b">
              <td className="py-4">Khachmaz</td>
              <td>Tomato</td>
              <td className="text-yellow-600">Monitoring</td>
            </tr>

            <tr>
              <td className="py-4">Lankaran</td>
              <td>Mandarin</td>
              <td className="text-green-600">Active</td>
            </tr>

          </tbody>

        </table>

      </div>

    </div>
  );
}