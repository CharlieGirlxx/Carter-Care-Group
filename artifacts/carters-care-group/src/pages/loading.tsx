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
      color: "#1a5f4a",
      bg: "#f0f7f4",
      accent: "#2d8a6e",
    },
    {
      id: "aged-care" as const,
      title: "Aged Care Clients",
      subtitle: "Seniors & Families",
      description: "Compassionate aged care services that respect your dignity, choices, and independence.",
      icon: HandHeart,
      color: "#8b1e3f",
      bg: "#fdf2f5",
      accent: "#b52e5a",
    },
    {
      id: "service-provider" as const,
      title: "Service Provider",
      subtitle: "Partners & Referrers",
      description: "Collaborate with us to deliver exceptional care outcomes for your clients.",
      icon: Building2,
      color: "#1e3a5f",
      bg: "#f2f6fd",
      accent: "#2e5a8b",
    },
  ];

  return (
    <div className="min-h-screen bg-white flex flex-col items-center justify-center px-4 py-12">
      {/* Logo intro */}
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="mb-10 text-center"
      >
        <img src="/assets/carters-logo.png" alt="Carters Care Group" className="h-16 w-auto mx-auto mb-4" />
        <p className="text-gray-500 text-sm tracking-wide">Welcome to Carters Care Group</p>
      </motion.div>

      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.3 }}
        className="text-2xl md:text-3xl font-bold text-center mb-2 text-gray-900"
      >
        How can we help you today?
      </motion.h1>
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.45 }}
        className="text-gray-500 text-center mb-10 max-w-lg"
      >
        Choose your portal to access services and information tailored to your needs.
      </motion.p>

      {/* Three Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl w-full">
        {options.map((opt, i) => {
          const Icon = opt.icon;
          return (
            <motion.button
              key={opt.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 0.5 + i * 0.15 }}
              whileHover={{ scale: 1.03, y: -4 }}
              whileTap={{ scale: 0.98 }}
              onClick={() => setSkin(opt.id)}
              className="group text-left rounded-2xl border-2 p-8 transition-all duration-300 cursor-pointer hover:shadow-xl"
              style={{
                borderColor: "#e5e5e5",
                background: "#fff",
              }}
              onMouseEnter={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = opt.color;
                (e.currentTarget as HTMLButtonElement).style.background = opt.bg;
              }}
              onMouseLeave={(e) => {
                (e.currentTarget as HTMLButtonElement).style.borderColor = "#e5e5e5";
                (e.currentTarget as HTMLButtonElement).style.background = "#fff";
              }}
            >
              <div
                className="w-14 h-14 rounded-xl flex items-center justify-center mb-5 transition-colors"
                style={{ background: opt.bg }}
              >
                <Icon size={28} style={{ color: opt.color }} />
              </div>
              <h3 className="text-xl font-bold mb-1 text-gray-900">{opt.title}</h3>
              <p className="text-xs font-medium uppercase tracking-wider mb-3" style={{ color: opt.color }}>
                {opt.subtitle}
              </p>
              <p className="text-sm text-gray-500 leading-relaxed">{opt.description}</p>
              <div className="mt-6 flex items-center text-sm font-semibold" style={{ color: opt.color }}>
                Enter Portal
                <svg className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                </svg>
              </div>
            </motion.button>
          );
        })}
      </div>
    </div>
  );
}
