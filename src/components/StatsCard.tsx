type StatsCardProps = {
  title: string;
  value: string;
  status: string;
};

export default function StatsCard({
  title,
  value,
  status,
}: StatsCardProps) {
  return (
    <div className="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:shadow-lg">
      <p className="text-sm font-medium uppercase tracking-wide text-slate-500">
        {title}
      </p>

      <h2 className="mt-4 text-4xl font-bold text-slate-900">
        {value}
      </h2>

      <div className="mt-6 flex items-center">
        <span className="mr-2 h-2 w-2 rounded-full bg-green-500"></span>

        <span className="text-sm font-medium text-green-600">
          {status}
        </span>
      </div>
    </div>
  );
}