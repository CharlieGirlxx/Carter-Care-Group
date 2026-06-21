import { useSkin } from "@/App";
import { motion } from "framer-motion";
import { Heart, HandHeart, Building2, ArrowRight } from "lucide-react";
import PageTransition from "@/components/PageTransition";

export default function LoadingPage() {
  const { setSkin } = useSkin();

  const options = [
    {
      id: "aged-care" as const,
      title: "Aged Care",
      subtitle: "Seniors & Families",
      description: "Compassionate aged care that respects your dignity, choices, and independence.",
      icon: HandHeart,
      color: "#9b1239",
      gradient: "from-rose-500 to-pink-400",
      glow: "rgba(196,30,90,0.2)",
      border: "#be123c",
    },
    {
      id: "ndis" as const,
      title: "NDIS",
      subtitle: "Participants & Families",
      description: "Personalised disability support tailored to your NDIS plan and goals.",
      icon: Heart,
      color: "#0b7a52",
      gradient: "from-emerald-500 to-teal-400",
      glow: "rgba(13,138,93,0.2)",
      border: "#0d8a5d",
    },
    {
      id: "service-provider" as const,
      title: "Platform",
      subtitle: "For Service Providers",
      description: "Access our purpose-built platform for managing participants, care plans, scheduling, and compliance reporting in one place.",
      icon: Building2,
      color: "#1d4ed8",
      gradient: "from-blue-500 to-cyan-400",
      glow: "rgba(37,99,181,0.2)",
      border: "#2563eb",
    },
  ];

  return (
    <PageTransition>
      <div className="min-h-screen flex flex-col items-center justify-center px-4 py-16 relative overflow-hidden">

        {/* Animated water-like background */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          {/* Large slow orbs */}
          <motion.div
            animate={{
              x: [0, 60, -30, 0],
              y: [0, -40, 30, 0],
              scale: [1, 1.15, 0.95, 1],
            }}
            transition={{ duration: 22, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -top-48 -left-48 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(167,139,250,0.25) 0%, transparent 70%)" }}
          />
          <motion.div
            animate={{
              x: [0, -50, 40, 0],
              y: [0, 50, -20, 0],
              scale: [1, 1.2, 0.9, 1],
            }}
            transition={{ duration: 28, repeat: Infinity, ease: "easeInOut" }}
            className="absolute -bottom-48 -right-48 w-[500px] h-[500px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(251,191,36,0.18) 0%, transparent 70%)" }}
          />
          <motion.div
            animate={{
              x: [0, 40, -60, 0],
              y: [0, -50, 40, 0],
              scale: [1, 1.1, 1.05, 1],
            }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] rounded-full"
            style={{ background: "radial-gradient(circle, rgba(20,184,166,0.15) 0%, transparent 70%)" }}
          />
          <motion.div
            animate={{
              x: [0, -30, 50, 0],
              y: [0, 60, -40, 0],
            }}
            transition={{ duration: 24, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-10 right-20 w-64 h-64 rounded-full"
            style={{ background: "radial-gradient(circle, rgba(244,114,182,0.15) 0%, transparent 70%)" }}
          />
        </div>

        {/* Logo */}
        <motion.div
          initial={{ opacity: 0, y: -24, scale: 0.92 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mb-10 text-center relative z-10"
        >
          <img
            src="/assets/carters-logo.png"
            alt="Carters Care Group"
            className="h-20 w-auto mx-auto mb-5 drop-shadow-xl"
          />
          <motion.div
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 1, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="h-px mx-auto max-w-[200px] origin-center"
            style={{ background: "linear-gradient(90deg, transparent, #a855f7, #ec4899, transparent)" }}
          />
        </motion.div>

        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="text-3xl md:text-5xl font-extrabold text-center mb-3 text-gray-900 relative z-10 tracking-tight"
        >
          How can we{" "}
          <span
            className="bg-clip-text text-transparent"
            style={{ backgroundImage: "linear-gradient(135deg, #7c3aed, #ec4899, #f59e0b)" }}
          >
            help you
          </span>{" "}
          today?
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.38, ease: [0.22, 1, 0.36, 1] }}
          className="text-gray-400 text-center mb-14 max-w-md relative z-10 text-base leading-relaxed"
        >
          Choose your portal to access services and information tailored to your needs.
        </motion.p>

        {/* Three Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5 max-w-5xl w-full relative z-10">
          {options.map((opt, i) => {
            const Icon = opt.icon;
            return (
              <motion.button
                key={opt.id}
                initial={{ opacity: 0, y: 40 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.45 + i * 0.12, ease: [0.22, 1, 0.36, 1] }}
                whileHover={{ y: -8, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                whileTap={{ scale: 0.97 }}
                onClick={() => setSkin(opt.id)}
                className="group text-left rounded-3xl p-8 cursor-pointer relative overflow-hidden"
                style={{
                  background: "rgba(255,255,255,0.85)",
                  backdropFilter: "blur(20px)",
                  WebkitBackdropFilter: "blur(20px)",
                  border: "1.5px solid rgba(0,0,0,0.07)",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)",
                }}
                onMouseEnter={(e) => {
                  const el = e.currentTarget;
                  el.style.border = `1.5px solid ${opt.border}40`;
                  el.style.boxShadow = `0 20px 60px ${opt.glow}, 0 4px 16px rgba(0,0,0,0.08)`;
                }}
                onMouseLeave={(e) => {
                  const el = e.currentTarget;
                  el.style.border = "1.5px solid rgba(0,0,0,0.07)";
                  el.style.boxShadow = "0 8px 32px rgba(0,0,0,0.06), 0 1px 2px rgba(0,0,0,0.04)";
                }}
              >
                {/* Subtle gradient background on hover */}
                <div
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                  style={{ background: `radial-gradient(ellipse at 30% 0%, ${opt.glow} 0%, transparent 60%)` }}
                />

                {/* Icon */}
                <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${opt.gradient} shadow-lg relative`}>
                  <Icon size={28} className="text-white" />
                </div>

                <h3 className="text-xl font-bold mb-1 text-gray-900">{opt.title}</h3>
                <p className="text-xs font-bold uppercase tracking-widest mb-4" style={{ color: opt.color }}>
                  {opt.subtitle}
                </p>
                <p className="text-sm text-gray-500 leading-relaxed">{opt.description}</p>

                <div
                  className="mt-7 flex items-center gap-2 text-sm font-bold group-hover:gap-3 transition-all duration-300"
                  style={{ color: opt.color }}
                >
                  Enter Portal
                  <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
                </div>
              </motion.button>
            );
          })}
        </div>

        {/* Bottom tagline */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.1, duration: 0.8 }}
          className="mt-14 text-sm text-gray-400 text-center relative z-10 font-medium"
        >
          Your family in disability and aged care services 💙
        </motion.p>

        {/* Wave bottom */}
        <div className="absolute bottom-0 left-0 right-0 pointer-events-none overflow-hidden">
          <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" preserveAspectRatio="none">
            <path d="M0,50 C360,80 1080,20 1440,50 L1440,80 L0,80 Z" fill="rgba(167,139,250,0.08)" />
            <path d="M0,60 C480,30 960,80 1440,60 L1440,80 L0,80 Z" fill="rgba(236,72,153,0.06)" />
          </svg>
        </div>
      </div>
    </PageTransition>
  );
}
