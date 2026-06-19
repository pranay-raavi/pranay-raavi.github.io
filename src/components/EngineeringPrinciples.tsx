"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "./ui/Reveal";
import { engineeringPrinciples } from "@/lib/data";

export function EngineeringPrinciples() {
  return (
    <Section id="principles">
      <SectionHeading
        eyebrow="Engineering Principles"
        title="How I build"
        description="The principles behind every AI feature and frontend I design and ship."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3"
      >
        {engineeringPrinciples.map((p, i) => (
          <motion.div
            key={p.title}
            variants={staggerItem}
            className="glass card-hover group relative flex items-start gap-4 overflow-hidden rounded-2xl p-5"
          >
            <span className="absolute right-4 top-3 font-mono text-xs text-surface-2 transition-colors group-hover:text-border-strong">
              {String(i + 1).padStart(2, "0")}
            </span>
            <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent transition-colors group-hover:border-accent/50">
              <p.icon className="h-5 w-5" />
            </span>
            <div>
              <h3 className="font-semibold text-fg">{p.title}</h3>
              <p className="mt-1.5 text-sm leading-relaxed text-muted">
                {p.description}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
