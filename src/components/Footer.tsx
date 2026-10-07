import { profile } from "@/lib/data";
import { GitHubIcon, LinkedInIcon } from "./ui/BrandIcons";
import { Mail } from "lucide-react";

const nav = [
  { label: "About", href: "#about" },
  { label: "What I Build", href: "#what-i-build" },
  { label: "Experience", href: "#experience" },
  { label: "Architecture", href: "#architecture" },
  { label: "Projects", href: "#projects" },
  { label: "Principles", href: "#principles" },
  { label: "Skills", href: "#skills" },
  { label: "Contact", href: "#contact" },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border">
      <div className="container-page py-12">
        <div className="flex flex-col items-start justify-between gap-8 md:flex-row md:items-center">
          <div>
            <a href="#home" className="flex items-center gap-2.5 font-mono font-semibold">
              <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-surface text-gradient-accent">
                {profile.monogram}
              </span>
              <span className="text-fg">{profile.name}</span>
            </a>
            <p className="mt-3 max-w-xs text-sm text-faint">
              AI Engineer · Generative AI · LLM Applications. Building LLM
              systems for enterprise SaaS with Python and FastAPI.
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-6 gap-y-2">
            {nav.map((n) => (
              <a
                key={n.href}
                href={n.href}
                className="text-sm text-muted transition-colors hover:text-fg"
              >
                {n.label}
              </a>
            ))}
          </nav>

          <div className="flex items-center gap-3">
            <a
              href={profile.socials.github}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="GitHub"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <GitHubIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label="LinkedIn"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <LinkedInIcon className="h-5 w-5" />
            </a>
            <a
              href={profile.socials.email}
              aria-label="Email"
              className="flex h-10 w-10 items-center justify-center rounded-lg border border-border bg-surface text-muted transition-colors hover:border-accent/50 hover:text-accent"
            >
              <Mail className="h-5 w-5" />
            </a>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center justify-between gap-3 border-t border-border pt-6 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-xs text-faint">
            © {new Date().getFullYear()} {profile.name}. Built with Next.js,
            TypeScript &amp; Tailwind CSS.
          </p>
          <p className="font-mono text-xs text-faint">
            Designed &amp; engineered end-to-end.
          </p>
        </div>
      </div>
    </footer>
  );
}
