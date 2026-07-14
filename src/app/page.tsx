import Sidebar from "@/components/Sidebar";
import Topbar from "@/components/Topbar";

export default function Home() {
  return (
    <div className="flex min-h-screen">
      <Sidebar />

      <main className="flex flex-1 flex-col bg-slate-100">
        <Topbar />

        <div className="p-10">
          <h1 className="text-4xl font-bold text-slate-800">
            AZERBAZALT ClimateOS
          </h1>

          <p className="mt-4 text-lg text-slate-600">
            Welcome to the Climate Intelligence Platform
          </p>
        </div>
      </main>
    </div>
  );
}