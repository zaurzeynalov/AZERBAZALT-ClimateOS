import { MapPin } from "lucide-react";

type PilotHeroProps = {
  name: string;
  region: string;
  crop: string;
  area: string;
  status: string;
};

export default function PilotHero({
  name,
  region,
  crop,
  area,
  status,
}: PilotHeroProps) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/60 p-6">
      <div className="flex items-start justify-between">
        <div>
          <p className="text-sm uppercase tracking-[0.25em] text-cyan-400">
            Operational Dashboard
          </p>

          <h1 className="mt-2 text-3xl font-bold text-white">
            {name}
          </h1>

          <div className="mt-4 flex items-center gap-2 text-slate-300">
            <MapPin size={18} className="text-cyan-400" />

            <span>
              {region} • {crop}
            </span>
          </div>
        </div>

       <div className="flex items-center gap-2 rounded-full border border-emerald-500/20 bg-emerald-500/10 px-4 py-2">
  <div className="h-2 w-2 rounded-full bg-emerald-400" />

  <span className="text-sm font-semibold text-emerald-400">
    Operational
  </span>
</div>
      </div>

      <div className="mt-4 grid grid-cols-3 gap-6 border-t border-slate-700 pt-6">
        <div>
          <p className="text-xs uppercase tracking-wider text-slate-300">
            Area
          </p>

          <p className="mt-2 text-2xl font-semibold text-white">
            {area}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-300">
            Crop
          </p>

          <p className="mt-2 text-2xl font-semibold text-white">
            {crop}
          </p>
        </div>

        <div>
          <p className="text-xs uppercase tracking-wider text-slate-300">
            Region
          </p>

          <p className="mt-2 text-2xl font-semibold text-white">
            {region}
          </p>
        </div>
      </div>
    </div>
  );
}