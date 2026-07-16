"use client";

import { useState } from "react";
import { soilRows } from "@/data/agdash";

export default function SoilAnalysisTable() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6">

      {/* Header */}

      <div className="flex items-center justify-between">

        <h2 className="text-xl font-semibold text-white">
          Soil Analysis Monitoring
        </h2>

        <button
          onClick={() => setIsOpen(!isOpen)}
          className="rounded-lg border border-slate-700 px-3 py-1 text-sm text-slate-300 hover:border-cyan-500 hover:text-white"
        >
          {isOpen ? "Hide" : "Show"}
        </button>

      </div>

      {/* Filters */}

      <div className="mt-6 grid gap-4 md:grid-cols-3">

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Monitoring Period
          </label>

          <button className="flex w-full items-center justify-between rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white">

            <span>Baseline → Day 60</span>

            <span className="text-slate-500">▼</span>

          </button>

        </div>

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Pilot
          </label>

          <button className="flex w-full items-center justify-between rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white">

            <span>Agdash</span>

            <span className="text-slate-500">▼</span>

          </button>

        </div>

        <div>

          <label className="mb-2 block text-sm text-slate-400">
            Laboratory
          </label>

          <button className="flex w-full items-center justify-between rounded-xl border border-slate-700 bg-slate-900/50 px-4 py-3 text-white">

            <span>AQTI</span>

            <span className="text-slate-500">▼</span>

          </button>

        </div>

      </div>

      {isOpen && (

        <>
                  <div className="my-6 border-t border-slate-700" />

          <div className="overflow-x-auto">

            <table className="w-full text-sm">

              <thead>

                <tr className="border-b border-slate-700 text-slate-400">

                  <th className="py-3 text-left">
                    Parameter
                  </th>

                  <th className="py-3 text-left">
                    Variant
                  </th>

                  <th className="py-3 text-center">
                    Baseline
                  </th>

                  <th className="py-3 text-center">
                    Day 60
                  </th>

                  <th className="py-3 text-center">
                    Δ
                  </th>

                  <th className="py-3 text-center">
                    Assessment
                  </th>

                </tr>

              </thead>

              <tbody>

                {soilRows.map((row, index) => (

                  <tr
                    key={index}
                    className="border-b border-slate-700 hover:bg-slate-800/40"
                  >

                    <td className="py-4">

                      {row.parameter ? (
                        <>
                          <div className="font-medium text-white">
                            {row.parameter}
                          </div>

                          <div className="text-xs text-slate-500">
                            {row.unit}
                          </div>
                        </>
                      ) : null}

                    </td>

                    <td className="text-white">
                      {row.variant}
                    </td>

                    <td className="text-center text-white">
                      {row.baseline}
                    </td>

                    <td className="text-center text-white">
                      {row.day60}
                    </td>

                    <td className="text-center font-medium text-cyan-400">
                      {row.delta}
                    </td>

                    <td className="text-center">                      <span
                        className={`rounded-full px-3 py-1 text-xs font-medium ${
                          row.assessment === "Improved"
                            ? "bg-emerald-500/20 text-emerald-400"
                            : row.assessment === "Stable"
                            ? "bg-amber-500/20 text-amber-400"
                            : "bg-rose-500/20 text-rose-400"
                        }`}
                      >
                        {row.assessment}
                      </span>

                    </td>

                  </tr>

                ))}
                              </tbody>

            </table>

          </div>

        </>
      )}

    </div>
  );
}