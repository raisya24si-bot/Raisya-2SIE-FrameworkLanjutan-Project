import React from "react";
import { Link } from "react-router-dom";
import {
  ArrowRight,
  Calendar,
  HeartPulse,
  Sparkles,
  Star,
  UserRound,
  ShieldCheck,
  Wallet,
  Users,
  Search,
  Bell,
  Gift,
  Crown,
  BadgeCheck,
  Clock,
  Gem,
  CheckCircle2,
} from "lucide-react";

const treatments = [
  {
    name: "Facial Treatment",
    desc: "Membersihkan kulit wajah agar tampak lebih segar dan sehat.",
    price: "Mulai Rp150K",
    icon: <Sparkles size={20} />,
  },
  {
    name: "Skin Consultation",
    desc: "Konsultasi kondisi kulit sebelum memilih treatment yang sesuai.",
    price: "Free Member",
    icon: <HeartPulse size={20} />,
  },
  {
    name: "Brightening Care",
    desc: "Perawatan untuk membantu kulit terlihat lebih cerah dan glowing.",
    price: "Mulai Rp200K",
    icon: <Star size={20} />,
  },
  {
    name: "Acne Care",
    desc: "Perawatan khusus untuk kulit berjerawat dan kulit sensitif.",
    price: "Mulai Rp180K",
    icon: <HeartPulse size={20} />,
  },
];

const stats = [
  { value: "4.9/5", label: "Guest Rating" },
  { value: "8+", label: "Beauty Services" },
  { value: "24/7", label: "Online Access" },
];

const crmStats = [
  { title: "Customers", value: "1,240", icon: <Users size={18} /> },
  { title: "Appointments", value: "58", icon: <Calendar size={18} /> },
  { title: "Revenue", value: "$3,240", icon: <Wallet size={18} /> },
  { title: "Treatments", value: "142", icon: <Sparkles size={18} /> },
];

const benefits = [
  {
    title: "Priority Booking",
    desc: "Member dapat melakukan booking treatment dengan akses lebih cepat.",
    icon: <Clock size={20} />,
  },
  {
    title: "Exclusive Promo",
    desc: "Promo khusus untuk member GlowCare Clinic.",
    icon: <Gift size={20} />,
  },
  {
    title: "Reward Points",
    desc: "Setiap treatment akan menambah poin membership pelanggan.",
    icon: <Crown size={20} />,
  },
];

const reasons = [
  "Certified beauty therapist",
  "Comfortable clinic environment",
  "Digital appointment access",
  "Customer data managed by CRM",
];

export default function LandingPage() {
  return (
    <main className="min-h-screen overflow-hidden bg-[#f8f9fe] text-[#344767]">
      <nav className="fixed inset-x-0 top-0 z-50 border-b border-gray-100 bg-white/95 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8">
          <Link to="/" className="flex items-center gap-3">
            <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#cb0c9f] to-[#7928ca] text-white shadow-lg shadow-purple-200">
              <Sparkles size={21} />
            </div>
            <div>
              <p className="text-xl font-bold tracking-tight text-[#cb0c9f]">GlowCare</p>
              <p className="-mt-1 text-xs font-medium text-[#8392ab]">Beauty Clinic</p>
            </div>
          </Link>

          <div className="hidden items-center gap-8 text-sm font-semibold text-[#344767] md:flex">
            <a href="#home" className="transition hover:text-[#cb0c9f]">Home</a>
            <a href="#services" className="transition hover:text-[#cb0c9f]">Treatments</a>
            <a href="#promo" className="transition hover:text-[#cb0c9f]">Promo</a>
            <a href="#membership" className="transition hover:text-[#cb0c9f]">Membership</a>
            <a href="#crm" className="transition hover:text-[#cb0c9f]">CRM</a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden rounded-xl px-5 py-2 text-sm font-bold text-[#cb0c9f] transition hover:bg-pink-50 sm:block"
            >
              Login
            </Link>
            <Link
              to="/register"
              className="rounded-xl bg-gradient-to-r from-[#7928ca] to-[#ff0080] px-5 py-2.5 text-sm font-bold text-white shadow-md transition hover:-translate-y-0.5 hover:shadow-lg"
            >
              Register
            </Link>
          </div>
        </div>
      </nav>

      <section id="home" className="relative px-6 pb-20 pt-32 lg:px-8 lg:pb-28 lg:pt-40">
        <div className="absolute left-0 top-24 h-80 w-80 rounded-full bg-[#cb0c9f]/10 blur-3xl" />
        <div className="absolute right-[-90px] top-28 h-96 w-96 rounded-full bg-[#7928ca]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-[1fr_0.95fr]">
          <div>
            <div className="mb-6 inline-flex items-center gap-2 rounded-xl border border-pink-100 bg-white px-4 py-2 text-sm font-bold text-[#cb0c9f] shadow-[0_20px_27px_0_rgba(0,0,0,0.05)]">
              <Star size={16} className="fill-[#cb0c9f] text-[#cb0c9f]" />
              PRD v2 • Guest Landing Page Upgrade
            </div>

            <h1 className="max-w-3xl text-5xl font-extrabold leading-tight tracking-tight text-[#252f40] md:text-6xl lg:text-7xl">
              Beauty treatment made easier with
              <span className="block bg-gradient-to-r from-[#cb0c9f] to-[#7928ca] bg-clip-text text-transparent">
                GlowCare Clinic.
              </span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-[#67748e]">
              Landing page v2 dikembangkan sebagai halaman awal untuk guest agar dapat melihat layanan,
              promo, membership, dan masuk ke sistem GlowCare melalui login atau register.
            </p>

            <div className="mt-9 flex flex-col gap-4 sm:flex-row">
              <Link
                to="/register"
                className="inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-[#7928ca] to-[#ff0080] px-7 py-4 text-sm font-bold uppercase tracking-wide text-white shadow-lg transition hover:-translate-y-1 hover:shadow-xl"
              >
                Become Member <ArrowRight size={18} />
              </Link>
              <Link
                to="/login"
                className="inline-flex items-center justify-center gap-2 rounded-xl border border-[#cb0c9f]/30 bg-white px-7 py-4 text-sm font-bold uppercase tracking-wide text-[#cb0c9f] shadow-sm transition hover:-translate-y-1 hover:bg-pink-50"
              >
                Login Account
              </Link>
            </div>

            <div className="mt-10 grid max-w-xl grid-cols-3 gap-4">
              {stats.map((item) => (
                <div
                  key={item.label}
                  className="rounded-2xl border border-gray-100 bg-white p-4 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)]"
                >
                  <p className="text-2xl font-extrabold text-[#252f40]">{item.value}</p>
                  <p className="mt-1 text-xs font-bold text-[#8392ab]">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="relative">
            <div className="rounded-[28px] border border-gray-100 bg-white p-5 shadow-[0_20px_27px_0_rgba(0,0,0,0.08)]">
              <div className="mb-5 flex items-center justify-between">
                <div>
                  <p className="text-sm font-bold text-[#8392ab]">Guest Preview</p>
                  <h2 className="text-2xl font-extrabold text-[#252f40]">GlowCare Services</h2>
                </div>
                <div className="flex gap-3">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl border border-gray-100 bg-white text-[#8392ab] shadow-sm">
                    <Search size={18} />
                  </div>
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-gradient-to-br from-[#cb0c9f] to-[#7928ca] text-white shadow-md">
                    <Bell size={18} />
                  </div>
                </div>
              </div>

              <div className="rounded-2xl border border-pink-100 bg-pink-50/80 p-4">
                <div className="flex items-start gap-3">
                  <HeartPulse className="mt-1 text-[#cb0c9f]" size={22} />
                  <div>
                    <p className="font-bold text-[#344767]">Informasi layanan untuk guest</p>
                    <p className="mt-1 text-sm leading-6 text-[#67748e]">
                      Guest dapat melihat layanan, promo, dan benefit member sebelum masuk ke sistem.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-5 grid gap-4 sm:grid-cols-2">
                {treatments.map((item, index) => (
                  <div
                    key={item.name}
                    className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
                  >
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#cb0c9f] to-[#7928ca] text-white shadow-md">
                      {index % 2 === 0 ? <Sparkles size={20} /> : <Calendar size={20} />}
                    </div>
                    <h3 className="font-bold text-[#252f40]">{item.name}</h3>
                    <p className="mt-2 text-sm leading-6 text-[#67748e]">{item.desc}</p>
                    <p className="mt-3 text-sm font-extrabold text-[#cb0c9f]">{item.price}</p>
                  </div>
                ))}
              </div>

              <div className="mt-5 rounded-2xl bg-[#252f40] p-5 text-white">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-white/10 text-pink-200">
                    <UserRound />
                  </div>
                  <div>
                    <p className="font-bold">Guest → Member → Admin CRM</p>
                    <p className="text-sm text-white/60">
                      Guest melihat layanan, member booking, admin mengelola data.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="services" className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl">
          <div className="mb-10 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#cb0c9f]">Popular Treatments</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#252f40]">
                Layanan yang dapat dilihat oleh guest.
              </h2>
            </div>
            <p className="max-w-xl text-sm leading-6 text-[#67748e]">
              Pada PRD v2, informasi treatment dibuat lebih jelas agar guest dapat memahami layanan sebelum melakukan register.
            </p>
          </div>

          <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-4">
            {treatments.map((item) => (
              <div key={item.name} className="rounded-2xl border border-gray-100 bg-white p-6 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)] transition hover:-translate-y-1 hover:shadow-[0_25px_35px_0_rgba(0,0,0,0.08)]">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#cb0c9f] to-[#7928ca] text-white shadow-md">
                  {item.icon}
                </div>
                <h3 className="mt-5 font-extrabold text-[#252f40]">{item.name}</h3>
                <p className="mt-2 text-sm leading-6 text-[#67748e]">{item.desc}</p>
                <p className="mt-4 text-sm font-extrabold text-[#cb0c9f]">{item.price}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="promo" className="px-6 py-10 lg:px-8">
        <div className="mx-auto grid max-w-7xl gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="overflow-hidden rounded-2xl bg-gradient-to-r from-[#7928ca] via-[#cb0c9f] to-[#ff0080] p-8 text-white shadow-[0_20px_27px_0_rgba(0,0,0,0.10)]">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <p className="text-sm font-bold uppercase tracking-[0.25em] text-white/70">Special Promo</p>
                <h2 className="mt-3 text-4xl font-extrabold">30% OFF First Treatment</h2>
                <p className="mt-3 max-w-2xl text-sm leading-6 text-white/75">
                  Promo ditambahkan pada PRD v2 agar landing page lebih informatif dan menarik bagi guest baru.
                </p>
              </div>
              <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-white/15 backdrop-blur">
                <Gift size={34} />
              </div>
            </div>
          </div>

          <div className="rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)]">
            <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#cb0c9f]">Why GlowCare</p>
            <div className="mt-5 grid gap-3">
              {reasons.map((item) => (
                <div key={item} className="flex items-center gap-3 rounded-xl bg-[#f8f9fe] p-3">
                  <CheckCircle2 className="text-[#cb0c9f]" size={18} />
                  <p className="text-sm font-bold text-[#344767]">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="membership" className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#cb0c9f]">Membership Benefit</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#252f40]">
                Guest mulai diarahkan untuk menjadi member.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#67748e]">
                PRD v2 menambahkan informasi membership agar guest memahami manfaat register sebelum menggunakan layanan GlowCare.
              </p>
            </div>

            <div className="grid gap-4 md:grid-cols-3">
              {benefits.map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-100 bg-white p-5 shadow-sm">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#cb0c9f] to-[#7928ca] text-white shadow-md">
                    {item.icon}
                  </div>
                  <h3 className="mt-5 font-extrabold text-[#252f40]">{item.title}</h3>
                  <p className="mt-2 text-sm leading-6 text-[#67748e]">{item.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="crm" className="px-6 py-16 lg:px-8">
        <div className="mx-auto max-w-7xl rounded-2xl border border-gray-100 bg-white p-8 shadow-[0_20px_27px_0_rgba(0,0,0,0.05)] md:p-12">
          <div className="grid gap-10 lg:grid-cols-[0.9fr_1.1fr] lg:items-center">
            <div>
              <p className="text-sm font-bold uppercase tracking-[0.25em] text-[#cb0c9f]">Connected CRM Preview</p>
              <h2 className="mt-3 text-4xl font-extrabold tracking-tight text-[#252f40]">
                Data guest dan member dikelola oleh dashboard admin.
              </h2>
              <p className="mt-5 text-base leading-8 text-[#67748e]">
                Bagian ini ditambahkan untuk menunjukkan hubungan landing page guest dengan sistem CRM GlowCare yang sudah memiliki dashboard admin.
              </p>
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              {crmStats.map((item) => (
                <div key={item.title} className="rounded-2xl border border-gray-100 bg-[#f8f9fe] p-5">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm font-bold text-[#8392ab]">{item.title}</p>
                      <h3 className="mt-1 text-2xl font-extrabold text-[#252f40]">{item.value}</h3>
                    </div>
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-gradient-to-br from-[#cb0c9f] to-[#7928ca] text-white shadow-md">
                      {item.icon}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-100 bg-white px-6 pb-8 pt-10 text-center text-sm text-[#8392ab] lg:px-8">
        <p>© 2026 GlowCare Clinic. Guest landing page integrated with CRM system.</p>
      </footer>
    </main>
  );
}
