import { useSkin } from "@/App";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import PageTransition from "@/components/PageTransition";
import ImageCarousel from "@/components/ImageCarousel";

const skinData = {
  ndis: {
    title: "Contact Our\nNDIS Team",
    subtitle: "Reach out to discuss your NDIS plan, support needs, or to book a free consultation.",
    accent: "#0b7a52",
    accentBg: "#f0fdf4",
    gradient: "from-emerald-500 to-teal-500",
    gradientCss: "linear-gradient(135deg, #0d8a5d, #14b87a)",
    images: ["/assets/ndis-contact-1.png", "/assets/hero-ndis-1.png", "/assets/hero-ndis-2.png"],
    inputFocus: "#0d8a5d",
  },
  "aged-care": {
    title: "Contact Our\nAged Care Team",
    subtitle: "Get in touch to discuss aged care options, home care packages, or residential care enquiries.",
    accent: "#9b1239",
    accentBg: "#fff1f2",
    gradient: "from-rose-500 to-pink-500",
    gradientCss: "linear-gradient(135deg, #be123c, #e11d6a)",
    images: ["/assets/hero-aged-1.png", "/assets/hero-aged-2.png", "/assets/hero-aged-3.png"],
    inputFocus: "#be123c",
  },
  "service-provider": {
    title: "Get Started with\nthe Platform",
    subtitle: "Request a demo, ask about pricing, or get help onboarding your organisation onto the Carters Care Platform.",
    accent: "#1d4ed8",
    accentBg: "#eff6ff",
    gradient: "from-blue-500 to-cyan-500",
    gradientCss: "linear-gradient(135deg, #2563eb, #06b6d4)",
    images: ["/assets/hero-platform-1.png", "/assets/hero-platform-2.png", "/assets/hero-platform-3.png"],
    inputFocus: "#2563eb",
  },
};

const inputClass = "w-full px-4 py-3.5 rounded-2xl border-2 border-gray-100 bg-gray-50 focus:outline-none focus:bg-white transition-all duration-200 text-sm font-medium text-gray-900 placeholder:text-gray-400";

export default function Contact() {
  const { skin } = useSkin();
  const data = skinData[skin as keyof typeof skinData];
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [focusedField, setFocusedField] = useState<string | null>(null);

  if (!data) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const getInputStyle = (field: string) => ({
    borderColor: focusedField === field ? data.inputFocus : undefined,
    boxShadow: focusedField === field ? `0 0 0 3px ${data.inputFocus}20` : undefined,
  });

  const contactItems = [
    {
      icon: Phone,
      label: "Phone",
      value: "1300 00 27 23",
      href: "tel:1300002723",
    },
    {
      icon: Mail,
      label: "Email",
      value: skin === "service-provider" ? "sales@carters.care" : "hello@carters.care",
      href: skin === "service-provider" ? "mailto:sales@carters.care" : "mailto:hello@carters.care",
    },
    {
      icon: MapPin,
      label: "Location",
      value: "PO Box 1118, Osborne Park, WA 6916",
      href: null,
    },
    {
      icon: Clock,
      label: "Hours",
      value: skin === "service-provider"
        ? "Office Hours: Mon\u2013Fri 9am \u2013 5pm\nSales Support: 24hrs"
        : "Office Hours: Mon\u2013Fri 9am \u2013 5pm\nAfter Hours Participant Contact: 24hrs",
      href: null,
    },
  ];

  return (
    <PageTransition>
      <Layout>
        {/* ── Hero ── */}
        <section className="relative overflow-hidden min-h-[60vh] flex items-center">
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
            transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
            className="absolute top-12 right-12 w-48 h-48 rounded-full blur-3xl opacity-25"
            style={{ background: data.gradientCss }}
          />

          <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 md:py-28 w-full">
            <motion.div
              initial={{ opacity: 0, y: 40, filter: "blur(8px)" }}
              animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
              transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
              className="max-w-2xl"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full backdrop-blur-md border border-white/20 mb-8"
                style={{ background: "rgba(255,255,255,0.12)" }}>
                <Sparkles size={13} className="text-white/80" />
                <span className="text-xs font-bold text-white/90 uppercase tracking-widest">Get In Touch</span>
              </div>
              <h1 className="text-4xl md:text-6xl font-extrabold text-white mb-6 leading-[1.05] tracking-tight whitespace-pre-line">
                {data.title}
              </h1>
              <p className="text-lg text-white/80 leading-relaxed max-w-lg">{data.subtitle}</p>
            </motion.div>
          </div>
        </section>

        {/* Wave into content */}
        <div className="overflow-hidden" style={{ background: data.accentBg }}>
          <svg viewBox="0 0 1440 72" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,36 C480,72 960,0 1440,36 L1440,0 L0,0 Z" fill="black" fillOpacity="0" />
          </svg>
        </div>

        {/* ── Contact Content ── */}
        <section className="py-20 relative overflow-hidden" style={{ background: data.accentBg }}>
          <div className="absolute top-0 right-0 w-80 h-80 rounded-full blur-3xl pointer-events-none opacity-30"
            style={{ background: `radial-gradient(circle, ${data.accent}25 0%, transparent 70%)`, transform: "translate(30%, -30%)" }} />

          <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">

              {/* Contact Info */}
              <motion.div
                initial={{ opacity: 0, x: -36, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bg-white rounded-3xl p-8 border border-white h-full"
                  style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.07)" }}>
                  <div className="w-16 h-1.5 rounded-full mb-7" style={{ background: data.gradientCss }} />
                  <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Details</h3>
                  <div className="space-y-6">
                    {contactItems.map((item) => {
                      const Icon = item.icon;
                      return (
                        <div key={item.label} className="flex items-start gap-4 group">
                          <div
                            className="w-12 h-12 rounded-2xl flex items-center justify-center shrink-0 shadow-md group-hover:scale-110 transition-transform duration-300"
                            style={{ background: data.gradientCss }}
                          >
                            <Icon size={19} className="text-white" />
                          </div>
                          <div>
                            <p className="font-bold text-gray-900 text-sm mb-0.5">{item.label}</p>
                            {item.href ? (
                              <a href={item.href} className="text-gray-500 hover:text-gray-900 transition-colors text-sm leading-relaxed whitespace-pre-line">
                                {item.value}
                              </a>
                            ) : (
                              <p className="text-gray-500 text-sm leading-relaxed whitespace-pre-line">{item.value}</p>
                            )}
                          </div>
                        </div>
                      );
                    })}
                  </div>

                  {/* Quick call button */}
                  <div className="mt-10 pt-8 border-t border-gray-100">
                    <p className="text-sm text-gray-500 mb-4 font-medium">Prefer to talk? Call us directly:</p>
                    <a
                      href="tel:1300002723"
                      className="inline-flex items-center gap-2 px-6 py-3.5 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-105 hover:shadow-lg"
                      style={{ background: data.gradientCss }}
                    >
                      <Phone size={16} />
                      1300 00 27 23
                    </a>
                  </div>
                </div>
              </motion.div>

              {/* Contact Form */}
              <motion.div
                initial={{ opacity: 0, x: 36, filter: "blur(6px)" }}
                whileInView={{ opacity: 1, x: 0, filter: "blur(0px)" }}
                viewport={{ once: true }}
                transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
              >
                <div className="bg-white rounded-3xl p-8 border border-white"
                  style={{ boxShadow: "0 8px 40px rgba(0,0,0,0.07)" }}>
                  {submitted ? (
                    <div className="text-center py-12">
                      <motion.div
                        initial={{ scale: 0.5, opacity: 0 }}
                        animate={{ scale: 1, opacity: 1 }}
                        transition={{ type: "spring", stiffness: 260, damping: 20 }}
                        className="w-24 h-24 rounded-3xl flex items-center justify-center mx-auto mb-6 shadow-xl"
                        style={{ background: data.gradientCss }}
                      >
                        <Send size={36} className="text-white" />
                      </motion.div>
                      <motion.div
                        initial={{ opacity: 0, y: 16 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.2, duration: 0.5 }}
                      >
                        <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                        <p className="text-gray-500 mb-8 leading-relaxed">Thank you for reaching out. Our team will contact you within one business day.</p>
                        <button
                          onClick={() => { setSubmitted(false); setForm({ name: "", email: "", phone: "", message: "" }); }}
                          className="text-sm font-bold transition-colors hover:opacity-70"
                          style={{ color: data.accent }}
                        >
                          Send another message →
                        </button>
                      </motion.div>
                    </div>
                  ) : (
                    <>
                      <div className="w-16 h-1.5 rounded-full mb-7" style={{ background: data.gradientCss }} />
                      <h3 className="text-2xl font-bold text-gray-900 mb-7">Send a Message</h3>
                      <form onSubmit={handleSubmit} className="space-y-4">
                        <div>
                          <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wider">Full Name *</label>
                          <input
                            type="text"
                            required
                            placeholder="Jane Smith"
                            className={inputClass}
                            style={getInputStyle("name")}
                            value={form.name}
                            onChange={(e) => setForm({ ...form, name: e.target.value })}
                            onFocus={() => setFocusedField("name")}
                            onBlur={() => setFocusedField(null)}
                          />
                        </div>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                          <div>
                            <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wider">Email *</label>
                            <input
                              type="email"
                              required
                              placeholder="jane@example.com"
                              className={inputClass}
                              style={getInputStyle("email")}
                              value={form.email}
                              onChange={(e) => setForm({ ...form, email: e.target.value })}
                              onFocus={() => setFocusedField("email")}
                              onBlur={() => setFocusedField(null)}
                            />
                          </div>
                          <div>
                            <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wider">Phone</label>
                            <input
                              type="tel"
                              placeholder="04xx xxx xxx"
                              className={inputClass}
                              style={getInputStyle("phone")}
                              value={form.phone}
                              onChange={(e) => setForm({ ...form, phone: e.target.value })}
                              onFocus={() => setFocusedField("phone")}
                              onBlur={() => setFocusedField(null)}
                            />
                          </div>
                        </div>
                        <div>
                          <label className="block text-xs font-bold text-gray-600 mb-2 uppercase tracking-wider">Message *</label>
                          <textarea
                            required
                            rows={5}
                            placeholder="Tell us how we can help you..."
                            className={inputClass + " resize-none"}
                            style={getInputStyle("message")}
                            value={form.message}
                            onChange={(e) => setForm({ ...form, message: e.target.value })}
                            onFocus={() => setFocusedField("message")}
                            onBlur={() => setFocusedField(null)}
                          />
                        </div>
                        <button
                          type="submit"
                          className="w-full py-4 rounded-2xl font-bold text-white transition-all duration-300 hover:scale-[1.02] active:scale-[0.98] hover:shadow-xl flex items-center justify-center gap-2"
                          style={{ background: data.gradientCss, boxShadow: `0 6px 24px ${data.accent}35` }}
                        >
                          Send Message
                          <ArrowRight size={17} />
                        </button>
                        <p className="text-xs text-gray-400 text-center">We typically respond within 1 business day.</p>
                      </form>
                    </>
                  )}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Wave into CTA */}
        <div className="overflow-hidden" style={{ background: data.accent }}>
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,30 C480,60 960,0 1440,30 L1440,0 L0,0 Z" fill={data.accentBg} />
          </svg>
        </div>

        {/* ── CTA strip ── */}
        <section className="py-14 relative overflow-hidden" style={{ background: data.gradientCss }}>
          <motion.div
            animate={{ x: [0, 40, 0] }}
            transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
            className="absolute inset-0 opacity-10"
            style={{ background: "radial-gradient(ellipse at 60% 50%, white 0%, transparent 60%)" }}
          />
          <div className="max-w-4xl mx-auto px-4 text-center relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            >
              <h2 className="text-2xl md:text-4xl font-extrabold text-white mb-3 tracking-tight">Prefer to call?</h2>
              <p className="text-white/70 text-base mb-8">Our friendly team is available 7 days a week.</p>
              <a
                href="tel:1300002723"
                className="inline-flex items-center gap-2 px-8 py-4 rounded-2xl font-bold bg-white transition-all duration-300 hover:scale-105 hover:shadow-xl"
                style={{ color: data.accent }}
              >
                <Phone size={17} />
                1300 00 27 23
              </a>
            </motion.div>
          </div>
        </section>
      </Layout>
    </PageTransition>
  );
}
