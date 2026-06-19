import { useSkin } from "@/App";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Heart, Shield, Users, Award, Star, Sparkles } from "lucide-react";

const skinData = {
  ndis: {
    title: "About Our NDIS Services",
    intro: "Carters Care Group is a registered NDIS provider committed to delivering personalised, high-quality support services that empower participants to live independently and achieve their goals.",
    story: "Our NDIS team was founded on a simple belief: every person deserves support that is tailored to their unique needs, preferences, and aspirations. We have built a team of passionate support workers who bring empathy, skill, and genuine care to every interaction.",
    values: [
      { icon: Heart, title: "Person-Centred", desc: "Your goals, your plan, your way. We put you at the centre of every decision." },
      { icon: Shield, title: "Trust & Safety", desc: "All our support workers are screened, trained, and committed to your wellbeing." },
      { icon: Users, title: "Community", desc: "We help you build connections, friendships, and a sense of belonging." },
      { icon: Award, title: "Quality", desc: "We continuously review and improve our services to meet the highest standards." },
    ],
    accent: "#0d8a5d",
    accentBg: "#e8f7f2",
    gradient: "from-emerald-500 to-teal-500",
    image: "/assets/about-community.png",
  },
  "aged-care": {
    title: "About Our Aged Care",
    intro: "Carters Care Group provides exceptional aged care services that honour the dignity, choices, and individuality of every senior we support. We treat our clients like family.",
    story: "Our aged care services were born from a deep respect for our older generations and a commitment to ensuring they receive the personalised, compassionate care they deserve. We understand that every senior has a unique story, and we tailor our services to honour that.",
    values: [
      { icon: Heart, title: "Dignity", desc: "We respect your choices, privacy, and independence at every stage of care." },
      { icon: Shield, title: "Safety", desc: "Rigorous protocols and trained staff ensure a secure, comfortable environment." },
      { icon: Users, title: "Family", desc: "We keep families informed and involved, because care is a shared journey." },
      { icon: Award, title: "Excellence", desc: "We strive for the highest standards in personal care, nutrition, and lifestyle." },
    ],
    accent: "#c41e5a",
    accentBg: "#fdeef3",
    gradient: "from-rose-500 to-pink-500",
    image: "/assets/about-community.png",
  },
  "service-provider": {
    title: "About Our Partnership Model",
    intro: "Carters Care Group works collaboratively with health professionals, support coordinators, and organisations to deliver seamless, high-quality care outcomes for shared clients.",
    story: "We built our partnership model on responsiveness, transparency, and shared purpose. When you refer a client to us, you gain a dedicated partner who communicates clearly, reports accurately, and delivers on commitments.",
    values: [
      { icon: Heart, title: "Collaboration", desc: "We work alongside your team, not around it. Shared goals drive shared success." },
      { icon: Shield, title: "Reliability", desc: "Consistent service delivery and proactive communication you can count on." },
      { icon: Users, title: "Communication", desc: "Regular updates, clear reporting, and open channels for feedback." },
      { icon: Award, title: "Compliance", desc: "We meet all NDIS and aged care regulatory requirements with full transparency." },
    ],
    accent: "#2563b5",
    accentBg: "#eef4fc",
    gradient: "from-blue-500 to-cyan-500",
    image: "/assets/about-community.png",
  },
};

export default function About() {
  const { skin } = useSkin();
  const data = skinData[skin as keyof typeof skinData];
  if (!data) return null;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.image} alt="About" className="w-full h-full object-cover" />
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
              <Star size={14} className="text-white/80" />
              <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">Our Story</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{data.title}</h1>
            <p className="text-lg text-white/85 leading-relaxed">{data.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="absolute top-0 left-0 w-72 h-72 rounded-full bg-gradient-to-br from-purple-100 to-pink-100 blur-3xl opacity-50" />
        <div className="absolute bottom-0 right-0 w-72 h-72 rounded-full bg-gradient-to-br from-amber-100 to-orange-100 blur-3xl opacity-50" />
        
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="w-16 h-1 mx-auto mb-8 rounded-full bg-gradient-to-r from-purple-400 via-pink-400 to-amber-400" />
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-500 leading-relaxed text-lg max-w-2xl mx-auto">{data.story}</p>
          </motion.div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 border-y border-gray-100 bg-gradient-to-r from-gray-50 to-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "500+", label: "Clients Supported" },
              { value: "50+", label: "Care Workers" },
              { value: "10+", label: "Years Experience" },
              { value: "100%", label: "Commitment" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <div className={`text-3xl md:text-4xl font-bold bg-gradient-to-r ${data.gradient} bg-clip-text text-transparent mb-2`}>
                  {stat.value}
                </div>
                <div className="text-sm text-gray-500 font-medium">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-24 relative overflow-hidden" style={{ background: data.accentBg }}>
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-purple-200/40 to-pink-200/40 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-amber-200/40 to-orange-200/40 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center mb-14">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 backdrop-blur-sm border border-gray-200 mb-4"
            >
              <Sparkles size={14} className="text-amber-500" />
              <span className="text-xs font-semibold text-gray-600 uppercase tracking-wider">What Drives Us</span>
            </motion.div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">Our Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto text-lg">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-3xl p-8 text-center shadow-lg border border-gray-100 hover:shadow-xl transition-all hover:-translate-y-1"
                >
                  <div className={`w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${data.gradient} shadow-md`}>
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
  );
}
