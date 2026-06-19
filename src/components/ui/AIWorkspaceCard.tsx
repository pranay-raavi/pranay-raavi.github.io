"use client";

import { motion } from "framer-motion";
import { Brain, Sparkles, FileText, Zap, ArrowRight, User } from "lucide-react";

const ease = [0.21, 0.47, 0.32, 0.98] as const;

/* ── RAG pipeline stages (animated dots flow between them) ── */
const stages = [
  { label: "Embed",    color: "#60a5fa" },
  { label: "Retrieve", color: "#3b82f6" },
  { label: "Fuse",     color: "#0ea5e9" },
  { label: "Generate", color: "#10b981" },
];

/* ── Citation cards shown under the AI answer ── */
const citations = [
  { id: "KB-312", title: "App Troubleshooting · Common Fixes", match: 96 },
  { id: "KB-118", title: "Known Issues · FAQ", match: 84 },
  { id: "TKT-2104", title: "Past ticket · similar resolved", match: 73 },
];

export function AIWorkspaceCard() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.85, delay: 0.25, ease }}
      className="relative w-full max-w-[440px]"
    >
      {/* Ambient gradient glow behind the card */}
      <div className="pointer-events-none absolute -inset-6 -z-10 rounded-[40px] bg-[radial-gradient(60%_60%_at_70%_30%,rgba(59,130,246,0.32),transparent_70%),radial-gradient(60%_60%_at_20%_80%,rgba(14,165,233,0.22),transparent_70%)] blur-2xl" />

      <div className="glass relative overflow-hidden rounded-3xl shadow-glow">
        {/* ── Header ── */}
        <div className="relative flex items-center justify-between border-b border-border bg-gradient-to-br from-[#0a1428]/80 via-[#0c1830]/80 to-[#0e2040]/80 px-5 py-4">
          <div className="flex items-center gap-3">
            <motion.div
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.5 }}
              className="relative flex h-10 w-10 items-center justify-center rounded-xl border border-accent/40 bg-gradient-to-br from-accent/25 to-accent-2/25"
            >
              <Brain className="h-5 w-5 text-accent" />
              <span className="absolute -inset-1 -z-10 rounded-2xl bg-accent/30 blur-md" />
            </motion.div>
            <div>
              <p className="text-sm font-semibold text-fg">AI Decision Workspace</p>
              <p className="font-mono text-[10px] uppercase tracking-[0.18em] text-faint">
                RAG · Freshdesk · Live
              </p>
            </div>
          </div>
          <span className="inline-flex items-center gap-1.5 rounded-full border border-emerald/30 bg-emerald/10 px-2 py-1 font-mono text-[10px] uppercase tracking-wider text-emerald">
            <span className="relative flex h-1.5 w-1.5">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-emerald opacity-75" />
              <span className="relative inline-flex h-1.5 w-1.5 rounded-full bg-emerald" />
            </span>
            online
          </span>
        </div>

        {/* ── Agent question bubble ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.55, duration: 0.5 }}
          className="flex gap-3 px-5 py-4"
        >
          <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-border bg-surface text-muted">
            <User className="h-4 w-4" />
          </div>
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-xs font-medium text-fg">Support Agent</span>
              <span className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px] text-faint">
                TKT-5102
              </span>
            </div>
            <p className="rounded-2xl rounded-tl-sm border border-border bg-surface/60 px-3 py-2 text-sm leading-relaxed text-muted">
              Customer says their app is not working. Can you check the KB
              and any past tickets for resolution steps?
            </p>
          </div>
        </motion.div>

        {/* ── RAG pipeline strip with flowing dot ── */}
        <div className="border-y border-border bg-[#070c1a]/50 px-5 py-3">
          <p className="mb-2 flex items-center gap-1.5 font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
            <Sparkles className="h-3 w-3 text-accent" />
            RAG Pipeline
          </p>
          <div className="relative grid grid-cols-4 gap-2">
            {/* connector line behind stages */}
            <div className="absolute inset-x-2 top-[7px] h-px bg-gradient-to-r from-accent/40 via-accent-2/40 to-emerald/50" />

            {/* flowing dot */}
            <motion.span
              initial={{ left: 0 }}
              animate={{ left: ["0%", "100%"] }}
              transition={{ duration: 3.2, repeat: Infinity, ease: "easeInOut", delay: 1.2 }}
              className="absolute top-[2px] h-2.5 w-2.5 rounded-full bg-accent shadow-[0_0_12px_3px_rgba(59,130,246,0.75)]"
            />

            {stages.map((s, i) => (
              <motion.div
                key={s.label}
                initial={{ opacity: 0, y: 4 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.7 + i * 0.08, duration: 0.4 }}
                className="flex flex-col items-center gap-1"
              >
                <span
                  className="relative z-10 h-3.5 w-3.5 rounded-full border-2"
                  style={{ borderColor: s.color, backgroundColor: "#060912" }}
                />
                <span className="font-mono text-[10px] font-medium" style={{ color: s.color }}>
                  {s.label}
                </span>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ── AI response bubble + citations ── */}
        <motion.div
          initial={{ opacity: 0, y: 8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1.0, duration: 0.5 }}
          className="flex gap-3 px-5 py-4"
        >
          <div className="relative flex h-8 w-8 shrink-0 items-center justify-center rounded-full border border-accent/40 bg-gradient-to-br from-accent/25 to-accent-2/25">
            <Brain className="h-4 w-4 text-accent" />
          </div>
          <div className="flex-1">
            <div className="mb-1 flex items-center gap-2">
              <span className="text-xs font-medium text-fg">AI Assistant</span>
              <span className="rounded border border-accent/30 bg-accent/10 px-1.5 py-0.5 font-mono text-[10px] text-accent">
                grounded
              </span>
            </div>

            <div className="rounded-2xl rounded-tl-sm border border-accent/25 bg-gradient-to-br from-accent/8 to-accent-2/8 px-3 py-2.5">
              <p className="text-sm leading-relaxed text-fg/90">
                Resolution steps from the KB and a similar past ticket:
              </p>
              <ul className="mt-1.5 space-y-1 text-sm leading-relaxed text-muted">
                <li className="flex items-start gap-1.5">
                  <ArrowRight className="mt-1 h-3 w-3 shrink-0 text-accent" />
                  Clear cache and restart the app
                </li>
                <li className="flex items-start gap-1.5">
                  <ArrowRight className="mt-1 h-3 w-3 shrink-0 text-accent" />
                  Verify network connectivity and retry
                </li>
                <li className="flex items-start gap-1.5">
                  <ArrowRight className="mt-1 h-3 w-3 shrink-0 text-accent" />
                  Check the service status dashboard
                </li>
              </ul>
            </div>

            {/* Citation cards */}
            <div className="mt-3 space-y-1.5">
              <p className="font-mono text-[10px] uppercase tracking-[0.2em] text-faint">
                Retrieved · KB + Tickets
              </p>
              {citations.map((c, i) => (
                <motion.div
                  key={c.id}
                  initial={{ opacity: 0, x: -6 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 1.3 + i * 0.12, duration: 0.4 }}
                  className="group flex items-center gap-2 rounded-lg border border-border bg-surface/40 px-2.5 py-1.5"
                >
                  <FileText className="h-3.5 w-3.5 shrink-0 text-accent" />
                  <span className="font-mono text-[10px] text-faint">{c.id}</span>
                  <span className="truncate text-xs text-muted">{c.title}</span>
                  <span className="ml-auto flex items-center gap-1.5">
                    <span className="relative h-1 w-12 overflow-hidden rounded-full bg-border">
                      <motion.span
                        initial={{ width: 0 }}
                        animate={{ width: `${c.match}%` }}
                        transition={{ delay: 1.5 + i * 0.12, duration: 0.7, ease }}
                        className="absolute inset-y-0 left-0 rounded-full bg-gradient-to-r from-accent to-accent-2"
                      />
                    </span>
                    <span className="font-mono text-[10px] text-accent">{c.match}%</span>
                  </span>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>

        {/* ── Footer status row ── */}
        <div className="flex items-center gap-3 border-t border-border bg-[#070c1a]/50 px-5 py-2.5">
          {[
            { icon: Brain,    label: "RAG",      color: "text-accent" },
            { icon: Zap,      label: "FastAPI",  color: "text-accent-2" },
            { icon: Sparkles, label: "Next.js",  color: "text-emerald" },
          ].map(({ icon: Icon, label, color }) => (
            <span key={label} className="inline-flex items-center gap-1 text-[11px] text-faint">
              <Icon className={`h-3 w-3 ${color}`} />
              {label}
            </span>
          ))}
          <span className="ml-auto font-mono text-[10px] text-faint">0.42s</span>
        </div>
      </div>
    </motion.div>
  );
}
