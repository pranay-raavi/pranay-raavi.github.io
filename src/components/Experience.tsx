"use client";

import { motion } from "framer-motion";
import { CheckCircle2 } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Career timeline"
        description="Work experience and education."
      />

      <div className="relative mx-auto mt-14 max-w-3xl">
        {/* vertical line */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-accent/60 via-border to-transparent sm:left-1/2 sm:-translate-x-1/2" />

        <div className="space-y-12">
          {experience.map((item, i) => (
            <motion.div
              key={item.company}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05 }}
              className="relative pl-12 sm:pl-0"
            >
              {/* node */}
              <span className="absolute left-4 top-3 z-10 flex h-3.5 w-3.5 -translate-x-1/2 items-center justify-center sm:left-1/2">
                <span className="absolute h-3.5 w-3.5 rounded-full bg-accent/30" />
                <span className="relative h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_10px_2px_rgba(56,189,248,0.7)]" />
              </span>

              <div
                className={`sm:w-[calc(50%-2rem)] ${
                  i % 2 === 0 ? "sm:ml-auto" : ""
                }`}
              >
                <div className="glass card-hover rounded-2xl p-6">
                  <div className="flex flex-wrap items-center gap-2">
                    {item.current && (
                      <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/40 bg-emerald/10 px-2.5 py-0.5 text-xs font-medium text-emerald">
                        <span className="h-1.5 w-1.5 rounded-full bg-emerald" />
                        Current
                      </span>
                    )}
                    <span className="font-mono text-xs text-faint">
                      {item.period}
                    </span>
                  </div>

                  <h3 className="mt-3 text-lg font-semibold text-fg">
                    {item.role}
                  </h3>
                  <p className="text-sm font-medium text-accent">
                    {item.company}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-muted">
                    {item.summary}
                  </p>

                  {item.highlights.length > 0 && (
                    <ul className="mt-4 space-y-2">
                      {item.highlights.map((h) => (
                        <li key={h} className="flex gap-2.5 text-sm text-muted">
                          <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent/80" />
                          <span>{h}</span>
                        </li>
                      ))}
                    </ul>
                  )}

                  {item.groups?.map((g) => (
                    <div key={g.title} className="mt-5 border-t border-border pt-4">
                      <h4 className="text-sm font-semibold text-fg">{g.title}</h4>
                      {g.stack && (
                        <p className="mt-0.5 font-mono text-[11px] text-faint">{g.stack}</p>
                      )}
                      <ul className="mt-3 space-y-2">
                        {g.highlights.map((h) => (
                          <li key={h} className="flex gap-2.5 text-sm text-muted">
                            <CheckCircle2 className="mt-0.5 h-4 w-4 shrink-0 text-accent/80" />
                            <span>{h}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  ))}

                  <div className="mt-5 flex flex-wrap gap-2">
                    {item.tags.map((t) => (
                      <span
                        key={t}
                        className="rounded-md border border-border bg-surface-2/60 px-2 py-0.5 font-mono text-xs text-muted"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </Section>
  );
}
