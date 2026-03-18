"use client";

import { useEffect, useRef, useState } from "react";
import { ArrowUpRight, Check, Clock3, Mail, MapPin, Send, Sparkles } from "lucide-react";
import { FaInstagram, FaLinkedinIn, FaWhatsapp, } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
type ContactForm = {
  name: string;
  email: string;
  subject: string;
  message: string;
};

const INITIAL_FORM: ContactForm = {
  name: "",
  email: "",
  subject: "",
  message: "",
};

const CONTACT_ITEMS = [
  {
    icon: Mail,
    label: "Email",
    value: "contact@digidwel.com",
  },
  {
    icon: MapPin,
    label: "Location",
    value: "Nairobi, Kenya",
  },
  {
    icon: Clock3,
    label: "Response Time",
    value: "Within 24 hours",
  },
] as const;

const SOCIALS = [
  { icon: FaLinkedinIn, label: "LinkedIn", href: "#" },
  { icon: FaInstagram, label: "Instagram", href: "#" },
  { icon: FaWhatsapp, label: "WhatsApp", href: "#" },
  { icon: FaXTwitter, label: "X", href: "#" },
  { icon: ArrowUpRight, label: "Behance", href: "#" },
] as const;

export default function Contact() {
  const sectionRef = useRef<HTMLElement | null>(null);
  const [form, setForm] = useState<ContactForm>(INITIAL_FORM);
  const [submitted, setSubmitted] = useState(false);

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
          }, index * 120);
        });

        observer.unobserve(section);
      },
      { threshold: 0.05 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!submitted) return;

    const timeout = window.setTimeout(() => {
      setSubmitted(false);
    }, 4000);

    return () => window.clearTimeout(timeout);
  }, [submitted]);

  function updateField<K extends keyof ContactForm>(field: K, value: ContactForm[K]) {
    setForm((prev) => ({ ...prev, [field]: value }));
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setSubmitted(true);
    setForm(INITIAL_FORM);
  }

  return (
    <section
      id="contact"
      ref={sectionRef}
      className="relative overflow-hidden py-28"
      style={{
        background:
          "linear-gradient(180deg, #FDF6F0 0%, #FDF0F8 50%, #EEE6FF 100%)",
      }}
    >
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -bottom-24 -left-36 h-[450px] w-[450px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(242,167,187,0.15) 0%, transparent 70%)",
        }}
      />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-12 -right-24 h-[350px] w-[350px] rounded-full"
        style={{
          background:
            "radial-gradient(circle, rgba(201,184,232,0.15) 0%, transparent 70%)",
        }}
      />

      {[
        { top: "20%", right: "15%", delay: "0s" },
        { top: "70%", left: "8%", delay: "1s" },
        { bottom: "20%", right: "20%", delay: "0.5s" },
      ].map((sparkle, index) => (
        <div
          key={`${sparkle.delay}-${index}`}
          className="sparkle pointer-events-none absolute text-gold"
          style={{ ...sparkle, animationDelay: sparkle.delay }}
          aria-hidden="true"
        >
          <Sparkles className="h-4 w-4 fill-current" />
        </div>
      ))}

      <div className="mx-auto max-w-6xl px-6">
        <div className="section-fade mb-20 text-center">
          <p className="font-body mb-4 flex items-center justify-center gap-2 text-xs font-medium uppercase tracking-[0.3em] text-gold">
            <Sparkles className="h-3.5 w-3.5" />
            <span>Get In Touch</span>
            <Sparkles className="h-3.5 w-3.5" />
          </p>

          <h2 className="font-display mb-4 text-[clamp(2.5rem,6vw,4rem)] font-light leading-none text-[#2D2D2D]">
            Let&rsquo;s Create
            <br />
            <em className="gradient-text-rose">Something Beautiful</em>
          </h2>

          <p className="font-body mx-auto max-w-lg text-base text-[#9B7E8A]">
            Have a project in mind? I&rsquo;d love to hear about it. Let&rsquo;s
            talk about how we can bring your vision to life with design that
            inspires.
          </p>
        </div>

        <div className="grid items-start gap-12 lg:grid-cols-5">
          <div className="flex flex-col gap-6 lg:col-span-2">
            {CONTACT_ITEMS.map((item) => {
              const Icon = item.icon;

              return (
                <div
                  key={item.label}
                  className="section-fade hover-card flex items-start gap-4 rounded-2xl border border-blush/20 bg-white/80 p-5 backdrop-blur-md"
                >
                  <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-rose/10 text-rose">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div>
                    <div className="font-body mb-1 text-xs font-medium uppercase tracking-wide text-soft-gray">
                      {item.label}
                    </div>
                    <div className="font-body text-sm font-medium text-gray-700">
                      {item.value}
                    </div>
                  </div>
                </div>
              );
            })}

            <div className="section-fade">
              <div className="font-body mb-4 text-xs font-medium uppercase tracking-widest text-soft-gray">
                Follow Along
              </div>

              <div className="flex gap-3">
  {SOCIALS.map((social) => {
    const Icon = social.icon;

    return (
      <a
        key={social.label}
        href={social.href}
        aria-label={social.label}
        className="flex h-11 w-11 items-center justify-center rounded-xl border border-blush/30 bg-white/80 text-dusty transition-all duration-300 hover:scale-110 hover:shadow-soft"
      >
        <Icon className="h-4.5 w-4.5" />
      </a>
    );
  })}
</div>
            </div>
          </div>

          <div className="section-fade lg:col-span-3">
            <div className="rounded-3xl border border-white/80 bg-white/85 p-8 shadow-[0_8px_40px_rgba(212,132,154,0.12)] backdrop-blur-xl md:p-10">
              {submitted ? (
                <div className="py-10 text-center">
                  <div className="mb-4 flex justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-rose/10 text-rose">
                      <Check className="h-7 w-7" />
                    </div>
                  </div>

                  <h3 className="font-display mb-2 text-2xl font-light text-[#2D2D2D]">
                    Message Sent!
                  </h3>

                  <p className="font-body text-sm text-[#9B7E8A]">
                    Thank you for reaching out. I&rsquo;ll be in touch within 24
                    hours.
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="flex flex-col gap-5">
                  <div className="grid gap-5 sm:grid-cols-2">
                    <div>
                      <label className="font-body mb-2 block text-xs font-medium uppercase tracking-wide text-soft-gray">
                        Your Name
                      </label>
                      <input
                        type="text"
                        placeholder="Jane Doe"
                        value={form.name}
                        onChange={(event) => updateField("name", event.target.value)}
                        required
                        className="form-input w-full rounded-[14px] border border-blush/30 bg-white/80 px-4 py-3.5 text-sm text-[var(--color-text)] outline-none"
                      />
                    </div>

                    <div>
                      <label className="font-body mb-2 block text-xs font-medium uppercase tracking-wide text-soft-gray">
                        Email Address
                      </label>
                      <input
                        type="email"
                        placeholder="jane@example.com"
                        value={form.email}
                        onChange={(event) => updateField("email", event.target.value)}
                        required
                        className="form-input w-full rounded-[14px] border border-blush/30 bg-white/80 px-4 py-3.5 text-sm text-[var(--color-text)] outline-none"
                      />
                    </div>
                  </div>

                  <div>
                    <label className="font-body mb-2 block text-xs font-medium uppercase tracking-wide text-soft-gray">
                      Subject
                    </label>
                    <input
                      type="text"
                      placeholder="Project Inquiry / Collaboration"
                      value={form.subject}
                      onChange={(event) => updateField("subject", event.target.value)}
                      required
                      className="form-input w-full rounded-[14px] border border-blush/30 bg-white/80 px-4 py-3.5 text-sm text-[var(--color-text)] outline-none"
                    />
                  </div>

                  <div>
                    <label className="font-body mb-2 block text-xs font-medium uppercase tracking-wide text-soft-gray">
                      Your Message
                    </label>
                    <textarea
                      placeholder="Tell me about your project — your vision, goals, timeline, and anything else you'd like to share..."
                      value={form.message}
                      onChange={(event) => updateField("message", event.target.value)}
                      required
                      rows={5}
                      className="form-input w-full resize-none rounded-[14px] border border-blush/30 bg-white/80 px-4 py-3.5 text-sm text-[var(--color-text)] outline-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="mt-2 flex w-full items-center justify-center gap-2 rounded-2xl bg-[linear-gradient(135deg,#E8798A_0%,#D4849A_100%)] py-4 font-body text-sm font-medium text-white transition-all duration-300 hover:scale-[1.01] hover:shadow-hover"
                  >
                    <span>Send Message</span>
                    <Send className="h-4 w-4" />
                  </button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}