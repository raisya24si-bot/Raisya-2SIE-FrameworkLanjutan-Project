import { Link } from "react-router-dom";
import { Search } from "lucide-react";
import { useEffect, useRef, useState } from "react";

import customers from "../data/customers";

import SoftCard from "@/components/ui/SoftCard";
import SoftButton from "@/components/ui/SoftButton";
import SoftBadge from "@/components/ui/SoftBadge";
import SoftIconBox from "@/components/ui/SoftIconBox";

export default function Customers() {
  const [search, setSearch] = useState("");
  const searchRef = useRef(null);

  useEffect(() => {
    document.title = "GlowCare Clinic - Customers";
    searchRef.current?.focus();
  }, []);

  const filteredCustomers = customers.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  const getMembershipColor = (membership) => {
    if (membership === "Gold") return "success";
    if (membership === "Silver") return "dark";
    return "primary";
  };

  return (
    <SoftCard className="p-6">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#344767]">Customers Table</h3>
          <p className="mt-1 text-sm font-semibold text-[#8392ab]">
            Data pelanggan GlowCare Clinic
          </p>
        </div>

        <div className="flex flex-col gap-3 md:flex-row md:items-center">
          <div className="relative">
            <Search
              size={16}
              className="absolute left-3 top-1/2 -translate-y-1/2 text-[#8392ab]"
            />

            <input
              ref={searchRef}
              type="text"
              placeholder="Search customer..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-full rounded-xl border border-[#e9ecef] bg-white pl-10 pr-3 text-sm text-[#344767] outline-none placeholder:text-[#8392ab] focus:border-[#ff0080] md:w-[240px]"
            />
          </div>

          <SoftButton size="sm">Add Customer</SoftButton>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#f0f2f5]">
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Customer
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Phone
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Email
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Last Treatment
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Membership
              </th>
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredCustomers.map((item) => (
              <tr
                key={item.id}
                className="border-b border-[#f0f2f5] last:border-b-0"
              >
                <td className="px-2 py-4">
                  <div className="flex items-center gap-3">
                    <SoftIconBox size="md">
                      <span className="text-sm font-bold">
                        {item.name.charAt(0)}
                      </span>
                    </SoftIconBox>

                    <div>
                      <Link
                        to={`/customers/${item.id}`}
                        className="text-sm font-bold text-[#344767] hover:text-[#ff0080]"
                      >
                        {item.name}
                      </Link>

                      <p className="mt-1 text-xs font-semibold text-[#8392ab]">
                        Customer GlowCare
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-2 py-4 text-sm font-semibold text-[#67748e]">
                  {item.phone}
                </td>

                <td className="px-2 py-4 text-sm font-semibold text-[#67748e]">
                  {item.email}
                </td>

                <td className="px-2 py-4">
                  <span className="text-sm font-bold text-[#ff0080]">
                    {item.lastTreatment}
                  </span>
                </td>

                <td className="px-2 py-4">
                  <SoftBadge color={getMembershipColor(item.membership)}>
                    {item.membership}
                  </SoftBadge>
                </td>

                <td className="px-2 py-4">
                  <Link
                    to={`/customers/${item.id}`}
                    className="text-xs font-bold text-[#8392ab] hover:text-[#ff0080]"
                  >
                    Edit
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      {filteredCustomers.length === 0 && (
        <div className="py-14 text-center">
          <h3 className="text-lg font-bold text-[#344767]">
            Customer tidak ditemukan
          </h3>
          <p className="mt-2 text-sm font-semibold text-[#8392ab]">
            Coba gunakan keyword lain.
          </p>
        </div>
      )}
    </SoftCard>
  );
}