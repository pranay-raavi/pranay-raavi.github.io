"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "./ui/Reveal";
import { whatIBuild } from "@/lib/data";

export function WhatIBuild() {
  return (
    <Section id="what-i-build">
      <SectionHeading
        eyebrow="What I Build"
        title={
          <>
            Systems that run in <span className="text-gradient-accent">production</span>
          </>
        }
        description="LLM systems for enterprise SaaS — agent runtimes, retrieval pipelines, tool integrations and the backend services behind them."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {whatIBuild.map((item) => (
          <motion.div
            key={item.title}
            variants={staggerItem}
            className="glass card-hover group relative overflow-hidden rounded-2xl p-6"
          >
            <div
              className="pointer-events-none absolute -right-16 -top-16 h-40 w-40 rounded-full opacity-25 blur-3xl transition-opacity duration-300 group-hover:opacity-50"
              style={{ background: item.accent }}
            />
            <div
              className="relative flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-2 transition-colors group-hover:border-[color:var(--c)]"
              style={{ color: item.accent, ["--c" as string]: item.accent }}
            >
              <item.icon className="h-6 w-6" />
            </div>
            <h3 className="relative mt-5 text-lg font-semibold text-fg">
              {item.title}
            </h3>
            <p className="relative mt-2 text-sm leading-relaxed text-muted">
              {item.description}
            </p>
            <ul className="relative mt-4 grid grid-cols-2 gap-x-3 gap-y-1.5 border-t border-border pt-4">
              {item.items.map((it) => (
                <li
                  key={it}
                  className="flex items-center gap-1.5 font-mono text-xs text-faint"
                >
                  <span
                    className="h-1 w-1 shrink-0 rounded-full"
                    style={{ background: item.accent }}
                  />
                  {it}
                </li>
              ))}
            </ul>
          </motion.div>
        ))}
      </motion.div>
    </Section>
  );
}
