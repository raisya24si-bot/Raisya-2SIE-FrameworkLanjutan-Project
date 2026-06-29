import { useEffect, useState } from "react";
import { Sparkles } from "lucide-react";

import TreatmentCard from "@/components/member/TreatmentCard";
import SearchBar from "@/components/ui/SearchBar";
import SoftCard from "@/components/ui/SoftCard";
import SoftButton from "@/components/ui/SoftButton";
import SoftBadge from "@/components/ui/SoftBadge";

const treatments = [
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
    name: "Acne Treatment",
    category: "Skin Care",
    price: "Rp 300.000",
    duration: "75 menit",
    rating: "4.8",
    image: "/img/acne.jpg",
    desc: "Perawatan khusus untuk membantu merawat kulit berjerawat dan sensitif.",
  },
  {
    name: "Brightening Facial",
    category: "Brightening",
    price: "Rp 280.000",
    duration: "60 menit",
    rating: "4.8",
    image: "/img/brightening.jpg",
    desc: "Membantu membuat kulit tampak lebih cerah, sehat, dan merata.",
  },
  {
    name: "Laser Rejuvenation",
    category: "Laser Treatment",
    price: "Rp 450.000",
    duration: "90 menit",
    rating: "4.9",
    image: "/img/laser.jpg",
    desc: "Treatment modern untuk membantu meremajakan tampilan kulit wajah.",
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
  {
    name: "Skin Rejuvenation",
    category: "Anti Aging",
    price: "Rp 400.000",
    duration: "80 menit",
    rating: "4.8",
    image: "/img/rejuvenation.jpg",
    desc: "Membantu menjaga kulit agar terlihat lebih fresh dan terawat.",
  },
];

export default function MemberTreatments() {
  const [search, setSearch] = useState("");

  useEffect(() => {
    document.title = "GlowCare Clinic - Member Treatments";
  }, []);

  const filteredTreatments = treatments.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-5">
      <SoftCard className="p-6">
        <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
          <div>
            <div className="mb-2">
              <SoftBadge color="primary">Member Treatment</SoftBadge>
            </div>

            <h2 className="text-lg font-bold text-[#344767]">
              Choose Your Beauty Treatment
            </h2>

            <p className="mt-1 text-sm font-semibold text-[#8392ab]">
              Pilih treatment GlowCare yang sesuai dengan kebutuhan kulitmu.
            </p>
          </div>

          <div className="flex flex-col gap-3 md:flex-row md:items-center">
            <div className="w-full md:w-[260px]">
              <SearchBar
                placeholder="Search treatment..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
              />
            </div>

            <SoftButton size="sm">
              <Sparkles size={15} />
              Book Now
            </SoftButton>
          </div>
        </div>
      </SoftCard>

      <div className="grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredTreatments.map((item, index) => (
          <TreatmentCard key={index} {...item} />
        ))}
      </div>

      {filteredTreatments.length === 0 && (
        <SoftCard className="p-10 text-center">
          <h3 className="text-lg font-bold text-[#344767]">
            Treatment tidak ditemukan
          </h3>

          <p className="mt-2 text-sm font-semibold text-[#8392ab]">
            Coba gunakan keyword lain.
          </p>
        </SoftCard>
      )}
    </div>
  );
}