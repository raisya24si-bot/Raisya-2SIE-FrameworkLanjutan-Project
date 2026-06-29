import { Star } from "lucide-react";
import SoftCard from "@/components/ui/SoftCard";
import SoftIconBox from "@/components/ui/SoftIconBox";

export default function PointCard({
  points = 1250,
  target = 1500,
  title = "Member Points",
}) {
  const progress = Math.min((points / target) * 100, 100);

  return (
    <SoftCard className="p-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[#8392ab]">{title}</p>
          <h3 className="mt-1 text-2xl font-bold text-[#344767]">
            {points} pts
          </h3>
        </div>

        <SoftIconBox size="lg">
          <Star size={18} />
        </SoftIconBox>
      </div>

      <div className="mt-5 h-2 overflow-hidden rounded-full bg-[#e9ecef]">
        <div
          className="h-full rounded-full bg-[linear-gradient(310deg,#7928ca_0%,#ff0080_100%)]"
          style={{ width: `${progress}%` }}
        />
      </div>

      <p className="mt-3 text-xs font-semibold text-[#8392ab]">
        {target - points > 0
          ? `${target - points} poin lagi menuju level berikutnya`
          : "Kamu sudah mencapai target poin"}
      </p>
    </SoftCard>
  );
}