"use client";

import { motion } from "framer-motion";
import { Brain, GitCommitHorizontal, Star, Sparkles, Boxes } from "lucide-react";
import { useGitHub, timeAgo } from "@/lib/useGitHub";

export function SystemStatus() {
  const gh = useGitHub();

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.6, delay: 0.3 }}
      className="border-y border-border bg-surface/40"
    >
      <div className="container-page">
        <div className="flex flex-wrap items-center gap-x-6 gap-y-2 py-2.5 font-mono text-xs">
          {/* AI badges */}
          <span className="inline-flex items-center gap-1.5 rounded-full border border-accent/30 bg-accent/10 px-2.5 py-0.5 text-accent">
            <Brain className="h-3 w-3" />
            AI Engineer
          </span>
          <span className="hidden items-center gap-1.5 text-muted sm:inline-flex">
            <Sparkles className="h-3 w-3 text-violet-400" />
            RAG · Next.js · FastAPI
          </span>

          {/* GitHub stats */}
          <span className="ml-auto flex flex-wrap items-center gap-x-5 gap-y-1 text-faint">
            <span className="inline-flex items-center gap-1.5" title="Public repositories">
              <Boxes className="h-3.5 w-3.5 text-accent" />
              <span className="text-muted">{gh.loading ? "··" : gh.repos}</span> repos
            </span>
            <span className="inline-flex items-center gap-1.5" title="Total stars">
              <Star className="h-3.5 w-3.5 text-amber" />
              <span className="text-muted">{gh.loading ? "··" : gh.stars}</span> stars
            </span>
            <span className="inline-flex items-center gap-1.5" title="Most recent push">
              <GitCommitHorizontal className="h-3.5 w-3.5 text-accent-2" />
              last push{" "}
              <span className="text-muted">
                {gh.lastCommit ? timeAgo(gh.lastCommit) : gh.loading ? "··" : "recently"}
              </span>
            </span>
            <span className="inline-flex items-center gap-1.5">
              {gh.live ? (
                <span className="rounded border border-emerald/30 bg-emerald/10 px-1.5 text-[10px] text-emerald">
                  ● live
                </span>
              ) : (
                <span className="rounded border border-border px-1.5 text-[10px] text-faint">
                  cached
                </span>
              )}
            </span>
          </span>
        </div>
      </div>
    </motion.div>
  );
}
