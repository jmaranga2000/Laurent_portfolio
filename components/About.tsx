"use client";

import { useEffect, useRef } from "react";
import { BadgeCheck, Gem, HeartHandshake, Sparkles } from "lucide-react";

const JOURNEY_ITEMS = [
  { year: "2020", title: "Started Journey", sub: "UI/UX Design" },
  { year: "2022", title: "Went Full-Stack", sub: "React & Next.js" },
  { year: "2023", title: "Freelance", sub: "50+ Projects" },
  { year: "2025", title: "Agency Work", sub: "Brand Strategy" },
] as const;

const VALUE_ITEMS = [
  { icon: Sparkles, label: "Beauty-forward", sub: "Every detail matters" },
  { icon: HeartHandshake, label: "Human-centered", sub: "Users come first" },
  { icon: BadgeCheck, label: "Brand-savvy", sub: "Stories that stick" },
  { icon: Gem, label: "Detail-obsessed", sub: "Pixel-perfect always" },
] as const;

const SKILLS = [
  "UI/UX Design",
  "Brand Identity",
  "React / Next.js",
  "Figma",
  "Motion Design",
  "Webflow",
  "Copywriting",
  "Strategy",
] as const;

export default function About() {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const fadeElements = Array.from(section.querySelectorAll(".section-fade"));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        fadeElements.forEach((element, index) => {
          window.setTimeout(() => {
            element.classList.add("visible");
          }, index * 150);
        });

        observer.unobserve(section);
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <section
      id="about"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 -right-52 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,184,232,0.12) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="section-fade mb-20 text-center">
          <p className="font-body mb-4 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-gold">
  <Sparkles className="h-3.5 w-3.5" />
  <span>Who I Am</span>
  <Sparkles className="h-3.5 w-3.5" />
</p>

          <h2 className="font-display text-[clamp(2.5rem,6vw,4rem)] font-light leading-none text-[#2D2D2D]">
            Crafting Stories Through
            <br />
            <em className="gradient-text-rose">Design &amp; Code</em>
          </h2>
        </div>

        <div className="grid items-center gap-20 lg:grid-cols-2">
          <div className="section-fade relative">
            <div
              className="relative overflow-hidden rounded-3xl"
              style={{
                background:
                  "linear-gradient(145deg, #FDE8F0 0%, #F5D5E2 50%, #EDD5F5 100%)",
                minHeight: 480,
              }}
            >
              <div
                aria-hidden="true"
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage: `
                    linear-gradient(rgba(212,132,154,0.3) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(212,132,154,0.3) 1px, transparent 1px)
                  `,
                  backgroundSize: "40px 40px",
                }}
              />

              <div className="relative flex h-full min-h-[480px] flex-col justify-between p-10">
                <div className="glass-card rounded-2xl p-6 shadow-card">
                  <div className="font-display mb-2 text-4xl text-rose/50">
                    &ldquo;
                  </div>

                  <p className="font-display text-xl font-light italic leading-relaxed text-[#6B5060]">
                    Design is not just what it looks like — it&rsquo;s how it
                    makes you feel.
                  </p>

                  <div className="mt-4 flex items-center gap-3">
                    <div className="h-px w-8 bg-gold" />
                    <span className="font-body text-xs uppercase tracking-wider text-gold">
                      My Philosophy
                    </span>
                  </div>
                </div>

                <div className="mt-8 grid grid-cols-2 gap-4">
                  {JOURNEY_ITEMS.map((item) => (
                    <div
                      key={item.year}
                      className="glass-card rounded-xl p-4"
                    >
                      <div className="font-display text-lg font-semibold text-dusty">
                        {item.year}
                      </div>
                      <div className="font-body text-sm font-medium text-gray-700">
                        {item.title}
                      </div>
                      <div className="font-body mt-0.5 text-xs text-gray-400">
                        {item.sub}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          <div>
            <div className="section-fade mb-8">
              <h3 className="font-display mb-2 text-3xl font-light text-[#2D2D2D]">
                Hello, I&rsquo;m Sophia
              </h3>

              <div className="gold-line mb-6 w-16" />

              <p className="font-body mb-5 text-base leading-relaxed text-[#6B6B6B]">
                I&rsquo;m a Kenyan-born creative currently based in Nairobi,
                blending French elegance with modern digital craftsmanship. With
                a background in fine arts and computer science, I create digital
                experiences that are both breathtakingly beautiful and deeply
                functional.
              </p>

              <p className="font-body text-base leading-relaxed text-[#6B6B6B]">
                My work lives at the intersection of brand identity, interface
                design, and front-end development. I believe every pixel should
                have purpose, and every interaction should feel effortlessly
                human.
              </p>
            </div>

            <div className="section-fade mb-8 grid grid-cols-2 gap-4">
            {VALUE_ITEMS.map((value) => {
  const Icon = value.icon;

  return (
    <div
      key={value.label}
      className="hover-card rounded-2xl border border-blush/20 bg-[linear-gradient(145deg,rgba(255,255,255,0.9),rgba(255,240,248,0.5))] p-4"
    >
      <Icon className="mb-2 h-5 w-5 text-gold" />
      <div className="font-body text-sm font-semibold text-gray-700">
        {value.label}
      </div>
      <div className="font-body mt-0.5 text-xs text-gray-400">
        {value.sub}
      </div>
    </div>
  );
})}
            </div>

            <div className="section-fade">
              <div className="font-body mb-4 text-xs font-medium uppercase tracking-widest text-soft-gray">
                Core Expertise
              </div>

              <div className="flex flex-wrap gap-2">
                {SKILLS.map((skill) => (
                  <span
                    key={skill}
                    className="cursor-default rounded-full border border-blush/30 bg-blush/15 px-3 py-1.5 font-body text-xs font-medium text-dusty transition-all duration-300 hover:shadow-soft"
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}