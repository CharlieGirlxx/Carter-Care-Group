import { useSkin } from "@/App";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Heart, HandHeart, Star, Home, Users, Calendar, Car, Brain, CookingPot, Sparkles, ArrowRight, ChevronDown } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";
import PageTransition from "@/components/PageTransition";
import ImageCarousel from "@/components/ImageCarousel";

const skinData = {
  ndis: {
    title: "NDIS Support\nServices",
    subtitle: "Comprehensive support services tailored to your NDIS plan and personal goals.",
    images: ["/assets/assist-personal.jpg", "/assets/daily-tasks.jpg", "/assets/life-stage-transition.jpg"],
    services: [
      { icon: HandHeart, title: "Assist Personal Activities", desc: "Support with daily personal tasks including bathing, dressing, grooming, and mobility. We respect your privacy and dignity at all times.", detail: "Our support workers are trained to assist with personal care tasks while maintaining your comfort and dignity. We follow your preferences and routines, ensuring you feel respected and supported. Whether you need help with morning routines, evening care, or mobility assistance, we tailor our approach to your unique needs." },
      { icon: Home, title: "Assist Life Stage Transition", desc: "Moving into a new phase of life? We support transitions into independent living, new accommodation, or post-hospital care.", detail: "Life transitions can be challenging, but you don't have to face them alone. Our team helps you plan and execute smooth transitions, whether you're moving into your first independent home, relocating to new accommodation, or recovering after a hospital stay. We coordinate with families, healthcare providers, and other services to ensure continuity of care." },
      { icon: Users, title: "Community Participation", desc: "Join social groups, recreational activities, and community events. Build friendships, confidence, and a sense of belonging.", detail: "Being part of the community is essential for wellbeing. We help you explore and engage in activities that interest you — from social clubs and sports to art classes and volunteer work. Our support workers accompany you, provide transport, and help you build the confidence to participate independently over time." },
      { icon: Calendar, title: "Daily Tasks / Shared Living", desc: "Assistance with household tasks, meal preparation, and maintaining your living space in shared or individual settings.", detail: "A comfortable home environment supports your wellbeing. We assist with daily household tasks including cleaning, laundry, grocery shopping, and meal preparation. In shared living arrangements, we also help coordinate household responsibilities and support positive relationships among housemates." },
      { icon: Brain, title: "Developmental Life Skills", desc: "Programs to develop practical skills including cooking, budgeting, communication, and personal management.", detail: "Building life skills empowers you to live more independently. Our programs are tailored to your goals and may include cooking and nutrition, financial management, communication skills, travel training, and digital literacy. We work at your pace, celebrating progress and adapting to your learning style." },
      { icon: Heart, title: "Respite Care", desc: "Short-term relief for families and carers, providing quality care while giving primary caregivers a well-deserved break.", detail: "Carers need rest too. Our respite services provide temporary care for your loved one while you take time for yourself. Whether you need a few hours, a day, or a weekend, we ensure continuity of care and a positive experience for the person receiving support." },
    ],
    accent: "#0b7a52",
    accentBg: "#f0fdf4",
    gradient: "from-emerald-500 to-teal-500",
    gradientCss: "linear-gradient(135deg, #0d8a5d, #14b87a)",
  },
  "aged-care": {
    title: "Aged Care\nServices",
    subtitle: "Exceptional care for seniors that respects dignity, independence, and personal choice.",
    images: ["/assets/hero-aged-2.png", "/assets/respite-care.jpg", "/assets/community-participation.jpg"],
    services: [
      { icon: HandHeart, title: "Personal Care", desc: "Gentle, respectful assistance with bathing, dressing, grooming, medication reminders, and mobility support.", detail: "Our personal care services are delivered with the utmost respect for your dignity and preferences. We take time to understand your routines and comfort levels, ensuring that assistance with bathing, dressing, grooming, and mobility is provided in a way that makes you feel at ease." },
      { icon: Home, title: "Domestic Assistance", desc: "Help with household tasks, meal preparation, laundry, and maintaining a safe, comfortable home environment.", detail: "A clean, safe, and comfortable home supports your health and wellbeing. Our domestic assistance services include cleaning, laundry, ironing, meal preparation, and minor home maintenance. We also conduct regular safety checks to identify and address potential hazards in your home." },
      { icon: CookingPot, title: "Meal Preparation & Nutrition", desc: "Nutritious, home-style meals prepared to your tastes and dietary requirements, ensuring you stay healthy and satisfied.", detail: "Good nutrition is vital for health. Our meal preparation services are tailored to your dietary needs, preferences, and cultural requirements. We prepare fresh, nutritious meals that you enjoy, and can assist with shopping, menu planning, and ensuring you stay well-hydrated throughout the day." },
      { icon: Car, title: "Transport & Social Support", desc: "Safe transport to appointments, shopping, and social outings. We help you stay connected to your community.", detail: "Staying connected to your community is important. We provide safe, reliable transport for medical appointments, shopping, visiting friends and family, and attending social activities. Our support workers can accompany you or wait nearby, depending on your preference and needs." },
      { icon: Heart, title: "Respite Care", desc: "Temporary care for seniors in a comfortable, welcoming environment, giving family carers time to rest and recharge.", detail: "Family carers deserve time to rest and recharge. Our respite care services provide temporary support for your loved one, whether for a few hours, overnight, or a longer period. You can have peace of mind knowing that your family member is receiving compassionate, professional care in a safe environment." },
      { icon: Sparkles, title: "Residential Care", desc: "Intimate residential homes with personalised care plans, engaging activities, and a warm, family-like atmosphere.", detail: "Our residential care homes offer a warm, supportive environment where residents feel truly at home. With personalised care plans, engaging daily activities, and a focus on dignity and independence, we create a community where every resident is valued and respected." },
    ],
    accent: "#9b1239",
    accentBg: "#fff1f2",
    gradient: "from-rose-500 to-pink-500",
    gradientCss: "linear-gradient(135deg, #be123c, #e11d6a)",
  },
  "service-provider": {
    title: "Carters Care\nPlatform Features",
    subtitle: "Everything a modern NDIS or aged care organisation needs — in one powerful, easy-to-use platform.",
    images: ["/assets/hero-platform-2.png", "/assets/hero-platform-3.png", "/assets/hero-partner.png"],
    services: [
      { icon: Users, title: "Client Management", desc: "Centralise all participant and client records, NDIS plans, support goals, case notes, and documents in a single secure hub.", detail: "Stop managing client information across spreadsheets, folders, and multiple systems. Our Client Management module brings everything together — participant profiles, NDIS plans, support goals, progress notes, and important documents. Search, filter, and update records in seconds, with full audit trails and role-based access controls." },
      { icon: Calendar, title: "Roster & Scheduling", desc: "Build dynamic rosters, match the right workers to the right participants, manage availability, and push real-time shift notifications.", detail: "Rostering is one of the most time-consuming tasks in care. Our intelligent scheduling engine considers worker qualifications, participant preferences, travel times, and availability to suggest optimal rosters. Workers receive shift notifications via the mobile app, and last-minute changes are handled smoothly with automatic reallocation and participant notification." },
      { icon: HandHeart, title: "Care Plan Builder", desc: "Create, review, and update personalised care plans that align with NDIS funding categories and aged care package requirements.", detail: "Our Care Plan Builder makes it easy to create comprehensive, personalised care plans that align with NDIS funding categories and aged care package requirements. Set goals, define support needs, link outcomes, and track progress over time. Plans are automatically shared with relevant team members and updated in real time." },
      { icon: Brain, title: "Compliance & Audit Tools", desc: "Auto-generate NDIS Practice Standards reports, incident logs, medication records, and audit-ready documentation at the click of a button.", detail: "Compliance is non-negotiable. Our platform automatically generates NDIS Practice Standards reports, incident logs, medication administration records, and comprehensive audit-ready documentation. Stay ahead of regulatory changes with built-in alerts and templates that reflect current Australian care standards." },
      { icon: Home, title: "Billing & Claims", desc: "Streamline NDIS claim submission and aged care billing with automated invoicing, payment tracking, and reconciliation tools.", detail: "Reduce billing errors and speed up cash flow with our integrated billing module. NDIS claims are automatically generated from approved shifts and services, validated against plan budgets, and submitted directly to the NDIS portal. Aged care billing follows Home Care Package pricing and reporting requirements." },
      { icon: Heart, title: "Worker App", desc: "A companion mobile app for support workers — view shifts, access client notes, record progress, and submit timesheets on the go.", detail: "Our companion mobile app puts everything support workers need in their pocket. View upcoming shifts, access client care plans and notes, record progress and observations, submit digital timesheets, and communicate with coordinators. Available on iOS and Android with offline capability for remote areas." },
    ],
    accent: "#1d4ed8",
    accentBg: "#eff6ff",
    gradient: "from-blue-500 to-cyan-500",
    gradientCss: "linear-gradient(135deg, #2563eb, #06b6d4)",
  },
};

export default function Services() {
  const { skin } = useSkin();
  const data = skinData[skin as keyof typeof skinData];
  const [expanded, setExpanded] = useState<string | null>(null);
  if (!data) return null;

  return (
    <PageTransition>
      <Layout>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden min-h-[65vh] flex items-center">
          <ImageCarousel
            images={data.images}
            interval={7000}
            className="absolute inset-0"
            overlay={(
              <div className="absolute inset-0" style={{ background: "linear-gradient(120deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.45) 50%, rgba(0,0,0,0.15) 100%)" }} />
            )}
          />
          <motion.div
            animate={{ y: [0, -18, 0] }}
            transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 right-12 w-48 h-48 rounded-full blur-3xl opacity-25"
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
                <span className="text-xs font-bold text-white/90 uppercase tracking-widest">What We Offer</span>
              </div>
              <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight whitespace-pre-line">
                {data.title}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">{data.subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Wave into grid */}
        <div className="overflow-hidden" style={{ background: data.accentBg }}>
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,36 C240,72 480,0 720,36 C960,72 1200,0 1440,36 L1440,0 L0,0 Z" fill="black" fillOpacity="0" />
            <path d="M0,0 L1440,0 L1440,36 C1200,0 960,72 720,36 C480,0 240,72 0,36 Z" fill="rgba(0,0,0,0.3)" fillOpacity="0" />
          </svg>
        </div>

        {/* ── Services Grid ── */}
        <section className="pt-8 pb-24 relative overflow-hidden" style={{ background: data.accentBg }}>
          <div className="absolute top-0 right-0 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-30"
            style={{ background: `radial-gradient(circle, ${data.accent}30 0%, transparent 70%)`, transform: "translate(30%, -30%)" }} />
          <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl pointer-events-none opacity-20"
            style={{ background: `radial-gradient(circle, ${data.accent}25 0%, transparent 70%)`, transform: "translate(-30%, 30%)" }} />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-7">
              {data.services.map((s, i) => {
                const Icon = s.icon;
                const isOpen = expanded === s.title;
                return (
                  <motion.div
                    key={s.title}
                    initial={{ opacity: 0, y: 36 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6, delay: i * 0.08, ease: [0.22, 1, 0.36, 1] }}
                    whileHover={{ y: -4, transition: { duration: 0.3, ease: [0.22, 1, 0.36, 1] } }}
                    onClick={() => setExpanded(isOpen ? null : s.title)}
                    className="bg-white rounded-3xl p-8 border border-white group relative overflow-hidden cursor-pointer"
                    style={{ boxShadow: "0 4px 24px rgba(0,0,0,0.06)" }}
                  >
                    {/* Number watermark */}
                    <div className="absolute top-6 right-7 text-6xl font-black text-gray-100 leading-none select-none transition-colors duration-300 group-hover:text-gray-50">
                      {String(i + 1).padStart(2, "0")}
                    </div>

                    {/* Bottom gradient accent line */}
                    <div className="absolute bottom-0 left-0 right-0 h-0.5 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-b-3xl"
                      style={{ background: data.gradientCss }} />

                    <div
                      className="w-14 h-14 rounded-2xl flex items-center justify-center mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300 relative z-10"
                      style={{ background: data.gradientCss }}
                    >
                      <Icon size={26} className="text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-3 relative z-10">{s.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed relative z-10">{s.desc}</p>
                    <motion.div
                      initial={false}
                      animate={{ height: isOpen ? "auto" : 0, opacity: isOpen ? 1 : 0 }}
                      transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                      className="overflow-hidden"
                    >
                      <div className="pt-4 mt-4 border-t border-gray-100 text-sm text-gray-600 leading-relaxed relative z-10">
                        {s.detail}
                      </div>
                    </motion.div>
                    <div className="mt-4 flex items-center gap-1 text-xs font-semibold uppercase tracking-wider relative z-10 transition-colors"
                      style={{ color: data.accent }}>
                      <span>{isOpen ? "Show less" : "Learn more"}</span>
                      <motion.div animate={{ rotate: isOpen ? 180 : 0 }} transition={{ duration: 0.3 }}>
                        <ChevronDown size={14} />
                      </motion.div>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* Wave into CTA */}
        <div className="overflow-hidden" style={{ background: data.accent }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill={data.accentBg} />
          </svg>
        </div>

        {/* ── CTA ── */}
        <section className="py-16 relative overflow-hidden" style={{ background: data.gradientCss }}>
          <motion.div
            animate={{ x: [0, 50, 0], y: [0, -25, 0] }}
            transition={{ duration: 18, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-0 right-0 w-56 h-56 rounded-full blur-3xl opacity-20 bg-white"
          />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 28 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-3xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">Have questions about our services?</h2>
              <p className="text-white/75 text-lg mb-10 max-w-xl mx-auto leading-relaxed">
                Our friendly team is ready to help you find the right support for your needs.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ color: data.accent }}
              >
                Get In Touch
                <ArrowRight size={17} />
              </Link>
            </motion.div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
}
