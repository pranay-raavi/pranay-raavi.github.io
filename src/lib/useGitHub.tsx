"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import { profile } from "./data";

const GH_USER = "pranay-raavi";

export interface GitHubStats {
  repos: number;
  stars: number;
  followers: number;
  lastCommit: string | null; // ISO date of most recent push
  topLanguages: string[];
  loading: boolean;
  live: boolean; // true if data came from the API, false if fallback
}

// Sensible fallback so the UI never looks broken (rate limits, offline, etc.)
const FALLBACK: GitHubStats = {
  repos: 18,
  stars: 3,
  followers: 0,
  lastCommit: null,
  topLanguages: ["Python", "TypeScript", "Shell"],
  loading: true,
  live: false,
};

// Module-level cache so we fetch once per session, shared across consumers.
let cache: GitHubStats | null = null;

const GitHubContext = createContext<GitHubStats>(FALLBACK);

export function GitHubProvider({ children }: { children: ReactNode }) {
  const [stats, setStats] = useState<GitHubStats>(cache ?? FALLBACK);

  useEffect(() => {
    // state is already initialized from `cache` via useState; only fetch once.
    if (cache) return;
    let cancelled = false;

    (async () => {
      try {
        const [userRes, reposRes] = await Promise.all([
          fetch(`https://api.github.com/users/${GH_USER}`),
          fetch(`https://api.github.com/users/${GH_USER}/repos?per_page=100&sort=pushed`),
        ]);
        if (!userRes.ok || !reposRes.ok) throw new Error("github api");

        const user = await userRes.json();
        const repos: Array<{
          stargazers_count: number;
          language: string | null;
          pushed_at: string;
          fork: boolean;
        }> = await reposRes.json();

        const stars = repos.reduce((s, r) => s + (r.stargazers_count || 0), 0);
        const langCount = new Map<string, number>();
        for (const r of repos) {
          if (r.language) langCount.set(r.language, (langCount.get(r.language) || 0) + 1);
        }
        const topLanguages = [...langCount.entries()]
          .sort((a, b) => b[1] - a[1])
          .slice(0, 4)
          .map(([l]) => l);
        const lastCommit = repos
          .map((r) => r.pushed_at)
          .filter(Boolean)
          .sort()
          .reverse()[0] ?? null;

        const next: GitHubStats = {
          repos: user.public_repos ?? repos.length,
          stars,
          followers: user.followers ?? 0,
          lastCommit,
          topLanguages: topLanguages.length ? topLanguages : FALLBACK.topLanguages,
          loading: false,
          live: true,
        };
        cache = next;
        if (!cancelled) setStats(next);
      } catch {
        const fb = { ...FALLBACK, loading: false };
        cache = fb;
        if (!cancelled) setStats(fb);
      }
    })();

    return () => {
      cancelled = true;
    };
  }, []);

  return <GitHubContext.Provider value={stats}>{children}</GitHubContext.Provider>;
}

export function useGitHub() {
  return useContext(GitHubContext);
}

/** Human "time ago" from an ISO date. */
export function timeAgo(iso: string | null): string {
  if (!iso) return "—";
  const secs = Math.max(1, Math.floor((Date.now() - new Date(iso).getTime()) / 1000));
  const steps: [number, string][] = [
    [60, "s"],
    [3600, "m"],
    [86400, "h"],
    [2592000, "d"],
    [31536000, "mo"],
    [Infinity, "y"],
  ];
  const divisors = [1, 60, 3600, 86400, 2592000, 31536000];
  for (let i = 0; i < steps.length; i++) {
    if (secs < steps[i][0]) {
      return `${Math.floor(secs / divisors[i])}${steps[i][1]} ago`;
    }
  }
  return "just now";
}

export const githubProfileUrl = profile.socials.github;
