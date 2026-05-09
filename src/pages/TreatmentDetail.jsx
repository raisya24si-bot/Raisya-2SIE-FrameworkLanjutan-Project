import { useParams } from "react-router-dom";
import treatments from "../data/treatments";

export default function TreatmentDetail() {
  const { id } = useParams();

  const treatment = treatments.find(
    (item) => item.id == id
  );

  return (
    <div className="p-6">
      <div className="bg-white rounded-3xl shadow-sm border border-rose-100 overflow-hidden max-w-xl mx-auto">

        <img
          src={treatment.image}
          alt={treatment.name}
          className="w-full h-[300px] object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">
            {treatment.name}
          </h1>

          <div className="space-y-3 text-slate-600">
            <p>
              <span className="font-semibold">Kategori:</span>{" "}
              {treatment.category}
            </p>

            <p>
              <span className="font-semibold">Harga:</span>{" "}
              Rp {treatment.price.toLocaleString("id-ID")}
            </p>

            <p>
              <span className="font-semibold">Durasi:</span>{" "}
              {treatment.duration}
            </p>

            <p>
              <span className="font-semibold">Deskripsi:</span>{" "}
              {treatment.description}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}