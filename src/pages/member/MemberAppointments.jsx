import { useEffect } from "react";
import { CalendarPlus } from "lucide-react";

import SearchBar from "@/components/ui/SearchBar";
import SoftCard from "@/components/ui/SoftCard";
import SoftButton from "@/components/ui/SoftButton";
import AppointmentCard from "@/components/member/AppointmentCard";

const appointments = [
  {
    treatment: "Facial Glow",
    therapist: "Siska Amelia",
    date: "15 Juni 2026",
    time: "10:00 WIB",
    status: "Confirmed",
  },
  {
    treatment: "Hydrafacial",
    therapist: "Nadia Putri",
    date: "18 Juni 2026",
    time: "14:00 WIB",
    status: "Pending",
  },
  {
    treatment: "Laser Rejuvenation",
    therapist: "Citra Amelia",
    date: "22 Juni 2026",
    time: "09:30 WIB",
    status: "Completed",
  },
];

export default function MemberAppointments() {
  useEffect(() => {
    document.title = "GlowCare Clinic - My Appointments";
  }, []);

  return (
    <div className="space-y-5">
      <SoftCard className="p-5">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <h2 className="text-lg font-bold text-[#344767]">
              My Appointments
            </h2>

            <p className="mt-1 text-sm font-semibold text-[#8392ab]">
              Kelola jadwal treatment GlowCare Anda.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="w-full md:w-72">
              <SearchBar placeholder="Search appointment..." />
            </div>

            <SoftButton size="sm">
              <CalendarPlus size={16} />
              Book Now
            </SoftButton>
          </div>
        </div>
      </SoftCard>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {appointments.map((item, index) => (
          <AppointmentCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}