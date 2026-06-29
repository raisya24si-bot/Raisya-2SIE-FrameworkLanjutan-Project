import { Link } from "react-router-dom";
import { Search, Sparkles, Clock, Tag } from "lucide-react";
import { useEffect, useState } from "react";

import treatments from "../data/treatments";

import SoftCard from "@/components/ui/SoftCard";
import SoftButton from "@/components/ui/SoftButton";
import SoftBadge from "@/components/ui/SoftBadge";
import SoftIconBox from "@/components/ui/SoftIconBox";

export default function Treatments() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "GlowCare Clinic - Treatments";
  }, []);

  const filteredTreatments = treatments.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <SoftCard className="p-6">
      <div className="mb-5 flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
        <div>
          <h3 className="text-lg font-bold text-[#344767]">
            Treatments Table
          </h3>

          <p className="mt-1 text-sm font-semibold text-[#8392ab]">
            Daftar layanan perawatan di GlowCare Clinic
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
              placeholder="Search treatment..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="h-10 w-full rounded-xl border border-[#e9ecef] bg-white pl-10 pr-3 text-sm text-[#344767] outline-none placeholder:text-[#8392ab] focus:border-[#ff0080] md:w-[240px]"
            />
          </div>

          <SoftButton size="sm">Add Treatment</SoftButton>
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full text-left">
          <thead>
            <tr className="border-b border-[#f0f2f5]">
              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Treatment
              </th>

              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Category
              </th>

              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Price
              </th>

              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Duration
              </th>

              <th className="px-2 py-3 text-xs font-bold uppercase text-[#8392ab]">
                Action
              </th>
            </tr>
          </thead>

          <tbody>
            {filteredTreatments.map((item) => (
              <tr
                key={item.id}
                className="border-b border-[#f0f2f5] last:border-b-0"
              >
                <td className="px-2 py-4">
                  <div className="flex items-center gap-3">
                    <SoftIconBox size="md">
                      <Sparkles size={16} />
                    </SoftIconBox>

                    <div>
                      <Link
                        to={`/treatments/${item.id}`}
                        className="text-sm font-bold text-[#344767] hover:text-[#ff0080]"
                      >
                        {item.name}
                      </Link>

                      <p className="mt-1 text-xs font-semibold text-[#8392ab]">
                        GlowCare Treatment
                      </p>
                    </div>
                  </div>
                </td>

                <td className="px-2 py-4">
                  <div className="flex items-center gap-2">
                    <Tag size={14} className="text-[#ff0080]" />
                    <SoftBadge color="primary">{item.category}</SoftBadge>
                  </div>
                </td>

                <td className="px-2 py-4">
                  <span className="text-sm font-bold text-[#ff0080]">
                    Rp {item.price.toLocaleString("id-ID")}
                  </span>
                </td>

                <td className="px-2 py-4">
                  <div className="flex items-center gap-2 text-sm font-semibold text-[#67748e]">
                    <Clock size={15} />
                    {item.duration}
                  </div>
                </td>

                <td className="px-2 py-4">
                  <Link
                    to={`/treatments/${item.id}`}
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

      {filteredTreatments.length === 0 && (
        <div className="py-14 text-center">
          <h3 className="text-lg font-bold text-[#344767]">
            Treatment tidak ditemukan
          </h3>

          <p className="mt-2 text-sm font-semibold text-[#8392ab]">
            Coba gunakan keyword lain.
          </p>
        </div>
      )}
    </SoftCard>
  );
}