import { useEffect } from "react";
import { Calendar, Mail, Phone, UserRound, MapPin } from "lucide-react";

import MembershipCard from "@/components/member/MembershipCard";
import PointCard from "@/components/member/PointCard";

import SoftCard from "@/components/ui/SoftCard";
import SoftButton from "@/components/ui/SoftButton";
import SoftIconBox from "@/components/ui/SoftIconBox";
import SoftAvatar from "@/components/ui/SoftAvatar";

export default function MemberProfile() {
  useEffect(() => {
    document.title = "GlowCare Clinic - Member Profile";
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

      <SoftCard className="p-6">
        <div className="flex flex-col gap-5 md:flex-row md:items-center md:justify-between">
          <div className="flex items-center gap-4">
            <SoftAvatar name="Raisya Revalina" size="lg" />

            <div>
              <h3 className="text-lg font-bold text-[#344767]">
                Raisya Revalina
              </h3>
              <p className="text-sm font-semibold text-[#8392ab]">
                Gold Member • GLC-240001
              </p>
            </div>
          </div>

          <SoftButton size="sm">
            <UserRound size={15} />
            Edit Profile
          </SoftButton>
        </div>
      </SoftCard>

      <SoftCard className="p-6">
        <h3 className="text-lg font-bold text-[#344767]">
          Profile Information
        </h3>

        <p className="mt-1 text-sm font-semibold text-[#8392ab]">
          Data akun member GlowCare Clinic
        </p>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 xl:grid-cols-4">
          <div className="flex items-center gap-3 rounded-2xl bg-[#f8f9fa] p-4">
            <SoftIconBox size="md">
              <Mail size={16} />
            </SoftIconBox>

            <div>
              <p className="text-xs font-bold uppercase text-[#8392ab]">
                Email
              </p>
              <p className="text-sm font-bold text-[#344767]">
                raisya@gmail.com
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-[#f8f9fa] p-4">
            <SoftIconBox size="md">
              <Phone size={16} />
            </SoftIconBox>

            <div>
              <p className="text-xs font-bold uppercase text-[#8392ab]">
                Phone
              </p>
              <p className="text-sm font-bold text-[#344767]">
                +62 812 3456 7890
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-[#f8f9fa] p-4">
            <SoftIconBox size="md">
              <Calendar size={16} />
            </SoftIconBox>

            <div>
              <p className="text-xs font-bold uppercase text-[#8392ab]">
                Join Date
              </p>
              <p className="text-sm font-bold text-[#344767]">
                10 Mei 2026
              </p>
            </div>
          </div>

          <div className="flex items-center gap-3 rounded-2xl bg-[#f8f9fa] p-4">
            <SoftIconBox size="md">
              <MapPin size={16} />
            </SoftIconBox>

            <div>
              <p className="text-xs font-bold uppercase text-[#8392ab]">
                Address
              </p>
              <p className="text-sm font-bold text-[#344767]">
                Pekanbaru
              </p>
            </div>
          </div>
        </div>
      </SoftCard>
    </div>
  );
}