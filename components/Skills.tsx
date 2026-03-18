"use client";

import Image from "next/image";
import { useEffect, useMemo, useRef, useState } from "react";
import { Award, BriefcaseBusiness, Sparkles, Trophy, WandSparkles } from "lucide-react";
import { TECHNOLOGIES } from "@/lib/config/technologies";

type Skill = {
  name: string;
  level: number;
  color: string;
};

type Tool = {
  name: string;
  logo: string;
  category: string;
};

const skills: Skill[] = [
  { name: "UI/UX Design", level: 95, color: "#E8798A" },
  { name: "Figma & Prototyping", level: 92, color: "#D4849A" },
  { name: "React & Next.js", level: 85, color: "#C9B8E8" },
  { name: "Brand Identity", level: 90, color: "#C9A96E" },
  { name: "Motion Design", level: 78, color: "#E8798A" },
  { name: "TypeScript", level: 80, color: "#D4849A" },
];

const achievements = [
  { num: "85+", label: "Projects Completed", icon: BriefcaseBusiness },
  { num: "40+", label: "Happy Clients", icon: Sparkles },
  { num: "12+", label: "Design Awards", icon: Trophy },
  { num: "4yr", label: "Years of Mastery", icon: Award },
] as const;

export default function Skills() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [animated, setAnimated] = useState(false);

  const tools: Tool[] = useMemo(
    () => [
      { name: "Figma", logo: "/logos/technologies/figma.png", category: "Design" },
      { name: "After Effects", logo: "/logos/technologies/aftereffects.png", category: "Motion" },
      { name: "React", logo: "/logos/technologies/react.png", category: "Dev" },
      { name: "Next.js", logo: "/logos/technologies/nextjs.svg", category: "Dev" },
      { name: "Webflow", logo: "/logos/technologies/webflow.png", category: "No-code" },
      { name: "Framer", logo: "/logos/technologies/framer.png", category: "Prototype" },
      { name: "Adobe Illustrator", logo: "/logos/technologies/illustrator.png", category: "Design" },
      { name: "Adobe Photoshop", logo: "/logos/technologies/photoshop.png", category: "Design" },
      { name: "Tailwind CSS", logo: "/logos/technologies/tailwind css.png", category: "Dev" },
      { name: "GSAP", logo: "/logos/technologies/gsap.png", category: "Motion" },
      { name: "Notion", logo: "/logos/technologies/notion.png", category: "Workflow" },
      { name: "Lottie", logo: "/logos/technologies/lottie.png", category: "Animation" },
    ],
    []
  );

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    const fadeElements = Array.from(section.querySelectorAll(".section-fade"));

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) return;

        setAnimated(true);

        fadeElements.forEach((element, index) => {
          window.setTimeout(() => {
            element.classList.add("visible");
          }, index * 100);
        });

        observer.unobserve(section);
      },
      { threshold: 0.1 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden py-28"
      style={{
        background:
          "linear-gradient(180deg, #FDF0F8 0%, #F5EFF8 50%, #FDF6F0 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -right-24 h-[400px] w-[400px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,184,232,0.15) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="section-fade mb-20 text-center">
          <p className="font-body mb-4 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>My Expertise</span>
            <Sparkles className="h-3.5 w-3.5" />
          </p>

          <h2 className="font-display mb-4 text-[clamp(2.5rem,6vw,4rem)] font-light leading-none text-[#2D2D2D]">
            Skills &amp;
            <br />
            <em className="gradient-text-rose">Toolbox</em>
          </h2>
        </div>

        <div className="grid items-start gap-16 lg:grid-cols-2">
          <div>
            <div className="section-fade mb-8">
              <h3 className="font-display mb-2 text-2xl font-light text-[#2D2D2D]">
                Core Competencies
              </h3>
              <div className="gold-line mb-6 w-12" />
            </div>

            <div className="flex flex-col gap-6">
              {skills.map((skill, index) => (
                <div key={skill.name} className="section-fade">
                  <div className="mb-2 flex items-center justify-between">
                    <span className="font-body text-sm font-medium text-gray-700">
                      {skill.name}
                    </span>
                    <span
                      className="font-display text-lg font-semibold"
                      style={{ color: skill.color }}
                    >
                      {skill.level}%
                    </span>
                  </div>

                  <div className="h-2 overflow-hidden rounded-full bg-[rgba(242,167,187,0.15)]">
                    <div
                      className="h-full rounded-full"
                      style={{
                        width: animated ? `${skill.level}%` : "0%",
                        background: `linear-gradient(90deg, ${skill.color}, ${skill.color}88)`,
                        transition: `width 1.4s cubic-bezier(0.34, 1.56, 0.64, 1) ${index * 0.1}s`,
                        boxShadow: `0 2px 8px ${skill.color}40`,
                      }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <div className="section-fade mb-8">
              <h3 className="font-display mb-2 text-2xl font-light text-[#2D2D2D]">
                Favourite Tools
              </h3>
              <div className="gold-line mb-6 w-12" />
            </div>

            <div className="grid grid-cols-3 gap-4 sm:grid-cols-4">
              {tools.map((tool) => (
                <article
                  key={tool.name}
                  className="section-fade hover-card group cursor-default rounded-2xl border border-[rgba(242,167,187,0.2)] bg-white/80 p-4 text-center backdrop-blur-md"
                >
                  <div className="mb-3 flex justify-center">
                    <div className="relative h-10 w-10 transition-transform duration-300 group-hover:scale-110">
                      <Image
                        src={tool.logo}
                        alt={tool.name}
                        fill
                        className="object-contain"
                        sizes="40px"
                      />
                    </div>
                  </div>

                  <div className="font-body text-xs font-semibold text-gray-700">
                    {tool.name}
                  </div>

                  <div className="font-body mt-1 inline-block rounded-full bg-[rgba(242,167,187,0.15)] px-2 py-0.5 text-xs text-dusty">
                    {tool.category}
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>

        <div className="section-fade mt-20 grid grid-cols-2 gap-4 md:grid-cols-4">
          {achievements.map((item) => {
            const Icon = item.icon;

            return (
              <article
                key={item.label}
                className="hover-card rounded-3xl border border-[rgba(242,167,187,0.2)] bg-white/80 px-4 py-8 text-center backdrop-blur-md"
              >
                <div className="mb-3 flex justify-center text-gold">
                  <Icon className="h-6 w-6" />
                </div>

                <div className="font-display gradient-text text-3xl font-semibold">
                  {item.num}
                </div>

                <div className="font-body mt-2 text-xs leading-relaxed text-gray-400">
                  {item.label}
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}