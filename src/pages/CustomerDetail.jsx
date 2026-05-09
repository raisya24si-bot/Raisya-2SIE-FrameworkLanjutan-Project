import { useParams } from "react-router-dom";
import customers from "../data/customers";
export default function CustomerDetail() {
  const { id } = useParams();

  const customer = customers.find(
    (item) => item.id == id
  );
  return (
    <div className="p-6">
      <div className="bg-white rounded-3xl shadow-sm border border-rose-100 overflow-hidden max-w-xl mx-auto">

        <img
          src={customer.image}
          alt={customer.name}
          className="w-full h-[300px] object-cover"
        />

        <div className="p-6">
          <h1 className="text-3xl font-bold mb-4">
            {customer.name}
          </h1>

          <div className="space-y-3 text-slate-600">
            <p>
              <span className="font-semibold">Phone:</span>{" "}
              {customer.phone}
            </p>

            <p>
              <span className="font-semibold">Email:</span>{" "}
              {customer.email}
            </p>

            <p>
              <span className="font-semibold">
                Last Treatment:
              </span>{" "}
              {customer.lastTreatment}
            </p>

            <p>
              <span className="font-semibold">
                Membership:
              </span>{" "}
              {customer.membership}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}