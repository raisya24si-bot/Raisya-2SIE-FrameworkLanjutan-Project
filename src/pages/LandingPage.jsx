import { Link } from "react-router-dom";
import {
  ArrowRight,
  BadgeCheck,
  Calendar,
  Clock,
  HeartPulse,
  Mail,
  MapPin,
  Phone,
  ShieldCheck,
  Sparkles,
  Star,
  WandSparkles,
} from "lucide-react";

import SoftCard from "@/components/ui/SoftCard";
import SoftButton from "@/components/ui/SoftButton";
import SoftBadge from "@/components/ui/SoftBadge";
import SoftIconBox from "@/components/ui/SoftIconBox";

const features = [
  {
    title: "Certified Therapist",
    desc: "Ditangani oleh staff profesional yang berpengalaman di bidang kecantikan.",
    icon: <BadgeCheck size={18} />,
  },
  {
    title: "Modern Treatment",
    desc: "Menggunakan teknologi dan metode treatment yang aman untuk kulit.",
    icon: <WandSparkles size={18} />,
  },
  {
    title: "Premium Product",
    desc: "Produk skincare pilihan yang disesuaikan dengan kebutuhan kulit customer.",
    icon: <ShieldCheck size={18} />,
  },
  {
    title: "Easy Booking",
    desc: "Customer dapat melakukan booking treatment dengan proses yang mudah.",
    icon: <Calendar size={18} />,
  },
];

const treatments = [
  {
    name: "Facial Glow",
    category: "Face Treatment",
    price: "Rp 250.000",
    duration: "60 menit",
    image: "/img/facial.jpg",
    desc: "Membersihkan wajah secara mendalam agar kulit tampak lebih segar dan glowing.",
  },
  {
    name: "Acne Treatment",
    category: "Skin Care",
    price: "Rp 300.000",
    duration: "75 menit",
    image: "/img/acne.jpg",
    desc: "Perawatan khusus untuk membantu merawat kulit berjerawat dan sensitif.",
  },
  {
    name: "Brightening Facial",
    category: "Brightening",
    price: "Rp 280.000",
    duration: "60 menit",
    image: "/img/brightening.jpg",
    desc: "Membantu membuat kulit tampak lebih cerah, sehat, dan merata.",
  },
  {
    name: "Laser Rejuvenation",
    category: "Laser Treatment",
    price: "Rp 450.000",
    duration: "90 menit",
    image: "/img/laser.jpg",
    desc: "Treatment modern untuk membantu meremajakan tampilan kulit wajah.",
  },
  {
    name: "Hydrafacial",
    category: "Premium Facial",
    price: "Rp 350.000",
    duration: "70 menit",
    image: "/img/hydrafacial.jpg",
    desc: "Perawatan hidrasi wajah agar kulit terasa lebih lembap dan bersih.",
  },
  {
    name: "Skin Rejuvenation",
    category: "Anti Aging",
    price: "Rp 400.000",
    duration: "80 menit",
    image: "/img/rejuvenation.jpg",
    desc: "Membantu menjaga kulit agar terlihat lebih fresh dan terawat.",
  },
];

const testimonials = [
  {
    name: "Raisya Revalina",
    text: "Pelayanannya nyaman banget, hasil facial-nya bikin kulit terasa lebih bersih.",
  },
  {
    name: "Nabila Putri",
    text: "Booking treatment gampang dan staff-nya ramah. Tempatnya juga bersih.",
  },
  {
    name: "Cindy Amelia",
    text: "Aku suka hasil brightening facial-nya, kulit kelihatan lebih fresh.",
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-[#f8f9fa] font-['Open_Sans'] text-[#344767]">
      {/* NAVBAR */}
      <nav className="sticky top-0 z-50 border-b border-[#e9ecef] bg-white/80 backdrop-blur-xl">
        <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4">
          <div className="flex items-center gap-3">
            <SoftIconBox size="md">
              <Sparkles size={18} />
            </SoftIconBox>

            <div>
              <h1 className="text-sm font-bold text-[#344767]">GlowCare</h1>
              <p className="text-xs font-semibold text-[#8392ab]">
                Beauty Clinic
              </p>
            </div>
          </div>

          <div className="hidden items-center gap-8 md:flex">
            <a href="#home" className="text-sm font-bold text-[#344767]">
              Home
            </a>
            <a
              href="#treatments"
              className="text-sm font-semibold text-[#8392ab] hover:text-[#344767]"
            >
              Treatments
            </a>
            <a
              href="#about"
              className="text-sm font-semibold text-[#8392ab] hover:text-[#344767]"
            >
              About
            </a>
            <a
              href="#contact"
              className="text-sm font-semibold text-[#8392ab] hover:text-[#344767]"
            >
              Contact
            </a>
          </div>

          <div className="flex items-center gap-3">
            <Link
              to="/login"
              className="hidden text-sm font-bold text-[#67748e] transition hover:text-[#ff0080] sm:block"
            >
              Sign In
            </Link>

            <SoftButton size="sm" className="px-4">
              Book Now
            </SoftButton>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section id="home" className="relative overflow-hidden px-6 py-20">
        <div className="absolute right-0 top-16 h-72 w-72 rounded-full bg-[#ff0080]/10 blur-3xl" />
        <div className="absolute left-0 bottom-0 h-72 w-72 rounded-full bg-[#7928ca]/10 blur-3xl" />

        <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-center gap-10 lg:grid-cols-2">
          <div>
            <SoftBadge color="primary">Beauty Clinic</SoftBadge>

            <h2 className="mt-5 max-w-2xl text-4xl font-extrabold leading-tight text-[#344767] md:text-6xl">
              Reveal Your Natural Beauty with GlowCare
            </h2>

            <p className="mt-5 max-w-xl text-base font-semibold leading-relaxed text-[#67748e]">
              GlowCare Beauty Clinic menyediakan layanan perawatan wajah modern,
              aman, dan nyaman untuk membantu kulit tampak lebih sehat, bersih,
              dan glowing.
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <SoftButton size="md">
                Book Consultation
                <ArrowRight size={16} />
              </SoftButton>

              <a
                href="#treatments"
                className="inline-flex items-center justify-center rounded-lg border border-[#e9ecef] bg-white px-6 py-3 text-sm font-bold text-[#344767] shadow-[0_20px_27px_0_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5"
              >
                Explore Treatments
              </a>
            </div>

            <div className="mt-10 grid max-w-md grid-cols-3 gap-4">
              <div>
                <h3 className="text-2xl font-bold text-[#344767]">1.2K+</h3>
                <p className="text-xs font-semibold text-[#8392ab]">
                  Customers
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#344767]">15+</h3>
                <p className="text-xs font-semibold text-[#8392ab]">
                  Treatments
                </p>
              </div>

              <div>
                <h3 className="text-2xl font-bold text-[#344767]">4.9</h3>
                <p className="text-xs font-semibold text-[#8392ab]">
                  Rating
                </p>
              </div>
            </div>
          </div>

          <SoftCard className="relative overflow-hidden p-4">
            <img
              src="/img/hero.jpg"
              alt="GlowCare Beauty Clinic"
              className="h-[460px] w-full rounded-2xl object-cover"
            />

            <div className="absolute bottom-8 left-8 right-8 rounded-2xl bg-white/90 p-4 shadow-[0_20px_27px_0_rgba(0,0,0,0.08)] backdrop-blur-md">
              <div className="flex items-center gap-3">
                <SoftIconBox size="md">
                  <HeartPulse size={18} />
                </SoftIconBox>

                <div>
                  <h3 className="text-sm font-bold text-[#344767]">
                    Premium Skin Treatment
                  </h3>
                  <p className="text-xs font-semibold text-[#8392ab]">
                    Personalized care for every skin type
                  </p>
                </div>
              </div>
            </div>
          </SoftCard>
        </div>
      </section>

      {/* FEATURES */}
      <section id="about" className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase text-[#ff0080]">
              Why Choose Us
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#344767]">
              Perawatan nyaman dengan layanan profesional
            </h2>
            <p className="mx-auto mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-[#8392ab]">
              GlowCare hadir untuk memberikan pengalaman treatment yang aman,
              nyaman, dan sesuai kebutuhan kulit customer.
            </p>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 xl:grid-cols-4">
            {features.map((item, index) => (
              <SoftCard key={index} className="p-6">
                <SoftIconBox size="md">{item.icon}</SoftIconBox>

                <h3 className="mt-5 text-lg font-bold text-[#344767]">
                  {item.title}
                </h3>

                <p className="mt-2 text-sm font-semibold leading-relaxed text-[#8392ab]">
                  {item.desc}
                </p>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      {/* TREATMENTS */}
      <section id="treatments" className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
            <div>
              <p className="text-sm font-bold uppercase text-[#ff0080]">
                Our Treatments
              </p>
              <h2 className="mt-2 text-3xl font-bold text-[#344767]">
                Popular Beauty Treatments
              </h2>
              <p className="mt-3 max-w-2xl text-sm font-semibold leading-relaxed text-[#8392ab]">
                Pilihan treatment favorit customer GlowCare untuk membantu
                menjaga kesehatan dan kecantikan kulit.
              </p>
            </div>

            <SoftButton size="sm">
              View All
              <ArrowRight size={15} />
            </SoftButton>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
            {treatments.map((item, index) => (
              <SoftCard
                key={index}
                className="group overflow-hidden p-4 transition hover:-translate-y-1"
              >
                <div className="relative overflow-hidden rounded-2xl">
                  <img
                    src={item.image}
                    alt={item.name}
                    className="h-56 w-full object-cover transition duration-300 group-hover:scale-105"
                  />

                  <div className="absolute left-4 top-4">
                    <SoftBadge color="primary">{item.category}</SoftBadge>
                  </div>
                </div>

                <div className="p-2 pt-5">
                  <div className="flex items-center justify-between gap-3">
                    <h3 className="text-lg font-bold text-[#344767]">
                      {item.name}
                    </h3>

                    <div className="flex items-center gap-1 text-sm font-bold text-[#fbcf33]">
                      <Star size={15} fill="currentColor" />
                      4.9
                    </div>
                  </div>

                  <p className="mt-2 text-sm font-semibold leading-relaxed text-[#8392ab]">
                    {item.desc}
                  </p>

                  <div className="mt-5 flex items-center justify-between">
                    <div>
                      <p className="text-xs font-bold uppercase text-[#8392ab]">
                        Price
                      </p>
                      <p className="text-sm font-bold text-[#ff0080]">
                        {item.price}
                      </p>
                    </div>

                    <div className="flex items-center gap-2 text-sm font-semibold text-[#67748e]">
                      <Clock size={15} />
                      {item.duration}
                    </div>
                  </div>
                </div>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="px-6 py-16">
        <div className="mx-auto max-w-7xl">
          <div className="relative overflow-hidden rounded-[28px] bg-[linear-gradient(310deg,#7928ca_0%,#ff0080_100%)] p-10 text-white shadow-[0_20px_27px_0_rgba(255,0,128,0.2)]">
            <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-white/10 blur-3xl" />

            <div className="relative flex flex-col items-start justify-between gap-6 md:flex-row md:items-center">
              <div>
                <h2 className="text-3xl font-bold">
                  Ready to start your beauty journey?
                </h2>
                <p className="mt-3 max-w-2xl text-sm font-semibold text-white/80">
                  Konsultasikan kebutuhan kulitmu dan temukan treatment yang
                  paling sesuai bersama GlowCare Beauty Clinic.
                </p>
              </div>

              <Link
                to="/login"
                className="inline-flex items-center justify-center rounded-lg bg-white px-6 py-3 text-sm font-bold text-[#344767] shadow-lg transition hover:-translate-y-0.5"
              >
                Book Appointment
                <ArrowRight size={16} className="ml-2" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* TESTIMONIAL */}
      <section className="px-6 py-10">
        <div className="mx-auto max-w-7xl">
          <div className="text-center">
            <p className="text-sm font-bold uppercase text-[#ff0080]">
              Testimonials
            </p>
            <h2 className="mt-2 text-3xl font-bold text-[#344767]">
              What Our Customers Say
            </h2>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-3">
            {testimonials.map((item, index) => (
              <SoftCard key={index} className="p-6">
                <div className="flex gap-1 text-[#fbcf33]">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} size={16} fill="currentColor" />
                  ))}
                </div>

                <p className="mt-4 text-sm font-semibold leading-relaxed text-[#67748e]">
                  “{item.text}”
                </p>

                <div className="mt-5 flex items-center gap-3">
                  <SoftIconBox size="sm">
                    <span className="text-xs font-bold">
                      {item.name.charAt(0)}
                    </span>
                  </SoftIconBox>

                  <div>
                    <h3 className="text-sm font-bold text-[#344767]">
                      {item.name}
                    </h3>
                    <p className="text-xs font-semibold text-[#8392ab]">
                      GlowCare Customer
                    </p>
                  </div>
                </div>
              </SoftCard>
            ))}
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 py-16">
        <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 lg:grid-cols-2">
          <SoftCard className="p-8">
            <p className="text-sm font-bold uppercase text-[#ff0080]">
              Contact Us
            </p>

            <h2 className="mt-2 text-3xl font-bold text-[#344767]">
              Visit GlowCare Beauty Clinic
            </h2>

            <p className="mt-3 text-sm font-semibold leading-relaxed text-[#8392ab]">
              Hubungi kami untuk informasi treatment, jadwal konsultasi, atau
              booking perawatan.
            </p>

            <div className="mt-8 space-y-5">
              <div className="flex items-center gap-4">
                <SoftIconBox size="md">
                  <MapPin size={18} />
                </SoftIconBox>
                <div>
                  <h3 className="text-sm font-bold text-[#344767]">
                    Address
                  </h3>
                  <p className="text-sm font-semibold text-[#8392ab]">
                    Jl. Beauty Glow No. 28, Pekanbaru
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <SoftIconBox size="md">
                  <Phone size={18} />
                </SoftIconBox>
                <div>
                  <h3 className="text-sm font-bold text-[#344767]">Phone</h3>
                  <p className="text-sm font-semibold text-[#8392ab]">
                    +62 812 3456 7890
                  </p>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <SoftIconBox size="md">
                  <Mail size={18} />
                </SoftIconBox>
                <div>
                  <h3 className="text-sm font-bold text-[#344767]">Email</h3>
                  <p className="text-sm font-semibold text-[#8392ab]">
                    glowcareclinic@gmail.com
                  </p>
                </div>
              </div>
            </div>
          </SoftCard>

          <SoftCard className="overflow-hidden p-4">
            <img
              src="/img/clinic.jpg"
              alt="GlowCare Clinic"
              className="h-full min-h-[420px] w-full rounded-2xl object-cover"
            />
          </SoftCard>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-[#e9ecef] bg-white px-6 py-8">
        <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 md:flex-row">
          <div className="flex items-center gap-3">
            <SoftIconBox size="sm">
              <Sparkles size={15} />
            </SoftIconBox>
            <div>
              <h3 className="text-sm font-bold text-[#344767]">GlowCare</h3>
              <p className="text-xs font-semibold text-[#8392ab]">
                Beauty Clinic
              </p>
            </div>
          </div>

          <p className="text-sm font-semibold text-[#8392ab]">
            © 2026 GlowCare Beauty Clinic. All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
}