"use client";

import { ArrowUpRight, Heart, MapPin, Sparkles } from "lucide-react";
import { FaBehance, FaInstagram, FaLinkedinIn, FaWhatsapp, FaXTwitter } from "react-icons/fa6";

const navLinks = [
  { label: "About", href: "about" },
  { label: "Services", href: "services" },
  { label: "Portfolio", href: "portfolio" },
  { label: "Skills", href: "skills" },
  { label: "Testimonials", href: "testimonials" },
  { label: "Contact", href: "contact" },
] as const;

const socialLinks = [
  { label: "WhatsApp", href: "https://wa.me/254712345678", icon: FaWhatsapp },
  { label: "LinkedIn", href: "#", icon: FaLinkedinIn },
  { label: "Instagram", href: "#", icon: FaInstagram },
  { label: "X", href: "#", icon: FaXTwitter },
  { label: "Behance", href: "#", icon: FaBehance },
] as const;

export default function Footer() {
  const scrollTo = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <footer className="relative overflow-hidden bg-[linear-gradient(180deg,#EEE6FF_0%,#FDE8F0_50%,#FDF6F0_100%)]">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-x-0 top-0 h-px bg-[linear-gradient(90deg,transparent,rgba(201,169,110,0.7),transparent)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -left-20 top-10 h-56 w-56 rounded-full bg-[radial-gradient(circle,rgba(232,121,138,0.12)_0%,transparent_70%)]"
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-0 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(201,184,232,0.18)_0%,transparent_70%)]"
      />

      <div className="mx-auto max-w-6xl px-6 py-16">
        <div className="rounded-[2rem] border border-white/60 bg-white/45 p-8 shadow-[0_10px_40px_rgba(212,132,154,0.10)] backdrop-blur-xl md:p-10">
          <div className="mb-12 grid gap-12 md:grid-cols-3">
            <div>
              <button
                type="button"
                onClick={() => scrollTo("hero")}
                className="font-display mb-4 text-left text-3xl font-light tracking-[0.08em] text-dusty transition-opacity duration-300 hover:opacity-80"
              >
                S<span className="text-gold">.</span>Laurent
              </button>

              <p className="font-body mb-6 max-w-sm text-sm leading-relaxed text-[#9B7E8A]">
                Crafting beautiful digital experiences with heart and precision.
                Available for freelance projects worldwide.
              </p>

              <div className="flex flex-wrap gap-3">
                {socialLinks.map((social) => {
                  const Icon = social.icon;
                  return (
                    <a
                      key={social.label}
                      href={social.href}
                      aria-label={social.label}
                      target={social.href.startsWith("http") ? "_blank" : undefined}
                      rel={social.href.startsWith("http") ? "noreferrer" : undefined}
                      className="flex h-11 w-11 items-center justify-center rounded-2xl border border-white/60 bg-white/70 text-dusty shadow-[0_6px_20px_rgba(212,132,154,0.08)] transition-all duration-300 hover:-translate-y-1 hover:bg-white hover:text-rose"
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </a>
                  );
                })}
              </div>
            </div>

            <div>
              <h4 className="font-body mb-5 flex items-center gap-2 text-xs font-medium uppercase tracking-[0.25em] text-gold">
                <Sparkles className="h-3.5 w-3.5" />
                Navigation
              </h4>

              <ul className="flex flex-col gap-2">
                {navLinks.map((link) => (
                  <li key={link.label}>
                    <button
                      type="button"
                      onClick={() => scrollTo(link.href)}
                      className="group inline-flex items-center gap-2 rounded-full px-3 py-2 font-body text-sm text-[#9B7E8A] transition-all duration-300 hover:bg-white/60 hover:text-rose"
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-3.5 w-3.5 opacity-0 transition-all duration-300 group-hover:opacity-100" />
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h4 className="font-body mb-5 text-xs font-medium uppercase tracking-[0.25em] text-gold">
                Get In Touch
              </h4>

              <div className="mb-6 flex flex-col gap-3">
                <a
                  href="mailto:hello@sophialaurent.co"
                  className="font-body text-sm text-[#9B7E8A] transition-colors duration-300 hover:text-rose"
                >
                  hello@sophialaurent.co
                </a>

                <div className="font-body flex items-center gap-2 text-sm text-[#9B7E8A]">
                  <MapPin className="h-4 w-4 text-dusty" />
                  <span>Nairobi,Kenya</span>
                </div>

                <a
                  href="https://wa.me/254712345678"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-body flex items-center gap-2 text-sm text-[#9B7E8A] transition-colors duration-300 hover:text-rose"
                >
                  <FaWhatsapp className="h-4 w-4 text-dusty" />
                  <span>0712345678</span>
                </a>

                <div className="font-body flex items-center gap-2 text-sm text-[#9B7E8A]">
                  <span className="h-2.5 w-2.5 rounded-full bg-green-400 animate-pulse" />
                  <span>Available for new projects</span>
                </div>
              </div>

              <button
                type="button"
                onClick={() => scrollTo("contact")}
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#E8798A,#D4849A)] px-5 py-2.5 text-xs font-medium text-white transition-all duration-300 hover:scale-[1.04] hover:shadow-hover"
              >
                <span>Start a Project</span>
                <ArrowUpRight className="h-4 w-4" />
              </button>
            </div>
          </div>

          <div className="mb-8 h-px bg-[linear-gradient(90deg,transparent,rgba(201,169,110,0.7),transparent)]" />

          <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
            <p className="font-body text-xs text-[#BBA8B0]">
              &copy; {new Date().getFullYear()} Sophia Laurent. All rights reserved.
            </p>

            <p className="font-body flex items-center gap-1.5 text-xs text-[#BBA8B0]">
              Crafted with
              <Heart className="h-3.5 w-3.5 fill-[#E8798A] text-[#E8798A]" />
              in Nairobi

              </p>
          </div>
        </div>
      </div>
    </footer>
  );
}