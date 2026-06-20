import { useSkin } from "@/App";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Heart, Shield, Users, Award, Sparkles } from "lucide-react";
import PageTransition from "@/components/PageTransition";
import ImageCarousel from "@/components/ImageCarousel";

const skinData = {
  ndis: {
    title: "About Our\nNDIS Services",
    intro: "Carters Care Group is a registered NDIS provider committed to delivering personalised, high-quality support services that empower participants to live independently and achieve their goals.",
    story: "Our NDIS team was founded on a simple belief: every person deserves support that is tailored to their unique needs, preferences, and aspirations. We have built a passionate team of support workers who bring empathy, skill, and genuine care to every interaction.",
    values: [
      { icon: Heart, title: "Person-Centred", desc: "Your goals, your plan, your way. We put you at the centre of every decision we make." },
      { icon: Shield, title: "Trust & Safety", desc: "All our support workers are screened, trained, and committed to your wellbeing." },
      { icon: Users, title: "Community", desc: "We help you build connections, friendships, and a genuine sense of belonging." },
      { icon: Award, title: "Quality", desc: "We continuously review and improve our services to meet the highest standards." },
    ],
    accent: "#0b7a52",
    accentBg: "#f0fdf4",
    gradient: "from-emerald-500 to-teal-500",
    gradientCss: "linear-gradient(135deg, #0d8a5d, #14b87a)",
    images: ["/assets/hero-ndis.png", "/assets/about-community.png", "/assets/community-participation.jpg"],
  },
  "aged-care": {
    title: "About Our\nAged Care",
    intro: "Carters Care Group provides exceptional aged care services that honour the dignity, choices, and individuality of every senior we support. We treat every person like family.",
    story: "Our aged care services were born from a deep respect for our older generations and a commitment to ensuring they receive personalised, compassionate care. We understand that every senior has a unique story, and we tailor our services to honour that.",
    values: [
      { icon: Heart, title: "Dignity", desc: "We respect your choices, privacy, and independence at every stage of care." },
      { icon: Shield, title: "Safety", desc: "Rigorous protocols and trained staff ensure a secure, comfortable environment." },
      { icon: Users, title: "Family", desc: "We keep families informed and involved, because care is a shared journey." },
      { icon: Award, title: "Excellence", desc: "We strive for the highest standards in personal care, nutrition, and lifestyle." },
    ],
    accent: "#9b1239",
    accentBg: "#fff1f2",
    gradient: "from-rose-500 to-pink-500",
    gradientCss: "linear-gradient(135deg, #be123c, #e11d6a)",
    images: ["/assets/hero-aged-care.png", "/assets/about-community.png", "/assets/respite-care.jpg"],
  },
  "service-provider": {
    title: "About the Carters\nCare Platform",
    intro: "The Carters Care Platform is a purpose-built software solution designed specifically for NDIS and aged care service providers — simplifying operations so you can focus on delivering great care.",
    story: "We built the Carters Care Platform after seeing first-hand how much time care organisations lose to paperwork, manual rostering, and fragmented systems. Our platform brings everything together — client records, care plans, staff schedules, billing, and compliance — into one streamlined, cloud-based solution built to meet Australian regulatory standards.",
    values: [
      { icon: Heart, title: "Built for Care", desc: "Designed specifically for the NDIS and aged care sector — not a generic tool retrofitted to fit." },
      { icon: Shield, title: "Secure & Compliant", desc: "Australian-hosted, encrypted, and built to meet NDIS Practice Standards and aged care regulations." },
      { icon: Users, title: "Easy to Use", desc: "Intuitive interfaces for coordinators, support workers, and administrators — minimal training needed." },
      { icon: Award, title: "Always Improving", desc: "Regular updates driven by real provider feedback, keeping you ahead of regulatory changes." },
    ],
    accent: "#1d4ed8",
    accentBg: "#eff6ff",
    gradient: "from-blue-500 to-cyan-500",
    gradientCss: "linear-gradient(135deg, #2563eb, #06b6d4)",
    images: ["/assets/hero-partner.png", "/assets/hero-platform-2.png", "/assets/hero-platform-3.png"],
  },
};

const inView = {
  initial: { opacity: 0, y: 32 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true } as const,
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] as [number, number, number, number] },
};

export default function About() {
  const { skin } = useSkin();
  const data = skinData[skin as keyof typeof skinData];
  if (!data) return null;

  return (
    <PageTransition>
      <Layout>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden min-h-[70vh] flex items-center">
          <ImageCarousel
            images={data.images}
            interval={7000}
            className="absolute inset-0"
            overlay={(
              <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.15) 100%)" }} />
            )}
          />
          <motion.div
            animate={{ y: [0, -20, 0] }}
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-16 right-16 w-48 h-48 rounded-full blur-3xl opacity-25"
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
                <span className="text-xs font-bold text-white/90 uppercase tracking-widest">Our Story</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight whitespace-pre-line">
                {data.title}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">{data.intro}</p>
            </motion.div>
          </div>
        </section>

        {/* Wave into story */}
        <div className="overflow-hidden bg-white">
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,36 C360,72 1080,0 1440,36 L1440,0 L0,0 Z" fill="black" fillOpacity="0" />
            <path d="M0,36 C360,0 1080,72 1440,36 L1440,72 L0,72 Z" fill="white" />
          </svg>
        </div>

        {/* ── Story ── */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="absolute top-0 left-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-40"
            style={{ background: `radial-gradient(circle, ${data.accent}20 0%, transparent 70%)`, transform: "translate(-40%, -40%)" }} />
          <div className="absolute bottom-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-30"
            style={{ background: `radial-gradient(circle, ${data.accent}15 0%, transparent 70%)`, transform: "translate(40%, 40%)" }} />

          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
            <motion.div {...inView}>
              <div className="w-20 h-1 mx-auto mb-8 rounded-full" style={{ background: data.gradientCss }} />
              <h2 className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-7 tracking-tight">Our Story</h2>
              <p className="text-gray-500 leading-relaxed text-lg max-w-2xl mx-auto">{data.story}</p>
            </motion.div>
          </div>
        </section>

        {/* Wave into stats */}
        <div className="overflow-hidden" style={{ background: data.accentBg }}>
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,36 C480,72 960,0 1440,36 L1440,0 L0,0 Z" fill="white" />
          </svg>
        </div>

        {/* ── Stats ── */}
        <section className="py-16 relative" style={{ background: data.accentBg }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-2 md:grid-cols-2 gap-8 text-center max-w-3xl mx-auto">
              {[
                { value: "10+", label: "Years Experience" },
                { value: "100%", label: "Commitment" },
              ].map((stat, i) => (
                <motion.div
                  key={stat.label}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="bg-white rounded-3xl p-8 shadow-sm border border-white"
                  style={{ boxShadow: `0 4px 24px ${data.accent}15` }}
                >
                  <div className="text-4xl md:text-5xl font-extrabold mb-2 tracking-tight"
                    style={{ background: data.gradientCss, WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent" }}>
                    {stat.value}
                  </div>
                  <div className="text-sm text-gray-500 font-semibold">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* ── Values ── */}
        <section className="py-24 relative overflow-hidden" style={{ background: data.accentBg }}>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="text-center mb-14">
              <motion.div {...inView}
                className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-gray-200 mb-5 shadow-sm">
                <Sparkles size={14} style={{ color: data.accent }} />
                <span className="text-xs font-bold text-gray-600 uppercase tracking-widest">What Drives Us</span>
              </motion.div>
              <motion.h2 {...inView} className="text-3xl md:text-5xl font-extrabold text-gray-900 mb-4 tracking-tight">Our Values</motion.h2>
              <motion.p {...inView} className="text-gray-500 max-w-xl mx-auto text-lg">The principles that guide everything we do.</motion.p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-7">
              {data.values.map((v, i) => {
                const Icon = v.icon;
                return (
                  <motion.div
                    key={v.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -6, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                    className="bg-white rounded-3xl p-8 text-center border border-white relative overflow-hidden group cursor-default"
                    style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                  >
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"
                      style={{ background: data.gradientCss }} />
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300"
                      style={{ background: data.gradientCss }}>
                      <Icon size={28} className="text-white" />
                    </div>
                    <h3 className="text-lg font-bold text-gray-900 mb-3">{v.title}</h3>
                    <p className="text-sm text-gray-500 leading-relaxed">{v.desc}</p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
}
