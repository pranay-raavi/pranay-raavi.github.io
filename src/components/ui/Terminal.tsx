"use client";

/* eslint-disable react/display-name -- ok/dim/acc are tiny inline render helpers, not components */

import {
  forwardRef,
  useCallback,
  useEffect,
  useImperativeHandle,
  useRef,
  useState,
  type ReactNode,
} from "react";
import { profile, projects, skillGroups, experience } from "@/lib/data";
import { useGitHub, timeAgo } from "@/lib/useGitHub";

export interface TerminalHandle {
  run: (cmd: string) => void;
  focus: () => void;
}

interface Line {
  id: number;
  node: ReactNode;
}

interface Ctx {
  print: (node: ReactNode) => void;
  clear: () => void;
  sleep: (ms: number) => Promise<void>;
  open: (url: string) => void;
  navigate: (hash: string) => void;
  gh: ReturnType<typeof useGitHub>;
}

type Handler = (args: string[], ctx: Ctx) => void | Promise<void>;

/* ---- tiny render helpers ---- */
const c = (cls: string) => (t: ReactNode) => <span className={cls}>{t}</span>;
const ok = c("text-emerald");
const acc = c("text-accent");
const dim = c("text-faint");
const warn = c("text-amber");

function Row({ children }: { children: ReactNode }) {
  return <div className="whitespace-pre-wrap break-words leading-relaxed">{children}</div>;
}

/* ---- command registry ---- */
const commands: Record<string, { desc: string; run: Handler }> = {
  help: {
    desc: "list available commands",
    run: (_a, ctx) => {
      ctx.print(<Row>{acc("Available commands")}</Row>);
      for (const [name, def] of Object.entries(commands)) {
        ctx.print(
          <Row>
            {"  "}
            <span className="text-fg">{name.padEnd(12)}</span>
            {dim(def.desc)}
          </Row>
        );
      }
      ctx.print(<Row>{dim("tip: try 'deploy --watch', 'projects', or 'open github'")}</Row>);
    },
  },
  whoami: {
    desc: "who is this engineer",
    run: (_a, ctx) => {
      ctx.print(<Row>{profile.name}</Row>);
      ctx.print(
        <Row>
          {acc(profile.primaryRole)} {dim("·")} {profile.secondaryRoles.join(" · ")}
        </Row>
      );
      ctx.print(<Row>{dim(profile.atCompany)}</Row>);
    },
  },
  about: {
    desc: "short bio",
    run: (_a, ctx) => ctx.print(<Row>{profile.shortBio}</Row>),
  },
  projects: {
    desc: "list projects ('projects <name>' for detail)",
    run: (args, ctx) => {
      const q = args[0]?.toLowerCase();
      if (q) {
        const p = projects.find(
          (x) => x.slug.includes(q) || x.title.toLowerCase().includes(q)
        );
        if (!p) return ctx.print(<Row>{warn(`no project matching "${q}"`)}</Row>);
        ctx.print(<Row>{acc(p.title)}</Row>);
        ctx.print(<Row>{dim(p.tagline)}</Row>);
        ctx.print(<Row>{"stack: "}{p.stack.join(", ")}</Row>);
        ctx.print(
          <Row>
            {"repo:  "}
            {p.repo ? (
              <a className="text-accent underline" href={p.repo} target="_blank" rel="noopener noreferrer">
                {p.repo}
              </a>
            ) : (
              dim(p.status?.label ?? "private")
            )}
          </Row>
        );
        return;
      }
      ctx.print(<Row>{acc("projects/")}</Row>);
      projects.forEach((p) =>
        ctx.print(
          <Row>
            {"  "}
            <span className="text-fg">{p.slug.padEnd(22)}</span>
            {dim(p.tagline)}
          </Row>
        )
      );
    },
  },
  skills: {
    desc: "skills by domain",
    run: (_a, ctx) => {
      skillGroups.forEach((g) =>
        ctx.print(
          <Row>
            <span className="text-fg">{(g.domain + ":").padEnd(14)}</span>
            {g.skills.join(" · ")}
          </Row>
        )
      );
    },
  },
  experience: {
    desc: "work history",
    run: (_a, ctx) => {
      experience.forEach((e) => {
        ctx.print(
          <Row>
            {acc(e.role)} {dim("@ " + e.company)}
          </Row>
        );
        ctx.print(<Row>{dim("  " + e.period)}</Row>);
      });
    },
  },
  contact: {
    desc: "how to reach me",
    run: (_a, ctx) => {
      ctx.print(<Row>{"email:    "}{profile.email}</Row>);
      ctx.print(<Row>{"github:   "}{profile.socials.github}</Row>);
      ctx.print(<Row>{"linkedin: "}{profile.socials.linkedin}</Row>);
    },
  },
  open: {
    desc: "open a link (github|linkedin|email|resume|<project>)",
    run: (args, ctx) => {
      const t = (args[0] || "").toLowerCase();
      const map: Record<string, string> = {
        github: profile.socials.github,
        linkedin: profile.socials.linkedin,
        email: profile.socials.email,
        resume: profile.resumeUrl,
      };
      const proj = projects.find((p) => p.slug.includes(t) && p.repo)?.repo;
      const url = map[t] || proj;
      if (!url) return ctx.print(<Row>{warn("usage: open github|linkedin|email|resume|<project-slug>")}</Row>);
      ctx.print(<Row>{dim("opening ")}{t}{dim(" …")}</Row>);
      ctx.open(url);
    },
  },
  status: {
    desc: "live system + github status",
    run: (_a, ctx) => {
      const g = ctx.gh;
      ctx.print(<Row>{ok("● all systems operational")}</Row>);
      ctx.print(<Row>{"  portfolio   "}{ok("up")}{dim("  · github pages")}</Row>);
      ctx.print(<Row>{"  ai-workspace "}{ok("up")}{dim("  · rag pipeline ready")}</Row>);
      ctx.print(
        <Row>
          {"  github      "}
          {g.loading ? dim("fetching…") : (
            <>
              {acc(String(g.repos))} repos {dim("·")} {acc(String(g.stars))} stars{" "}
              {dim("· last commit " + (g.lastCommit ? timeAgo(g.lastCommit) : "recently"))}{" "}
              {g.live ? ok("[live]") : dim("[cached]")}
            </>
          )}
        </Row>
      );
    },
  },
  deploy: {
    desc: "run the CI/CD pipeline (try: deploy --watch)",
    run: async (args, ctx) => {
      const sha = "a1b2c3d";
      const steps: [string, string, number][] = [
        [`commit ${sha} pushed to main`, "", 350],
        ["build · next build (static export)", "ok", 700],
        ["test  · 38 passed", "ok", 600],
        ["push  · ghcr.io/pranay-raavi/portfolio:latest", "ok", 650],
        ["deploy· github pages (actions)", "ok", 750],
        ["health· pranay-raavi.github.io 200", "healthy", 500],
      ];
      ctx.print(<Row>{acc("▶ pipeline started")}{dim("  (github actions)")}</Row>);
      for (const [label, state, ms] of steps) {
        await ctx.sleep(ms);
        const pad = label.padEnd(48, " ");
        ctx.print(
          <Row>
            {dim("›")} {pad}
            {state === "healthy" ? ok("✓ " + state) : state ? ok("✓ " + state) : dim("…")}
          </Row>
        );
      }
      await ctx.sleep(300);
      ctx.print(<Row>{ok("✓ deployed to production")} {dim("· https://pranay-raavi.github.io")}</Row>);
    },
  },
  banner: {
    desc: "show the system banner",
    run: (_a, ctx) => {
      const g = ctx.gh;
      ctx.print(<Row>{acc("┌─ system ──────────────────────────────────┐")}</Row>);
      ctx.print(<Row>{"  user     "}<span className="text-fg">{profile.name}</span></Row>);
      ctx.print(<Row>{"  role     "}{acc(profile.primaryRole)}</Row>);
      ctx.print(<Row>{"  company  "}{dim(profile.atCompany)}</Row>);
      ctx.print(
        <Row>
          {"  github   "}
          {g.live ? <span className="text-fg">{`${g.repos} repos · ${g.stars} stars`}</span> : dim("—")}
        </Row>
      );
      ctx.print(<Row>{"  stack    "}{dim("Next.js · React · FastAPI · MongoDB · RAG")}</Row>);
      ctx.print(<Row>{"  status   "}{ok("● operational")}</Row>);
      ctx.print(<Row>{acc("└───────────────────────────────────────────┘")}</Row>);
    },
  },
  ls: {
    desc: "list sections",
    run: (_a, ctx) =>
      ctx.print(
        <Row>
          {["about/", "what-i-build/", "experience/", "architecture/", "projects/", "skills/", "contact/"].join("   ")}
        </Row>
      ),
  },
  echo: {
    desc: "print text",
    run: (args, ctx) => ctx.print(<Row>{args.join(" ")}</Row>),
  },
  sudo: {
    desc: "elevate privileges",
    run: (_a, ctx) =>
      ctx.print(<Row>{warn("nice try 😏 — this whole site already runs as non-root.")}</Row>),
  },
  clear: {
    desc: "clear the screen",
    run: (_a, ctx) => ctx.clear(),
  },
};

let lineId = 0;

export const Terminal = forwardRef<TerminalHandle, { className?: string }>(
  function Terminal({ className = "" }, ref) {
    const gh = useGitHub();
    const [lines, setLines] = useState<Line[]>([]);
    const [input, setInput] = useState("");
    const [running, setRunning] = useState(false);
    const [history, setHistory] = useState<string[]>([]);
    const histIdx = useRef(-1);
    const inputRef = useRef<HTMLInputElement>(null);
    const bottomRef = useRef<HTMLDivElement>(null);
    const ghRef = useRef(gh);
    useEffect(() => {
      ghRef.current = gh;
    });

    const print = useCallback((node: ReactNode) => {
      setLines((prev) => [...prev, { id: lineId++, node }]);
    }, []);
    const clear = useCallback(() => setLines([]), []);

    const ctx: Ctx = {
      print,
      clear,
      sleep: (ms) => new Promise((r) => setTimeout(r, ms)),
      open: (url) => window.open(url, "_blank", "noopener,noreferrer"),
      navigate: (hash) => {
        document.querySelector(hash)?.scrollIntoView({ behavior: "smooth" });
      },
      get gh() {
        return ghRef.current;
      },
    };

    const execute = useCallback(
      async (raw: string) => {
        const cmd = raw.trim();
        print(
          <Row>
            <span className="text-accent">$</span> <span className="text-fg">{cmd || ""}</span>
          </Row>
        );
        if (!cmd) return;
        setHistory((h) => [...h, cmd]);
        histIdx.current = -1;
        const [name, ...args] = cmd.split(/\s+/);
        const def = commands[name.toLowerCase()];
        if (!def) {
          print(
            <Row>
              {warn(`command not found: ${name}`)} {dim("— type 'help'")}
            </Row>
          );
          return;
        }
        setRunning(true);
        try {
          await def.run(args, ctx);
        } catch {
          print(<Row>{warn("command error")}</Row>);
        } finally {
          setRunning(false);
        }
      },
      // eslint-disable-next-line react-hooks/exhaustive-deps
      [print]
    );

    useImperativeHandle(ref, () => ({
      run: (cmd: string) => {
        if (!running) execute(cmd);
      },
      focus: () => inputRef.current?.focus(),
    }));

    // boot sequence
    useEffect(() => {
      let alive = true;
      (async () => {
        const boot = [
          <Row key="b1">{dim("booting console …")}</Row>,
          <Row key="b2">
            {ok("✓")} connected as <span className="text-fg">guest</span>
          </Row>,
          <Row key="b3">
            type <span className="text-accent">help</span> to list commands,{" "}
            <span className="text-accent">deploy --watch</span> to run the pipeline
          </Row>,
        ];
        for (const b of boot) {
          if (!alive) return;
          print(b);
          await new Promise((r) => setTimeout(r, 250));
        }
      })();
      return () => {
        alive = false;
      };
    }, [print]);

    useEffect(() => {
      bottomRef.current?.scrollIntoView({ block: "nearest" });
    }, [lines]);

    const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
      if (e.key === "Enter" && !running) {
        execute(input);
        setInput("");
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        if (!history.length) return;
        histIdx.current =
          histIdx.current < 0 ? history.length - 1 : Math.max(0, histIdx.current - 1);
        setInput(history[histIdx.current] ?? "");
      } else if (e.key === "ArrowDown") {
        e.preventDefault();
        if (histIdx.current < 0) return;
        histIdx.current = Math.min(history.length, histIdx.current + 1);
        setInput(history[histIdx.current] ?? "");
      } else if (e.key === "Tab") {
        e.preventDefault();
        const match = Object.keys(commands).find((c2) => c2.startsWith(input.toLowerCase()));
        if (match) setInput(match);
      } else if (e.ctrlKey && e.key.toLowerCase() === "l") {
        e.preventDefault();
        clear();
      }
    };

    return (
      <div
        className={`glass overflow-hidden rounded-2xl shadow-glow ${className}`}
        onClick={() => inputRef.current?.focus()}
      >
        <div className="flex items-center gap-2 border-b border-border bg-surface-2/60 px-4 py-3">
          <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
          <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
          <span className="h-3 w-3 rounded-full bg-[#28c840]" />
          <span className="ml-2 font-mono text-xs text-faint">pranay@ai-studio · zsh</span>
          <span className="ml-auto font-mono text-[10px] uppercase tracking-wider text-faint">
            interactive
          </span>
        </div>

        <div className="h-[360px] overflow-y-auto p-4 font-mono text-[13px] text-muted">
          {lines.map((l) => (
            <div key={l.id}>{l.node}</div>
          ))}

          {/* input line */}
          <div className="flex items-center gap-2">
            <span className="text-accent">$</span>
            <input
              ref={inputRef}
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={onKeyDown}
              spellCheck={false}
              autoComplete="off"
              autoCapitalize="off"
              aria-label="terminal input"
              disabled={running}
              className="flex-1 border-none bg-transparent text-fg caret-accent outline-none placeholder:text-faint disabled:opacity-50"
              placeholder={running ? "running…" : "type a command — try 'help'"}
            />
          </div>
          <div ref={bottomRef} />
        </div>
      </div>
    );
  }
);
