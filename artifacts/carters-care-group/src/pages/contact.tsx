import { useSkin } from "@/App";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send, ArrowRight, Sparkles } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";

const skinData = {
  ndis: {
    title: "Contact Our NDIS Team",
    subtitle: "Reach out to discuss your NDIS plan, support needs, or to book a free consultation.",
    accent: "#0d8a5d",
    accentBg: "#e8f7f2",
    gradient: "from-emerald-500 to-teal-500",
    image: "/assets/contact-welcome.png",
  },
  "aged-care": {
    title: "Contact Our Aged Care Team",
    subtitle: "Get in touch to discuss aged care options, home care packages, or residential care enquiries.",
    accent: "#c41e5a",
    accentBg: "#fdeef3",
    gradient: "from-rose-500 to-pink-500",
    image: "/assets/contact-welcome.png",
  },
  "service-provider": {
    title: "Contact Our Partnership Team",
    subtitle: "Connect with us to explore referrals, partnerships, or collaborative care opportunities.",
    accent: "#2563b5",
    accentBg: "#eef4fc",
    gradient: "from-blue-500 to-cyan-500",
    image: "/assets/contact-welcome.png",
  },
};

export default function Contact() {
  const { skin } = useSkin();
  const data = skinData[skin as keyof typeof skinData];
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  if (!data) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <Layout>
      {/* Hero with image */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0">
          <img src={data.image} alt="Contact" className="w-full h-full object-cover" />
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
              <span className="text-xs font-semibold text-white/90 uppercase tracking-wider">Get In Touch</span>
            </div>
            <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">{data.title}</h1>
            <p className="text-lg text-white/85 leading-relaxed">{data.subtitle}</p>
          </motion.div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24 relative overflow-hidden" style={{ background: data.accentBg }}>
        <div className="absolute top-10 left-10 w-64 h-64 rounded-full bg-gradient-to-br from-purple-200/40 to-pink-200/40 blur-3xl" />
        <div className="absolute bottom-10 right-10 w-64 h-64 rounded-full bg-gradient-to-br from-amber-200/40 to-orange-200/40 blur-3xl" />
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                <div className="w-12 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mb-6" />
                <h3 className="text-2xl font-bold text-gray-900 mb-8">Contact Details</h3>
                <div className="space-y-6">
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${data.gradient} shadow-md`}>
                      <Phone size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Phone</p>
                      <a href="tel:0410186009" className="text-gray-500 hover:text-gray-900 transition-colors">0410 186 009</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${data.gradient} shadow-md`}>
                      <Mail size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Email</p>
                      <a href="mailto:enquiries@carterscaregroup.com.au" className="text-gray-500 hover:text-gray-900 transition-colors">enquiries@carterscaregroup.com.au</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${data.gradient} shadow-md`}>
                      <MapPin size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Location</p>
                      <p className="text-gray-500">Servicing across Australia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className={`w-12 h-12 rounded-xl flex items-center justify-center shrink-0 bg-gradient-to-br ${data.gradient} shadow-md`}>
                      <Clock size={20} className="text-white" />
                    </div>
                    <div>
                      <p className="font-bold text-gray-900">Hours</p>
                      <p className="text-gray-500">Monday – Friday: 8:00 AM – 6:00 PM</p>
                      <p className="text-gray-500">Saturday – Sunday: 9:00 AM – 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-3xl p-8 shadow-lg border border-gray-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className={`w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 bg-gradient-to-br ${data.gradient} shadow-lg`}>
                      <Send size={32} className="text-white" />
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Message Sent!</h3>
                    <p className="text-gray-500 mb-6">Thank you for reaching out. Our team will contact you shortly.</p>
                    <button
                      onClick={() => setSubmitted(false)}
                      className="text-sm font-semibold transition-colors hover:opacity-80"
                      style={{ color: data.accent }}
                    >
                      Send another message
                    </button>
                  </div>
                ) : (
                  <>
                    <div className="w-12 h-1 rounded-full bg-gradient-to-r from-purple-400 to-pink-400 mb-6" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-8">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Full Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all"
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Email</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Phone</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 transition-all"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-bold text-gray-700 mb-2">Message</label>
                        <textarea
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 resize-none transition-all"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                        />
                      </div>
                      <button
                        type="submit"
                        className={`w-full py-4 rounded-xl font-bold text-white transition-all hover:scale-[1.02] active:scale-[0.98] bg-gradient-to-r ${data.gradient} shadow-lg hover:shadow-xl`}
                      >
                        Send Message
                      </button>
                    </form>
                  </>
                )}
              </div>
            </motion.div>
          </div>
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
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Prefer to call?</h2>
            <p className="text-white/80 text-lg mb-8 max-w-xl mx-auto">
              Our friendly team is available to answer your questions and guide you through our services.
            </p>
            <a
              href="tel:0410186009"
              className="inline-flex items-center gap-2 px-8 py-4 rounded-xl font-bold bg-white transition-all hover:scale-105 hover:shadow-xl"
              style={{ color: data.accent }}
            >
              <Phone size={18} />
              0410 186 009
            </a>
          </motion.div>
        </div>
      </section>
    </Layout>
  );
}
