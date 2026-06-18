"use client";

import { motion } from "framer-motion";
import { Mail, Download, ArrowUpRight } from "lucide-react";
import { Section } from "./ui/Section";
import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "./ui/BrandIcons";

const channels = [
  {
    label: "Email",
    value: profile.email,
    href: profile.socials.email,
    Icon: Mail,
  },
  {
    label: "LinkedIn",
    value: "in/raavi-pranay",
    href: profile.socials.linkedin,
    Icon: LinkedInIcon,
    external: true,
  },
  {
    label: "GitHub",
    value: "@pranay-raavi",
    href: profile.socials.github,
    Icon: GitHubIcon,
    external: true,
  },
];

export function Contact() {
  return (
    <Section id="contact">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-80px" }}
        transition={{ duration: 0.7 }}
        className="glass relative overflow-hidden rounded-3xl p-8 sm:p-12"
      >
        {/* glow */}
        <div className="pointer-events-none absolute -left-20 -top-20 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(56,189,248,0.18),transparent_65%)] blur-3xl" />
        <div className="pointer-events-none absolute -bottom-24 -right-16 h-72 w-72 rounded-full bg-[radial-gradient(circle,rgba(99,102,241,0.18),transparent_65%)] blur-3xl" />
        <div className="bg-grid pointer-events-none absolute inset-0 opacity-30 [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,#000,transparent)]" />

        <div className="relative grid gap-10 lg:grid-cols-[1fr_1fr] lg:items-center">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1 font-mono text-xs uppercase tracking-[0.2em] text-accent">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
              </span>
              Open to roles
            </span>
            <h2 className="mt-5 text-3xl font-bold tracking-tight text-fg sm:text-4xl">
              Let&apos;s build and ship something{" "}
              <span className="text-gradient-accent">reliable</span>.
            </h2>
            <p className="mt-4 max-w-md leading-relaxed text-muted">
              Looking for a Software Developer who can ship full-stack
              Next.js + FastAPI products and integrate AI into real
              workflows? Let&apos;s talk.
            </p>

            <div className="mt-7 flex flex-wrap gap-3">
              <a
                href={profile.socials.email}
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-3 to-accent-2 px-5 py-3 font-medium text-bg transition-transform hover:scale-[1.03]"
              >
                <Mail className="h-4 w-4" />
                Get in touch
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface px-5 py-3 font-medium text-fg transition-colors hover:border-accent/50 hover:bg-surface-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </div>
          </div>

          {/* Channels */}
          <div className="flex flex-col gap-3">
            {channels.map(({ label, value, href, Icon, external }) => (
              <a
                key={label}
                href={href}
                target={external ? "_blank" : undefined}
                rel={external ? "noopener noreferrer" : undefined}
                className="group flex items-center gap-4 rounded-2xl border border-border bg-surface/60 p-4 transition-all hover:border-accent/50 hover:bg-surface-2"
              >
                <span className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-2 text-muted transition-colors group-hover:text-accent">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0 flex-1">
                  <p className="font-mono text-xs uppercase tracking-wider text-faint">
                    {label}
                  </p>
                  <p className="truncate font-medium text-fg">{value}</p>
                </div>
                <ArrowUpRight className="h-5 w-5 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </a>
            ))}
          </div>
        </div>
      </motion.div>
    </Section>
  );
}
