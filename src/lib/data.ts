import type { LucideIcon } from "lucide-react";
import {
  Cloud,
  Server,
  Container,
  Boxes,
  GitBranch,
  Cpu,
  Database,
  Network,
  Workflow,
  Gauge,
  Activity,
  Bot,
  Sparkles,
  Code2,
  Terminal,
  Layers,
  ShieldCheck,
  Lock,
  Wrench,
  Rocket,
  Zap,
  LineChart,
  Brain,
  Search,
  Webhook,
  FileText,
  KeyRound,
  ShoppingCart,
} from "lucide-react";

/* ------------------------------------------------------------------ */
/* Profile                                                            */
/* ------------------------------------------------------------------ */

export const profile = {
  name: "Raavi Pranay",
  monogram: "RP",
  primaryRole: "Software Developer",
  secondaryRoles: ["Frontend Developer", "AI Engineer"],
  roles: ["Software Developer", "Frontend Developer", "AI Engineer"],
  atCompany: "Software Developer @ Nainovate Technologies",
  impact:
    "Building enterprise-grade SaaS and On-Premise systems — license management, procurement automation and AI-driven workflow platforms with Next.js, React, FastAPI and MongoDB.",
  tagline:
    "Building enterprise-grade SaaS and On-Premise systems — license management, procurement automation and AI-driven workflow platforms with Next.js, React, FastAPI and MongoDB.",
  shortBio:
    "Software Developer building full-stack SaaS and On-Premise platforms — frontends in Next.js & React, backends in FastAPI, integrated with RAG-powered AI workflows.",
  location: "Vijayawada, Andhra Pradesh",
  email: "pranayraavi23@gmail.com",
  resumeUrl: "/resume.pdf",
  socials: {
    github: "https://github.com/pranay-raavi",
    linkedin: "https://www.linkedin.com/in/raavi-pranay",
    email: "mailto:pranayraavi23@gmail.com",
  },
  siteUrl: "https://pranay-raavi.github.io",
};

export type Role = (typeof profile.roles)[number];

/* Recruiter trust indicators — first impression */
export const trustIndicators: string[] = [
  "1+ Year Industry Experience",
  "SaaS & On-Prem Deployments",
  "Full-Stack Next.js + FastAPI",
  "AI / RAG Product Development",
];

/* ------------------------------------------------------------------ */
/* Hero metrics                                                       */
/* ------------------------------------------------------------------ */

export interface Stat {
  label: string;
  value: number;
  suffix?: string;
  prefix?: string;
  icon: LucideIcon;
}

export const stats: Stat[] = [
  { label: "Years Experience", value: 1, suffix: "+", icon: Activity },
  { label: "Enterprise Products Shipped", value: 3, suffix: "+", icon: Rocket },
  { label: "AI Modules Built", value: 3, suffix: "+", icon: Bot },
  { label: "REST APIs Integrated", value: 30, suffix: "+", icon: Workflow },
];

/* ------------------------------------------------------------------ */
/* Live production dashboard (hero terminal)                          */
/* ------------------------------------------------------------------ */

export interface TermLine {
  label: string;
  value?: string;
  ok?: boolean;
}
export interface TermGroup {
  cmd: string;
  lines: TermLine[];
}

export const terminalGroups: TermGroup[] = [
  {
    cmd: "ai-workspace init --env production",
    lines: [
      { label: "KB embeddings loaded", value: "1,842 vectors", ok: true },
      { label: "RAG pipeline ready", value: "94% accuracy", ok: true },
    ],
  },
  {
    cmd: "query --ticket TKT-4821 --kb freshdesk",
    lines: [
      { label: "ticket context fetched", value: "0.08s", ok: true },
      { label: "KB documents retrieved", value: "3 docs", ok: true },
      { label: "grounded answer generated", ok: true },
    ],
  },
  {
    cmd: "npm run dev",
    lines: [
      { label: "Next.js 16 ready", value: "localhost:3000", ok: true },
      { label: "Compiled /app", ok: true },
    ],
  },
  {
    cmd: "uvicorn app.main:app --reload",
    lines: [
      { label: "FastAPI started", value: "0.0.0.0:8000", ok: true },
      { label: "MongoDB connected", ok: true },
    ],
  },
  {
    cmd: "pytest tests/ -q",
    lines: [
      { label: "38 passed", value: "0 failed", ok: true },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* About highlights                                                   */
/* ------------------------------------------------------------------ */

export interface Highlight {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const aboutHighlights: Highlight[] = [
  {
    title: "Frontend Engineering",
    description:
      "Production UI modules with Next.js 16, React and TypeScript — fast, accessible and component-driven.",
    icon: Code2,
  },
  {
    title: "Backend Development",
    description:
      "FastAPI services, REST APIs and MongoDB schemas designed for SaaS and On-Premise enterprise workloads.",
    icon: Server,
  },
  {
    title: "License & Entitlement Systems",
    description:
      "End-to-end license management — customer onboarding, product key assignment, deployment validation for SaaS & On-Prem.",
    icon: KeyRound,
  },
  {
    title: "AI Integrations",
    description:
      "RAG pipelines, semantic search and context-aware AI responses wired into real product workflows.",
    icon: Brain,
  },
  {
    title: "Procurement & Workflow Automation",
    description:
      "Built RFP creation, bid management and PDF generation modules that automate enterprise procurement.",
    icon: Workflow,
  },
  {
    title: "API Design & Integration",
    description:
      "Clean REST contracts, Postman documentation and reliable frontend-backend integration across every product I ship.",
    icon: Network,
  },
];

/* ------------------------------------------------------------------ */
/* What I Build                                                       */
/* ------------------------------------------------------------------ */

export interface BuildItem {
  title: string;
  description: string;
  icon: LucideIcon;
  items: string[];
  accent: string;
}

export const whatIBuild: BuildItem[] = [
  {
    title: "Full-Stack Web Apps",
    description:
      "Next.js + React frontends and FastAPI backends with real-time data flow and clean integrations.",
    icon: Code2,
    items: ["Next.js · React.js", "TypeScript · Tailwind", "FastAPI · REST APIs", "MongoDB · PostgreSQL"],
    accent: "#38bdf8",
  },
  {
    title: "License Management Systems",
    description:
      "SaaS & On-Premise license workflows — onboarding, product keys, deployment validation and entitlement logic.",
    icon: KeyRound,
    items: ["Customer onboarding", "Product key assignment", "SaaS + On-Prem flows", "Environment-aware config"],
    accent: "#818cf8",
  },
  {
    title: "AI-Powered Applications",
    description:
      "RAG pipelines and AI assistants integrated with knowledge bases and ticketing systems for contextual answers.",
    icon: Brain,
    items: ["RAG pipelines", "Semantic search", "Freshdesk KB integration", "Context-aware responses"],
    accent: "#f472b6",
  },
  {
    title: "Procurement Platforms",
    description:
      "Backend services for RFP creation, bid management, PDF generation and AI-driven procurement automation.",
    icon: ShoppingCart,
    items: ["RFP automation", "Bid management", "PDF generation", "AI-generated RFPs"],
    accent: "#22d3ee",
  },
  {
    title: "Reusable UI Components",
    description:
      "Component libraries, mock-data-driven interfaces and dashboards that scale across enterprise products.",
    icon: Layers,
    items: ["Design-system components", "Dashboard visualizations", "Workflow UIs", "Mock-data scaffolding"],
    accent: "#34d399",
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                         */
/* ------------------------------------------------------------------ */

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Nainovate Technologies Pvt Ltd",
    role: "Software Developer",
    period: "2025 — 2026",
    current: true,
    summary:
      "Building enterprise-grade SaaS and On-Premise systems across License Management, AI-driven procurement and intelligent workflow platforms.",
    highlights: [
      "Designed and shipped a complete License Management System for the company's AI automation platform",
      "Built Next.js frontend modules for customer onboarding, product key assignment and license generation",
      "Implemented SaaS and On-Premise license workflows with environment-aware configuration and deployment validation",
      "Built FastAPI backends for the BuildX procurement platform — RFP creation, bid management and PDF generation",
      "Designed and optimized MongoDB schemas with proper indexing for high-throughput procurement data",
      "Developed AI-powered Next.js modules for the AI Decision Workspace with an assistant that grounds on Freshdesk tickets and the KB",
      "Worked on RAG pipeline concepts — semantic search, document retrieval and context-aware AI responses",
      "Built reusable UI components, dashboards and mock-data-driven interfaces for scalable frontend development",
    ],
    tags: ["Next.js", "React", "FastAPI", "MongoDB", "REST APIs", "RAG", "Postman", "SaaS", "On-Prem"],
  },
  {
    company: "Karunya Institute of Technology and Sciences",
    role: "B.Tech — Computer Science and Engineering",
    period: "Graduated May 2025",
    summary:
      "B.Tech in Computer Science and Engineering with a focus on software engineering, data structures and machine learning.",
    highlights: [
      "Graduated May 2025 with CGPA 6.62",
      "Built ML projects on EV range prediction and AI-powered rootkit detection",
      "Certifications: Google Data Analytics · Microsoft Azure Data Fundamentals · NPTEL Industry 4.0",
    ],
    tags: ["B.Tech CSE", "ML", "Data Analytics", "Azure"],
  },
];

/* ------------------------------------------------------------------ */
/* Projects (engineering case studies)                                */
/* ------------------------------------------------------------------ */

export type ProjectCategory = "AI" | "Backend" | "Frontend" | "Platform";

export interface Project {
  slug: string;
  title: string;
  tagline: string;
  categories: ProjectCategory[];
  icon: LucideIcon;
  accent: string;
  problem: string;
  features: string[];
  architecture: string[];
  stack: string[];
  challenges: string;
  solution: string;
  deployment: string[];
  results: string[];
  metrics: { label: string; value: string }[];
  /** Optional links — only rendered when present. */
  repo?: string;
  demo?: string;
  /** Honest status badge, e.g. private/company or not-yet-deployed. */
  status?: { label: string; tone: "private" | "wip" | "live" | "source" };
}

export const projects: Project[] = [
  {
    slug: "ai-decision-workspace",
    title: "AI Decision Workspace",
    tagline: "AI-powered customer-support workspace with a Freshdesk-grounded assistant and RAG-driven contextual answers.",
    categories: ["AI", "Frontend", "Backend", "Platform"],
    icon: Webhook,
    accent: "#22d3ee",
    problem:
      "Support agents juggle Freshdesk tickets, scattered knowledge base docs and disconnected internal tools. The goal: an enterprise workspace where an AI assistant reads ticket context, retrieves the right KB documents and produces grounded, agent-ready responses.",
    features: [
      "AI assistant grounded on Freshdesk tickets, KB docs and agent context",
      "Retrieval-Augmented Generation (RAG) pipeline with semantic search",
      "Dynamic AI search and workflow execution UI",
      "Dashboard visualizations for support operations",
      "Reusable, mock-data-driven UI components",
      "Real-time frontend-backend communication for AI responses",
    ],
    architecture: [
      "Next.js + React frontend with modular AI workspace components",
      "REST APIs for ticket ingestion, KB document retrieval and agent context",
      "RAG flow: ingest → chunk → embed → semantic retrieve → grounded LLM answer",
      "Backend orchestration that fuses Freshdesk ticket data with KB context",
      "Optimized frontend-backend integration for low-latency AI interactions",
    ],
    stack: ["Next.js", "React.js", "TypeScript", "FastAPI", "REST APIs", "RAG", "Semantic Search", "MongoDB"],
    challenges:
      "Grounding the LLM strictly in customer-specific Freshdesk and KB content while keeping the agent UI responsive in real time.",
    solution:
      "Built a retrieval pipeline that pulls ticket + KB context per query, fed it into an LLM with grounding instructions, and streamed responses into the workspace UI with reusable, mock-data-driven components for fast iteration.",
    deployment: [
      "Deployed as an internal enterprise SaaS module",
      "REST API contracts for Freshdesk + KB integration",
      "Reusable component library powering AI search, workflow and dashboard pages",
    ],
    results: [
      "Agents get contextual, KB-grounded responses inline with tickets",
      "Workflow execution and AI search unified in a single workspace",
      "Scalable frontend architecture built on reusable components",
    ],
    metrics: [
      { label: "AI Pattern", value: "RAG" },
      { label: "Integration", value: "Freshdesk + KB" },
      { label: "Frontend", value: "Next.js + React" },
    ],
    status: { label: "Private · built at Nainovate Technologies", tone: "private" },
  },
  {
    slug: "license-management-service",
    title: "License Management Service",
    tagline: "End-to-end License Management for an enterprise AI automation platform — SaaS & On-Premise deployments.",
    categories: ["Frontend", "Backend", "Platform"],
    icon: KeyRound,
    accent: "#818cf8",
    problem:
      "An enterprise AI automation platform needed a single license layer that worked for both SaaS tenants and On-Premise customers — covering onboarding, product key assignment, generation and deployment validation.",
    features: [
      "Customer onboarding flows",
      "Product key assignment and license generation",
      "SaaS + On-Premise deployment models",
      "Environment-aware license configuration",
      "Deployment validation logic",
      "Integration with the company's Automation Workflow and Personalized AI platform",
    ],
    architecture: [
      "Next.js frontend UI modules for onboarding, keys and licenses",
      "Backend services for license issuance, validation and lifecycle management",
      "Environment-aware config layer that swaps SaaS vs On-Prem behavior",
      "Integration hooks into the Automation Workflow and Personalized AI platform",
    ],
    stack: ["Next.js", "React.js", "TypeScript", "FastAPI", "Python", "MongoDB", "REST APIs"],
    challenges:
      "Designing a single license model that cleanly supports both SaaS multi-tenant and On-Premise air-gapped deployments without duplicating logic.",
    solution:
      "Centralized the license schema and validation logic, then layered environment-aware configuration so the same service powered both SaaS provisioning and On-Prem key issuance.",
    deployment: [
      "Shipped to enterprise customers as both SaaS and On-Premise installs",
      "Integrated with the parent Automation Workflow product",
      "Deployment validation enforced at install time",
    ],
    results: [
      "Single source of truth for licensing across both deployment models",
      "Faster customer onboarding through automated key issuance",
      "Reliable deployment validation reducing install-time issues",
    ],
    metrics: [
      { label: "Models", value: "SaaS + On-Prem" },
      { label: "Scope", value: "Full-Stack" },
      { label: "Integration", value: "Automation Platform" },
    ],
    status: { label: "Private · built at Nainovate Technologies", tone: "private" },
  },
  {
    slug: "buildx-procurement",
    title: "BuildX Procurement Platform",
    tagline: "FastAPI backend powering RFP creation, bid management and AI-driven procurement automation.",
    categories: ["Backend", "AI", "Platform"],
    icon: ShoppingCart,
    accent: "#38bdf8",
    problem:
      "Procurement teams handle RFPs, vendor bids and document generation across disconnected tools. The goal: a backend platform that automates RFP creation, manages bids and uses AI to draft procurement documents.",
    features: [
      "RFP creation and lifecycle management",
      "Bid management and vendor workflows",
      "AI-driven RFP generation",
      "PDF document generation",
      "REST APIs with Postman documentation",
      "React-based frontend integration for dynamic rendering",
    ],
    architecture: [
      "FastAPI services for RFP, bid and procurement workflows",
      "MongoDB schemas with proper indexing for efficient data access",
      "PDF generation module for procurement documents",
      "AI module for drafting RFP content from structured inputs",
      "React frontend wired to REST APIs for dynamic rendering",
    ],
    stack: ["Python", "FastAPI", "MongoDB", "REST APIs", "React.js", "Postman", "PDF Generation"],
    challenges:
      "Modeling RFPs and bids cleanly while keeping queries fast under realistic procurement workloads.",
    solution:
      "Designed MongoDB schemas with targeted indexes, separated RFP/bid lifecycles into clear API surfaces, and added an AI generation module for first-draft RFPs.",
    deployment: [
      "FastAPI backend deployed as part of the BuildX platform",
      "APIs tested and documented in Postman",
      "Integrated with the React frontend for end-to-end flows",
    ],
    results: [
      "Automated RFP and bid workflows end-to-end",
      "AI-assisted RFP drafts cut manual authoring time",
      "Reliable PDF generation for procurement documents",
    ],
    metrics: [
      { label: "Backend", value: "FastAPI" },
      { label: "Data", value: "MongoDB" },
      { label: "AI", value: "RFP Generation" },
    ],
    status: { label: "Private · built at Nainovate Technologies", tone: "private" },
  },
  {
    slug: "ev-range-prediction",
    title: "Electric Vehicle Range Prediction",
    tagline: "Regression models predicting EV range and analyzing pollution metrics.",
    categories: ["AI", "Backend"],
    icon: LineChart,
    accent: "#34d399",
    problem:
      "EV range varies with weather, load and driving patterns. The goal: train regression models that predict realistic range and analyze related pollution metrics.",
    features: [
      "Regression models for EV range prediction",
      "Pollution metric analysis",
      "Feature engineering and preprocessing",
      "Matplotlib-based visualizations",
    ],
    architecture: [
      "Data preprocessing and feature engineering pipeline in pandas",
      "scikit-learn regression models for range prediction",
      "Evaluation and visualization with matplotlib",
    ],
    stack: ["Python", "scikit-learn", "pandas", "matplotlib"],
    challenges:
      "Cleaning noisy EV data and choosing features that actually generalize across driving conditions.",
    solution:
      "Built a focused preprocessing pipeline, ran feature-importance analysis and iterated on regression models for higher accuracy.",
    deployment: [
      "Academic project — Jupyter-driven workflow",
    ],
    results: [
      "Improved model accuracy through feature engineering",
      "Clear visual analysis of range vs pollution trends",
    ],
    metrics: [
      { label: "Year", value: "2024" },
      { label: "Type", value: "ML / Regression" },
      { label: "Stack", value: "scikit-learn" },
    ],
    status: { label: "Academic project", tone: "source" },
  },
  {
    slug: "ai-rootkit-detection",
    title: "AI-Powered Rootkit Detection",
    tagline: "Cybersecurity detection using stacked ensemble machine learning.",
    categories: ["AI", "Backend"],
    icon: ShieldCheck,
    accent: "#f472b6",
    problem:
      "Rootkits hide malicious system behavior from traditional detection. The goal: classify malicious system behavior with higher accuracy using stacked ensembles.",
    features: [
      "Stacked ensemble classification",
      "Malicious behavior detection",
      "Improved performance over single models",
    ],
    architecture: [
      "Feature extraction from system behavior data",
      "Base learners combined through a stacked ensemble",
      "Evaluation against malicious / benign labels",
    ],
    stack: ["Python", "scikit-learn", "Ensemble Learning"],
    challenges:
      "Handling class imbalance and squeezing extra accuracy out of base classifiers.",
    solution:
      "Used stacked ensembling on top of complementary base learners and tuned thresholds for the security use-case.",
    deployment: [
      "Academic research project",
    ],
    results: [
      "Improved detection performance vs single classifiers",
      "Reproducible evaluation pipeline",
    ],
    metrics: [
      { label: "Year", value: "2024" },
      { label: "Type", value: "ML / Security" },
      { label: "Approach", value: "Stacked Ensembles" },
    ],
    status: { label: "Academic project", tone: "source" },
  },
];

export const projectFilters: (ProjectCategory | "All")[] = [
  "All",
  "Frontend",
  "Backend",
  "AI",
  "Platform",
];

/* ------------------------------------------------------------------ */
/* Architecture showcase — vertical engineering flows                 */
/* ------------------------------------------------------------------ */

export type DiagramKind =
  | "fullstack"
  | "license"
  | "rag"
  | "procurement"
  | "api";

export interface FlowNode {
  label: string;
  sub?: string;
  accent: string;
}

export interface ArchitectureCard {
  id: DiagramKind;
  title: string;
  description: string;
  icon: LucideIcon;
  tags: string[];
  flow: FlowNode[];
}

export const architectureCards: ArchitectureCard[] = [
  {
    id: "fullstack",
    title: "Full-Stack Architecture",
    description:
      "Next.js frontend talks to FastAPI services through REST APIs, persisting to MongoDB — the stack I ship every product on.",
    icon: Code2,
    tags: ["Next.js", "React", "FastAPI", "MongoDB"],
    flow: [
      { label: "User", sub: "browser", accent: "#38bdf8" },
      { label: "Next.js", sub: "React frontend", accent: "#22d3ee" },
      { label: "REST API", sub: "FastAPI", accent: "#6366f1" },
      { label: "Services", sub: "business logic", accent: "#818cf8" },
      { label: "MongoDB", sub: "data store", accent: "#34d399" },
    ],
  },
  {
    id: "license",
    title: "License Management Flow",
    description:
      "Customer onboarding produces a product key issued and validated by the license service, then deployed in either SaaS or On-Prem mode.",
    icon: KeyRound,
    tags: ["Onboarding", "Product Key", "Validation", "SaaS / On-Prem"],
    flow: [
      { label: "Customer", sub: "onboarding", accent: "#38bdf8" },
      { label: "License Service", sub: "issue + validate", accent: "#22d3ee" },
      { label: "Product Key", sub: "assigned", accent: "#6366f1" },
      { label: "Deployment", sub: "SaaS or On-Prem", accent: "#818cf8" },
      { label: "AI Platform", sub: "activated", accent: "#34d399" },
    ],
  },
  {
    id: "rag",
    title: "AI Decision Workspace — RAG",
    description:
      "A user query is enriched with Freshdesk ticket context, embedded, retrieved against the KB, and answered by the LLM.",
    icon: Brain,
    tags: ["Freshdesk", "Embeddings", "Semantic Search", "LLM"],
    flow: [
      { label: "Agent", sub: "query + ticket", accent: "#38bdf8" },
      { label: "Backend", sub: "FastAPI", accent: "#22d3ee" },
      { label: "Embeddings", sub: "vectorize", accent: "#6366f1" },
      { label: "KB Retrieval", sub: "semantic search", accent: "#818cf8" },
      { label: "LLM", sub: "grounded answer", accent: "#f472b6" },
      { label: "Workspace UI", sub: "rendered", accent: "#34d399" },
    ],
  },
  {
    id: "procurement",
    title: "BuildX Procurement Flow",
    description:
      "An RFP is created, distributed for bids, AI-assisted drafting fills content, and a PDF is generated for vendors.",
    icon: ShoppingCart,
    tags: ["RFP", "Bids", "AI Drafting", "PDF"],
    flow: [
      { label: "RFP Creation", sub: "frontend", accent: "#38bdf8" },
      { label: "FastAPI", sub: "RFP service", accent: "#22d3ee" },
      { label: "AI Generation", sub: "content draft", accent: "#6366f1" },
      { label: "Bid Management", sub: "vendor workflow", accent: "#818cf8" },
      { label: "PDF Export", sub: "document", accent: "#34d399" },
    ],
  },
  {
    id: "api",
    title: "REST API Integration",
    description:
      "Postman-documented APIs sit between the React frontend and FastAPI services, validated by automated tests.",
    icon: Network,
    tags: ["REST", "Postman", "Testing", "Integration"],
    flow: [
      { label: "Frontend", sub: "React / Next.js", accent: "#38bdf8" },
      { label: "REST API", sub: "contract", accent: "#6366f1" },
      { label: "FastAPI", sub: "validation", accent: "#818cf8" },
      { label: "Postman", sub: "tested + documented", accent: "#fbbf24" },
    ],
  },
];

/* ------------------------------------------------------------------ */
/* Skills                                                             */
/* ------------------------------------------------------------------ */

export interface SkillGroup {
  domain: string;
  icon: LucideIcon;
  accent: string;
  skills: string[];
}

export const skillGroups: SkillGroup[] = [
  {
    domain: "Languages",
    icon: Code2,
    accent: "#38bdf8",
    skills: ["Python", "JavaScript", "TypeScript", "SQL"],
  },
  {
    domain: "Frontend",
    icon: Sparkles,
    accent: "#22d3ee",
    skills: ["Next.js", "React.js", "HTML", "CSS", "Tailwind"],
  },
  {
    domain: "Backend",
    icon: Server,
    accent: "#818cf8",
    skills: ["FastAPI", "Python", "REST APIs"],
  },
  {
    domain: "Databases",
    icon: Database,
    accent: "#34d399",
    skills: ["MongoDB", "PostgreSQL"],
  },
  {
    domain: "Generative AI",
    icon: Brain,
    accent: "#f472b6",
    skills: ["LLM Basics", "RAG Pipelines", "Semantic Search", "Context Retrieval"],
  },
  {
    domain: "Data & Analytics",
    icon: LineChart,
    accent: "#fbbf24",
    skills: ["Power BI", "Data Visualization"],
  },
  {
    domain: "Tools",
    icon: Wrench,
    accent: "#9aa6bd",
    skills: ["Git", "GitHub", "Postman", "Docker (Basic)", "VS Code"],
  },
];

/* ------------------------------------------------------------------ */
/* Engineering Principles                                             */
/* ------------------------------------------------------------------ */

export interface Principle {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const engineeringPrinciples: Principle[] = [
  {
    title: "Ship End-to-End",
    description:
      "Own features from UI through API to database — frontends and backends as one product, not two.",
    icon: Layers,
  },
  {
    title: "Clean API Contracts",
    description:
      "REST contracts designed, documented in Postman, and validated before the frontend ever calls them.",
    icon: Network,
  },
  {
    title: "Reusable Components",
    description:
      "Build UI as a system of reusable components and mock-data scaffolds so features scale fast.",
    icon: Boxes,
  },
  {
    title: "Schema-First Data",
    description:
      "Design MongoDB schemas with proper indexing up front — query patterns drive structure.",
    icon: Database,
  },
  {
    title: "Ground AI in Real Data",
    description:
      "RAG over real customer KBs and tickets — never let the model hallucinate when the answer is on disk.",
    icon: Brain,
  },
  {
    title: "Environment-Aware Config",
    description:
      "One codebase, multiple deployment modes (SaaS, On-Prem) — switched by config, not by fork.",
    icon: ShieldCheck,
  },
  {
    title: "Iterate with Real Feedback",
    description:
      "Mock data to move fast, real APIs to stay honest — close the loop with users every iteration.",
    icon: GitBranch,
  },
];

/* ------------------------------------------------------------------ */
/* Achievements                                                       */
/* ------------------------------------------------------------------ */

export interface Achievement {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const achievements: Achievement[] = [
  {
    title: "Enterprise License Management Shipped",
    description:
      "Designed and delivered a complete License Management System supporting both SaaS and On-Premise customers.",
    icon: KeyRound,
  },
  {
    title: "AI Decision Workspace",
    description:
      "Built a Freshdesk-grounded AI assistant with RAG-based retrieval for enterprise support workflows.",
    icon: Brain,
  },
  {
    title: "BuildX Procurement Platform",
    description:
      "Shipped FastAPI services, MongoDB schemas, PDF generation and AI-driven RFP modules end-to-end.",
    icon: ShoppingCart,
  },
  {
    title: "B.Tech in Computer Science",
    description:
      "Karunya Institute of Technology and Sciences — B.Tech CSE, graduated May 2025.",
    icon: Rocket,
  },
  {
    title: "Certified — Cloud & Data",
    description:
      "Google Data Analytics · Microsoft Azure Data Fundamentals · NPTEL Industry 4.0 and Industrial IoT.",
    icon: ShieldCheck,
  },
];

/* ------------------------------------------------------------------ */
/* Modern Engineering Workflow                                        */
/* ------------------------------------------------------------------ */

export interface WorkflowStep {
  title: string;
  description: string;
  icon: LucideIcon;
}

export const workflowSteps: WorkflowStep[] = [
  {
    title: "AI-Assisted Development",
    description:
      "Use AI coding tools to accelerate UI scaffolding, API drafts and review — keeping a human in the loop on design.",
    icon: Sparkles,
  },
  {
    title: "Mock-Data First",
    description:
      "Build the UI on mock data so frontend and backend can move in parallel — then swap to real APIs.",
    icon: FileText,
  },
  {
    title: "Schema-Driven Backend",
    description:
      "Design MongoDB schemas and FastAPI contracts before implementation — fewer surprises at integration time.",
    icon: Database,
  },
  {
    title: "Postman-Verified APIs",
    description:
      "Every REST endpoint documented and tested in Postman before the frontend depends on it.",
    icon: Network,
  },
  {
    title: "Reusable Component Library",
    description:
      "UI as composable building blocks — dashboards, workflow UIs and AI search reuse the same primitives.",
    icon: Boxes,
  },
  {
    title: "RAG for Real Knowledge",
    description:
      "Ground AI assistants in customer KBs and ticket data — semantic search + context-aware generation.",
    icon: Brain,
  },
];

/* ------------------------------------------------------------------ */
/* Marquee tech logos (text)                                          */
/* ------------------------------------------------------------------ */

export const marqueeTech: string[] = [
  "Next.js", "React.js", "TypeScript", "JavaScript", "Python", "FastAPI",
  "MongoDB", "PostgreSQL", "REST APIs", "RAG", "Semantic Search",
  "Tailwind", "Postman", "Git", "GitHub", "Docker", "Power BI",
  "Freshdesk", "LLMs", "Azure", "VS Code",
];

/* Re-exported icons for convenience in components */
export const icons = {
  Cloud, Server, Container, Boxes, GitBranch, Cpu, Database, Network, Workflow,
  Gauge, Activity, Bot, Sparkles, Code2, Terminal, Layers, ShieldCheck, Lock,
  Wrench, Rocket, Zap, LineChart, Brain, Search, Webhook, FileText, KeyRound, ShoppingCart,
};
