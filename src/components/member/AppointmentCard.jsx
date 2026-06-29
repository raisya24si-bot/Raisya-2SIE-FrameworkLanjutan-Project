import { Calendar, Clock, Sparkles } from "lucide-react";

import SoftCard from "@/components/ui/SoftCard";
import SoftBadge from "@/components/ui/SoftBadge";
import SoftButton from "@/components/ui/SoftButton";
import SoftIconBox from "@/components/ui/SoftIconBox";

export default function MemberAppointmentCard({
  treatment = "Facial Glow",
  therapist = "Siska Amelia",
  date = "15 Juni 2026",
  time = "10:00 WIB",
  status = "Confirmed",
}) {
  const statusColor =
    status === "Confirmed"
      ? "success"
      : status === "Pending"
      ? "warning"
      : status === "Completed"
      ? "info"
      : "danger";

  return (
    <SoftCard className="p-5">
      <div className="flex items-start justify-between gap-4">
        <div className="flex items-center gap-3">
          <SoftIconBox size="md">
            <Sparkles size={17} />
          </SoftIconBox>

          <div>
            <h3 className="text-sm font-bold text-[#344767]">{treatment}</h3>
            <p className="mt-1 text-xs font-semibold text-[#8392ab]">
              Therapist: {therapist}
            </p>
          </div>
        </div>

        <SoftBadge color={statusColor}>{status}</SoftBadge>
      </div>

      <div className="mt-5 grid grid-cols-2 gap-4">
        <div className="rounded-xl bg-[#f8f9fa] p-3">
          <div className="flex items-center gap-2 text-[#8392ab]">
            <Calendar size={15} />
            <p className="text-xs font-bold uppercase">Date</p>
          </div>

          <p className="mt-2 text-sm font-bold text-[#344767]">{date}</p>
        </div>

        <div className="rounded-xl bg-[#f8f9fa] p-3">
          <div className="flex items-center gap-2 text-[#8392ab]">
            <Clock size={15} />
            <p className="text-xs font-bold uppercase">Time</p>
          </div>

          <p className="mt-2 text-sm font-bold text-[#344767]">{time}</p>
        </div>
      </div>

      <SoftButton size="sm" className="mt-5 w-full">
        View Detail
      </SoftButton>
    </SoftCard>
  );
}