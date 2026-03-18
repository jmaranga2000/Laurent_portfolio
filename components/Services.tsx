"use client";

import { useEffect, useRef } from "react";
import {
  ArrowRight,
  LayoutGrid,
  MonitorSmartphone,
  PencilLine,
  Sparkles,
  SwatchBook,
  WandSparkles,
  Globe,
} from "lucide-react";

type Service = {
  title: string;
  desc: string;
  color: string;
  bg: string;
  accent: string;
  icon: React.ComponentType<{ className?: string }>;
};

const services: Service[] = [
  {
    icon: LayoutGrid,
    title: "UI/UX Design",
    desc: "Intuitive, beautiful interfaces that users love. From wireframes to polished high-fidelity screens with thoughtful micro-interactions.",
    color: "#E8798A",
    bg: "rgba(232,121,138,0.08)",
    accent: "rgba(232,121,138,0.2)",
  },
  {
    icon: Globe,
    title: "Brand Identity",
    desc: "Complete visual identities that tell your brand's story — logos, typography, color systems, and brand guidelines that stand the test of time.",
    color: "#C9B8E8",
    bg: "rgba(201,184,232,0.1)",
    accent: "rgba(201,184,232,0.25)",
  },
  {
    icon: MonitorSmartphone,
    title: "Web Development",
    desc: "Pixel-perfect, performant websites built with React & Next.js. Fast, accessible, and beautifully responsive across all devices.",
    color: "#D4849A",
    bg: "rgba(212,132,154,0.08)",
    accent: "rgba(212,132,154,0.2)",
  },
  {
    icon: PencilLine,
    title: "Content Design",
    desc: "Strategic copy, UX writing, and visual content that communicates with clarity and converts browsers into loyal fans.",
    color: "#C9A96E",
    bg: "rgba(201,169,110,0.08)",
    accent: "rgba(201,169,110,0.2)",
  },
  {
    icon: SwatchBook,
    title: "Design Systems",
    desc: "Scalable, consistent component libraries and design tokens that power entire product suites with elegant coherence.",
    color: "#E8798A",
    bg: "rgba(232,121,138,0.08)",
    accent: "rgba(232,121,138,0.2)",
  },
  {
    icon: WandSparkles,
    title: "Motion & Animation",
    desc: "Delightful animations and micro-interactions that breathe life into your product — from subtle hover states to cinematic transitions.",
    color: "#C9B8E8",
    bg: "rgba(201,184,232,0.1)",
    accent: "rgba(201,184,232,0.25)",
  },
];

export default function Services() {
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
          }, index * 100);
        });

        observer.unobserve(section);
      },
      { threshold: 0.05 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  function scrollToContact() {
    document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="services"
      ref={sectionRef}
      className="relative overflow-hidden py-28"
      style={{ background: "linear-gradient(180deg, #FDF6F0 0%, #FDF0F8 100%)" }}
    >
      <div
        aria-hidden="true"
        className="absolute top-0 left-0 right-0 h-px"
        style={{
          background:
            "linear-gradient(90deg, transparent, rgba(242,167,187,0.4), transparent)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="section-fade mb-20 text-center">
          <p className="font-body mb-4 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>What I Offer</span>
            <Sparkles className="h-3.5 w-3.5" />
          </p>

          <h2 className="font-display mb-4 text-[clamp(2.5rem,6vw,4rem)] font-light leading-none text-[#2D2D2D]">
            Services Crafted
            <br />
            <em className="gradient-text-rose">With Intention</em>
          </h2>

          <p className="font-body mx-auto max-w-xl text-base text-[#9B7E8A]">
            Each service is delivered with care, precision, and a deep commitment
            to making your vision shine.
          </p>
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <article
                key={service.title}
                className="section-fade hover-card group relative cursor-default overflow-hidden rounded-3xl border border-white/90 bg-white/85 p-8 shadow-[0_4px_24px_rgba(212,132,154,0.08)] backdrop-blur-md"
              >
                <div
                  aria-hidden="true"
                  className="absolute inset-0 rounded-3xl opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 30% 30%, ${service.bg}, transparent 70%)`,
                  }}
                />

                <div
                  className="relative mb-6 flex h-14 w-14 items-center justify-center rounded-2xl transition-transform duration-300 group-hover:scale-110"
                  style={{
                    background: service.bg,
                    color: service.color,
                    border: `1px solid ${service.accent}`,
                  }}
                >
                  <Icon className="h-7 w-7" />
                </div>

                <h3 className="font-display relative mb-3 text-xl font-medium text-[#2D2D2D]">
                  {service.title}
                </h3>

                <p className="font-body relative text-sm leading-relaxed text-[#8B7B82]">
                  {service.desc}
                </p>

                <div
                  className="relative mt-6 flex translate-y-2 items-center gap-2 text-xs font-medium tracking-wide opacity-0 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100"
                  style={{ color: service.color }}
                >
                  <span>Learn More</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>

                <div
                  aria-hidden="true"
                  className="absolute right-0 bottom-0 h-20 w-20 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                  style={{
                    background: `radial-gradient(circle at 100% 100%, ${service.accent} 0%, transparent 70%)`,
                    borderRadius: "0 0 24px 0",
                  }}
                />
              </article>
            );
          })}
        </div>

        <div className="section-fade mt-16 text-center">
          <p className="font-body mb-6 text-sm text-soft-gray">
            Looking for something not listed? I&rsquo;m always open to unique collaborations.
          </p>

          <button
            type="button"
            onClick={scrollToContact}
            className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#E8798A,#D4849A)] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-hover"
          >
            <span>Let&rsquo;s Discuss Your Project</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}