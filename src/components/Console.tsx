"use client";

import { useRef } from "react";
import { Brain, FileDown, Command } from "lucide-react";
import { Section } from "./ui/Section";
import { SectionHeading } from "./ui/SectionHeading";
import { Terminal, type TerminalHandle } from "./ui/Terminal";
import { Reveal } from "./ui/Reveal";
import { GitHubIcon } from "./ui/BrandIcons";
import { profile } from "@/lib/data";

export function Console() {
  const term = useRef<TerminalHandle>(null);

  const send = (cmd: string) => {
    term.current?.run(cmd);
    term.current?.focus();
  };

  return (
    <Section id="console">
      <SectionHeading
        eyebrow="The Console"
        title={
          <>
            Don&apos;t just read it — <span className="text-gradient-accent">interact with it</span>
          </>
        }
        description="A real terminal. Run an AI query, explore my projects, or check the system. This is what I build."
      />

      <div className="mx-auto mt-10 grid max-w-5xl gap-5 lg:grid-cols-[1fr_280px]">
        <Reveal>
          <Terminal ref={term} />
        </Reveal>

        <Reveal delay={0.1} className="flex flex-col gap-3">
          <p className="font-mono text-xs uppercase tracking-[0.2em] text-faint">
            quick actions
          </p>

          {/* Primary action — AI Query */}
          <button
            onClick={() => send("ai-query")}
            className="group inline-flex items-center gap-2 rounded-xl bg-gradient-to-r from-accent-3 to-accent-2 px-4 py-3 text-left font-medium text-bg transition-transform hover:scale-[1.02]"
          >
            <Brain className="h-4 w-4" />
            Run AI Query
          </button>

          {[
            { label: "whoami",      cmd: "whoami" },
            { label: "ls projects", cmd: "projects" },
            { label: "skills",      cmd: "skills" },
            { label: "status",      cmd: "status" },
            { label: "banner",      cmd: "banner" },
          ].map((a) => (
            <button
              key={a.cmd}
              onClick={() => send(a.cmd)}
              className="inline-flex items-center gap-2 rounded-xl border border-border bg-surface px-4 py-2.5 text-left font-mono text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg"
            >
              <span className="text-accent">$</span> {a.label}
            </button>
          ))}

          <div className="mt-2 flex gap-2">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg"
            >
              <GitHubIcon className="h-4 w-4" /> GitHub
            </a>
            <a
              href={profile.resumeUrl}
              download
              className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-border bg-surface px-3 py-2.5 text-sm text-muted transition-colors hover:border-accent/50 hover:text-fg"
            >
              <FileDown className="h-4 w-4" /> Resume
            </a>
          </div>

          <p className="mt-1 inline-flex items-center gap-1.5 text-xs text-faint">
            <Command className="h-3.5 w-3.5" />
            press{" "}
            <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px] text-muted">
              ⌘K
            </kbd>{" "}
            anywhere to jump around
          </p>
        </Reveal>
      </div>
    </Section>
  );
}
