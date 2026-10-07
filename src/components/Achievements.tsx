"use client";

import { motion } from "framer-motion";
import { Trophy } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "./ui/Reveal";
import { achievements } from "@/lib/data";

export function Achievements() {
  const [featured, ...rest] = achievements;

  return (
    <Section id="achievements">
      <SectionHeading
        eyebrow="Achievements"
        title="Proof of impact"
        description="Milestones from work and education."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-12 grid gap-5 lg:grid-cols-3"
      >
        {/* Featured */}
        <motion.div
          variants={staggerItem}
          className="glass card-hover relative overflow-hidden rounded-2xl p-7 lg:row-span-2"
        >
          <div className="pointer-events-none absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[radial-gradient(circle,rgba(251,191,36,0.25),transparent_65%)] blur-2xl" />
          <div className="relative">
            <span className="inline-flex items-center gap-2 rounded-full border border-amber/40 bg-amber/10 px-3 py-1 text-xs font-medium text-amber">
              <Trophy className="h-3.5 w-3.5" />
              Featured
            </span>
            <div className="mt-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-2 text-amber">
              <featured.icon className="h-7 w-7" />
            </div>
            <h3 className="mt-5 text-2xl font-bold text-fg">{featured.title}</h3>
            <p className="mt-3 leading-relaxed text-muted">
              {featured.description}
            </p>
          </div>
        </motion.div>

        {/* Rest */}
        {rest.map((a) => (
          <motion.div
            key={a.title}
            variants={staggerItem}
            className="glass card-hover flex items-start gap-4 rounded-2xl p-6"
          >
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent">
              <a.icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-semibold text-fg">{a.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {a.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
