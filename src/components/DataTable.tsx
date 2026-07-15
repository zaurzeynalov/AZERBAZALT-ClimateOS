type Column = {
  key: string;
  label: string;
};

type Row = {
  [key: string]: string | number | null;
};

type DataTableProps = {
  title: string;
  columns: Column[];
  rows: Row[];
};

export default function DataTable({
  title,
  columns,
  rows,
}: DataTableProps) {
  return (
    <div className="rounded-2xl border border-slate-700 bg-slate-800/70 p-6">
      <h2 className="mb-6 text-xl font-semibold text-white">
        {title}
      </h2>

      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-sm">
          <thead>
            <tr className="border-b border-slate-700 text-left text-slate-400">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-3 py-3 font-medium whitespace-nowrap"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>

          <tbody>
            {rows.map((row, index) => (
              <tr
                key={index}
                className="border-b border-slate-800 hover:bg-slate-700/20"
              >
                {columns.map((column) => (
                  <td
                    key={column.key}
                    className="px-3 py-3 text-slate-200 whitespace-nowrap"
                  >
                    {row[column.key] ?? "—"}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}