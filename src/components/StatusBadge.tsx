type StatusBadgeProps = {
  status: string;
};

export default function StatusBadge({
  status,
}: StatusBadgeProps) {
  const colors: Record<string, string> = {
    Active: "bg-green-500/20 text-green-400",

    Completed: "bg-emerald-500/20 text-emerald-400",

    Monitoring: "bg-blue-500/20 text-blue-400",

    "In Progress": "bg-cyan-500/20 text-cyan-400",

    Pending: "bg-yellow-500/20 text-yellow-400",

    "Data Collection": "bg-orange-500/20 text-orange-400",
  };

  return (
    <span
      className={`rounded-full px-3 py-1 text-sm font-medium ${
        colors[status] ?? "bg-slate-700 text-slate-300"
      }`}
    >
      {status}
    </span>
  );
}