"use client";

import { AnimatePresence, motion, useScroll, useMotionValueEvent } from "framer-motion";
import { Menu, X, Download } from "lucide-react";
import { useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Architecture", href: "#architecture" },
  { label: "Projects", href: "#projects" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (y) => setScrolled(y > 24));

  return (
    <>
      <motion.header
        initial={{ y: -80, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="fixed inset-x-0 top-0 z-50"
      >
        <div className="container-page">
          <div
            className={`mt-3 flex items-center justify-between rounded-2xl px-4 py-2.5 transition-all duration-300 ${
              scrolled
                ? "glass shadow-glow"
                : "border border-transparent bg-transparent"
            }`}
          >
            <a
              href="#home"
              className="group flex items-center gap-2.5 font-mono text-sm font-semibold"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-surface text-gradient-accent transition-colors group-hover:border-accent/50">
                {profile.monogram}
              </span>
              <span className="hidden text-fg sm:inline">{profile.name}</span>
            </a>

            <nav className="hidden items-center gap-1 md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className="rounded-lg px-3 py-2 text-sm text-muted transition-colors hover:bg-surface hover:text-fg"
                >
                  {l.label}
                </a>
              ))}
            </nav>

            <div className="flex items-center gap-2">
              <a
                href={profile.resumeUrl}
                download
                className="hidden items-center gap-2 rounded-lg bg-gradient-to-r from-accent-3 to-accent-2 px-4 py-2 text-sm font-medium text-bg transition-transform hover:scale-[1.03] sm:inline-flex"
              >
                <Download className="h-4 w-4" />
                Resume
              </a>
              <button
                onClick={() => setOpen((v) => !v)}
                aria-label="Toggle menu"
                className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-fg md:hidden"
              >
                {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
              </button>
            </div>
          </div>
        </div>
      </motion.header>

      {/* mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-bg/80 backdrop-blur-sm md:hidden"
            onClick={() => setOpen(false)}
          >
            <motion.nav
              initial={{ y: -20, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -20, opacity: 0 }}
              className="container-page mt-24 flex flex-col gap-1"
              onClick={(e) => e.stopPropagation()}
            >
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setOpen(false)}
                  className="rounded-xl border border-border bg-surface px-4 py-3 text-base text-fg"
                >
                  {l.label}
                </a>
              ))}
              <a
                href={profile.resumeUrl}
                download
                onClick={() => setOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-xl bg-gradient-to-r from-accent-3 to-accent-2 px-4 py-3 font-medium text-bg"
              >
                <Download className="h-4 w-4" />
                Download Resume
              </a>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
