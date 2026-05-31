import { useState } from "react";
import { Search, Calendar, Clock, User, Sparkles } from "lucide-react";

import appointments from "../data/appointments";
import PageHeader from "../components/PageHeader";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function Appointments() {
  const [search, setSearch] = useState("");

  const getStatusColor = (status) => {
    if (status === "Confirmed") return "bg-green-100 text-green-700";
    if (status === "Pending") return "bg-yellow-100 text-yellow-700";
    return "bg-blue-100 text-blue-700";
  };

  const filterData = (status) => {
    return appointments.filter((item) => {
      const matchSearch = item.customerName
        .toLowerCase()
        .includes(search.toLowerCase());

      if (status === "All") return matchSearch;

      return matchSearch && item.status === status;
    });
  };

  const renderTable = (data) => (
    <div className="bg-white rounded-[28px] p-6 shadow-sm">
      <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
        <div className="relative">
          <Search
            size={18}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
          />

          <input
            type="text"
            placeholder="Search appointment..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full md:w-[320px] h-[48px] pl-11 pr-5 rounded-2xl border border-[#e9ecef] bg-white text-sm outline-none transition focus:border-pink-400 focus:ring-4 focus:ring-pink-100"
          />
        </div>

        <button className="h-[48px] px-5 rounded-2xl bg-gradient-to-r from-pink-500 to-purple-600 text-white text-sm font-semibold shadow-lg hover:scale-[1.02] transition">
          + Add Appointment
        </button>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px]">
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
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-[#f8f9fa] hover:bg-[#f8f9fa] transition"
              >
                <td className="px-4 py-5">
                  <div className="flex items-center gap-4">
                    <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white shadow-md">
                      <User size={20} />
                    </div>

                    <div>
                      <h3 className="font-semibold text-[#344767]">
                        {item.customerName}
                      </h3>
                      <p className="text-xs text-gray-400 mt-1">
                        GlowCare Customer
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-4 py-5">
                  <span className="inline-flex items-center gap-2 text-sm font-semibold text-pink-500">
                    <Sparkles size={16} />
                    {item.treatment}
                  </span>
                </td>

                <td className="px-4 py-5">
                  <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                    <Calendar size={16} />
                    {item.date}
                  </span>
                </td>

                <td className="px-4 py-5">
                  <span className="inline-flex items-center gap-2 text-sm text-gray-500">
                    <Clock size={16} />
                    {item.time}
                  </span>
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

      {data.length === 0 && (
        <div className="py-16 text-center">
          <h3 className="font-bold text-[#344767] text-lg">
            Appointment tidak ditemukan
          </h3>
          <p className="text-gray-400 mt-2 text-sm">
            Coba gunakan keyword lain.
          </p>
        </div>
      )}
    </div>
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Appointments"
        subtitle="Jadwal booking treatment pelanggan"
      />

      <Tabs defaultValue="All" className="w-full flex flex-col gap-6">
        <TabsList className="bg-pink-50 rounded-2xl p-1 w-fit">
          <TabsTrigger value="All" className="px-5 rounded-xl">
            All
          </TabsTrigger>

          <TabsTrigger value="Confirmed" className="px-5 rounded-xl">
            Confirmed
          </TabsTrigger>

          <TabsTrigger value="Pending" className="px-5 rounded-xl">
            Pending
          </TabsTrigger>

          <TabsTrigger value="Completed" className="px-5 rounded-xl">
            Completed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="All">
          {renderTable(filterData("All"))}
        </TabsContent>

        <TabsContent value="Confirmed">
          {renderTable(filterData("Confirmed"))}
        </TabsContent>

        <TabsContent value="Pending">
          {renderTable(filterData("Pending"))}
        </TabsContent>

        <TabsContent value="Completed">
          {renderTable(filterData("Completed"))}
        </TabsContent>
      </Tabs>
    </div>
  );
}