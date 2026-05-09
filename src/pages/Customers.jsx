import { useState } from "react";
import customers from "../data/customers";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

export default function Customers() {
  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const getMembershipColor = (membership) => {
    if (membership === "Gold") return "bg-yellow-100 text-yellow-700";
    if (membership === "Silver") return "bg-gray-200 text-gray-700";
    return "bg-rose-100 text-rose-600";
  };

  return (
    <div>
      <PageHeader
        title="Customers"
        subtitle="Data pelanggan GlowCare Clinic"
      />

      <div className="bg-white rounded-3xl border border-rose-100 p-6 shadow-sm">
        <input
          type="text"
          placeholder="Cari customer..."
          className="w-full md:w-80 mb-5 border border-rose-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-rose-50 text-slate-600">
              <tr>
                <th className="p-4">Nama</th>
                <th className="p-4">Phone</th>
                <th className="p-4">Email</th>
                <th className="p-4">Last Treatment</th>
                <th className="p-4">Membership</th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-rose-100 hover:bg-rose-50/50 transition"
                >
                  <td className="p-4 font-medium">
                    <Link
                      to={`/customers/${item.id}`}
                      className="text-rose-500 hover:underline"
                    >
                      {item.name}
                    </Link>
                  </td>

                  <td className="p-4">{item.phone}</td>

                  <td className="p-4">{item.email}</td>

                  <td className="p-4 text-rose-500 font-medium">
                    {item.lastTreatment}
                  </td>

                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${getMembershipColor(
                        item.membership
                      )}`}
                    >
                      {item.membership}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredCustomers.length === 0 && (
          <p className="text-center text-slate-400 py-6">
            Customer tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}