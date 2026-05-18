import { useState } from "react";
import treatments from "../data/treatments";
import PageHeader from "../components/PageHeader";
import { Link } from "react-router-dom";

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

        {/* SEARCH */}
        <div className="mb-6">

          <input
            type="text"
            placeholder="Search treatment..."
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
                  Nama Treatment
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
                  className="border-b border-[#f8f9fa] hover:bg-[#f8f9fa] transition"
                >

                  <td className="px-4 py-5">

                    <Link
                      to={`/treatments/${item.id}`}
                      className="font-semibold text-[#344767] hover:text-pink-500 transition"
                    >
                      {item.name}
                    </Link>
                  </td>

                  <td className="px-4 py-5 text-sm text-gray-500">
                    {item.category}
                  </td>

                  <td className="px-4 py-5">

                    <span className="font-bold text-pink-500">
                      Rp {item.price.toLocaleString("id-ID")}
                    </span>
                  </td>

                  <td className="px-4 py-5 text-sm text-gray-500">
                    {item.duration}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredTreatments.length === 0 && (
          <p className="text-center text-gray-400 py-10">
            Treatment tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}