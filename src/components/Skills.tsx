"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "./ui/Reveal";
import { skillGroups } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills">
      <SectionHeading
        eyebrow="Skills"
        title="Engineering toolkit"
        description="Grouped by domain — the technologies I use to design, build and ship full-stack AI products."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-12 grid gap-5 md:grid-cols-2 lg:grid-cols-3"
      >
        {skillGroups.map((group) => (
          <motion.div
            key={group.domain}
            variants={staggerItem}
            className="glass card-hover rounded-2xl p-6"
          >
            <div className="flex items-center gap-3">
              <span
                className="flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2"
                style={{ color: group.accent }}
              >
                <group.icon className="h-5 w-5" />
              </span>
              <h3 className="text-lg font-semibold text-fg">{group.domain}</h3>
            </div>

            <div className="mt-5 flex flex-wrap gap-2">
              {group.skills.map((skill, i) => (
                <motion.span
                  key={skill}
                  initial={{ opacity: 0, scale: 0.85 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.3, delay: i * 0.04 }}
                  whileHover={{ y: -2 }}
                  className="rounded-lg border border-border bg-surface-2/60 px-3 py-1.5 text-sm text-muted transition-colors hover:border-[color:var(--c)] hover:text-fg"
                  style={{ ["--c" as string]: group.accent }}
                >
                  {skill}
                </motion.span>
              ))}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
