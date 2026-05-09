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
    <div>
      <PageHeader
        title="Treatments"
        subtitle="Daftar layanan perawatan di GlowCare Clinic"
      />

      <div className="bg-white rounded-2xl border border-rose-100 p-5 shadow-sm">
        <input
          type="text"
          placeholder="Cari treatment..."
          className="w-full md:w-80 mb-5 border border-rose-200 rounded-xl px-4 py-3 outline-none focus:ring-2 focus:ring-rose-300"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <div className="overflow-x-auto">
          <table className="w-full text-left">
            <thead className="bg-rose-50 text-slate-600">
              <tr>
                <th className="p-4">Nama Treatment</th>
                <th className="p-4">Kategori</th>
                <th className="p-4">Harga</th>
                <th className="p-4">Durasi</th>
              </tr>
            </thead>

            <tbody>
              {filteredTreatments.map((item) => (
                <tr
                  key={item.id}
                  className="border-t border-rose-100"
                >
                  <td className="p-4 font-medium">
                    <Link
                      to={`/treatments/${item.id}`}
                      className="text-rose-500 hover:underline"
                    >
                      {item.name}
                    </Link>
                  </td>

                  <td className="p-4">{item.category}</td>

                  <td className="p-4 text-rose-500 font-semibold">
                    Rp {item.price.toLocaleString("id-ID")}
                  </td>

                  <td className="p-4">{item.duration}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        {filteredTreatments.length === 0 && (
          <p className="text-center text-slate-400 py-6">
            Treatment tidak ditemukan.
          </p>
        )}
      </div>
    </div>
  );
}