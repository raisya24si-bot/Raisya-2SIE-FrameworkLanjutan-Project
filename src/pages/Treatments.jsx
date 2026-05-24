import { useState } from "react";
import { Link } from "react-router-dom";
import { Search, Sparkles, Clock, Tag } from "lucide-react";

import treatments from "../data/treatments";
import PageHeader from "../components/PageHeader";

export default function Treatments() {
  const [search, setSearch] = useState("");

  const filteredTreatments = treatments.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      <PageHeader
        title="Treatments"
        subtitle="Daftar layanan perawatan di GlowCare Clinic"
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
              placeholder="Search treatment..."
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
            + Add Treatment
          </button>
        </div>

        {/* TABLE */}
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="border-b border-[#f1f3f5]">
                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Treatment
                </th>

                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Kategori
                </th>

                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Harga
                </th>

                <th className="text-left text-xs font-bold tracking-wider text-gray-400 uppercase px-4 pb-4">
                  Durasi
                </th>
              </tr>
            </thead>

            <tbody>
              {filteredTreatments.map((item) => (
                <tr
                  key={item.id}
                  className="
                    border-b
                    border-[#f8f9fa]
                    hover:bg-[#f8f9fa]
                    transition
                  "
                >
                  {/* TREATMENT NAME */}
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
                        <Sparkles size={20} />
                      </div>

                      <div>
                        <Link
                          to={`/treatments/${item.id}`}
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
                          GlowCare Treatment
                        </p>
                      </div>
                    </div>
                  </td>

                  {/* CATEGORY */}
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
                      <Tag size={13} />
                      {item.category}
                    </span>
                  </td>

                  {/* PRICE */}
                  <td className="px-4 py-5">
                    <span className="font-bold text-pink-500">
                      Rp {item.price.toLocaleString("id-ID")}
                    </span>
                  </td>

                  {/* DURATION */}
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
                      <Clock size={16} />
                      {item.duration}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {/* EMPTY */}
        {filteredTreatments.length === 0 && (
          <div className="py-16 text-center">
            <h3 className="font-bold text-[#344767] text-lg">
              Treatment tidak ditemukan
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