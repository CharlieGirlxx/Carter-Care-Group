import { useSkin } from "@/App";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Heart, Shield, Users, Award } from "lucide-react";

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
    accent: "#1a5f4a",
    accentBg: "#f0f7f4",
    image: "/assets/community-participation.jpg",
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
    accent: "#8b1e3f",
    accentBg: "#fdf2f5",
    image: "/assets/assist-personal.jpg",
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
    accent: "#1e3a5f",
    accentBg: "#f2f6fd",
    image: "/assets/life-stage-transition.jpg",
  },
};

export default function About() {
  const { skin } = useSkin();
  const data = skinData[skin as keyof typeof skinData];
  if (!data) return null;

  return (
    <Layout>
      {/* Hero */}
      <section className="relative">
        <div className="absolute inset-0">
          <img src={data.image} alt="About" className="w-full h-full object-cover" />
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
            <p className="text-lg text-white/90 leading-relaxed">{data.intro}</p>
          </motion.div>
        </div>
      </section>

      {/* Story */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Story</h2>
            <p className="text-gray-500 leading-relaxed text-lg">{data.story}</p>
          </motion.div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20" style={{ background: data.accentBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-3">Our Values</h2>
            <p className="text-gray-500 max-w-xl mx-auto">The principles that guide everything we do.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {data.values.map((v, i) => {
              const Icon = v.icon;
              return (
                <motion.div
                  key={v.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="bg-white rounded-2xl p-8 text-center shadow-sm border border-gray-100"
                >
                  <div
                    className="w-14 h-14 rounded-xl flex items-center justify-center mx-auto mb-5"
                    style={{ background: data.accentBg }}
                  >
                    <Icon size={28} style={{ color: data.accent }} />
                  </div>
                  <h3 className="text-lg font-bold text-gray-900 mb-2">{v.title}</h3>
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
