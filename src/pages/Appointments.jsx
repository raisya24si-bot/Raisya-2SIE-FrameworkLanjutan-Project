import { useState } from "react";
import appointments from "../data/appointments";
import PageHeader from "../components/PageHeader";

export default function Appointments() {
  const [search, setSearch] = useState("");

  const filteredAppointments = appointments.filter((item) =>
    item.customerName.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    if (status === "Confirmed") return "bg-green-100 text-green-700";
    if (status === "Pending") return "bg-yellow-100 text-yellow-700";
    return "bg-blue-100 text-blue-700";
  };

  return (
    <div>
      <PageHeader
        title="Appointments"
        subtitle="Jadwal booking treatment pelanggan"
      />

      <div className="bg-white rounded-3xl border border-rose-100 p-6 shadow-sm">
        <input
          type="text"
          placeholder="Cari appointment..."
          className="w-full md:w-80 mb-5 border border-rose-200 rounded-2xl px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-rose-50 text-slate-600">
              <tr>
                <th className="p-4">Customer</th>
                <th className="p-4">Treatment</th>
                <th className="p-4">Tanggal</th>
                <th className="p-4">Jam</th>
                <th className="p-4">Status</th>
              </tr>
            </thead>

            <tbody>
              {filteredAppointments.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-rose-100 hover:bg-rose-50/50 transition"
                >
                  <td className="p-4 font-medium">{item.customerName}</td>
                  <td className="p-4">{item.treatment}</td>
                  <td className="p-4">{item.date}</td>
                  <td className="p-4">{item.time}</td>
                  <td className="p-4">
                    <span
                      className={`px-3 py-1 rounded-full text-xs font-bold ${getStatusColor(
                        item.status
                      )}`}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredAppointments.length === 0 && (
          <p className="text-center text-slate-400 py-6">
            Appointment tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}