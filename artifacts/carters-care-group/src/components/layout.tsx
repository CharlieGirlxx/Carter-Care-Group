import { useSkin, type Skin } from "@/App";
import { Link, useLocation } from "wouter";
import { Menu, X, Phone, Mail } from "lucide-react";
import { useState } from "react";

const skinConfig: Record<Exclude<Skin, null>, { label: string; color: string; bg: string; accent: string }> = {
  ndis: { label: "NDIS Clients", color: "#1a5f4a", bg: "#f0f7f4", accent: "#2d8a6e" },
  "aged-care": { label: "Aged Care Clients", color: "#8b1e3f", bg: "#fdf2f5", accent: "#b52e5a" },
  "service-provider": { label: "Service Provider", color: "#1e3a5f", bg: "#f2f6fd", accent: "#2e5a8b" },
};

export default function Layout({ children }: { children: React.ReactNode }) {
  const { skin, setSkin } = useSkin();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [location] = useLocation();
  const config = skin ? skinConfig[skin] : null;

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <div className="min-h-screen flex flex-col" style={{ background: config?.bg || "#fff" }}>
      {/* Header */}
      <header className="sticky top-0 z-50 bg-white/90 backdrop-blur-md shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            {/* Logo */}
            <Link href="/" className="flex items-center gap-3">
              <img src="/assets/carters-logo.png" alt="Carters Care" className="h-12 w-auto" />
            </Link>

            {/* Desktop Nav */}
            <nav className="hidden md:flex items-center gap-8">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="text-sm font-medium tracking-wide uppercase transition-colors hover:text-[#9b188f]"
                  style={{ color: location === link.href ? "#9b188f" : "#333" }}
                >
                  {link.label}
                </Link>
              ))}
              {skin && (
                <button
                  onClick={() => setSkin(null)}
                  className="text-xs font-medium px-3 py-1 rounded-full border transition-colors"
                  style={{ borderColor: config?.color, color: config?.color }}
                >
                  Switch: {config?.label}
                </button>
              )}
            </nav>

            {/* Mobile toggle */}
            <button
              className="md:hidden p-2"
              onClick={() => setMobileOpen(!mobileOpen)}
            >
              {mobileOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileOpen && (
          <div className="md:hidden bg-white border-t">
            <div className="px-4 py-4 space-y-3">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="block text-sm font-medium uppercase tracking-wide"
                  style={{ color: location === link.href ? "#9b188f" : "#333" }}
                >
                  {link.label}
                </Link>
              ))}
              {skin && (
                <button
                  onClick={() => { setSkin(null); setMobileOpen(false); }}
                  className="text-xs font-medium px-3 py-1 rounded-full border"
                  style={{ borderColor: config?.color, color: config?.color }}
                >
                  Switch Portal
                </button>
              )}
            </div>
          </div>
        )}
      </header>

      {/* Main */}
      <main className="flex-1">{children}</main>

      {/* Footer */}
      <footer className="bg-black text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Brand */}
            <div>
              <img src="/assets/carters-logo.png" alt="Carters Care" className="h-10 w-auto invert mb-4" />
              <p className="text-gray-400 text-sm">
                Your family in disability and aged care services. We treat our clients like part of the family.
              </p>
            </div>
            {/* Contact */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Contact</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <div className="flex items-center gap-2">
                  <Phone size={14} />
                  <a href="tel:0410186009" className="hover:text-white">0410 186 009</a>
                </div>
                <div className="flex items-center gap-2">
                  <Mail size={14} />
                  <a href="mailto:enquiries@carterscaregroup.com.au" className="hover:text-white">enquiries@carterscaregroup.com.au</a>
                </div>
              </div>
            </div>
            {/* Quick Links */}
            <div>
              <h4 className="font-semibold mb-4 text-sm uppercase tracking-wider">Quick Links</h4>
              <div className="space-y-2 text-sm text-gray-400">
                <Link href="/" className="block hover:text-white">Home</Link>
                <Link href="/about" className="block hover:text-white">About</Link>
                <Link href="/services" className="block hover:text-white">Services</Link>
                <Link href="/contact" className="block hover:text-white">Contact</Link>
              </div>
            </div>
          </div>
          <div className="border-t border-gray-800 mt-8 pt-8 text-center text-xs text-gray-500">
            &copy; {new Date().getFullYear()} Carters Care Group. All rights reserved.
          </div>
        </div>
      </footer>
    </div>
  );
}
