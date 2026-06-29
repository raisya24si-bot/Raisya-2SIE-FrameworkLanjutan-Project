import { useEffect } from "react";
import { Calendar, Gift, Sparkles, Star } from "lucide-react";

import MembershipCard from "@/components/member/MembershipCard";
import PointCard from "@/components/member/PointCard";
import PromoCard from "@/components/member/PromoCard";
import TreatmentCard from "@/components/member/TreatmentCard";
import AppointmentCard from "@/components/member/AppointmentCard";

import SoftCard from "@/components/ui/SoftCard";
import SoftBadge from "@/components/ui/SoftBadge";
import SoftIconBox from "@/components/ui/SoftIconBox";
import SoftButton from "@/components/ui/SoftButton";

const recommendedTreatments = [
  {
    name: "Facial Glow",
    category: "Face Treatment",
    price: "Rp 250.000",
    duration: "60 menit",
    rating: "4.9",
    image: "/img/facial.jpg",
    desc: "Treatment wajah untuk membantu kulit terasa lebih bersih, sehat, dan glowing.",
  },
  {
    name: "Brightening Facial",
    category: "Brightening",
    price: "Rp 280.000",
    duration: "60 menit",
    rating: "4.8",
    image: "/img/brightening.jpg",
    desc: "Perawatan untuk membantu kulit tampak lebih cerah dan merata.",
  },
  {
    name: "Hydrafacial",
    category: "Premium Facial",
    price: "Rp 350.000",
    duration: "70 menit",
    rating: "4.9",
    image: "/img/hydrafacial.jpg",
    desc: "Treatment hidrasi wajah agar kulit terasa lebih lembap dan fresh.",
  },
];

export default function MemberDashboard() {
  useEffect(() => {
    document.title = "GlowCare Clinic - Member Home";
  }, []);

  return (
    <div className="space-y-5">
      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <div className="xl:col-span-2">
          <MembershipCard
            name="Raisya Revalina"
            memberId="GLC-240001"
            type="Gold"
            points={1250}
            discount="20%"
          />
        </div>

        <PointCard points={1250} target={1500} />
      </div>

      <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
        <PromoCard
          title="Facial Glow Discount"
          discount="20%"
          memberType="Gold Member"
          validUntil="30 Juni 2026"
          desc="Nikmati promo khusus Gold Member untuk treatment Facial Glow bulan ini."
        />

        <AppointmentCard
          treatment="Acne Treatment"
          therapist="Siska Amelia"
          date="15 Juni 2026"
          time="10:00 WIB"
          status="Confirmed"
        />

        <SoftCard className="p-5">
          <div className="flex items-center gap-3">
            <SoftIconBox size="lg">
              <Gift size={18} />
            </SoftIconBox>

            <div>
              <h3 className="text-lg font-bold text-[#344767]">
                Member Benefit
              </h3>
              <p className="text-sm font-semibold text-[#8392ab]">
                Benefit khusus untuk Gold Member
              </p>
            </div>
          </div>

          <div className="mt-5 space-y-3">
            {[
              "Diskon 20% untuk treatment tertentu",
              "Prioritas booking appointment",
              "Bonus point setiap transaksi",
              "Promo birthday treatment",
            ].map((item, index) => (
              <div
                key={index}
                className="flex items-center justify-between rounded-xl bg-[#f8f9fa] px-4 py-3"
              >
                <div className="flex items-center gap-2">
                  <Star
                    size={15}
                    className="text-[#fbcf33]"
                    fill="currentColor"
                  />
                  <p className="text-sm font-semibold text-[#67748e]">
                    {item}
                  </p>
                </div>

                <SoftBadge color="success">Active</SoftBadge>
              </div>
            ))}
          </div>
        </SoftCard>
      </div>

      <div>
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#344767]">
              Recommended Treatments
            </h3>
            <p className="mt-1 text-sm font-semibold text-[#8392ab]">
              Treatment pilihan yang cocok untuk member GlowCare
            </p>
          </div>

          <SoftButton size="sm">
            <Sparkles size={15} />
            View All
          </SoftButton>
        </div>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
          {recommendedTreatments.map((item, index) => (
            <TreatmentCard key={index} {...item} />
          ))}
        </div>
      </div>

      <SoftCard className="p-5">
        <div className="mb-5 flex items-center justify-between">
          <div>
            <h3 className="text-lg font-bold text-[#344767]">
              Recent Appointment History
            </h3>
            <p className="mt-1 text-sm font-semibold text-[#8392ab]">
              Riwayat treatment terakhir member
            </p>
          </div>

          <SoftIconBox size="md">
            <Calendar size={18} />
          </SoftIconBox>
        </div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3">
          {[
            ["Facial Glow", "Completed", "02 Juni 2026"],
            ["Brightening Facial", "Completed", "21 Mei 2026"],
            ["Hydrafacial", "Cancelled", "10 Mei 2026"],
          ].map(([treatment, status, date], index) => (
            <SoftCard key={index} className="border border-[#f0f2f5] p-4">
              <h4 className="text-sm font-bold text-[#344767]">{treatment}</h4>

              <p className="mt-2 text-xs font-semibold text-[#8392ab]">
                {date}
              </p>

              <div className="mt-4">
                <SoftBadge
                  color={
                    status === "Completed"
                      ? "success"
                      : status === "Cancelled"
                      ? "danger"
                      : "warning"
                  }
                >
                  {status}
                </SoftBadge>
              </div>
            </SoftCard>
          ))}
        </div>
      </SoftCard>
    </div>
  );
}