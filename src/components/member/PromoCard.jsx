import { Gift, ArrowRight } from "lucide-react";
import SoftCard from "@/components/ui/SoftCard";
import SoftBadge from "@/components/ui/SoftBadge";
import SoftButton from "@/components/ui/SoftButton";
import SoftIconBox from "@/components/ui/SoftIconBox";

export default function PromoCard({
  title = "Facial Glow Discount",
  discount = "20%",
  desc = "Promo khusus member GlowCare untuk treatment pilihan bulan ini.",
  memberType = "Gold",
  validUntil = "30 Juni 2026",
}) {
  return (
    <SoftCard className="p-5">
      <div className="flex items-start justify-between gap-4">
        <SoftIconBox size="lg">
          <Gift size={18} />
        </SoftIconBox>

        <SoftBadge color="primary">{memberType}</SoftBadge>
      </div>

      <h3 className="mt-5 text-lg font-bold text-[#344767]">{title}</h3>

      <div className="mt-2 flex items-end gap-2">
        <h2 className="text-4xl font-extrabold text-[#ff0080]">{discount}</h2>
        <p className="mb-1 text-sm font-bold text-[#8392ab]">OFF</p>
      </div>

      <p className="mt-3 text-sm font-semibold leading-relaxed text-[#8392ab]">
        {desc}
      </p>

      <p className="mt-3 text-xs font-bold uppercase text-[#67748e]">
        Valid until: {validUntil}
      </p>

      <SoftButton size="sm" className="mt-5">
        Use Promo
        <ArrowRight size={14} />
      </SoftButton>
    </SoftCard>
  );
}