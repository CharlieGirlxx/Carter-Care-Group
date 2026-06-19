import { useSkin } from "@/App";
import Layout from "@/components/layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Heart, HandHeart, Building2, Star } from "lucide-react";

const skinData = {
  ndis: {
    heroTitle: "Your NDIS Journey, Supported Every Step",
    heroText: "We provide personalised disability support services that put you in control. From daily living assistance to community participation, we help you achieve your goals with dignity and independence.",
    heroImage: "/assets/daily-tasks.jpg",
    cta: "Explore NDIS Services",
    services: [
      { title: "Daily Living Support", desc: "Assistance with personal care, meals, and household tasks to help you live independently.", icon: Heart },
      { title: "Community Participation", desc: "Join social groups, activities, and events that build confidence and connection.", icon: HandHeart },
      { title: "Life Skills Development", desc: "Learn practical skills from cooking to budgeting, empowering you for the future.", icon: Star },
    ],
    quote: "Our NDIS support workers are passionate about helping participants live their best lives. We listen, we care, we deliver.",
    accent: "#1a5f4a",
    accentBg: "#f0f7f4",
  },
  "aged-care": {
    heroTitle: "Compassionate Aged Care, Where You Belong",
    heroText: "We specialise in providing exceptional aged care services that respect your dignity, choices, and preferences. Whether at home or in our intimate residential settings, we make every day comfortable and meaningful.",
    heroImage: "/assets/respite-care.jpg",
    cta: "Explore Aged Care Services",
    services: [
      { title: "In-Home Care", desc: "Personal care, domestic assistance, and companionship in the comfort of your own home.", icon: Heart },
      { title: "Respite Care", desc: "Short-term relief for carers and a refreshing change of scene for loved ones.", icon: HandHeart },
      { title: "Residential Care", desc: "Intimate residential homes with personalised care and a warm community atmosphere.", icon: Star },
    ],
    quote: "We treat our aged care clients like family, because everyone deserves to feel valued, respected, and at home.",
    accent: "#8b1e3f",
    accentBg: "#fdf2f5",
  },
  "service-provider": {
    heroTitle: "Partner with Carters Care Group",
    heroText: "We collaborate with health professionals, support coordinators, and organisations to deliver exceptional care outcomes. Our streamlined referral process and dedicated partnership team make working together effortless.",
    heroImage: "/assets/community-participation.jpg",
    cta: "Partner With Us",
    services: [
      { title: "Referral Management", desc: "Fast, efficient referral processing with clear communication at every step.", icon: Heart },
      { title: "Care Coordination", desc: "We work alongside your team to ensure seamless, integrated care for clients.", icon: HandHeart },
      { title: "Reporting & Compliance", desc: "Transparent reporting that meets NDIS and aged care regulatory requirements.", icon: Star },
    ],
    quote: "Our partners trust us because we deliver on our promises. We are responsive, professional, and genuinely care about outcomes.",
    accent: "#1e3a5f",
    accentBg: "#f2f6fd",
  },
};

export default function Home() {
  const { skin } = useSkin();
  const data = skinData[skin as keyof typeof skinData];
  if (!data) return null;

  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.heroImage} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-6 leading-tight">
              {data.heroTitle}
            </h1>
            <p className="text-lg text-white/90 mb-8 leading-relaxed">
              {data.heroText}
            </p>
            <Link
              href="/services"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105"
              style={{ background: data.accent }}
            >
              {data.cta}
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-20" style={{ background: data.accentBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              Tailored support designed around your needs, goals, and preferences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100"
                >
                  <div
                    className="w-12 h-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: data.accentBg }}
                  >
                    <Icon size={24} style={{ color: data.accent }} />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-10">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-semibold transition-colors hover:opacity-80"
              style={{ color: data.accent }}
            >
              View All Services <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <svg className="w-10 h-10 mx-auto mb-6 opacity-20" fill="currentColor" viewBox="0 0 24 24">
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6 leading-relaxed">
              {data.quote}
            </h2>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg font-semibold text-white transition-all hover:scale-105"
              style={{ background: data.accent }}
            >
              Get In Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
