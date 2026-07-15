type PilotKpiCardProps = {
  title: string;
  value: string;
  subtitle: string;
  status?: string;
};

export default function PilotKpiCard({
  title,
  value,
  subtitle,
  status,
}: PilotKpiCardProps) {
  return (
    <div className="group rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-sm transition-all duration-200 hover:-translate-y-1 hover:border-cyan-500/40 hover:shadow-lg">
      <div className="flex items-start justify-between">
        <h3 className="text-sm font-medium uppercase tracking-wider text-slate-400">
          {title}
        </h3>

        {status && (
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs font-medium text-emerald-400">
            {status}
          </span>
        )}
      </div>

      <div className="mt-6 text-4xl font-bold text-white">
        {value}
      </div>

      <p className="mt-2 text-sm text-slate-400">
        {subtitle}
      </p>
    </div>
  );
}