import { Link, useParams } from "react-router-dom";
import {
  Phone,
  Mail,
  Crown,
  Sparkles,
  ArrowLeft,
} from "lucide-react";

import customers from "../data/customers";
import PageHeader from "../components/PageHeader";

export default function CustomerDetail() {
  const { id } = useParams();

  const customer = customers.find(
    (item) => item.id == id
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

  if (!customer) {
    return (
      <div className="p-10 text-center">
        <h1 className="text-2xl font-bold text-[#344767]">
          Customer tidak ditemukan
        </h1>

        <Link
          to="/customers"
          className="inline-block mt-5 text-pink-500 font-semibold"
        >
          ← Kembali ke Customers
        </Link>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* HEADER */}
      <PageHeader
        title="Customer Detail"
        subtitle="Informasi lengkap pelanggan GlowCare"
      />

      {/* BACK BUTTON */}
      <Link
        to="/customers"
        className="
          inline-flex
          items-center
          gap-2
          text-sm
          font-semibold
          text-[#344767]
          hover:text-pink-500
          transition
        "
      >
        <ArrowLeft size={18} />
        Back to Customers
      </Link>

      {/* MAIN CARD */}
      <div
        className="
          bg-white
          rounded-[32px]
          shadow-sm
          overflow-hidden
        "
      >
        {/* COVER */}
        <div className="relative h-[320px]">
          <img
            src={customer.image}
            alt={customer.name}
            className="w-full h-full object-cover"
          />

          {/* OVERLAY */}
          <div className="absolute inset-0 bg-black/40"></div>

          {/* PROFILE */}
          <div
            className="
              absolute
              bottom-6
              left-6
              flex
              items-center
              gap-5
            "
          >
            {/* AVATAR */}
            <div
              className="
                w-24
                h-24
                rounded-3xl
                bg-gradient-to-br
                from-pink-500
                to-purple-600
                flex
                items-center
                justify-center
                text-white
                text-4xl
                font-bold
                shadow-2xl
                border-4
                border-white
              "
            >
              {customer.name.charAt(0)}
            </div>

            {/* NAME */}
            <div className="text-white">
              <h1 className="text-4xl font-bold">
                {customer.name}
              </h1>

              <p className="text-gray-200 mt-2">
                GlowCare Premium Customer
              </p>
            </div>
          </div>
        </div>

        {/* CONTENT */}
        <div className="p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            
            {/* LEFT */}
            <div className="space-y-5">
              
              {/* PHONE */}
              <div
                className="
                  bg-[#f8f9fa]
                  rounded-3xl
                  p-5
                  flex
                  items-center
                  gap-4
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-gradient-to-br
                    from-pink-500
                    to-purple-600
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <Phone size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Phone Number
                  </p>

                  <h3 className="font-bold text-[#344767] mt-1">
                    {customer.phone}
                  </h3>
                </div>
              </div>

              {/* EMAIL */}
              <div
                className="
                  bg-[#f8f9fa]
                  rounded-3xl
                  p-5
                  flex
                  items-center
                  gap-4
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-gradient-to-br
                    from-pink-500
                    to-purple-600
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <Mail size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Email Address
                  </p>

                  <h3 className="font-bold text-[#344767] mt-1">
                    {customer.email}
                  </h3>
                </div>
              </div>
            </div>

            {/* RIGHT */}
            <div className="space-y-5">
              
              {/* LAST TREATMENT */}
              <div
                className="
                  bg-[#f8f9fa]
                  rounded-3xl
                  p-5
                  flex
                  items-center
                  gap-4
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-gradient-to-br
                    from-pink-500
                    to-purple-600
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <Sparkles size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Last Treatment
                  </p>

                  <h3 className="font-bold text-pink-500 mt-1">
                    {customer.lastTreatment}
                  </h3>
                </div>
              </div>

              {/* MEMBERSHIP */}
              <div
                className="
                  bg-[#f8f9fa]
                  rounded-3xl
                  p-5
                  flex
                  items-center
                  gap-4
                "
              >
                <div
                  className="
                    w-12
                    h-12
                    rounded-2xl
                    bg-gradient-to-br
                    from-pink-500
                    to-purple-600
                    flex
                    items-center
                    justify-center
                    text-white
                  "
                >
                  <Crown size={20} />
                </div>

                <div>
                  <p className="text-sm text-gray-400">
                    Membership
                  </p>

                  <span
                    className={`
                      inline-block
                      mt-2
                      px-4
                      py-2
                      rounded-2xl
                      text-sm
                      font-bold
                      ${getMembershipColor(customer.membership)}
                    `}
                  >
                    {customer.membership}
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* NOTES */}
          <div
            className="
              mt-8
              rounded-3xl
              bg-gradient-to-r
              from-pink-500
              to-purple-600
              p-6
              text-white
            "
          >
            <h2 className="text-xl font-bold">
              Customer Notes
            </h2>

            <p className="mt-3 text-sm leading-relaxed text-pink-100">
              Customer aktif dengan riwayat treatment rutin di
              GlowCare Clinic. Membership memberikan akses
              promo khusus, priority booking, dan treatment
              premium eksklusif.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}