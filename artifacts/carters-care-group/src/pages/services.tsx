import { useSkin } from "@/App";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Heart, HandHeart, Star, Home, Users, Calendar, Car, Brain, CookingPot, Sparkles } from "lucide-react";

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
    accent: "#1a5f4a",
    accentBg: "#f0f7f4",
    image: "/assets/daily-tasks.jpg",
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
    accent: "#8b1e3f",
    accentBg: "#fdf2f5",
    image: "/assets/respite-care.jpg",
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
    accent: "#1e3a5f",
    accentBg: "#f2f6fd",
    image: "/assets/community-participation.jpg",
  },
};

export default function Services() {
  const { skin } = useSkin();
  const data = skinData[skin as keyof typeof skinData];
  if (!data) return null;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={data.image} alt="Services" className="w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="max-w-2xl"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">{data.title}</h1>
            <p className="text-lg text-white/90 leading-relaxed">{data.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20" style={{ background: data.accentBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {data.services.map((s, i) => {
              const Icon = s.icon;
              return (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.08 }}
                  className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
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
        </div>
      </section>
    </Layout>
  );
}
