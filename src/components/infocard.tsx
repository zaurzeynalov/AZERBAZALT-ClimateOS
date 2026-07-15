type InfoCardProps = {
  title: string;
  value: string;
  valueClassName?: string;
};

export default function InfoCard({
  title,
  value,
  valueClassName = "text-white",
}: InfoCardProps) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-5 transition-all duration-200 hover:border-cyan-500 hover:bg-slate-800">
      <p className="text-sm text-slate-400">
        {title}
      </p>

      <p className={`mt-2 text-xl font-semibold ${valueClassName}`}>
        {value}
      </p>
    </div>
  );
}