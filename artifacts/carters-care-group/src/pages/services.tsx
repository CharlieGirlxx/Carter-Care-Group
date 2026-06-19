import { useSkin } from "@/App";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Heart, HandHeart, Star, Home, Users, Calendar, Car, Brain, CookingPot, Sparkles, ArrowRight } from "lucide-react";
import { Link } from "wouter";

const skinData = {
  ndis: {
    title: "NDIS Support Services",
    subtitle: "Comprehensive support services tailored to your NDIS plan and personal goals.",
    services: [
      { icon: HandHeart, title: "Assist Personal Activities", desc: "Support with daily personal tasks including bathing, dressing, grooming, and mobility. We respect your privacy and dignity at all times." },
      { icon: Home, title: "Assist Life Stage Transition", desc: "Moving into a new phase of life? We provide support for transitioning into independent living, new accommodation, or post-hospital care." },
      { icon: Users, title: "Community Participation", desc: "Join social groups, recreational activities, and community events. Build friendships, confidence, and a sense of belonging." },
      { icon: Calendar, title: "Daily Tasks / Shared Living", desc: "Assistance with household tasks, meal preparation, and maintaining your living space in shared or individual settings." },
      { icon: Brain, title: "Developmental Life Skills", desc: "Programs to develop practical skills including cooking, budgeting, communication, and personal management." },
      { icon: Heart, title: "Respite Care", desc: "Short-term relief for families and carers, providing quality care while giving primary caregivers a well-deserved break." },
    ],
    accent: "#0d8a5d",
    accentBg: "#e8f7f2",
    gradient: "from-emerald-500 to-teal-500",
    image: "/assets/hero-ndis.png",
  },
  "aged-care": {
    title: "Aged Care Services",
    subtitle: "Exceptional care for seniors that respects dignity, independence, and personal choice.",
    services: [
      { icon: HandHeart, title: "Personal Care", desc: "Gentle, respectful assistance with bathing, dressing, grooming, medication reminders, and mobility support." },
      { icon: Home, title: "Domestic Assistance", desc: "Help with household tasks, meal preparation, laundry, and maintaining a safe, comfortable home environment." },
      { icon: CookingPot, title: "Meal Preparation & Nutrition", desc: "Nutritious, home-style meals prepared to your tastes and dietary requirements, ensuring you stay healthy and satisfied." },
      { icon: Car, title: "Transport & Social Support", desc: "Safe transport to appointments, shopping, and social outings. We help you stay connected to your community." },
      { icon: Heart, title: "Respite Care", desc: "Temporary care for seniors in a comfortable, welcoming environment, giving family carers time to rest and recharge." },
      { icon: Sparkles, title: "Residential Care", desc: "Intimate residential homes with personalised care plans, engaging activities, and a warm, family-like atmosphere." },
    ],
    accent: "#c41e5a",
    accentBg: "#fdeef3",
    gradient: "from-rose-500 to-pink-500",
    image: "/assets/hero-aged-care.png",
  },
  "service-provider": {
    title: "Service Provider Solutions",
    subtitle: "Seamless partnership services designed to support health professionals, coordinators, and organisations.",
    services: [
      { icon: HandHeart, title: "NDIS Support Coordination", desc: "We work with support coordinators to implement NDIS plans effectively, ensuring participants receive the right services at the right time." },
      { icon: Home, title: "Aged Care Package Delivery", desc: "Reliable delivery of Home Care Package services with full documentation, compliance, and regular care reviews." },
      { icon: Users, title: "Collaborative Care Planning", desc: "Joint care planning with your team, ensuring all providers are aligned on client goals, preferences, and progress." },
      { icon: Calendar, title: "Referral & Intake", desc: "Fast, streamlined referral processing. We acknowledge referrals within 24 hours and provide clear next steps." },
      { icon: Brain, title: "Progress Reporting", desc: "Detailed, regular reporting on client outcomes, goal progress, and any concerns, keeping you fully informed." },
      { icon: Heart, title: "Crisis & Short-Notice Support", desc: "When urgent care is needed, our responsive team can mobilise quickly to ensure continuity and safety." },
    ],
    accent: "#2563b5",
    accentBg: "#eef4fc",
    gradient: "from-blue-500 to-cyan-500",
    image: "/assets/hero-partner.png",
  },
};

export default function Services() {
  const { skin } = useSkin();
  const data = skinData[skin as keyof typeof skinData];
  if (!data) return null;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.image} alt="Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-black/30" />
        </div>
        <div className="absolute top-20 right-20 w-40 h-40 rounded-full bg-gradient-to-br from-purple-400/20 to-pink-400/20 blur-3xl" />
        
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-32">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-2xl"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/15 backdrop-blur-md border border-white/20 mb-6">
              <Sparkles size={14} className="text-white/80" />
              <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">What We Offer</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{data.title}</h1>
            <p className="text-lg text-white/85 leading-relaxed">{data.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-24 relative overflow-hidden" style={{ background: data.accentBg }}>
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-purple-200/40 to-pink-200/40 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-amber-200/40 to-orange-200/40 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1 group"
                >
                  <div className={`w-14 h-14 rounded-2xl flex items-center justify-center mb-6 bg-gradient-to-br ${data.gradient} shadow-md group-hover:scale-110 transition-transform`}>
                    <Icon size={28} className="text-white" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-3">{s.title}</h3>
                  <p className="text-gray-500 text-sm leading-relaxed">{s.desc}</p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-16 relative overflow-hidden">
        <div className={`absolute inset-0 bg-gradient-to-r ${data.gradient}`} />
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMzAiIGN5PSIzMCIgcj0iMiIgZmlsbD0id2hpdGUiIG9wYWNpdHk9IjAuMSIvPjwvc3ZnPg==')] opacity-30" />
        
        <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Have questions about our services?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Our friendly team is ready to help you find the right support for your needs.
            </p>
            <Link
              href="/contact"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white transition-all hover:scale-105 hover:shadow-xl"
              style={{ color: data.accent }}
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
