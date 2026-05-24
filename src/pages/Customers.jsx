import { useState } from "react";
import { Link } from "react-router-dom";
import { Search } from "lucide-react";

import customers from "../data/customers";
import PageHeader from "../components/PageHeader";

export default function Customers() {
  const [search, setSearch] = useState("");

  const filteredCustomers = customers.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const getMembershipColor = (membership) => {
    if (membership === "Gold") {
      return "bg-yellow-100 text-yellow-700";
    }

    if (membership === "Silver") {
      return "bg-gray-200 text-gray-700";
    }

    return "bg-pink-100 text-pink-600";
  };

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <PageHeader
        title="Customers"
        subtitle="Data pelanggan GlowCare Clinic"
      />

      {/* MAIN CARD */}
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
              placeholder="Search customer..."
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
            + Add Customer
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
                  Phone
                </th>

                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Email
                </th>

                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Last Treatment
                </th>

                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Membership
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredCustomers.map((item) => (
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
                      
                      {/* AVATAR */}
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
                          font-bold
                          shadow-md
                        "
                      >
                        {item.name.charAt(0)}
                      </div>

                      {/* NAME */}
                      <div>
                        <Link
                          to={`/customers/${item.id}`}
                          className="
                            font-semibold
                            text-[#344767]
                            hover:text-pink-500
                            transition
                          "
                        >
                          {item.name}
                        </Link>

                        <p className="text-xs text-gray-400 mt-1">
                          Customer GlowCare
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* PHONE */}
                  <td className="px-4 py-5 text-sm text-gray-500">
                    {item.phone}
                  </td>

                  {/* EMAIL */}
                  <td className="px-4 py-5 text-sm text-gray-500">
                    {item.email}
                  </td>

                  {/* TREATMENT */}
                  <td className="px-4 py-5">
                    <span className="font-semibold text-pink-500">
                      {item.lastTreatment}
                    </span>
                  </td>

                  {/* MEMBERSHIP */}
                  <td className="px-4 py-5">
                    <span
                      className={`
                        px-3
                        py-1
                        rounded-xl
                        text-xs
                        font-bold
                        ${getMembershipColor(item.membership)}
                      `}
                    >
                      {item.membership}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* EMPTY */}
        {filteredCustomers.length === 0 && (
          <div className="py-16 text-center">
            <h3 className="font-bold text-[#344767] text-lg">
              Customer tidak ditemukan
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