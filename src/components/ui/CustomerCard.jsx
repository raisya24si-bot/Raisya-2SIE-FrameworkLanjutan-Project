import SoftAvatar from "./SoftAvatar";
import SoftBadge from "./SoftBadge";

export default function CustomerCard({ name, email, status, image }) {
  return (
    <div className="rounded-2xl bg-white p-5 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-lg">
      <div className="flex items-center gap-4">
        <SoftAvatar src={image} name={name} size="lg" />

        <div className="flex-1">
          <h3 className="font-bold text-[#252f40]">{name}</h3>
          <p className="text-sm font-semibold text-[#8392ab]">{email}</p>
        </div>

        <SoftBadge color={status === "Active" ? "success" : "warning"}>
          {status}
        </SoftBadge>
      </div>
    </div>
  );
}