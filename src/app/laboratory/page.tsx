import { ExternalLink, FileText } from "lucide-react";
import PilotHero from "@/components/PilotHero";

export default function LaboratoryPage() {
  return (
    <div className="space-y-8">
      <PilotHero
        title="Laboratory"
        subtitle="Official laboratory reports and analytical documentation for all ClimateOS pilot projects."
        status="1 Report"
        location="ClimateOS"
        date="Updated today"
      />

      <div className="rounded-xl border border-slate-200 bg-white p-6 shadow-sm max-w-2xl">
        <div className="flex items-start gap-5">
          <div className="rounded-lg bg-red-100 p-3">
            <FileText className="h-8 w-8 text-red-600" />
          </div>

          <div className="flex-1">
            <h2 className="text-xl font-semibold text-slate-900">
              Agdash Pilot
            </h2>

            <p className="mt-1 text-slate-600">
              Baseline Soil Analysis
            </p>

            <p className="mt-2 text-sm text-slate-500">
              MoA Vegetable Research Institute
            </p>

            <p className="text-sm text-slate-400">
              26 April 2026
            </p>

            <a
              href="/reports/agdash-baseline-soil-analysis.pdf"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-flex items-center gap-2 rounded-lg bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700"
            >
              <ExternalLink className="h-4 w-4" />
              Open Report
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}