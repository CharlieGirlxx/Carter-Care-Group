import { useSkin, type Skin } from "@/App";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

const skinConfig: Record<Exclude<Skin, null>, {
  label: string; color: string; bg: string; accent: string;
  gradient: string; gradientLight: string;
}> = {
  ndis: {
    label: "NDIS",
    color: "#0b7a52",
    bg: "#f0fdf4",
    accent: "#0d8a5d",
    gradient: "linear-gradient(135deg, #0d8a5d, #14b87a)",
    gradientLight: "linear-gradient(135deg, #d1fae5, #a7f3d0)",
  },
  "aged-care": {
    label: "Aged Care",
    color: "#9b1239",
    bg: "#fff1f2",
    accent: "#be123c",
    gradient: "linear-gradient(135deg, #be123c, #e11d6a)",
    gradientLight: "linear-gradient(135deg, #ffe4e6, #fecdd3)",
  },
  "service-provider": {
    label: "Service Provider",
    color: "#1d4ed8",
    bg: "#eff6ff",
    accent: "#2563eb",
    gradient: "linear-gradient(135deg, #2563eb, #06b6d4)",
    gradientLight: "linear-gradient(135deg, #dbeafe, #bfdbfe)",
  },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const { skin, setSkin } = useSkin();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();
  const config = skin ? skinConfig[skin] : null;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [location]);

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  const accentColor = config?.accent || "#9b188f";

  return (
    <div className="min-h-screen flex flex-col" style={{ background: config?.bg || "#fff" }}>
      {/* Header */}
      <header
        className="sticky top-0 z-50 transition-all duration-300"
        style={{
          background: scrolled ? "rgba(255,255,255,0.95)" : "rgba(255,255,255,0.80)",
          backdropFilter: "blur(16px)",
          WebkitBackdropFilter: "blur(16px)",
          boxShadow: scrolled ? "0 1px 32px 0 rgba(0,0,0,0.08)" : "none",
          borderBottom: scrolled ? "1px solid rgba(0,0,0,0.06)" : "none",
        }}
      >
        {/* Skin accent bar */}
        {config && (
          <div
            className="h-0.5 w-full"
            style={{ background: config.gradient }}
          />
        )}

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-18 py-3">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3 group">
              <img
                src="/assets/carters-logo.png"
                alt="Carters Care"
                className="w-auto transition-transform duration-300 group-hover:scale-105"
                style={{ height: "4.5rem" }}
              />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-1">
              {navLinks.map((link) => {
                const active = location === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="relative px-4 py-2 text-sm font-semibold tracking-wide transition-colors duration-200 rounded-lg hover:bg-black/5"
                    style={{ color: active ? accentColor : "#444" }}
                  >
                    {link.label}
                    {active && (
                      <motion.div
                        layoutId="nav-indicator"
                        className="absolute bottom-0 left-1/2 -translate-x-1/2 w-5 h-0.5 rounded-full"
                        style={{ background: accentColor }}
                        transition={{ type: "spring", stiffness: 500, damping: 35 }}
                      />
                    )}
                  </Link>
                );
              })}

              {config && (
                <button
                  onClick={() => setSkin(null)}
                  className="ml-4 text-xs font-semibold px-3.5 py-1.5 rounded-full border-2 transition-all duration-200 hover:opacity-80"
                  style={{
                    borderColor: config.accent,
                    color: config.accent,
                    background: "transparent",
                  }}
                >
                  Switch Portal
                </button>
              )}

              <a
                href="tel:1300002723"
                className="ml-2 flex items-center gap-2 px-4 py-2 rounded-xl text-sm font-bold text-white transition-all duration-200 hover:scale-105 hover:shadow-md"
                style={{ background: config?.gradient || "linear-gradient(135deg, #9b188f, #c41e5a)" }}
              >
                <Phone size={14} />
                1300 00 27 23
              </a>
            </nav>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2 rounded-lg hover:bg-black/5 transition-colors"
              onClick={() => setMobileOpen(!mobileOpen)}
              aria-label="Toggle menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                {mobileOpen ? (
                  <motion.div key="x" initial={{ rotate: -90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: 90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <X size={22} />
                  </motion.div>
                ) : (
                  <motion.div key="menu" initial={{ rotate: 90, opacity: 0 }} animate={{ rotate: 0, opacity: 1 }} exit={{ rotate: -90, opacity: 0 }} transition={{ duration: 0.15 }}>
                    <Menu size={22} />
                  </motion.div>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="md:hidden overflow-hidden bg-white/98 border-t border-gray-100"
            >
              <div className="px-4 py-4 space-y-1">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ x: -20, opacity: 0 }}
                    animate={{ x: 0, opacity: 1 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    <Link
                      href={link.href}
                      className="flex items-center justify-between px-4 py-3 rounded-xl text-sm font-semibold transition-colors hover:bg-gray-50"
                      style={{ color: location === link.href ? accentColor : "#333" }}
                    >
                      {link.label}
                      <ChevronRight size={14} className="text-gray-400" />
                    </Link>
                  </motion.div>
                ))}
                <div className="pt-3 space-y-2">
                  {config && (
                    <button
                      onClick={() => { setSkin(null); }}
                      className="w-full px-4 py-3 rounded-xl text-sm font-bold border-2 transition-colors"
                      style={{ borderColor: config.accent, color: config.accent }}
                    >
                      Switch Portal
                    </button>
                  )}
                  <a
                    href="tel:1300002723"
                    className="flex items-center justify-center gap-2 w-full px-4 py-3 rounded-xl text-sm font-bold text-white"
                    style={{ background: config?.gradient || "linear-gradient(135deg, #9b188f, #c41e5a)" }}
                  >
                    <Phone size={14} />
                    1300 00 27 23
                  </a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="relative overflow-hidden" style={{ background: "#0f0f14" }}>
        {/* Wave top */}
        <div className="w-full overflow-hidden leading-none">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full block" preserveAspectRatio="none">
            <path d="M0,30 C360,60 1080,0 1440,30 L1440,0 L0,0 Z" fill={config?.bg || "#fff"} />
          </svg>
        </div>

        {/* Subtle gradient glow */}
        <div
          className="absolute inset-0 opacity-20 pointer-events-none"
          style={{
            background: config
              ? `radial-gradient(ellipse at 20% 50%, ${config.accent}40 0%, transparent 60%), radial-gradient(ellipse at 80% 50%, ${config.accent}20 0%, transparent 60%)`
              : "radial-gradient(ellipse at 50% 50%, #9b188f20 0%, transparent 60%)",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
            {/* Brand */}
            <div className="md:col-span-2">
              <img src="/assets/carters-logo.png" alt="Carters Care" className="h-12 w-auto invert mb-5 opacity-90" />
              <p className="text-gray-400 text-sm leading-relaxed max-w-xs">
                Your family in disability and aged care services. We treat every client with the love and respect they deserve.
              </p>
              <div className="flex items-center gap-3 mt-6">
                {[
                  { label: "NDIS Registered", color: "#0d8a5d" },
                  { label: "Aged Care Approved", color: "#be123c" },
                ].map((badge) => (
                  <span
                    key={badge.label}
                    className="text-xs font-semibold px-3 py-1 rounded-full border"
                    style={{ borderColor: badge.color + "60", color: badge.color }}
                  >
                    {badge.label}
                  </span>
                ))}
              </div>
            </div>

            {/* Contact */}
            <div>
              <h4 className="font-bold mb-5 text-xs uppercase tracking-widest text-gray-500">Contact</h4>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex items-center gap-3 hover:text-white transition-colors">
                  <Phone size={14} className="text-gray-500 shrink-0" />
                  <a href="tel:1300002723">1300 00 27 23</a>
                </div>
                <div className="flex items-start gap-3 hover:text-white transition-colors">
                  <Mail size={14} className="text-gray-500 shrink-0 mt-0.5" />
                  <a href="mailto:sayhello@carters.care">sayhello@carters.care</a>
                </div>
                <div className="flex items-center gap-3">
                  <MapPin size={14} className="text-gray-500 shrink-0" />
                  <span>PO Box 1118, Osborne Park, WA 6916</span>
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="font-bold mb-5 text-xs uppercase tracking-widest text-gray-500">Navigate</h4>
              <div className="space-y-2 text-sm text-gray-400">
                {[
                  { href: "/", label: "Home" },
                  { href: "/about", label: "About Us" },
                  { href: "/services", label: "Services" },
                  { href: "/contact", label: "Contact" },
                ].map((link) => (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="flex items-center gap-2 hover:text-white transition-colors group"
                  >
                    <ChevronRight size={12} className="text-gray-600 group-hover:text-white transition-colors" />
                    {link.label}
                  </Link>
                ))}
              </div>
            </div>
          </div>

          <div className="border-t border-white/10 mt-12 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-xs text-gray-600">
              &copy; {new Date().getFullYear()} Carters Care Group. All rights reserved.
            </p>
            <p className="text-xs text-gray-700">
              ABN: Your ABN here &nbsp;·&nbsp; NDIS Provider Registration
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
