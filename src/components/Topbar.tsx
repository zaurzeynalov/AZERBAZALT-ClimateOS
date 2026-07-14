export default function Topbar() {
  return (
    <header className="flex h-16 items-center justify-between border-b border-slate-200 bg-white px-8">
      <h1 className="text-xl font-semibold text-slate-800">
        Dashboard
      </h1>

      <div className="text-sm text-slate-500">
        Welcome, Zaur
      </div>
    </header>
  );
}