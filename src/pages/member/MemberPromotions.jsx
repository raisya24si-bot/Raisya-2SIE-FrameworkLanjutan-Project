import { useEffect } from "react";
import { Gift, TicketPercent } from "lucide-react";

import PromoCard from "@/components/member/PromoCard";

import SoftCard from "@/components/ui/SoftCard";
import SoftButton from "@/components/ui/SoftButton";
import SoftIconBox from "@/components/ui/SoftIconBox";
import SoftBadge from "@/components/ui/SoftBadge";

const promos = [
  {
    title: "Facial Glow Discount",
    discount: "20%",
    memberType: "Gold",
    validUntil: "30 Juni 2026",
    desc: "Promo khusus Gold Member untuk treatment Facial Glow.",
  },
  {
    title: "Hydrafacial Weekend",
    discount: "15%",
    memberType: "Silver",
    validUntil: "20 Juli 2026",
    desc: "Diskon khusus weekend untuk Hydrafacial.",
  },
  {
    title: "Birthday Promo",
    discount: "25%",
    memberType: "Gold",
    validUntil: "31 Desember 2026",
    desc: "Nikmati promo ulang tahun GlowCare.",
  },
  {
    title: "Laser Package",
    discount: "10%",
    memberType: "Bronze",
    validUntil: "15 Agustus 2026",
    desc: "Potongan harga Laser Rejuvenation.",
  },
];

export default function MemberPromotions() {
  useEffect(() => {
    document.title = "GlowCare Clinic - Promotions";
  }, []);

  return (
    <div className="space-y-5">

      <SoftCard className="p-6">

        <div className="flex items-center justify-between">

          <div className="flex items-center gap-4">

            <SoftIconBox size="lg">
              <Gift size={18} />
            </SoftIconBox>

            <div>
              <h2 className="text-lg font-bold text-[#344767]">
                Exclusive Member Promotions
              </h2>

              <p className="mt-1 text-sm font-semibold text-[#8392ab]">
                Promo spesial untuk member GlowCare Clinic.
              </p>
            </div>

          </div>

          <SoftButton>
            <TicketPercent size={16} />
            Claim Voucher
          </SoftButton>

        </div>

      </SoftCard>

      <SoftCard className="p-6">

        <div className="flex items-center justify-between">

          <div>
            <h3 className="text-lg font-bold text-[#344767]">
              Available Voucher
            </h3>

            <p className="mt-1 text-sm font-semibold text-[#8392ab]">
              Voucher yang bisa digunakan sekarang.
            </p>

          </div>

          <SoftBadge color="success">
            4 Active
          </SoftBadge>

        </div>

      </SoftCard>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-2">

        {promos.map((promo, index) => (
          <PromoCard
            key={index}
            {...promo}
          />
        ))}

      </div>

    </div>
  );
}