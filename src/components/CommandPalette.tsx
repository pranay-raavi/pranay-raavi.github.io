"use client";

import { AnimatePresence, motion } from "framer-motion";
import {
  Search,
  CornerDownLeft,
  User,
  Boxes,
  Workflow,
  Layers,
  Cpu,
  Mail,
  FileDown,
  ArrowRight,
} from "lucide-react";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import { GitHubIcon, LinkedInIcon } from "./ui/BrandIcons";
import { profile } from "@/lib/data";
import type { LucideIcon } from "lucide-react";

type Item = {
  id: string;
  label: string;
  hint: string;
  icon: LucideIcon | typeof GitHubIcon;
  run: () => void;
  keywords?: string;
};

export function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);
  const inputRef = useRef<HTMLInputElement>(null);

  const go = useCallback((hash: string) => {
    document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
  }, []);
  const link = useCallback((url: string) => {
    window.open(url, "_blank", "noopener,noreferrer");
  }, []);

  const items: Item[] = useMemo(
    () => [
      { id: "about", label: "About", hint: "section", icon: User, run: () => go("#about") },
      { id: "build", label: "What I Build", hint: "section", icon: Layers, run: () => go("#what-i-build") },
      { id: "experience", label: "Experience", hint: "section", icon: Workflow, run: () => go("#experience") },
      { id: "architecture", label: "Architecture", hint: "section", icon: Cpu, run: () => go("#architecture"), keywords: "fullstack license rag procurement api diagram" },
      { id: "projects", label: "Projects", hint: "section", icon: Boxes, run: () => go("#projects") },
      { id: "skills", label: "Skills", hint: "section", icon: Layers, run: () => go("#skills") },
      { id: "gh", label: "GitHub", hint: profile.socials.github, icon: GitHubIcon, run: () => link(profile.socials.github), keywords: "code repo source" },
      { id: "li", label: "LinkedIn", hint: "profile", icon: LinkedInIcon, run: () => link(profile.socials.linkedin) },
      { id: "mail", label: "Email me", hint: profile.email, icon: Mail, run: () => link(profile.socials.email), keywords: "contact" },
      { id: "resume", label: "Download Resume", hint: "PDF", icon: FileDown, run: () => link(profile.resumeUrl), keywords: "cv" },
    ],
    [go, link]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (i) =>
        i.label.toLowerCase().includes(q) ||
        i.hint.toLowerCase().includes(q) ||
        (i.keywords ?? "").includes(q)
    );
  }, [items, query]);

  const close = useCallback(() => {
    setOpen(false);
    setQuery("");
    setActive(0);
  }, []);

  // mirror `open` into a ref so the global listener isn't stale
  const openRef = useRef(open);
  useEffect(() => {
    openRef.current = open;
  });

  // global hotkey
  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === "k") {
        e.preventDefault();
        if (openRef.current) close();
        else setOpen(true);
      } else if (e.key === "Escape") {
        close();
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [close]);

  // focus the input when opened (DOM only — no state writes in the effect)
  useEffect(() => {
    if (!open) return;
    const t = setTimeout(() => inputRef.current?.focus(), 40);
    return () => clearTimeout(t);
  }, [open]);

  const activeIdx = filtered.length ? Math.min(active, filtered.length - 1) : 0;

  const activate = (i: Item) => {
    close();
    i.run();
  };

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "ArrowDown") {
      e.preventDefault();
      setActive(Math.min(filtered.length - 1, activeIdx + 1));
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setActive(Math.max(0, activeIdx - 1));
    } else if (e.key === "Enter") {
      e.preventDefault();
      const item = filtered[activeIdx];
      if (item) activate(item);
    }
  };

  return (
    <AnimatePresence>
      {open && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={close}
          className="fixed inset-0 z-[90] flex items-start justify-center bg-bg/70 p-4 pt-[12vh] backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, y: -16, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -16, scale: 0.98 }}
            transition={{ duration: 0.18 }}
            onClick={(e) => e.stopPropagation()}
            className="glass w-full max-w-lg overflow-hidden rounded-2xl shadow-glow"
          >
            <div className="flex items-center gap-3 border-b border-border px-4">
              <Search className="h-4 w-4 text-faint" />
              <input
                ref={inputRef}
                value={query}
                onChange={(e) => {
                  setQuery(e.target.value);
                  setActive(0);
                }}
                onKeyDown={onKeyDown}
                placeholder="Jump to a section or action…"
                aria-label="Command palette"
                className="flex-1 bg-transparent py-4 text-fg outline-none placeholder:text-faint"
              />
              <kbd className="rounded border border-border bg-surface px-1.5 py-0.5 font-mono text-[10px] text-faint">
                esc
              </kbd>
            </div>

            <ul className="max-h-[50vh] overflow-y-auto p-2">
              {filtered.length === 0 && (
                <li className="px-3 py-6 text-center text-sm text-faint">No matches</li>
              )}
              {filtered.map((i, idx) => {
                const Icon = i.icon;
                return (
                  <li key={i.id}>
                    <button
                      onMouseEnter={() => setActive(idx)}
                      onClick={() => activate(i)}
                      className={`flex w-full items-center gap-3 rounded-xl px-3 py-2.5 text-left transition-colors ${
                        idx === activeIdx ? "bg-surface-2 text-fg" : "text-muted"
                      }`}
                    >
                      <span
                        className={`flex h-8 w-8 items-center justify-center rounded-lg border ${
                          idx === activeIdx ? "border-accent/50 text-accent" : "border-border text-faint"
                        } bg-surface`}
                      >
                        <Icon className="h-4 w-4" />
                      </span>
                      <span className="flex-1">
                        <span className="block text-sm font-medium">{i.label}</span>
                        <span className="block truncate font-mono text-xs text-faint">
                          {i.hint}
                        </span>
                      </span>
                      {idx === activeIdx ? (
                        <CornerDownLeft className="h-4 w-4 text-faint" />
                      ) : (
                        <ArrowRight className="h-4 w-4 text-transparent" />
                      )}
                    </button>
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
