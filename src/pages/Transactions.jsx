import { useEffect, useState } from "react";
import {
  Search,
  ReceiptText,
  CreditCard,
  Calendar,
  Sparkles,
  BadgePercent,
} from "lucide-react";

import transactions from "../data/transactions";

import SoftCard from "@/components/ui/SoftCard";
import SoftButton from "@/components/ui/SoftButton";
import SoftBadge from "@/components/ui/SoftBadge";
import SoftIconBox from "@/components/ui/SoftIconBox";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function Transactions() {
  const [search, setSearch] = useState("");
  const [statusFilter, setStatusFilter] = useState("All");

  useEffect(() => {
    document.title = "GlowCare Clinic - Transactions";
  }, []);

  const filteredTransactions = transactions.filter((item) => {
    const matchSearch = item.customerName
      .toLowerCase()
      .includes(search.toLowerCase());

    if (statusFilter === "All") return matchSearch;

    return matchSearch && item.status === statusFilter;
  });

  const getStatusColor = (status) => {
    if (status === "Paid") return "success";
    if (status === "Pending") return "warning";
    return "danger";
  };

  return (
    <SoftCard className="p-6">
      <div className="mb-5 flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#344767]">
            Transactions Table
          </h3>

          <p className="mt-1 text-sm font-semibold text-[#8392ab]">
            Riwayat transaksi treatment pelanggan GlowCare Clinic
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
              placeholder="Search transaction..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-full rounded-xl border border-[#e9ecef] bg-white pl-10 pr-3 text-sm text-[#344767] outline-none placeholder:text-[#8392ab] focus:border-[#ff0080] md:w-[240px]"
            />
          </div>

          <Select value={statusFilter} onValueChange={setStatusFilter}>
            <SelectTrigger className="h-10 w-full rounded-xl border-[#e9ecef] bg-white text-sm font-semibold text-[#67748e] md:w-[150px]">
              <SelectValue placeholder="Filter Status" />
            </SelectTrigger>

            <SelectContent className="bg-white">
              <SelectGroup>
                <SelectItem value="All">All Status</SelectItem>
                <SelectItem value="Paid">Paid</SelectItem>
                <SelectItem value="Pending">Pending</SelectItem>
                <SelectItem value="Failed">Failed</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>

          <SoftButton size="sm">Add Transaction</SoftButton>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[1000px] text-left">
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
                Payment
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Total
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Promo
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
            {filteredTransactions.map((item) => (
              <tr
                key={item.id}
                className="border-b border-[#f0f2f5] last:border-b-0"
              >
                <td className="px-2 py-4">
                  <div className="flex items-center gap-3">
                    <SoftIconBox size="md">
                      <ReceiptText size={16} />
                    </SoftIconBox>

                    <div>
                      <h3 className="text-sm font-bold text-[#344767]">
                        {item.customerName}
                      </h3>

                      <p className="mt-1 text-xs font-semibold text-[#8392ab]">
                        {item.source}
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
                    <CreditCard size={15} />
                    {item.paymentMethod}
                  </div>
                </td>

                <td className="px-2 py-4">
                  <span className="text-sm font-bold text-[#ff0080]">
                    Rp {item.total.toLocaleString("id-ID")}
                  </span>
                </td>

                <td className="px-2 py-4">
                  <div className="flex items-center gap-2">
                    <BadgePercent size={14} className="text-[#ff0080]" />
                    <SoftBadge color="primary">{item.promo}</SoftBadge>
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

      {filteredTransactions.length === 0 && (
        <div className="py-14 text-center">
          <h3 className="text-lg font-bold text-[#344767]">
            Transaction tidak ditemukan
          </h3>

          <p className="mt-2 text-sm font-semibold text-[#8392ab]">
            Coba gunakan keyword lain.
          </p>
        </div>
      )}
    </SoftCard>
  );
}