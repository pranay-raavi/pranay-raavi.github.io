"use client";

import { motion } from "framer-motion";
import { Brain, CheckCircle2, Cpu, Sparkles, Zap } from "lucide-react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/* ── RAG pipeline stages ── */
const pipeline = [
  { label: "Embed",    sub: "1,842 vectors", color: "#38bdf8" },
  { label: "Retrieve", sub: "semantic",       color: "#818cf8" },
  { label: "Fuse",     sub: "KB + ticket",    color: "#22d3ee" },
  { label: "Generate", sub: "grounded LLM",   color: "#34d399" },
];

/* ── Session log lines ── */
type CmdLine = { kind: "cmd"; text: string; delay: number };
type OkLine  = { kind: "ok";  text: string; badge?: string; delay: number };
const session: (CmdLine | OkLine)[] = [
  { kind: "cmd", text: "ai-workspace init --mode rag",      delay: 0.9  },
  { kind: "ok",  text: "KB embeddings loaded",  badge: "1,842 vec", delay: 1.15 },
  { kind: "ok",  text: "RAG pipeline ready",    badge: "94% acc",   delay: 1.35 },
  { kind: "cmd", text: "query --ticket TKT-4821",            delay: 1.65 },
  { kind: "ok",  text: "ticket context fetched", badge: "0.08s",    delay: 1.9  },
  { kind: "ok",  text: "grounded answer ready",              delay: 2.1  },
  { kind: "cmd", text: "npm run dev",                        delay: 2.45 },
  { kind: "ok",  text: "Next.js 16 ready",     badge: ":3000",      delay: 2.65 },
  { kind: "cmd", text: "pytest tests/ -q",                   delay: 2.95 },
  { kind: "ok",  text: "38 passed · 0 failed",               delay: 3.15 },
];

export function ProductionTerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.3, ease }}
      className="glass relative w-full max-w-[430px] overflow-hidden rounded-2xl shadow-glow"
    >
      {/* ── Header ── */}
      <div className="relative flex items-center justify-between border-b border-border bg-gradient-to-r from-[#070e1c] via-[#09101f] to-[#0b0c1e] px-4 py-3">
        {/* traffic lights */}
        <div className="flex items-center gap-1.5">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        </div>

        {/* title */}
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <p className="font-mono text-[11px] font-semibold uppercase tracking-[0.18em] text-fg/80">
            AI Engineer Workspace
          </p>
          <p className="font-mono text-[9px] tracking-wider text-faint">
            rag-engine · freshdesk-kb · fastapi
          </p>
        </div>

        {/* live dot */}
        <span className="relative z-10 inline-flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-wider text-emerald">
          <span className="relative flex h-1.5 w-1.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
            <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
          </span>
          live
        </span>
      </div>

      {/* ── RAG Pipeline Strip ── */}
      <div className="border-b border-border bg-[#07090f]/60 px-4 py-3">
        <div className="mb-2 flex items-center gap-2">
          <Brain className="h-3 w-3 text-accent" />
          <p className="font-mono text-[9px] uppercase tracking-[0.22em] text-faint">
            RAG Pipeline
          </p>
        </div>
        <div className="grid grid-cols-4 gap-2">
          {pipeline.map((s, i) => (
            <motion.div
              key={s.label}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.45 + i * 0.1, duration: 0.4, ease }}
              className="flex flex-col gap-1.5"
            >
              {/* coloured bar */}
              <motion.div
                className="h-[3px] rounded-full"
                style={{ backgroundColor: s.color }}
                initial={{ scaleX: 0, originX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.55 + i * 0.12, duration: 0.5, ease }}
              />
              <p className="font-mono text-[10px] font-semibold" style={{ color: s.color }}>
                {s.label}
              </p>
              <p className="font-mono text-[9px] text-faint">{s.sub}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* ── Session Log ── */}
      <div className="space-y-1 px-4 py-3 font-mono text-[12px] leading-relaxed">
        {session.map((line, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, x: -6 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: line.delay, duration: 0.3 }}
          >
            {line.kind === "cmd" ? (
              <p className="mt-1 text-fg/90">
                <span className="text-accent/80">$</span>{" "}
                <span className="text-muted">{line.text}</span>
              </p>
            ) : (
              <p className="flex items-center gap-2 pl-4 text-faint">
                <CheckCircle2 className="h-3 w-3 shrink-0 text-emerald" />
                <span className="text-muted/80">{line.text}</span>
                {line.badge && (
                  <span className="ml-auto rounded border border-accent/20 bg-accent/5 px-1.5 py-0.5 text-[10px] text-accent/80">
                    {line.badge}
                  </span>
                )}
              </p>
            )}
          </motion.div>
        ))}

        {/* blinking cursor */}
        <motion.span
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{
            delay: session[session.length - 1].delay + 0.4,
            repeat: Infinity,
            duration: 1,
          }}
          className="ml-4 inline-block h-[14px] w-[7px] rounded-sm bg-accent/60 align-middle"
        />
      </div>

      {/* ── Footer status row ── */}
      <div className="flex items-center gap-3 border-t border-border bg-[#07090f]/60 px-4 py-2">
        {[
          { icon: Sparkles, label: "RAG", color: "text-accent" },
          { icon: Zap,      label: "FastAPI", color: "text-violet-400" },
          { icon: Cpu,      label: "Next.js",  color: "text-cyan-400" },
        ].map(({ icon: Icon, label, color }) => (
          <span key={label} className="inline-flex items-center gap-1 font-mono text-[10px] text-faint">
            <Icon className={`h-3 w-3 ${color}`} />
            {label}
          </span>
        ))}
        <span className="ml-auto font-mono text-[10px] text-faint">pranay-raavi.github.io</span>
      </div>
    </motion.div>
  );
}
