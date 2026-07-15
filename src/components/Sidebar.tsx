"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { navigation } from "@/data/navigation";

export default function Sidebar() {
  const pathname = usePathname();

  return (
    <aside className="w-64 min-h-screen bg-slate-900 text-white p-6">
      <h2 className="text-2xl font-bold">AZERBAZALT</h2>

      <p className="mb-8 text-slate-400">ClimateOS</p>

      <nav className="space-y-2">
        {navigation.map((item) => (
          <div key={item.title}>
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

            {item.children && (
              <>
                <div className="rounded-lg px-4 py-3 font-medium">
                  {item.title}
                </div>

                <div className="ml-6 space-y-2 text-slate-400">
                  {item.children.map((project) => (
                    <div key={project.title}>
                      <div className="font-medium text-white">
                        ▼ {project.title}
                      </div>

                      <div className="ml-4 mt-2 space-y-2">
                        {project.children?.map((page) => (
                          <Link
                            key={page.title}
                            href={page.href}
                            className={`block transition ${
                              pathname === page.href
                                ? "text-blue-400 font-semibold"
                                : "hover:text-white"
                            }`}
                          >
                            {page.title}
                          </Link>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        ))}
      </nav>
    </aside>
  );
}