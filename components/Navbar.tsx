"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Menu, X } from "lucide-react";

const navLinks = [
  "About",
  "Services",
  "Portfolio",
  "Skills",
  "Testimonials",
  "Contact",
] as const;

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 24);
    handleScroll();

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const closeOnResize = () => {
      if (window.innerWidth >= 768) setMenuOpen(false);
    };

    window.addEventListener("resize", closeOnResize);
    return () => window.removeEventListener("resize", closeOnResize);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  const handleNav = (id: string) => {
    setMenuOpen(false);
    document.getElementById(id.toLowerCase())?.scrollIntoView({ behavior: "smooth" });
  };

  const handleHeroNav = () => {
    setMenuOpen(false);
    document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <header className="fixed inset-x-0 top-0 z-50">
      <div className="mx-auto max-w-7xl px-4 pt-4 sm:px-6">
        <nav
          className={[
            "relative mx-auto rounded-full border transition-all duration-500 backdrop-blur-xl",
            scrolled
              ? "border-white/60 bg-white/55 shadow-[0_10px_40px_rgba(212,132,154,0.16)]"
              : "border-white/40 bg-white/30 shadow-[0_8px_30px_rgba(212,132,154,0.08)]",
          ].join(" ")}
        >
          <div className="flex items-center justify-between px-5 py-3 sm:px-6">
            <button
              type="button"
              onClick={handleHeroNav}
              className="font-display text-xl font-light tracking-[0.18em] text-dusty transition-opacity duration-300 hover:opacity-80 sm:text-2xl"
            >
              S<span className="text-gold">.</span>Laurent
            </button>

            <ul className="hidden items-center gap-2 md:flex">
              {navLinks.map((link) => (
                <li key={link}>
                  <button
                    type="button"
                    onClick={() => handleNav(link)}
                    className="rounded-full px-4 py-2 font-body text-sm font-medium text-gray-600 transition-all duration-300 hover:bg-white/60 hover:text-rose"
                  >
                    {link}
                  </button>
                </li>
              ))}
            </ul>

            <div className="hidden md:block">
              <button
                type="button"
                onClick={() => handleNav("Contact")}
                className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#E8798A,#D4849A)] px-5 py-2.5 text-sm font-medium text-white transition-all duration-300 hover:scale-[1.03] hover:shadow-hover"
              >
                <span>Let&rsquo;s Talk</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

            <button
              type="button"
              onClick={() => setMenuOpen((prev) => !prev)}
              aria-label={menuOpen ? "Close navigation menu" : "Open navigation menu"}
              className="flex h-11 w-11 items-center justify-center rounded-full border border-white/50 bg-white/50 text-dusty backdrop-blur-md transition-all duration-300 hover:bg-white/70 md:hidden"
            >
              {menuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </nav>
      </div>

      {menuOpen && (
        <div className="md:hidden">
          <div
            className="fixed inset-0 z-40 bg-black/20 backdrop-blur-sm"
            onClick={() => setMenuOpen(false)}
          />

          <div
            role="dialog"
            aria-modal="true"
            aria-label="Mobile navigation menu"
            className="fixed inset-x-4 top-20 z-50 rounded-[2rem] border border-white/60 bg-white/75 p-4 shadow-[0_10px_30px_rgba(212,132,154,0.12)] backdrop-blur-xl"
          >
            <div className="flex flex-col gap-2">
              {navLinks.map((link) => (
                <button
                  key={link}
                  type="button"
                  onClick={() => handleNav(link)}
                  className="rounded-2xl px-4 py-3 text-left font-body text-sm font-medium text-gray-600 transition-all duration-300 hover:bg-white/70 hover:text-rose"
                >
                  {link}
                </button>
              ))}

              <button
                type="button"
                onClick={() => handleNav("Contact")}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-full bg-[linear-gradient(135deg,#E8798A,#D4849A)] px-5 py-3 text-sm font-medium text-white transition-all duration-300"
              >
                <span>Let&rsquo;s Talk</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}