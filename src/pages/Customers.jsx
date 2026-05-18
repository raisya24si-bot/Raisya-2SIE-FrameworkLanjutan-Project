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
    if (membership === "Gold")
      return "bg-yellow-100 text-yellow-700";

    if (membership === "Silver")
      return "bg-gray-200 text-gray-700";

    return "bg-pink-100 text-pink-600";
  };

  return (
    <div className="space-y-6">

      <PageHeader
        title="Customers"
        subtitle="Data pelanggan GlowCare Clinic"
      />

      <div className="bg-white rounded-[28px] p-6 shadow-sm">

        {/* SEARCH */}
        <div className="mb-6">

          <input
            type="text"
            placeholder="Search customer..."
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
                  Nama
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
                  className="border-b border-[#f8f9fa] hover:bg-[#f8f9fa] transition"
                >

                  <td className="px-4 py-5">

                    <Link
                      to={`/customers/${item.id}`}
                      className="font-semibold text-[#344767] hover:text-pink-500 transition"
                    >
                      {item.name}
                    </Link>
                  </td>

                  <td className="px-4 py-5 text-sm text-gray-500">
                    {item.phone}
                  </td>

                  <td className="px-4 py-5 text-sm text-gray-500">
                    {item.email}
                  </td>

                  <td className="px-4 py-5 font-medium text-pink-500">
                    {item.lastTreatment}
                  </td>

                  <td className="px-4 py-5">

                    <span
                      className={`px-3 py-1 rounded-xl text-xs font-bold ${getMembershipColor(
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
          <p className="text-center text-gray-400 py-10">
            Customer tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}