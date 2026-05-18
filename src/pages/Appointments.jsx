import { useState } from "react";
import appointments from "../data/appointments";
import PageHeader from "../components/PageHeader";

export default function Appointments() {

  const [search, setSearch] = useState("");

  const filteredAppointments = appointments.filter((item) =>
    item.customerName.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {

    if (status === "Confirmed")
      return "bg-green-100 text-green-700";

    if (status === "Pending")
      return "bg-yellow-100 text-yellow-700";

    return "bg-blue-100 text-blue-700";
  };

  return (
    <div className="space-y-6">

      <PageHeader
        title="Appointments"
        subtitle="Jadwal booking treatment pelanggan"
      />

      <div className="bg-white rounded-[28px] p-6 shadow-sm">

        {/* SEARCH */}
        <div className="mb-6">

          <input
            type="text"
            placeholder="Search appointment..."
            className="
              w-full
              md:w-[320px]
              h-[48px]
              px-5
              rounded-2xl
              border
              border-[#e9ecef]
              bg-white
              text-sm
              outline-none
              transition
              focus:border-pink-400
              focus:ring-4
              focus:ring-pink-100
            "
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">

          <table className="w-full">

            <thead>
              <tr className="border-b border-[#f1f3f5]">

                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Customer
                </th>

                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Treatment
                </th>

                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Tanggal
                </th>

                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Jam
                </th>

                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>

              {filteredAppointments.map((item) => (
                <tr
                  key={item.id}
                  className="border-b border-[#f8f9fa] hover:bg-[#f8f9fa] transition"
                >

                  <td className="px-4 py-5 font-semibold text-[#344767]">
                    {item.customerName}
                  </td>

                  <td className="px-4 py-5 text-sm text-gray-500">
                    {item.treatment}
                  </td>

                  <td className="px-4 py-5 text-sm text-gray-500">
                    {item.date}
                  </td>

                  <td className="px-4 py-5 text-sm text-gray-500">
                    {item.time}
                  </td>

                  <td className="px-4 py-5">

                    <span
                      className={`px-3 py-1 rounded-xl text-xs font-bold ${getStatusColor(
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
          <p className="text-center text-gray-400 py-10">
            Appointment tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}