"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { architectureCards } from "@/lib/data";
import { ArchitectureDiagram } from "./architecture/diagrams";

export function Architecture() {
  const [active, setActive] = useState(0);
  const current = architectureCards[active];

  return (
    <Section id="architecture">
      <SectionHeading
        eyebrow="Architecture Showcase"
        title={
          <>
            How I architect <span className="text-gradient-accent">AI products</span>
          </>
        }
        description="Interactive, animated diagrams of the data flows and AI pipelines behind every product I build."
      />

      <div className="mt-12 grid gap-6 lg:grid-cols-[340px_1fr]">
        {/* Selector */}
        <div className="flex flex-col gap-3">
          {architectureCards.map((card, i) => (
            <button
              key={card.id}
              onClick={() => setActive(i)}
              className={`group relative overflow-hidden rounded-2xl border p-5 text-left transition-all ${
                active === i
                  ? "border-accent/50 bg-surface-2"
                  : "border-border bg-surface/50 hover:border-border-strong hover:bg-surface-2/60"
              }`}
            >
              {active === i && (
                <motion.span
                  layoutId="arch-active"
                  className="absolute left-0 top-0 h-full w-1 bg-gradient-to-b from-accent-3 to-accent-2"
                  transition={{ type: "spring", stiffness: 380, damping: 32 }}
                />
              )}
              <div className="flex items-start gap-3">
                <span
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border transition-colors ${
                    active === i
                      ? "border-accent/50 text-accent"
                      : "border-border text-muted group-hover:text-fg"
                  } bg-surface`}
                >
                  <card.icon className="h-5 w-5" />
                </span>
                <div>
                  <h3
                    className={`font-semibold transition-colors ${
                      active === i ? "text-fg" : "text-muted group-hover:text-fg"
                    }`}
                  >
                    {card.title}
                  </h3>
                  <p className="mt-1 text-sm leading-snug text-faint">
                    {card.description}
                  </p>
                </div>
              </div>
            </button>
          ))}
        </div>

        {/* Diagram stage */}
        <div className="glass relative flex min-h-[420px] flex-col overflow-hidden rounded-2xl">
          <div className="bg-dots pointer-events-none absolute inset-0 opacity-50" />
          <div className="relative flex items-center justify-between border-b border-border px-6 py-4">
            <div className="flex items-center gap-2.5">
              <current.icon className="h-5 w-5 text-accent" />
              <span className="font-medium text-fg">{current.title}</span>
            </div>
            <span className="hidden font-mono text-xs text-faint sm:inline">
              live data flow
            </span>
          </div>

          <div className="relative flex h-[460px] flex-1 items-center justify-center p-4 sm:h-[540px] sm:p-6">
            <AnimatePresence mode="wait">
              <motion.div
                key={current.id}
                initial={{ opacity: 0, scale: 0.97 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.97 }}
                transition={{ duration: 0.35 }}
                className="flex h-full w-full items-center justify-center"
              >
                <ArchitectureDiagram kind={current.id} />
              </motion.div>
            </AnimatePresence>
          </div>

          <div className="relative flex flex-wrap gap-2 border-t border-border px-6 py-4">
            {current.tags.map((t) => (
              <span
                key={t}
                className="rounded-md border border-border bg-surface-2/60 px-2.5 py-1 font-mono text-xs text-muted"
              >
                {t}
              </span>
            ))}
          </div>
        </div>
      </div>
    </Section>
  );
}
