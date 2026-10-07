"use client";

import { AnimatePresence, motion } from "framer-motion";
import { ArrowUpRight, X, ExternalLink, Lock } from "lucide-react";
import { useState } from "react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { GitHubIcon } from "./ui/BrandIcons";
import {
  projects,
  projectFilters,
  type Project,
  type ProjectCategory,
} from "@/lib/data";

const statusTone: Record<
  NonNullable<Project["status"]>["tone"],
  string
> = {
  private: "border-amber/40 bg-amber/10 text-amber",
  wip: "border-border bg-surface-2/60 text-faint",
  live: "border-emerald/40 bg-emerald/10 text-emerald",
  source: "border-accent/40 bg-accent/10 text-accent",
};

function ProjectActions({ project }: { project: Project }) {
  if (!project.repo && !project.demo && !project.status) return null;
  return (
    <div className="flex flex-wrap items-center gap-2">
      {project.repo && (
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 rounded-lg border border-border bg-surface-2/60 px-3 py-1.5 text-xs font-medium text-fg transition-colors hover:border-accent/50 hover:text-accent"
        >
          <GitHubIcon className="h-3.5 w-3.5" />
          View Code
        </a>
      )}
      {project.demo && (
        <a
          href={project.demo}
          target="_blank"
          rel="noopener noreferrer"
          onClick={(e) => e.stopPropagation()}
          className="inline-flex items-center gap-1.5 rounded-lg border border-emerald/40 bg-emerald/10 px-3 py-1.5 text-xs font-medium text-emerald transition-colors hover:bg-emerald/20"
        >
          <ExternalLink className="h-3.5 w-3.5" />
          Live Demo
        </a>
      )}
      {project.status && (
        <span
          className={`inline-flex items-center gap-1.5 rounded-lg border px-3 py-1.5 text-xs font-medium ${statusTone[project.status.tone]}`}
        >
          {project.status.tone === "private" && <Lock className="h-3.5 w-3.5" />}
          {project.status.label}
        </span>
      )}
    </div>
  );
}

export function Projects() {
  const [filter, setFilter] = useState<ProjectCategory | "All">("All");
  const [active, setActive] = useState<Project | null>(null);

  const visible =
    filter === "All"
      ? projects
      : projects.filter((p) => p.categories.includes(filter));

  return (
    <Section id="projects">
      <SectionHeading
        eyebrow="Featured Projects"
        title="Systems I've built"
        description="Enterprise AI platform work and the machine-learning projects behind it."
      />

      {/* Filters */}
      <div className="mt-9 flex flex-wrap justify-center gap-2">
        {projectFilters.map((f) => (
          <button
            key={f}
            onClick={() => setFilter(f)}
            className={`relative rounded-full px-4 py-2 text-sm font-medium transition-colors ${
              filter === f ? "text-bg" : "text-muted hover:text-fg"
            }`}
          >
            {filter === f && (
              <motion.span
                layoutId="filter-pill"
                className="absolute inset-0 rounded-full bg-gradient-to-r from-accent-3 to-accent-2"
                transition={{ type: "spring", stiffness: 380, damping: 32 }}
              />
            )}
            <span className="relative">{f}</span>
          </button>
        ))}
      </div>

      {/* Grid */}
      <motion.div layout className="mt-10 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <AnimatePresence mode="popLayout">
          {visible.map((p) => (
            <motion.article
              key={p.slug}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.4 }}
              onClick={() => setActive(p)}
              className="glass card-hover group relative flex cursor-pointer flex-col overflow-hidden rounded-2xl p-6"
            >
              {/* top glow */}
              <div
                className="pointer-events-none absolute -top-20 left-1/2 h-40 w-40 -translate-x-1/2 rounded-full opacity-40 blur-3xl transition-opacity group-hover:opacity-70"
                style={{ background: p.accent }}
              />

              <div className="relative flex items-center justify-between">
                <span
                  className="flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-surface-2"
                  style={{ color: p.accent }}
                >
                  <p.icon className="h-6 w-6" />
                </span>
                <ArrowUpRight className="h-5 w-5 text-faint transition-all group-hover:-translate-y-0.5 group-hover:translate-x-0.5 group-hover:text-accent" />
              </div>

              <h3 className="relative mt-5 text-lg font-semibold text-fg">
                {p.title}
              </h3>
              <p className="relative mt-2 flex-1 text-sm leading-relaxed text-muted">
                {p.tagline}
              </p>

              <div className="relative mt-4 flex flex-wrap gap-1.5">
                {p.categories.map((c) => (
                  <span
                    key={c}
                    className="rounded-md border border-border bg-surface-2/60 px-2 py-0.5 font-mono text-[11px] text-muted"
                  >
                    {c}
                  </span>
                ))}
              </div>

              <div className="relative mt-4 grid grid-cols-3 gap-2 border-t border-border pt-4">
                {p.metrics.map((m) => (
                  <div key={m.label}>
                    <p className="text-sm font-bold text-fg">{m.value}</p>
                    <p className="font-mono text-[10px] uppercase tracking-wide text-faint">
                      {m.label}
                    </p>
                  </div>
                ))}
              </div>

              <div className="relative mt-4 border-t border-border pt-4">
                <ProjectActions project={p} />
                <p className="mt-3 text-xs font-medium text-accent">
                  View details →
                </p>
              </div>
            </motion.article>
          ))}
        </AnimatePresence>
      </motion.div>

      <ProjectModal project={active} onClose={() => setActive(null)} />
    </Section>
  );
}

function ProjectModal({
  project,
  onClose,
}: {
  project: Project | null;
  onClose: () => void;
}) {
  return (
    <AnimatePresence>
      {project && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-[80] flex items-start justify-center overflow-y-auto bg-bg/80 p-4 backdrop-blur-md sm:p-8"
        >
          <motion.div
            initial={{ opacity: 0, y: 30, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 30, scale: 0.97 }}
            transition={{ duration: 0.35, ease: [0.21, 0.47, 0.32, 0.98] }}
            onClick={(e) => e.stopPropagation()}
            className="glass relative my-4 w-full max-w-3xl overflow-hidden rounded-3xl"
          >
            {/* header */}
            <div className="relative overflow-hidden border-b border-border p-7">
              <div
                className="pointer-events-none absolute -top-24 right-0 h-48 w-48 rounded-full opacity-40 blur-3xl"
                style={{ background: project.accent }}
              />
              <button
                onClick={onClose}
                aria-label="Close"
                className="absolute right-5 top-5 flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:text-fg"
              >
                <X className="h-5 w-5" />
              </button>
              <span
                className="flex h-14 w-14 items-center justify-center rounded-2xl border border-border bg-surface-2"
                style={{ color: project.accent }}
              >
                <project.icon className="h-7 w-7" />
              </span>
              <h3 className="mt-4 text-2xl font-bold text-fg">{project.title}</h3>
              <p className="mt-1 text-muted">{project.tagline}</p>
              <div className="mt-4">
                <ProjectActions project={project} />
              </div>
            </div>

            <div className="space-y-7 p-7">
              {project.problem && (
                <Block label="Problem">
                  <p className="text-sm leading-relaxed text-muted">
                    {project.problem}
                  </p>
                </Block>
              )}

              <div className={`grid gap-7 ${project.architecture ? "sm:grid-cols-2" : ""}`}>
                <Block label="What I built">
                  <ul className="space-y-1.5">
                    {project.features.map((f) => (
                      <li key={f} className="flex gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent" />
                        {f}
                      </li>
                    ))}
                  </ul>
                </Block>
                {project.architecture && (
                  <Block label="Architecture">
                    <ul className="space-y-1.5">
                      {project.architecture.map((a) => (
                        <li key={a} className="flex gap-2 text-sm text-muted">
                          <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent-2" />
                          {a}
                        </li>
                      ))}
                    </ul>
                  </Block>
                )}
              </div>

              {(project.challenges || project.solution) && (
                <div className="grid gap-7 sm:grid-cols-2">
                  {project.challenges && (
                    <Block label="Challenges">
                      <p className="text-sm leading-relaxed text-muted">
                        {project.challenges}
                      </p>
                    </Block>
                  )}
                  {project.solution && (
                    <Block label="Solution">
                      <p className="text-sm leading-relaxed text-muted">
                        {project.solution}
                      </p>
                    </Block>
                  )}
                </div>
              )}

              {project.deployment && (
                <Block label="Deployment Strategy">
                  <ul className="space-y-1.5">
                    {project.deployment.map((d) => (
                      <li key={d} className="flex gap-2 text-sm text-muted">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-emerald" />
                        {d}
                      </li>
                    ))}
                  </ul>
                </Block>
              )}

              <Block label="At a glance">
                <div className="grid gap-3 sm:grid-cols-3">
                  {project.metrics.map((m) => (
                    <div
                      key={m.label}
                      className="rounded-xl border border-border bg-surface-2/50 p-4 text-center"
                    >
                      <p className="text-xl font-bold text-gradient-accent">
                        {m.value}
                      </p>
                      <p className="mt-1 font-mono text-[11px] uppercase tracking-wider text-faint">
                        {m.label}
                      </p>
                    </div>
                  ))}
                </div>
              </Block>

              {project.results && (
                <Block label="Results">
                  <div className="grid gap-3 sm:grid-cols-3">
                    {project.results.map((r) => (
                      <div
                        key={r}
                        className="rounded-xl border border-border bg-surface-2/50 p-3 text-sm text-muted"
                      >
                        {r}
                      </div>
                    ))}
                  </div>
                </Block>
              )}

              <Block label="Tech Stack">
                <div className="flex flex-wrap gap-2">
                  {project.stack.map((s) => (
                    <span
                      key={s}
                      className="rounded-lg border border-border bg-surface-2/60 px-3 py-1 font-mono text-xs text-muted"
                    >
                      {s}
                    </span>
                  ))}
                </div>
              </Block>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function Block({
  label,
  children,
}: {
  label: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <h4 className="mb-3 font-mono text-xs uppercase tracking-[0.2em] text-accent">
        {label}
      </h4>
      {children}
    </div>
  );
}
