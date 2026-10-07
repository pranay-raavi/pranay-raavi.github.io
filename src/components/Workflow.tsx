"use client";

import { motion } from "framer-motion";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { staggerContainer, staggerItem } from "./ui/Reveal";
import { workflowSteps } from "@/lib/data";

export function ModernWorkflow() {
  return (
    <Section id="workflow">
      <SectionHeading
        eyebrow="How I Work"
        title={
          <>
            Engineering with <span className="text-gradient-accent">leverage</span>
          </>
        }
        description="The path every AI feature takes, start to finish."
      />

      <motion.div
        variants={staggerContainer}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true, margin: "-60px" }}
        className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3"
      >
        {workflowSteps.map((step, i) => (
          <motion.div
            key={step.title}
            variants={staggerItem}
            className="glass card-hover group relative overflow-hidden rounded-2xl p-6"
          >
            <span className="absolute right-5 top-4 font-mono text-5xl font-bold text-surface-2 transition-colors group-hover:text-border-strong">
              {String(i + 1).padStart(2, "0")}
            </span>
            <div className="relative flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-surface-2 text-accent transition-colors group-hover:border-accent/50">
              <step.icon className="h-5 w-5" />
            </div>
            <h3 className="relative mt-4 font-semibold text-fg">{step.title}</h3>
            <p className="relative mt-2 text-sm leading-relaxed text-muted">
              {step.description}
            </p>
          </motion.div>
        ))}
      </motion.div>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="mx-auto mt-8 max-w-2xl text-center text-sm text-faint"
      >
        Taking AI features from prompt and retrieval design through backend
        APIs to deployment.
      </motion.p>
    </Section>
  );
}
