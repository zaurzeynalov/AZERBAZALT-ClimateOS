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
    <div className="rounded-xl bg-white p-6 shadow">
      <h3 className="text-sm text-slate-500">{title}</h3>

      <p className="mt-2 text-3xl font-bold text-slate-800">
        {value}
      </p>

      <p className="mt-3 text-sm text-green-600">
        {status}
      </p>
    </div>
  );
}