export default function SoftTable({ columns = [], data = [] }) {
  return (
    <div className="overflow-hidden rounded-2xl bg-white shadow-[0_20px_27px_0_rgba(0,0,0,0.05)]">
      <table className="w-full text-left text-sm">
        <thead className="bg-[#fafafa] text-xs uppercase text-[#8392ab]">
          <tr>
            {columns.map((column, index) => (
              <th key={index} className="px-6 py-4 font-bold">
                {column}
              </th>
            ))}
          </tr>
        </thead>

        <tbody>
          {data.map((row, index) => (
            <tr key={index} className="border-t border-[#f0f0f0]">
              {Object.values(row).map((value, i) => (
                <td key={i} className="px-6 py-4 font-semibold text-[#252f40]">
                  {value}
                </td>
              ))}
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}