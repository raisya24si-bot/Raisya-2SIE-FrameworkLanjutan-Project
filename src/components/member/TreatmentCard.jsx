import { Calendar, Clock, Star } from "lucide-react";
import SoftCard from "@/components/ui/SoftCard";
import SoftBadge from "@/components/ui/SoftBadge";
import SoftButton from "@/components/ui/SoftButton";

export default function MemberTreatmentCard({
  name = "Facial Glow",
  category = "Face Treatment",
  price = "Rp 250.000",
  duration = "60 menit",
  rating = "4.9",
  image = "/img/facial.jpg",
  desc = "Treatment wajah untuk membantu kulit terasa lebih bersih, sehat, dan glowing.",
}) {
  return (
    <SoftCard className="group overflow-hidden p-4 transition hover:-translate-y-1">
      <div className="relative overflow-hidden rounded-2xl">
        <img
          src={image}
          alt={name}
          className="h-48 w-full object-cover transition duration-300 group-hover:scale-105"
        />

        <div className="absolute left-4 top-4">
          <SoftBadge color="primary">{category}</SoftBadge>
        </div>
      </div>

      <div className="pt-5">
        <div className="flex items-center justify-between gap-3">
          <h3 className="text-lg font-bold text-[#344767]">{name}</h3>

          <div className="flex items-center gap-1 text-sm font-bold text-[#fbcf33]">
            <Star size={15} fill="currentColor" />
            {rating}
          </div>
        </div>

        <p className="mt-2 text-sm font-semibold leading-relaxed text-[#8392ab]">
          {desc}
        </p>

        <div className="mt-5 flex items-center justify-between">
          <div>
            <p className="text-xs font-bold uppercase text-[#8392ab]">Price</p>
            <p className="text-sm font-bold text-[#ff0080]">{price}</p>
          </div>

          <div className="flex items-center gap-2 text-sm font-semibold text-[#67748e]">
            <Clock size={15} />
            {duration}
          </div>
        </div>

        <SoftButton size="sm" className="mt-5 w-full">
          <Calendar size={15} />
          Book Treatment
        </SoftButton>
      </div>
    </SoftCard>
  );
}