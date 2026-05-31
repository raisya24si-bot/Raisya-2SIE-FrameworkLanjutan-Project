import { useState } from "react";
import {
  Search,
  ReceiptText,
  CreditCard,
  Calendar,
  Sparkles,
  BadgePercent,
} from "lucide-react";

import transactions from "../data/transactions";
import PageHeader from "../components/PageHeader";

export default function Transactions() {
  const [search, setSearch] = useState("");

  const filteredTransactions = transactions.filter((item) =>
    item.customerName.toLowerCase().includes(search.toLowerCase())
  );

  const getStatusColor = (status) => {
    if (status === "Paid") {
      return "bg-green-100 text-green-700";
    }

    if (status === "Pending") {
      return "bg-yellow-100 text-yellow-700";
    }

    return "bg-red-100 text-red-600";
  };

  return (
    <div className="space-y-6">
      <PageHeader
        title="Transactions"
        subtitle="Riwayat transaksi treatment pelanggan GlowCare Clinic"
      />

      <div className="bg-white rounded-[28px] p-6 shadow-sm">
        {/* TOP BAR */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4 mb-6">
          {/* SEARCH */}
          <div className="relative">
            <Search
              size={18}
              className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400"
            />

            <input
              type="text"
              placeholder="Search transaction..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="
                w-full
                md:w-[320px]
                h-[48px]
                pl-11
                pr-5
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
            />
          </div>

          {/* BUTTON */}
          <button
            className="
              h-[48px]
              px-5
              rounded-2xl
              bg-gradient-to-r
              from-pink-500
              to-purple-600
              text-white
              text-sm
              font-semibold
              shadow-lg
              hover:scale-[1.02]
              transition
            "
          >
            + Add Transaction
          </button>
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
                  Date
                </th>

                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Payment
                </th>

                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Total
                </th>

                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Promo
                </th>

                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Status
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredTransactions.map((item) => (
                <tr
                  key={item.id}
                  className="
                    border-b
                    border-[#f8f9fa]
                    hover:bg-[#f8f9fa]
                    transition
                  "
                >
                  {/* CUSTOMER */}
                  <td className="px-4 py-5">
                    <div className="flex items-center gap-4">
                      <div
                        className="
                          w-11
                          h-11
                          rounded-2xl
                          bg-gradient-to-br
                          from-pink-500
                          to-purple-600
                          flex
                          items-center
                          justify-center
                          text-white
                          shadow-md
                        "
                      >
                        <ReceiptText size={20} />
                      </div>

                      <div>
                        <h3 className="font-semibold text-[#344767]">
                          {item.customerName}
                        </h3>

                        <p className="text-xs text-gray-400 mt-1">
                          {item.source}
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* TREATMENT */}
                  <td className="px-4 py-5">
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        font-semibold
                        text-pink-500
                      "
                    >
                      <Sparkles size={16} />
                      {item.treatment}
                    </span>
                  </td>

                  {/* DATE */}
                  <td className="px-4 py-5">
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-gray-500
                      "
                    >
                      <Calendar size={16} />
                      {item.date}
                    </span>
                  </td>

                  {/* PAYMENT */}
                  <td className="px-4 py-5">
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        text-sm
                        text-gray-500
                      "
                    >
                      <CreditCard size={16} />
                      {item.paymentMethod}
                    </span>
                  </td>

                  {/* TOTAL */}
                  <td className="px-4 py-5">
                    <span className="font-bold text-pink-500">
                      Rp {item.total.toLocaleString("id-ID")}
                    </span>
                  </td>

                  {/* PROMO */}
                  <td className="px-4 py-5">
                    <span
                      className="
                        inline-flex
                        items-center
                        gap-2
                        px-3
                        py-1
                        rounded-xl
                        bg-pink-100
                        text-pink-600
                        text-xs
                        font-bold
                      "
                    >
                      <BadgePercent size={13} />
                      {item.promo}
                    </span>
                  </td>

                  {/* STATUS */}
                  <td className="px-4 py-5">
                    <span
                      className={`
                        px-3
                        py-1
                        rounded-xl
                        text-xs
                        font-bold
                        ${getStatusColor(item.status)}
                      `}
                    >
                      {item.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* EMPTY */}
        {filteredTransactions.length === 0 && (
          <div className="py-16 text-center">
            <h3 className="font-bold text-[#344767] text-lg">
              Transaction tidak ditemukan
            </h3>

            <p className="text-gray-400 mt-2 text-sm">
              Coba gunakan keyword lain.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}