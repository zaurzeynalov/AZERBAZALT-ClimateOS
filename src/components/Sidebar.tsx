"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  const [projectsOpen, setProjectsOpen] = useState(true);
  const [openPilot, setOpenPilot] = useState<string | null>("Pilot 1");

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h2 className="text-2xl font-bold">AZERBAZALT</h2>

      <p className="mb-8 text-slate-400">ClimateOS</p>

      <nav className="space-y-2">
        {navigation.map((item) => (
          <div key={item.title}>
            {/* Normal menu items */}
            {item.href && (
              <Link
                href={item.href}
                className={`block rounded-lg px-4 py-3 transition ${
                  pathname === item.href
                    ? "bg-blue-600 text-white"
                    : "hover:bg-slate-800"
                }`}
              >
                {item.title}
              </Link>
            )}

            {/* Projects */}
            {item.children && (
              <>
                <button
                  onClick={() => setProjectsOpen(!projectsOpen)}
                  className="flex w-full items-center justify-between rounded-lg px-4 py-3 font-medium hover:bg-slate-800 transition"
                >
                  <span>{item.title}</span>

                  <span>{projectsOpen ? "▼" : "▶"}</span>
                </button>

                {projectsOpen && (
                  <div className="ml-5 mt-2 space-y-2">

                    {item.children.map((pilot) => (
                      <div key={pilot.title}>

                        <button
                          onClick={() =>
                            setOpenPilot(
                              openPilot === pilot.title ? null : pilot.title
                            )
                          }
                          className="flex w-full items-center justify-between rounded-lg px-3 py-2 hover:bg-slate-800"
                        >
                          <span>{pilot.title}</span>

                          <span>
                            {openPilot === pilot.title ? "▼" : "▶"}
                          </span>
                        </button>

                        {openPilot === pilot.title && (
                          <div className="ml-5 mt-2 space-y-2">

                            {pilot.children?.length ? (
                              pilot.children.map((page) => (
                                <Link
                                  key={page.title}
                                  href={page.href}
                                  className={`block rounded px-2 py-1 transition ${
                                    pathname === page.href
                                      ? "text-blue-400 font-semibold"
                                      : "text-slate-400 hover:text-white"
                                  }`}
                                >
                                  {page.title}
                                </Link>
                              ))
                            ) : (
                              <div className="px-2 py-1 text-sm text-slate-500 italic">
                                No pilot sites yet
                              </div>
                            )}

                          </div>
                        )}

                      </div>
                    ))}

                  </div>
                )}
              </>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}