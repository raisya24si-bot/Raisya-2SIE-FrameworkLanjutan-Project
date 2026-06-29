import { useEffect, useState } from "react";
import { Search, Calendar, Clock, User, Sparkles } from "lucide-react";

import appointments from "../data/appointments";

import SoftCard from "@/components/ui/SoftCard";
import SoftButton from "@/components/ui/SoftButton";
import SoftBadge from "@/components/ui/SoftBadge";
import SoftIconBox from "@/components/ui/SoftIconBox";

import {
  Tabs,
  TabsContent,
  TabsList,
  TabsTrigger,
} from "@/components/ui/tabs";

export default function Appointments() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "GlowCare Clinic - Appointments";
  }, []);

  const getStatusColor = (status) => {
    if (status === "Confirmed") return "success";
    if (status === "Pending") return "warning";
    return "info";
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
    <SoftCard className="p-6">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#344767]">
            Appointments Table
          </h3>

          <p className="mt-1 text-sm font-semibold text-[#8392ab]">
            Jadwal booking treatment pelanggan
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8392ab]"
            />

            <input
              type="text"
              placeholder="Search appointment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-full rounded-xl border border-[#e9ecef] bg-white pl-10 pr-3 text-sm text-[#344767] outline-none placeholder:text-[#8392ab] focus:border-[#ff0080] md:w-[240px]"
            />
          </div>

          <SoftButton size="sm">Add Appointment</SoftButton>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[900px] text-left">
          <thead>
            <tr className="border-b border-[#f0f2f5]">
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Customer
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Treatment
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Date
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Time
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Status
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {data.map((item) => (
              <tr
                key={item.id}
                className="border-b border-[#f0f2f5] last:border-b-0"
              >
                <td className="px-2 py-4">
                  <div className="flex items-center gap-3">
                    <SoftIconBox size="md">
                      <User size={16} />
                    </SoftIconBox>

                    <div>
                      <h3 className="text-sm font-bold text-[#344767]">
                        {item.customerName}
                      </h3>

                      <p className="mt-1 text-xs font-semibold text-[#8392ab]">
                        GlowCare Customer
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-2 py-4">
                  <div className="flex items-center gap-2 text-sm font-bold text-[#ff0080]">
                    <Sparkles size={15} />
                    {item.treatment}
                  </div>
                </td>

                <td className="px-2 py-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#67748e]">
                    <Calendar size={15} />
                    {item.date}
                  </div>
                </td>

                <td className="px-2 py-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#67748e]">
                    <Clock size={15} />
                    {item.time}
                  </div>
                </td>

                <td className="px-2 py-4">
                  <SoftBadge color={getStatusColor(item.status)}>
                    {item.status}
                  </SoftBadge>
                </td>

                <td className="px-2 py-4">
                  <button className="text-xs font-bold text-[#8392ab] hover:text-[#ff0080]">
                    Edit
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {data.length === 0 && (
        <div className="py-14 text-center">
          <h3 className="text-lg font-bold text-[#344767]">
            Appointment tidak ditemukan
          </h3>
          <p className="mt-2 text-sm font-semibold text-[#8392ab]">
            Coba gunakan keyword lain.
          </p>
        </div>
      )}
    </SoftCard>
  );

  return (
    <div className="space-y-5">
      <Tabs defaultValue="All" className="flex w-full flex-col gap-5">
        <TabsList className="w-fit rounded-2xl bg-white p-1 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)]">
          <TabsTrigger
            value="All"
            className="rounded-xl px-5 text-sm font-semibold data-[state=active]:bg-[linear-gradient(310deg,#7928ca_0%,#ff0080_100%)] data-[state=active]:text-white"
          >
            All
          </TabsTrigger>

          <TabsTrigger
            value="Confirmed"
            className="rounded-xl px-5 text-sm font-semibold data-[state=active]:bg-[linear-gradient(310deg,#7928ca_0%,#ff0080_100%)] data-[state=active]:text-white"
          >
            Confirmed
          </TabsTrigger>

          <TabsTrigger
            value="Pending"
            className="rounded-xl px-5 text-sm font-semibold data-[state=active]:bg-[linear-gradient(310deg,#7928ca_0%,#ff0080_100%)] data-[state=active]:text-white"
          >
            Pending
          </TabsTrigger>

          <TabsTrigger
            value="Completed"
            className="rounded-xl px-5 text-sm font-semibold data-[state=active]:bg-[linear-gradient(310deg,#7928ca_0%,#ff0080_100%)] data-[state=active]:text-white"
          >
            Completed
          </TabsTrigger>
        </TabsList>

        <TabsContent value="All">{renderTable(filterData("All"))}</TabsContent>

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