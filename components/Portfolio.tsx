"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { ArrowRight, Sparkles, Star } from "lucide-react";

type ProjectCategory =
  | "Brand Identity"
  | "UI/UX Design"
  | "Web Development"
  | "Design System"
  | "Editorial Design";

type Project = {
  title: string;
  category: ProjectCategory;
  tags: string[];
  desc: string;
  image: string;
  featured: boolean;
};

const projects: Project[] = [
  {
    title: "Lumière Beauty",
    category: "Brand Identity",
    tags: ["Branding", "Figma", "Packaging"],
    desc: "Complete visual identity for a luxury French skincare brand — from logo system to packaging design and brand guidelines.",
    image: "/projects/lumiere-beauty.jpg",
    featured: true,
  },
  {
    title: "Bloom Wellness App",
    category: "UI/UX Design",
    tags: ["Mobile", "React Native", "UX"],
    desc: "A mindfulness and self-care app designed for busy professionals. 48-hour design sprint to shipped product.",
    image: "/projects/bloom-wellness.jpg",
    featured: true,
  },
  {
    title: "Maison Dupont",
    category: "Web Development",
    tags: ["Next.js", "Webflow", "E-commerce"],
    desc: "Elegantly crafted e-commerce experience for a Parisian interior design studio with custom 3D product previews.",
    image: "/projects/maison-dupont.jpg",
    featured: true,
  },
  {
    title: "Rose Dashboard",
    category: "Design System",
    tags: ["Figma", "Components", "Tokens"],
    desc: "A comprehensive design system and component library built for a fast-growing fintech startup.",
    image: "/projects/rose-dashboard.jpg",
    featured: false,
  },
  {
    title: "Celestine Magazine",
    category: "Editorial Design",
    tags: ["Typography", "Layout", "Print"],
    desc: "Art direction and digital editorial design for a fashion-forward lifestyle magazine.",
    image: "/projects/celestine-magazine.jpg",
    featured: false,
  },
  {
    title: "Atelier Platform",
    category: "Web Development",
    tags: ["React", "Node.js", "Motion"],
    desc: "Creator marketplace platform connecting artists with collectors. Custom animation system and checkout flow.",
    image: "/projects/atelier-platform.jpg",
    featured: false,
  },
];

const filters = [
  "All",
  "Brand Identity",
  "UI/UX Design",
  "Web Development",
  "Design System",
  "Editorial Design",
] as const;

type Filter = (typeof filters)[number];

export default function Portfolio() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [active, setActive] = useState<Filter>("All");

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
          }, index * 80);
        });

        observer.unobserve(section);
      },
      { threshold: 0.05 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  const filteredProjects =
    active === "All"
      ? projects
      : projects.filter((project) => project.category === active);

  return (
    <section
      id="portfolio"
      ref={sectionRef}
      className="relative overflow-hidden bg-white py-28"
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-36 h-[500px] w-[500px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(232,121,138,0.08) 0%, transparent 70%)",
        }}
      />

      <div className="mx-auto max-w-6xl px-6">
        <div className="section-fade mb-14 text-center">
          <p className="font-body mb-4 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>My Work</span>
            <Sparkles className="h-3.5 w-3.5" />
          </p>

          <h2 className="font-display mb-4 text-[clamp(2.5rem,6vw,4rem)] font-light leading-none text-[#2D2D2D]">
            Featured
            <br />
            <em className="gradient-text-rose">Projects</em>
          </h2>
        </div>

        <div className="section-fade mb-14 flex flex-wrap justify-center gap-2">
          {filters.map((filter) => {
            const isActive = active === filter;

            return (
              <button
                key={filter}
                type="button"
                onClick={() => setActive(filter)}
                className={
                  isActive
                    ? "rounded-full bg-[linear-gradient(135deg,#E8798A,#D4849A)] px-4 py-2 font-body text-xs font-medium text-white shadow-[0_4px_16px_rgba(232,121,138,0.3)] transition-all duration-300"
                    : "rounded-full border border-[rgba(242,167,187,0.25)] bg-[rgba(242,167,187,0.12)] px-4 py-2 font-body text-xs font-medium text-dusty transition-all duration-300"
                }
              >
                {filter}
              </button>
            );
          })}
        </div>

        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project) => (
            <article
              key={project.title}
              className="section-fade hover-card group overflow-hidden rounded-3xl bg-white/95 shadow-[0_4px_24px_rgba(212,132,154,0.1)]"
            >
              <div className="relative h-52 overflow-hidden">
                <Image
                  src={project.image}
                  alt={project.title}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                />

                <div className="absolute inset-0 bg-black/10" />

                <div className="font-body absolute top-4 left-4 rounded-full bg-white/80 px-3 py-1 text-xs font-medium text-dusty backdrop-blur-md">
                  {project.category}
                </div>

                {project.featured && (
                  <div className="font-body absolute right-4 bottom-4 flex items-center gap-1 rounded-full bg-gold px-3 py-1 text-xs font-medium text-white">
                    <Star className="h-3 w-3 fill-current" />
                    <span>Featured</span>
                  </div>
                )}
              </div>

              <div className="p-6">
                <h3 className="font-display mb-2 text-xl font-medium text-[#2D2D2D]">
                  {project.title}
                </h3>

                <p className="font-body mb-4 text-sm leading-relaxed text-[#8B7B82]">
                  {project.desc}
                </p>

                <div className="mb-4 flex flex-wrap gap-2">
                  {project.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-lg bg-[rgba(242,167,187,0.12)] px-2.5 py-1 font-body text-xs text-dusty"
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <div className="flex -translate-x-2 items-center gap-1 text-xs font-medium text-rose opacity-0 transition-all duration-300 group-hover:translate-x-0 group-hover:opacity-100">
                  <span>View Case Study</span>
                  <ArrowRight className="h-3.5 w-3.5" />
                </div>
              </div>
            </article>
          ))}
        </div>

        <div className="section-fade mt-14 text-center">
          <button
            type="button"
            className="inline-flex items-center gap-2 rounded-full border border-[rgba(212,132,154,0.4)] bg-white/80 px-7 py-3.5 text-sm font-medium text-dusty transition-all duration-300 hover:scale-105"
          >
            <span>View All Projects</span>
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>
      </div>
    </section>
  );
}