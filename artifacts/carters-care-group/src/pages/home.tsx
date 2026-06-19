import { useSkin } from "@/App";
import Layout from "@/components/layout";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Heart, HandHeart, Building2, Star, Shield, Sparkles } from "lucide-react";

const skinData = {
  ndis: {
    heroTitle: "Your NDIS Journey, Supported Every Step",
    heroText: "We provide personalised disability support services that put you in control. From daily living assistance to community participation, we help you achieve your goals with dignity and independence.",
    heroImage: "/assets/hero-ndis.png",
    cta: "Explore NDIS Services",
    services: [
      { title: "Daily Living Support", desc: "Assistance with personal care, meals, and household tasks to help you live independently.", icon: Heart },
      { title: "Community Participation", desc: "Join social groups, activities, and events that build confidence and connection.", icon: HandHeart },
      { title: "Life Skills Development", desc: "Learn practical skills from cooking to budgeting, empowering you for the future.", icon: Star },
    ],
    quote: "Our NDIS support workers are passionate about helping participants live their best lives. We listen, we care, we deliver.",
    accent: "#0d8a5d",
    accentBg: "#e8f7f2",
    accentLight: "#f0fdf4",
    gradient: "from-emerald-500 to-teal-500",
  },
  "aged-care": {
    heroTitle: "Compassionate Aged Care, Where You Belong",
    heroText: "We specialise in providing exceptional aged care services that respect your dignity, choices, and preferences. Whether at home or in our intimate residential settings, we make every day comfortable and meaningful.",
    heroImage: "/assets/hero-aged-care.png",
    cta: "Explore Aged Care Services",
    services: [
      { title: "In-Home Care", desc: "Personal care, domestic assistance, and companionship in the comfort of your own home.", icon: Heart },
      { title: "Respite Care", desc: "Short-term relief for carers and a refreshing change of scene for loved ones.", icon: HandHeart },
      { title: "Residential Care", desc: "Intimate residential homes with personalised care and a warm community atmosphere.", icon: Star },
    ],
    quote: "We treat our aged care clients like family, because everyone deserves to feel valued, respected, and at home.",
    accent: "#c41e5a",
    accentBg: "#fdeef3",
    accentLight: "#fff1f2",
    gradient: "from-rose-500 to-pink-500",
  },
  "service-provider": {
    heroTitle: "Partner with Carters Care Group",
    heroText: "We collaborate with health professionals, support coordinators, and organisations to deliver exceptional care outcomes. Our streamlined referral process and dedicated partnership team make working together effortless.",
    heroImage: "/assets/hero-partner.png",
    cta: "Partner With Us",
    services: [
      { title: "Referral Management", desc: "Fast, efficient referral processing with clear communication at every step.", icon: Heart },
      { title: "Care Coordination", desc: "We work alongside your team to ensure seamless, integrated care for clients.", icon: HandHeart },
      { title: "Reporting & Compliance", desc: "Transparent reporting that meets NDIS and aged care regulatory requirements.", icon: Star },
    ],
    quote: "Our partners trust us because we deliver on our promises. We are responsive, professional, and genuinely care about outcomes.",
    accent: "#2563b5",
    accentBg: "#eef4fc",
    accentLight: "#eff6ff",
    gradient: "from-blue-500 to-cyan-500",
  },
};

export default function Home() {
  const { skin } = useSkin();
  const data = skinData[skin as keyof typeof skinData];
  if (!data) return null;

  return (
    <Layout>
      {/* Hero Section with gradient overlay */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.heroImage} alt="Hero" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        {/* Decorative floating blobs */}
        <div className="absolute top-10 right-10 w-32 h-32 rounded-full bg-gradient-to-br from-white/10 to-white/5 blur-2xl" />
        <div className="absolute bottom-20 left-20 w-40 h-40 rounded-full bg-gradient-to-br from-white/10 to-transparent blur-2xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-36">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-6">
              <Sparkles size={14} className="text-white/80" />
              <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">Welcome to Carters Care Group</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
              {data.heroTitle}
            </h1>
            <p className="text-lg text-white/85 mb-8 leading-relaxed max-w-xl">
              {data.heroText}
            </p>
            <div className="flex flex-wrap gap-4">
              <Link
                href="/services"
                className={`inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white transition-all hover:scale-105 hover:shadow-lg bg-gradient-to-r ${data.gradient}`}
              >
                {data.cta}
                <ArrowRight size={18} />
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3.5 rounded-xl font-bold text-white border-2 border-white/30 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/50"
              >
                Get In Touch
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trust badges */}
      <section className="py-8 bg-white border-b border-gray-100">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-8 md:gap-12">
            {[
              { icon: Shield, label: "NDIS Registered" },
              { icon: Heart, label: "Aged Care Approved" },
              { icon: Sparkles, label: "5-Star Rated" },
              { icon: Star, label: "Family Owned" },
            ].map(({ icon: Icon, label }) => (
              <div key={label} className="flex items-center gap-2 text-gray-500">
                <Icon size={18} className="text-purple-500" />
                <span className="text-sm font-medium">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Preview */}
      <section className="py-24 relative overflow-hidden" style={{ background: data.accentBg }}>
        {/* Decorative background pattern */}
        <div className="absolute top-0 left-0 w-full h-full opacity-30">
          <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-purple-200/50 to-pink-200/50 blur-3xl" />
          <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-amber-200/50 to-orange-200/50 blur-3xl" />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-4"
            >
              <span className="w-2 h-2 rounded-full" style={{ background: data.accent }} />
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">What We Offer</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Services</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">
              Tailored support designed around your needs, goals, and preferences.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {data.services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <div
                    className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${data.gradient} shadow-md group-hover:scale-110 transition-transform`}
                  >
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
          <div className="text-center mt-12">
            <Link
              href="/services"
              className="inline-flex items-center gap-2 font-bold transition-all hover:gap-4"
              style={{ color: data.accent }}
            >
              View All Services <ArrowRight size={18} />
            </Link>
          </div>
        </div>
      </section>

      {/* Quote Section with image background */}
      <section className="py-24 relative overflow-hidden">
        <img src="/assets/gradient-bg.png" alt="" className="absolute inset-0 w-full h-full object-cover opacity-20" />
        <div className="absolute inset-0 bg-gradient-to-b from-white via-transparent to-white" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center mx-auto mb-8 shadow-lg">
              <svg className="w-8 h-8 text-white" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
            </div>
            <h2 className="text-2xl md:text-4xl font-bold text-gray-900 mb-8 leading-relaxed">
              {data.quote}
            </h2>
            <Link
              href="/contact"
              className={`inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white transition-all hover:scale-105 hover:shadow-xl bg-gradient-to-r ${data.gradient}`}
            >
              Get In Touch
              <ArrowRight size={18} />
            </Link>
          </motion.div>
        </div>
      </section>

      {/* CTA Banner */}
      <section className="py-16 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${data.gradient}`} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-30" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Ready to get started?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Contact our friendly team today for a free consultation or to learn more about our services.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white transition-all hover:scale-105 hover:shadow-xl"
                style={{ color: data.accent }}
              >
                Contact Us
                <ArrowRight size={18} />
              </Link>
              <a
                href="tel:0410186009"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold text-white border-2 border-white/40 backdrop-blur-sm transition-all hover:bg-white/10"
              >
                <PhoneIcon size={18} />
                0410 186 009
              </a>
            </div>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}

function PhoneIcon({ size }: { size: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
