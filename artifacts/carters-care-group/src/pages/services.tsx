import { useSkin } from "@/App";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Heart, HandHeart, Star, Home, Users, Calendar, Car, Brain, CookingPot, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "wouter";
import PageTransition from "@/components/PageTransition";

const skinData = {
  ndis: {
    title: "NDIS Support\nServices",
    subtitle: "Comprehensive support services tailored to your NDIS plan and personal goals.",
    services: [
      { icon: HandHeart, title: "Assist Personal Activities", desc: "Support with daily personal tasks including bathing, dressing, grooming, and mobility. We respect your privacy and dignity at all times.", number: "01" },
      { icon: Home, title: "Assist Life Stage Transition", desc: "Moving into a new phase of life? We support transitions into independent living, new accommodation, or post-hospital care.", number: "02" },
      { icon: Users, title: "Community Participation", desc: "Join social groups, recreational activities, and community events. Build friendships, confidence, and a sense of belonging.", number: "03" },
      { icon: Calendar, title: "Daily Tasks / Shared Living", desc: "Assistance with household tasks, meal preparation, and maintaining your living space in shared or individual settings.", number: "04" },
      { icon: Brain, title: "Developmental Life Skills", desc: "Programs to develop practical skills including cooking, budgeting, communication, and personal management.", number: "05" },
      { icon: Heart, title: "Respite Care", desc: "Short-term relief for families and carers, providing quality care while giving primary caregivers a well-deserved break.", number: "06" },
    ],
    accent: "#0b7a52",
    accentBg: "#f0fdf4",
    gradient: "from-emerald-500 to-teal-500",
    gradientCss: "linear-gradient(135deg, #0d8a5d, #14b87a)",
    image: "/assets/hero-ndis.png",
  },
  "aged-care": {
    title: "Aged Care\nServices",
    subtitle: "Exceptional care for seniors that respects dignity, independence, and personal choice.",
    services: [
      { icon: HandHeart, title: "Personal Care", desc: "Gentle, respectful assistance with bathing, dressing, grooming, medication reminders, and mobility support.", number: "01" },
      { icon: Home, title: "Domestic Assistance", desc: "Help with household tasks, meal preparation, laundry, and maintaining a safe, comfortable home environment.", number: "02" },
      { icon: CookingPot, title: "Meal Preparation & Nutrition", desc: "Nutritious, home-style meals prepared to your tastes and dietary requirements, ensuring you stay healthy and satisfied.", number: "03" },
      { icon: Car, title: "Transport & Social Support", desc: "Safe transport to appointments, shopping, and social outings. We help you stay connected to your community.", number: "04" },
      { icon: Heart, title: "Respite Care", desc: "Temporary care for seniors in a comfortable, welcoming environment, giving family carers time to rest and recharge.", number: "05" },
      { icon: Sparkles, title: "Residential Care", desc: "Intimate residential homes with personalised care plans, engaging activities, and a warm, family-like atmosphere.", number: "06" },
    ],
    accent: "#9b1239",
    accentBg: "#fff1f2",
    gradient: "from-rose-500 to-pink-500",
    gradientCss: "linear-gradient(135deg, #be123c, #e11d6a)",
    image: "/assets/hero-aged-care.png",
  },
  "service-provider": {
    title: "Carters Care\nPlatform Features",
    subtitle: "Everything a modern NDIS or aged care organisation needs — in one powerful, easy-to-use platform.",
    services: [
      { icon: Users, title: "Client Management", desc: "Centralise all participant and client records, NDIS plans, support goals, case notes, and documents in a single secure hub.", number: "01" },
      { icon: Calendar, title: "Roster & Scheduling", desc: "Build dynamic rosters, match the right workers to the right clients, manage availability, and push real-time shift notifications.", number: "02" },
      { icon: HandHeart, title: "Care Plan Builder", desc: "Create, review, and update personalised care plans that align with NDIS funding categories and aged care package requirements.", number: "03" },
      { icon: Brain, title: "Compliance & Audit Tools", desc: "Auto-generate NDIS Practice Standards reports, incident logs, medication records, and audit-ready documentation at the click of a button.", number: "04" },
      { icon: Home, title: "Billing & Claims", desc: "Streamline NDIS claim submission and aged care billing with automated invoicing, payment tracking, and reconciliation tools.", number: "05" },
      { icon: Heart, title: "Worker App", desc: "A companion mobile app for support workers — view shifts, access client notes, record progress, and submit timesheets on the go.", number: "06" },
    ],
    accent: "#1d4ed8",
    accentBg: "#eff6ff",
    gradient: "from-blue-500 to-cyan-500",
    gradientCss: "linear-gradient(135deg, #2563eb, #06b6d4)",
    image: "/assets/hero-partner.png",
  },
};

export default function Services() {
  const { skin } = useSkin();
  const data = skinData[skin as keyof typeof skinData];
  if (!data) return null;

  return (
    <PageTransition>
      <Layout>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden min-h-[65vh] flex items-center">
          <div className="absolute inset-0">
            <img src={data.image} alt="Services" className="w-full h-full object-cover scale-105" />
            <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.15) 100%)" }} />
          </div>
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 right-12 w-48 h-48 rounded-full blur-3xl opacity-25"
            style={{ background: data.gradientCss }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 mb-8"
                style={{ background: "rgba(255,255,255,0.12)" }}>
                <Sparkles size={13} className="text-white/80" />
                <span className="text-xs font-bold text-white/90 uppercase tracking-widest">What We Offer</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight whitespace-pre-line">
                {data.title}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">{data.subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Wave into grid */}
        <div className="overflow-hidden" style={{ background: data.accentBg }}>
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,0 L0,0 Z" fill="black" fillOpacity="0" />
            <path d="M0,0 L1440,0 L1440,36 C1200,0 960,72 720,36 C480,0 240,72 0,36 Z" fill="rgba(0,0,0,0.3)" fillOpacity="0" />
          </svg>
        </div>

        {/* ── Services Grid ── */}
        <section className="pt-8 pb-24 relative overflow-hidden" style={{ background: data.accentBg }}>
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-30"
            style={{ background: `radial-gradient(circle, ${data.accent}30 0%, transparent 70%)`, transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ background: `radial-gradient(circle, ${data.accent}25 0%, transparent 70%)`, transform: "translate(-30%, 30%)" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {data.services.map((s, i) => {
                const Icon = s.icon;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                    className="bg-white rounded-3xl p-8 border border-white group relative overflow-hidden cursor-default"
                    style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                  >
                    {/* Number watermark */}
                    <div className="absolute top-6 right-7 text-6xl font-black text-gray-100 leading-none select-none transition-colors duration-300 group-hover:text-gray-50">
                      {s.number}
                    </div>

                    {/* Bottom gradient accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"
                      style={{ background: data.gradientCss }} />

                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10"
                      style={{ background: data.gradientCss }}
                    >
                      <Icon size={26} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed relative z-10">{s.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wave into CTA */}
        <div className="overflow-hidden" style={{ background: data.accent }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill={data.accentBg} />
          </svg>
        </div>

        {/* ── CTA ── */}
        <section className="py-16 relative overflow-hidden" style={{ background: data.gradientCss }}>
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl opacity-20 bg-white"
          />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Have questions about our services?</h2>
              <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Our friendly team is ready to help you find the right support for your needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ color: data.accent }}
              >
                Get In Touch
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
}
