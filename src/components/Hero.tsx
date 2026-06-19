"use client";

import { motion } from "framer-motion";
import { ArrowRight, Download, Mail, MapPin, Check, Building2 } from "lucide-react";
import { profile, stats, trustIndicators } from "@/lib/data";
import { Counter } from "./ui/Counter";
import { AIWorkspaceCard } from "./ui/AIWorkspaceCard";
import { GitHubIcon, LinkedInIcon } from "./ui/BrandIcons";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

function fade(delay: number) {
  return {
    initial: { opacity: 0, y: 18 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay, ease },
  };
}

export function Hero() {
  return (
    <section id="home" className="relative flex min-h-screen items-center pt-28 pb-16">
      <div className="container-page">
        <div className="grid items-center gap-12 lg:grid-cols-[1.15fr_0.85fr]">
          {/* Left */}
          <div>
            {/* company / availability */}
            <motion.div
              {...fade(0)}
              className="flex flex-wrap items-center gap-2"
            >
              <span className="inline-flex items-center gap-2 rounded-full border border-accent/30 bg-accent/10 px-3 py-1.5 text-sm font-medium text-accent">
                <Building2 className="h-3.5 w-3.5" />
                {profile.atCompany}
              </span>
              <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface/60 px-3 py-1.5 text-sm text-muted">
                <span className="relative flex h-2 w-2">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-emerald" />
                </span>
                Open to roles
                <span className="text-border-strong">·</span>
                <MapPin className="h-3.5 w-3.5" /> {profile.location}
              </span>
            </motion.div>

            {/* name */}
            <motion.h1
              {...fade(0.06)}
              className="mt-6 text-5xl font-bold leading-[0.98] tracking-[-0.04em] sm:text-6xl lg:text-[5.25rem]"
            >
              <span className="text-gradient">{profile.name}</span>
            </motion.h1>

            {/* role hierarchy — primary role dominant */}
            <motion.div {...fade(0.13)} className="mt-5">
              <div className="flex items-baseline gap-3">
                <span className="text-3xl font-bold tracking-tight text-gradient-accent sm:text-4xl">
                  {profile.primaryRole}
                </span>
                <motion.span
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 0.6, delay: 0.5, ease }}
                  className="hidden h-0.5 w-16 origin-left rounded-full bg-gradient-to-r from-accent to-transparent sm:block"
                />
              </div>
              <p className="mt-2 font-mono text-sm text-muted sm:text-base">
                {profile.secondaryRoles.join("  •  ")}
              </p>
            </motion.div>

            {/* impact statement */}
            <motion.p
              {...fade(0.2)}
              className="mt-6 max-w-xl text-lg leading-relaxed text-muted"
            >
              {profile.impact}
            </motion.p>

            {/* trust indicators */}
            <motion.div {...fade(0.26)} className="mt-6 flex flex-wrap gap-2">
              {trustIndicators.map((t) => (
                <span
                  key={t}
                  className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface/50 px-3 py-1.5 text-sm text-fg"
                >
                  <Check className="h-3.5 w-3.5 text-emerald" />
                  {t}
                </span>
              ))}
            </motion.div>

            {/* CTAs */}
            <motion.div {...fade(0.32)} className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="#projects"
                className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-3 to-accent-2 px-5 py-3 font-medium text-bg transition-transform hover:scale-[1.03]"
              >
                View Projects
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </a>
              <a
                href={profile.resumeUrl}
                download
                className="inline-flex items-center gap-2 rounded-xl border border-border-strong bg-surface px-5 py-3 font-medium text-fg transition-colors hover:border-accent/50 hover:bg-surface-2"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
              <a
                href="#contact"
                className="inline-flex items-center gap-2 rounded-xl border border-transparent px-5 py-3 font-medium text-muted transition-colors hover:text-fg"
              >
                <Mail className="h-4 w-4" />
                Contact Me
              </a>
            </motion.div>

            {/* socials */}
            <motion.div {...fade(0.4)} className="mt-7 flex items-center gap-3">
              {[
                { href: profile.socials.github, label: "GitHub", Icon: GitHubIcon },
                { href: profile.socials.linkedin, label: "LinkedIn", Icon: LinkedInIcon },
              ].map(({ href, label, Icon }) => (
                <a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
                >
                  <Icon className="h-5 w-5" />
                </a>
              ))}
              <a
                href={profile.socials.email}
                aria-label="Email"
                className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
              >
                <Mail className="h-5 w-5" />
              </a>
            </motion.div>
          </div>

          {/* Right — AI workspace assistant card */}
          <div className="flex justify-center lg:justify-end">
            <AIWorkspaceCard />
          </div>
        </div>

        {/* animated metrics */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5, ease }}
          className="mt-16 grid grid-cols-2 gap-4 sm:grid-cols-4"
        >
          {stats.map((s) => (
            <div key={s.label} className="glass card-hover rounded-2xl p-5">
              <s.icon className="h-5 w-5 text-accent" />
              <div className="mt-3 text-3xl font-bold tracking-tight text-fg">
                <Counter value={s.value} prefix={s.prefix} suffix={s.suffix} />
              </div>
              <p className="mt-1 text-sm text-muted">{s.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
