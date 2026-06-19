import { useSkin } from "@/App";
import { motion } from "framer-motion";
import { Heart, HandHeart, Building2 } from "lucide-react";

export default function LoadingPage() {
  const { setSkin } = useSkin();

  const options = [
    {
      id: "ndis" as const,
      title: "NDIS Clients",
      subtitle: "Participants & Families",
      description: "Discover personalised disability support services tailored to your NDIS plan and goals.",
      icon: Heart,
      color: "#0d8a5d",
      bg: "#e8f7f2",
      gradient: "from-emerald-500 to-teal-400",
      ring: "ring-emerald-400/50",
    },
    {
      id: "aged-care" as const,
      title: "Aged Care Clients",
      subtitle: "Seniors & Families",
      description: "Compassionate aged care services that respect your dignity, choices, and independence.",
      icon: HandHeart,
      color: "#c41e5a",
      bg: "#fdeef3",
      gradient: "from-rose-500 to-pink-400",
      ring: "ring-rose-400/50",
    },
    {
      id: "service-provider" as const,
      title: "Service Provider",
      subtitle: "Partners & Referrers",
      description: "Collaborate with us to deliver exceptional care outcomes for your clients.",
      icon: Building2,
      color: "#2563b5",
      bg: "#eef4fc",
      gradient: "from-blue-500 to-cyan-400",
      ring: "ring-blue-400/50",
    },
  ];

  return (
    <div className="min-h-screen flex flex-col items-center justify-center px-4 py-12 relative overflow-hidden">
      {/* Animated background blobs */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], rotate: [0, 90, 0] }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-40 -left-40 w-96 h-96 rounded-full bg-gradient-to-br from-purple-300/40 to-pink-300/40 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], rotate: [0, -60, 0] }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-40 -right-40 w-96 h-96 rounded-full bg-gradient-to-br from-amber-300/30 to-orange-300/30 blur-3xl"
        />
        <motion.div
          animate={{ scale: [1, 1.1, 1], x: [0, 50, 0] }}
          transition={{ duration: 15, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-1/3 left-1/3 w-72 h-72 rounded-full bg-gradient-to-br from-teal-300/30 to-emerald-300/30 blur-3xl"
        />
      </div>

      {/* Logo */}
      <motion.div
        initial={{ opacity: 0, y: -30, scale: 0.9 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="mb-10 text-center relative z-10"
      >
        <img src="/assets/carters-logo.png" alt="Carters Care Group" className="h-20 w-auto mx-auto mb-4 drop-shadow-lg" />
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: "100%" }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="h-0.5 mx-auto max-w-xs bg-gradient-to-r from-transparent via-purple-400 to-transparent"
        />
      </motion.div>

      {/* Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-3xl md:text-4xl font-bold text-center mb-3 text-gray-900 relative z-10"
      >
        How can we{" "}
        <span className="bg-gradient-to-r from-purple-600 via-pink-500 to-amber-500 bg-clip-text text-transparent">
          help you
        </span>{" "}
        today?
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="text-gray-500 text-center mb-12 max-w-lg relative z-10"
      >
        Choose your portal to access services and information tailored to your needs.
      </motion.p>

      {/* Three Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full relative z-10">
        {options.map((opt, i) => {
          const Icon = opt.icon;
          return (
            <motion.button
              key={opt.id}
              initial={{ opacity: 0, y: 40, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
              whileHover={{ scale: 1.04, y: -8, transition: { duration: 0.2 } }}
              whileTap={{ scale: 0.97 }}
              onClick={() => setSkin(opt.id)}
              className={`group text-left rounded-3xl border-2 p-8 transition-all duration-300 cursor-pointer hover:shadow-2xl shadow-lg bg-white/80 backdrop-blur-sm ring-4 ring-transparent hover:${opt.ring}`}
              style={{ borderColor: "#e5e7eb" }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = opt.color;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#e5e7eb";
              }}
            >
              {/* Icon with gradient */}
              <div
                className={`w-16 h-16 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${opt.gradient} shadow-md`}
              >
                <Icon size={32} className="text-white" />
              </div>
              <h3 className="text-xl font-bold mb-1 text-gray-900">{opt.title}</h3>
              <p className="text-xs font-bold uppercase tracking-wider mb-3" style={{ color: opt.color }}>
                {opt.subtitle}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{opt.description}</p>
              <div className="mt-6 flex items-center text-sm font-bold" style={{ color: opt.color }}>
                Enter Portal
                <svg className="ml-2 w-5 h-5 transition-transform group-hover:translate-x-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.button>
          );
        })}
      </div>

      {/* Bottom tagline */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2 }}
        className="mt-12 text-sm text-gray-400 text-center relative z-10"
      >
        Your family in disability and aged care services
      </motion.p>
    </div>
  );
}
