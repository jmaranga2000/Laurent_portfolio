"use client";

import { useEffect, useState } from "react";
import { ArrowRight, Heart, Sparkles, Star } from "lucide-react";

type SparklePosition = {
  top: string;
  left?: string;
  right?: string;
  delay: string;
  size: number;
};

const SPARKLES: SparklePosition[] = [
  { top: "15%", left: "8%", delay: "0s", size: 16 },
  { top: "70%", left: "5%", delay: "0.8s", size: 10 },
  { top: "25%", right: "12%", delay: "1.5s", size: 14 },
  { top: "80%", right: "8%", delay: "0.4s", size: 8 },
  { top: "50%", left: "20%", delay: "2s", size: 6 },
];

const STATS = [
  { num: "85+", label: "Projects Done" },
  { num: "4yr", label: "Experience" },
  { num: "98%", label: "Client Satisfaction" },
] as const;

export default function Hero() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const timeout = window.setTimeout(() => {
      setIsVisible(true);
    }, 100);

    return () => window.clearTimeout(timeout);
  }, []);

  function scrollToSection(sectionId: string) {
    document.getElementById(sectionId)?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center overflow-hidden"
      style={{
        background:
          "radial-gradient(ellipse at 20% 50%, #FFE4EF 0%, #F9E8FF 45%, #EDE4FF 80%, #FFF5F8 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="blob animate-float pointer-events-none absolute -top-[120px] -right-[100px] h-[500px] w-[500px]"
        style={{
          background:
            "radial-gradient(circle, rgba(201,184,232,0.3) 0%, rgba(242,167,187,0.15) 100%)",
        }}
      />

      <div
        aria-hidden="true"
        className="blob-2 animate-float-delayed pointer-events-none absolute -bottom-[80px] -left-[80px] h-[350px] w-[350px]"
        style={{
          background:
            "radial-gradient(circle, rgba(242,167,187,0.25) 0%, rgba(201,169,110,0.1) 100%)",
        }}
      />

      {SPARKLES.map((sparkle, index) => (
        <div
          key={`${sparkle.delay}-${index}`}
          className="sparkle pointer-events-none absolute text-gold"
          style={{
            top: sparkle.top,
            left: sparkle.left,
            right: sparkle.right,
            animationDelay: sparkle.delay,
          }}
          aria-hidden="true"
        >
          <Sparkles
            className="fill-current"
            style={{ width: sparkle.size, height: sparkle.size }}
          />
        </div>
      ))}

      <div
        aria-hidden="true"
        className="rotate-slow pointer-events-none absolute top-1/2 right-[-150px] hidden h-[600px] w-[600px] -translate-y-1/2 lg:block"
      >
        <svg viewBox="0 0 600 600" fill="none">
          <circle
            cx="300"
            cy="300"
            r="280"
            stroke="url(#ringGrad)"
            strokeWidth="1"
            strokeDasharray="8 12"
          />
          <defs>
            <linearGradient id="ringGrad" x1="0" y1="0" x2="600" y2="600">
              <stop stopColor="#F2A7BB" stopOpacity="0.6" />
              <stop offset="1" stopColor="#C9B8E8" stopOpacity="0.4" />
            </linearGradient>
          </defs>
        </svg>
      </div>

      <div
        className={`relative mx-auto grid max-w-6xl items-center gap-16 px-6 pt-28 pb-20 transition-all duration-1000 lg:grid-cols-2 ${
          isVisible ? "translate-y-0 opacity-100" : "translate-y-5 opacity-0"
        }`}
      >
        <div className="order-2 lg:order-1">
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-blush/40 bg-blush/20 px-4 py-2 text-xs font-medium uppercase tracking-widest text-dusty">
            <span className="h-1.5 w-1.5 rounded-full bg-rose-400 animate-pulse" />
            Available for Work
          </div>

          <h1 className="font-display mb-4 text-[clamp(3rem,8vw,5.5rem)] font-light leading-none text-[#2D2D2D]">
            Sophia
            <br />
            <em className="gradient-text-rose not-italic">Laurent</em>
          </h1>

          <p className="font-display mb-6 text-[clamp(1.1rem,2.5vw,1.5rem)] font-light tracking-wide text-[#9B7E8A]">
            UI/UX Designer &amp; Creative Developer
          </p>

          <div className="gold-line mb-6 w-24" />

          <p className="font-body mb-10 max-w-lg text-base leading-relaxed text-[#6B6B6B]">
            I craft beautiful digital experiences that blend artistry with
            functionality. Passionate about turning bold ideas into elegant,
            human-centered designs that leave lasting impressions.
          </p>

          <div className="flex flex-wrap gap-4">
            <button
              type="button"
              onClick={() => scrollToSection("portfolio")}
              className="inline-flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#E8798A_0%,#D4849A_100%)] px-7 py-3.5 text-sm font-medium text-white transition-all duration-300 hover:scale-105 hover:shadow-hover"
            >
              <span>View Projects</span>
              <ArrowRight className="h-4 w-4" />
            </button>

            <button
              type="button"
              onClick={() => scrollToSection("contact")}
              className="inline-flex items-center gap-2 rounded-full border border-dusty/50 bg-white/60 px-7 py-3.5 text-sm font-medium text-dusty transition-all duration-300 hover:shadow-soft"
            >
              <span>Contact Me</span>
            </button>
          </div>

          <div className="mt-14 flex gap-10">
            {STATS.map((stat) => (
              <div key={stat.label}>
                <div className="font-display gradient-text text-3xl font-semibold">
                  {stat.num}
                </div>
                <div className="font-body mt-1 text-xs tracking-wide text-gray-400">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="order-1 flex justify-center lg:order-2 lg:justify-end">
          <div className="relative">
            <div
              aria-hidden="true"
              className="animate-float absolute inset-0"
              style={{
                background:
                  "conic-gradient(from 0deg, #F2A7BB, #C9B8E8, #C9A96E, #F2A7BB)",
                padding: "3px",
                borderRadius: "60% 40% 60% 40% / 40% 60% 40% 60%",
                transform: "scale(1.08)",
                opacity: 0.7,
              }}
            />

            <div
              className="relative overflow-hidden"
              style={{
                width: "clamp(280px, 40vw, 400px)",
                height: "clamp(320px, 45vw, 460px)",
                borderRadius: "60% 40% 60% 40% / 40% 60% 40% 60%",
                background:
                  "linear-gradient(145deg, #FDDDE6 0%, #F5C6D0 30%, #E8A0B4 60%, #D4849A 100%)",
              }}
            >
              <div className="relative flex h-full w-full items-end justify-center overflow-hidden">
                <div
                  aria-hidden="true"
                  className="absolute"
                  style={{
                    width: "130%",
                    height: "130%",
                    borderRadius: "50%",
                    background:
                      "radial-gradient(circle at 40% 40%, rgba(255,255,255,0.3), transparent 60%)",
                    top: "-15%",
                    left: "-15%",
                  }}
                />

                <svg
                  viewBox="0 0 300 380"
                  className="absolute bottom-0 w-full"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  aria-hidden="true"
                >
                  <ellipse
                    cx="150"
                    cy="400"
                    rx="100"
                    ry="60"
                    fill="rgba(255,255,255,0.15)"
                  />
                  <path
                    d="M60 380 Q80 280 150 260 Q220 280 240 380 Z"
                    fill="rgba(255,255,255,0.2)"
                  />
                  <ellipse
                    cx="150"
                    cy="170"
                    rx="58"
                    ry="70"
                    fill="rgba(255,255,255,0.3)"
                  />
                  <path
                    d="M90 150 Q100 80 150 70 Q200 80 210 150 Q195 120 150 115 Q105 120 90 150Z"
                    fill="rgba(180,100,120,0.5)"
                  />
                  <path
                    d="M92 160 Q85 130 90 100 Q100 75 150 68 Q200 75 210 100 Q215 130 208 160"
                    stroke="rgba(180,100,120,0.4)"
                    strokeWidth="8"
                    fill="none"
                    strokeLinecap="round"
                  />
                  <rect
                    x="135"
                    y="235"
                    width="30"
                    height="30"
                    rx="10"
                    fill="rgba(255,255,255,0.25)"
                  />
                  <circle cx="70" cy="120" r="4" fill="rgba(201,169,110,0.8)" />
                  <circle cx="230" cy="200" r="3" fill="rgba(201,184,232,0.9)" />
                  <circle cx="50" cy="250" r="5" fill="rgba(242,167,187,0.6)" />
                </svg>

                <div
                  className="font-display absolute bottom-8 select-none text-white font-light"
                  style={{
                    fontSize: "80px",
                    letterSpacing: "0.05em",
                    opacity: 0.25,
                  }}
                >
                  SL
                </div>
              </div>
            </div>

            <div
              className="glass-card shadow-card animate-float absolute top-[10%] right-[-20px] rounded-2xl px-4 py-3"
              style={{ animationDelay: "0.5s" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#E8798A,#D4849A)] text-white">
                  <Star className="h-3.5 w-3.5 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-700">
                    Top Rated
                  </div>
                  <div className="text-xs text-gray-400">Designer</div>
                </div>
              </div>
            </div>

            <div
              className="glass-card shadow-card animate-float absolute bottom-[12%] left-[-24px] rounded-2xl px-4 py-3"
              style={{ animationDelay: "1.2s" }}
            >
              <div className="flex items-center gap-2">
                <div className="flex h-8 w-8 items-center justify-center rounded-full bg-[linear-gradient(135deg,#C9B8E8,#C9A96E)] text-white">
                  <Heart className="h-3.5 w-3.5 fill-current" />
                </div>
                <div>
                  <div className="text-xs font-semibold text-gray-700">
                    200+ Happy
                  </div>
                  <div className="text-xs text-gray-400">Clients</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 flex -translate-x-1/2 animate-bounce flex-col items-center gap-2">
        <span className="font-body text-xs uppercase tracking-widest text-gold/70">
          Scroll
        </span>
        <div className="h-10 w-px bg-[linear-gradient(to_bottom,#C9A96E,transparent)]" />
      </div>
    </section>
  );
}