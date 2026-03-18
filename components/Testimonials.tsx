"use client";

import { useEffect, useRef, useState } from "react";
import { Quote, Sparkles, Star } from "lucide-react";

type Testimonial = {
  name: string;
  role: string;
  quote: string;
  stars: number;
  initials: string;
  color: string;
};

const testimonials: Testimonial[] = [
  {
    name: "Isabelle Marchand",
    role: "CEO, Lumière Beauty",
    quote:
      "Sophia transformed our brand completely. Her design sensibility is extraordinary — she understood our vision instantly and elevated it beyond anything we imagined. Our sales increased by 60% after the rebrand.",
    stars: 5,
    initials: "IM",
    color: "#E8798A",
  },
  {
    name: "James Whitfield",
    role: "Founder, Bloom App",
    quote:
      "Working with Sophia was a dream. She delivered a stunning UI that our users absolutely love. Her attention to detail, speed, and communication made the whole process seamless and genuinely enjoyable.",
    stars: 5,
    initials: "JW",
    color: "#C9B8E8",
  },
  {
    name: "Claire Dupont",
    role: "Creative Director, Maison D.",
    quote:
      "Sophia has this rare ability to blend luxury aesthetics with modern web functionality. Our new website has received nothing but praise from clients and press alike. Truly remarkable work.",
    stars: 5,
    initials: "CD",
    color: "#C9A96E",
  },
  {
    name: "Mia Rosenberg",
    role: "Head of Product, Fintech Co.",
    quote:
      "The design system Sophia built for us is world-class. Clean, scalable, and beautiful — it completely transformed how our team ships product. We can't imagine working without it.",
    stars: 5,
    initials: "MR",
    color: "#D4849A",
  },
  {
    name: "Antoine Lefèvre",
    role: "Art Director, Celestine",
    quote:
      "Her editorial eye is impeccable. Sophia elevated our digital magazine to a level we're incredibly proud of. Every layout is a work of art in itself.",
    stars: 5,
    initials: "AL",
    color: "#E8798A",
  },
  {
    name: "Sofia Chen",
    role: "Founder, Atelier Platform",
    quote:
      "From the initial discovery to the final launch, Sophia was exceptional. She brought creativity, strategy, and technical precision to every decision. 10/10 would recommend.",
    stars: 5,
    initials: "SC",
    color: "#C9B8E8",
  },
];

export default function Testimonials() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [isHovered, setIsHovered] = useState(false);

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

  useEffect(() => {
    if (isHovered) return;

    const timer = window.setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % testimonials.length);
    }, 4000);

    return () => window.clearInterval(timer);
  }, [isHovered]);

  const featured = testimonials[activeIndex];
  const sideTestimonials = testimonials
    .filter((_, index) => index !== activeIndex)
    .slice(0, 3);

  return (
    <section
      id="testimonials"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-40 -right-40 h-[600px] w-[600px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,184,232,0.1) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="section-fade mb-20 text-center">
          <p className="font-body mb-4 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Kind Words</span>
            <Sparkles className="h-3.5 w-3.5" />
          </p>

          <h2 className="font-display mb-4 text-[clamp(2.5rem,6vw,4rem)] font-light leading-none text-[#2D2D2D]">
            Client
            <br />
            <em className="gradient-text-rose">Testimonials</em>
          </h2>
        </div>

        <div
          className="section-fade relative mb-10 overflow-hidden rounded-3xl border border-[rgba(242,167,187,0.25)] p-10 shadow-[0_8px_40px_rgba(212,132,154,0.12)] backdrop-blur-xl md:p-14"
          style={{
            background:
              "linear-gradient(145deg, rgba(255,255,255,0.9), rgba(255,240,248,0.6))",
          }}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <div
            aria-hidden="true"
            className="absolute top-0 right-0 h-64 w-64 rounded-full"
            style={{
              background: `radial-gradient(circle, ${featured.color}15 0%, transparent 70%)`,
            }}
          />

          <div className="absolute top-8 left-8 text-[rgba(232,121,138,0.14)] md:top-10 md:left-10">
            <Quote className="h-16 w-16 md:h-24 md:w-24" strokeWidth={1.2} />
          </div>

          <div className="relative grid items-center gap-8 md:grid-cols-5">
            <div className="md:col-span-4">
              <div className="mb-6 flex gap-1">
                {Array.from({ length: featured.stars }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-[18px] w-[18px] fill-[#C9A96E] text-[#C9A96E]"
                  />
                ))}
              </div>

              <blockquote
                key={activeIndex}
                className="font-display mb-8 text-xl font-light italic leading-relaxed text-[#4A3A42] md:text-2xl"
                style={{ lineHeight: 1.6 }}
              >
                {featured.quote}
              </blockquote>

              <div className="flex items-center gap-4">
                <div
                  className="font-display flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${featured.color}, ${featured.color}99)`,
                  }}
                >
                  {featured.initials}
                </div>

                <div>
                  <div className="font-body text-base font-semibold text-gray-800">
                    {featured.name}
                  </div>
                  <div className="font-body text-sm text-soft-gray">
                    {featured.role}
                  </div>
                </div>
              </div>
            </div>

            <div className="hidden flex-col items-center gap-3 md:flex">
              {testimonials.map((testimonial, index) => (
                <button
                  key={`${testimonial.name}-${index}`}
                  type="button"
                  onClick={() => setActiveIndex(index)}
                  className="transition-all duration-300"
                  aria-label={`View testimonial from ${testimonial.name}`}
                  style={{
                    width: index === activeIndex ? 6 : 4,
                    height: index === activeIndex ? 24 : 4,
                    borderRadius: 999,
                    background:
                      index === activeIndex
                        ? "#E8798A"
                        : "rgba(232,121,138,0.25)",
                    border: "none",
                    cursor: "pointer",
                  }}
                />
              ))}
            </div>
          </div>
        </div>

        <div className="grid gap-4 md:grid-cols-3">
          {sideTestimonials.map((testimonial) => (
            <button
              key={testimonial.name}
              type="button"
              className="section-fade hover-card cursor-pointer rounded-2xl border border-[rgba(242,167,187,0.2)] bg-white/80 p-6 text-left backdrop-blur-md"
              onClick={() =>
                setActiveIndex(
                  testimonials.findIndex((item) => item.name === testimonial.name)
                )
              }
            >
              <div className="mb-3 flex gap-0.5">
                {Array.from({ length: 5 }).map((_, index) => (
                  <Star
                    key={index}
                    className="h-3 w-3 fill-[#C9A96E] text-[#C9A96E]"
                  />
                ))}
              </div>

              <p className="font-body mb-4 line-clamp-3 text-sm leading-relaxed text-[#8B7B82]">
                &ldquo;{testimonial.quote}&rdquo;
              </p>

              <div className="flex items-center gap-3">
                <div
                  className="font-display flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full text-sm font-semibold text-white"
                  style={{
                    background: `linear-gradient(135deg, ${testimonial.color}, ${testimonial.color}99)`,
                  }}
                >
                  {testimonial.initials}
                </div>

                <div>
                  <div className="font-body text-xs font-semibold text-gray-700">
                    {testimonial.name}
                  </div>
                  <div className="font-body text-xs text-gray-400">
                    {testimonial.role}
                  </div>
                </div>
              </div>
            </button>
          ))}
        </div>

        <div className="mt-8 flex justify-center gap-2 md:hidden">
          {testimonials.map((testimonial, index) => (
            <button
              key={`${testimonial.name}-mobile-${index}`}
              type="button"
              onClick={() => setActiveIndex(index)}
              className="rounded-full transition-all duration-300"
              aria-label={`View testimonial from ${testimonial.name}`}
              style={{
                width: index === activeIndex ? 24 : 6,
                height: 6,
                background:
                  index === activeIndex
                    ? "#E8798A"
                    : "rgba(232,121,138,0.25)",
                border: "none",
                cursor: "pointer",
              }}
            />
          ))}
        </div>
      </div>
    </section>
  );
}