import { useSkin } from "@/App";
import Layout from "@/components/layout";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { useState } from "react";

const skinData = {
  ndis: {
    title: "Contact Our NDIS Team",
    subtitle: "Reach out to discuss your NDIS plan, support needs, or to book a free consultation.",
    accent: "#1a5f4a",
    accentBg: "#f0f7f4",
  },
  "aged-care": {
    title: "Contact Our Aged Care Team",
    subtitle: "Get in touch to discuss aged care options, home care packages, or residential care enquiries.",
    accent: "#8b1e3f",
    accentBg: "#fdf2f5",
  },
  "service-provider": {
    title: "Contact Our Partnership Team",
    subtitle: "Connect with us to explore referrals, partnerships, or collaborative care opportunities.",
    accent: "#1e3a5f",
    accentBg: "#f2f6fd",
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
      {/* Hero */}
      <section className="py-20" style={{ background: data.accentBg }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-12"
          >
            <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">{data.title}</h1>
            <p className="text-lg text-gray-500">{data.subtitle}</p>
          </motion.div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                <h3 className="text-xl font-bold text-gray-900 mb-6">Get in Touch</h3>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: data.accentBg }}>
                      <Phone size={18} style={{ color: data.accent }} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Phone</p>
                      <a href="tel:0410186009" className="text-gray-500 hover:text-gray-900">0410 186 009</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: data.accentBg }}>
                      <Mail size={18} style={{ color: data.accent }} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Email</p>
                      <a href="mailto:enquiries@carterscaregroup.com.au" className="text-gray-500 hover:text-gray-900">enquiries@carterscaregroup.com.au</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: data.accentBg }}>
                      <MapPin size={18} style={{ color: data.accent }} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Location</p>
                      <p className="text-gray-500">Servicing across Australia</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 rounded-lg flex items-center justify-center shrink-0" style={{ background: data.accentBg }}>
                      <Clock size={18} style={{ color: data.accent }} />
                    </div>
                    <div>
                      <p className="font-medium text-gray-900">Hours</p>
                      <p className="text-gray-500">Monday – Friday: 8:00 AM – 6:00 PM</p>
                      <p className="text-gray-500">Saturday – Sunday: 9:00 AM – 4:00 PM</p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-white rounded-2xl p-8 shadow-sm border border-gray-100">
                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4" style={{ background: data.accentBg }}>
                      <Send size={28} style={{ color: data.accent }} />
                    </div>
                    <h3 className="text-xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                    <p className="text-gray-500">Thank you for reaching out. Our team will contact you shortly.</p>
                  </div>
                ) : (
                  <>
                    <h3 className="text-xl font-bold text-gray-900 mb-6">Send a Message</h3>
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Full Name</label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0"
                          style={{}}
                          value={form.name}
                          onChange={(e) => setForm({ ...form, name: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                        <input
                          type="email"
                          required
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0"
                          value={form.email}
                          onChange={(e) => setForm({ ...form, email: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Phone</label>
                        <input
                          type="tel"
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0"
                          value={form.phone}
                          onChange={(e) => setForm({ ...form, phone: e.target.value })}
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                        <textarea
                          required
                          rows={4}
                          className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-offset-0 resize-none"
                          value={form.message}
                          onChange={(e) => setForm({ ...form, message: e.target.value })}
                        />
                      </div>
                      <button
                        type="submit"
                        className="w-full py-3 rounded-lg font-semibold text-white transition-all hover:scale-[1.02] active:scale-[0.98]"
                        style={{ background: data.accent }}
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
    </Layout>
  );
}
