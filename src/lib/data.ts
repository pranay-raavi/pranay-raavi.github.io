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
  primaryRole: "AI Engineer",
  secondaryRoles: ["Generative AI", "LLM Applications", "Python · FastAPI"],
  roles: ["AI Engineer", "Generative AI", "LLM Applications"],
  atCompany: "AI Engineer @ Nainovate Technologies",
  impact:
    "Building LLM systems for enterprise SaaS products — a multi-tenant AI platform with an agent runtime, document ingestion and MCP tool integration, and a RAG-based assistant grounded in support and knowledge-base data.",
  tagline:
    "Building LLM systems for enterprise SaaS products — a multi-tenant AI platform with an agent runtime, document ingestion and MCP tool integration, and a RAG-based assistant grounded in support and knowledge-base data.",
  shortBio:
    "AI Engineer with 1+ year of experience building LLM systems for enterprise SaaS. Works mainly in Python, FastAPI and MongoDB, taking AI features from prompt and retrieval design through backend APIs to deployment.",
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
  "Multi-Tenant Enterprise AI Platform",
  "RAG · Agents · MCP Tool Integration",
  "Python · FastAPI · MongoDB",
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
  { label: "Enterprise AI Systems", value: 2, icon: Rocket },
  { label: "Data Source Integrations", value: 4, icon: Workflow },
  { label: "Vector Databases", value: 2, icon: Database },
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
    title: "Agent Runtime",
    description:
      "RAG, multi-agent and tool-calling workflows across multiple LLM providers, built on LiteLLM.",
    icon: Bot,
  },
  {
    title: "Multi-Tenant Platform Backend",
    description:
      "Backend microservices for an enterprise AI platform with tenant isolation and secure service-to-service communication.",
    icon: Server,
  },
  {
    title: "RAG & Retrieval",
    description:
      "Document chunking, embeddings, semantic search and context retrieval over support and knowledge-base data.",
    icon: Brain,
  },
  {
    title: "MCP Tool Integration",
    description:
      "MCP tool servers with credential encryption, tool-level risk policies and human approval for write actions.",
    icon: ShieldCheck,
  },
  {
    title: "Ingestion & Integrations",
    description:
      "Document ingestion and integrations with Jira, SQL, S3 and SharePoint for custom AI agents.",
    icon: Network,
  },
  {
    title: "Reliable AI Services",
    description:
      "FastAPI services with RBAC, audit logging and pytest coverage; structured LLM outputs through Pydantic models with versioned validation contracts.",
    icon: Gauge,
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
    title: "Agent & LLM Systems",
    description:
      "Agent runtimes for RAG, multi-agent and tool-calling workflows across multiple LLM providers.",
    icon: Bot,
    items: ["Tool calling", "Multi-agent workflows", "LiteLLM", "Prompt engineering"],
    accent: "#60a5fa",
  },
  {
    title: "RAG Pipelines",
    description:
      "Retrieval over support and knowledge-base data that keeps responses grounded in enterprise data.",
    icon: Brain,
    items: ["Chunking · embeddings", "Semantic search", "Hybrid retrieval · reranking", "Qdrant · Pinecone"],
    accent: "#22d3ee",
  },
  {
    title: "MCP Tool Integrations",
    description:
      "MCP tool servers connected safely: encrypted credentials, tool-level risk policies and human approval for writes.",
    icon: ShieldCheck,
    items: ["Credential encryption", "Tool-level risk policies", "Human approval for writes", "MCP"],
    accent: "#06b6d4",
  },
  {
    title: "Backend Services",
    description:
      "FastAPI and gRPC microservices for multi-tenant platforms, with RBAC, audit logging and tests.",
    icon: Server,
    items: ["FastAPI · gRPC", "Tenant isolation", "RBAC · audit logging", "pytest"],
    accent: "#3b82f6",
  },
  {
    title: "Scheduled AI Workflows",
    description:
      "Celery-scheduled AI workflows with traceable execution and structured, validated LLM outputs.",
    icon: Workflow,
    items: ["Celery", "Pydantic contracts", "Versioned validation", "Traceable runs"],
    accent: "#10b981",
  },
  {
    title: "Frontend",
    description:
      "The web stack on the other side of the APIs.",
    icon: Code2,
    items: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
    accent: "#9aa6bd",
  },
];

/* ------------------------------------------------------------------ */
/* Experience                                                         */
/* ------------------------------------------------------------------ */

export interface ExperienceGroup {
  /** The project the bullets belong to, as the résumé names it. */
  title: string;
  stack?: string;
  highlights: string[];
}

export interface ExperienceItem {
  company: string;
  role: string;
  period: string;
  current?: boolean;
  summary: string;
  highlights: string[];
  /** Bullets grouped by project, shown under their project's name. */
  groups?: ExperienceGroup[];
  tags: string[];
}

export const experience: ExperienceItem[] = [
  {
    company: "Nainovate Technologies Pvt Ltd · Hyderabad",
    role: "AI Engineer",
    period: "Jun 2025 — Present",
    current: true,
    summary:
      "Building LLM systems for enterprise SaaS products: backend services for a multi-tenant AI platform, and a RAG-based assistant grounded in support and knowledge-base data.",
    highlights: [],
    groups: [
      {
        title: "GenX – Enterprise AI Platform",
        stack: "Python, FastAPI, gRPC, MongoDB, Qdrant, Pinecone, LiteLLM, Redis, Docker",
        highlights: [
          "Built backend microservices for a multi-tenant enterprise AI platform with tenant isolation and secure service-to-service communication.",
          "Developed an agent runtime supporting RAG, multi-agent and tool-calling workflows across multiple LLM providers using LiteLLM.",
          "Built document ingestion and integrations with Jira, SQL, S3 and SharePoint for custom AI agents.",
          "Integrated MCP tool servers with credential encryption, tool-level risk policies and human approval for write actions.",
          "Developed FastAPI services with RBAC, audit logging, error handling and pytest-based testing.",
        ],
      },
      {
        title: "AI Decision Workspace – LLM-Powered Enterprise Assistant",
        stack: "Python, FastAPI, Celery, MongoDB, Redis",
        highlights: [
          "Built a RAG pipeline using document chunking, embeddings, semantic search and context retrieval over support and knowledge-base data.",
          "Designed structured LLM outputs using Pydantic models with versioned validation contracts.",
          "Built scheduled AI workflows using Celery with traceable execution for auditability.",
          "Improved prompts and retrieval settings to keep responses grounded in enterprise data.",
        ],
      },
    ],
    tags: ["Python", "FastAPI", "gRPC", "MongoDB", "Qdrant", "Pinecone", "LiteLLM", "Redis", "Celery", "Docker"],
  },
  {
    company: "Karunya Institute of Technology and Sciences",
    role: "B.Tech — Computer Science and Engineering",
    period: "Graduated May 2025",
    summary: "B.Tech in Computer Science and Engineering.",
    highlights: [
      "Certifications: Microsoft Azure Data Fundamentals · Google Data Analytics",
    ],
    tags: ["B.Tech CSE", "Azure", "Data Analytics"],
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
  /** What was built — the résumé's own bullets. */
  features: string[];
  /** Optional: only rendered when there is something to say. */
  problem?: string;
  architecture?: string[];
  stack: string[];
  challenges?: string;
  solution?: string;
  deployment?: string[];
  results?: string[];
  metrics: { label: string; value: string }[];
  /** Optional links — only rendered when present. */
  repo?: string;
  demo?: string;
  /** Honest status badge, e.g. private/company or not-yet-deployed. */
  status?: { label: string; tone: "private" | "wip" | "live" | "source" };
}

export const projects: Project[] = [
  {
    slug: "genx-enterprise-ai-platform",
    title: "GenX — Enterprise AI Platform",
    tagline:
      "Backend microservices for a multi-tenant enterprise AI platform: agent runtime, document ingestion and MCP tool integration.",
    categories: ["AI", "Backend", "Platform"],
    icon: Bot,
    accent: "#3b82f6",
    features: [
      "Backend microservices with tenant isolation and secure service-to-service communication",
      "Agent runtime supporting RAG, multi-agent and tool-calling workflows across multiple LLM providers using LiteLLM",
      "Document ingestion and integrations with Jira, SQL, S3 and SharePoint for custom AI agents",
      "MCP tool servers with credential encryption, tool-level risk policies and human approval for write actions",
      "FastAPI services with RBAC, audit logging, error handling and pytest-based testing",
    ],
    stack: ["Python", "FastAPI", "gRPC", "MongoDB", "Qdrant", "Pinecone", "LiteLLM", "Redis", "Docker"],
    metrics: [
      { label: "Services", value: "FastAPI + gRPC" },
      { label: "Vector DBs", value: "Qdrant · Pinecone" },
      { label: "LLM layer", value: "LiteLLM" },
    ],
    status: { label: "Private · built at Nainovate Technologies", tone: "private" },
  },
  {
    slug: "ai-decision-workspace",
    title: "AI Decision Workspace",
    tagline:
      "LLM-powered enterprise assistant with a RAG pipeline over support and knowledge-base data.",
    categories: ["AI", "Backend"],
    icon: Webhook,
    accent: "#22d3ee",
    features: [
      "RAG pipeline using document chunking, embeddings, semantic search and context retrieval over support and knowledge-base data",
      "Structured LLM outputs using Pydantic models with versioned validation contracts",
      "Scheduled AI workflows using Celery with traceable execution for auditability",
      "Prompt and retrieval-setting improvements to keep responses grounded in enterprise data",
    ],
    stack: ["Python", "FastAPI", "Celery", "MongoDB", "Redis"],
    metrics: [
      { label: "Pattern", value: "RAG" },
      { label: "Workflows", value: "Celery" },
      { label: "Outputs", value: "Pydantic" },
    ],
    status: { label: "Private · built at Nainovate Technologies", tone: "private" },
  },
  {
    slug: "ai-rootkit-detection",
    title: "Rootkit Detection using Stacked Ensembles",
    tagline: "Stacked ensemble classifier for malicious system behavior.",
    categories: ["AI"],
    icon: ShieldCheck,
    accent: "#10b981",
    features: [
      "Built a stacked ensemble classifier for malicious system behavior that outperformed each individual base model",
    ],
    stack: ["Python", "scikit-learn"],
    metrics: [
      { label: "Year", value: "2024" },
      { label: "Type", value: "ML / Security" },
      { label: "Approach", value: "Stacked Ensembles" },
    ],
    status: { label: "Academic project", tone: "source" },
  },
  {
    slug: "ev-range-prediction",
    title: "Electric Vehicle Range Prediction",
    tagline: "Regression models predicting EV range from vehicle and environmental data.",
    categories: ["AI"],
    icon: LineChart,
    accent: "#60a5fa",
    features: [
      "Trained regression models with feature engineering to predict EV range from vehicle and environmental data",
    ],
    stack: ["Python", "scikit-learn", "pandas"],
    metrics: [
      { label: "Year", value: "2024" },
      { label: "Type", value: "ML / Regression" },
      { label: "Stack", value: "scikit-learn" },
    ],
    status: { label: "Academic project", tone: "source" },
  },
];

export const projectFilters: (ProjectCategory | "All")[] = [
  "All",
  "AI",
  "Backend",
  "Platform",
];

/* ------------------------------------------------------------------ */
/* Architecture showcase — vertical engineering flows                 */
/* ------------------------------------------------------------------ */

export type DiagramKind =
  | "agent"
  | "rag"
  | "mcp"
  | "platform"
  | "workflows";

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
    id: "agent",
    title: "Agent Runtime",
    description:
      "An agent runtime for RAG, multi-agent and tool-calling workflows, calling multiple LLM providers through LiteLLM.",
    icon: Bot,
    tags: ["RAG", "Multi-agent", "Tool calling", "LiteLLM"],
    flow: [
      { label: "Request", sub: "user query", accent: "#60a5fa" },
      { label: "Agent Runtime", sub: "RAG · multi-agent · tools", accent: "#3b82f6" },
      { label: "LiteLLM", sub: "provider layer", accent: "#0ea5e9" },
      { label: "LLM Providers", sub: "multiple models", accent: "#10b981" },
    ],
  },
  {
    id: "rag",
    title: "RAG Pipeline",
    description:
      "Documents are chunked and embedded; a query retrieves context by semantic search and the LLM answers from it, grounded in enterprise data.",
    icon: Brain,
    tags: ["Chunking", "Embeddings", "Semantic Search", "Grounding"],
    flow: [
      { label: "Documents", sub: "support + knowledge base", accent: "#60a5fa" },
      { label: "Chunking", sub: "split", accent: "#3b82f6" },
      { label: "Embeddings", sub: "vectorize", accent: "#0ea5e9" },
      { label: "Semantic Search", sub: "context retrieval", accent: "#06b6d4" },
      { label: "LLM", sub: "grounded answer", accent: "#10b981" },
    ],
  },
  {
    id: "mcp",
    title: "MCP Tool Integration",
    description:
      "MCP tool servers are connected with encrypted credentials; tools carry risk policies, and write actions need human approval.",
    icon: ShieldCheck,
    tags: ["MCP", "Credential encryption", "Risk policies", "Human approval"],
    flow: [
      { label: "Agent", sub: "tool call", accent: "#60a5fa" },
      { label: "Risk Policy", sub: "tool-level", accent: "#3b82f6" },
      { label: "Human Approval", sub: "write actions", accent: "#fbbf24" },
      { label: "MCP Tool Server", sub: "encrypted credentials", accent: "#10b981" },
    ],
  },
  {
    id: "platform",
    title: "Multi-Tenant Platform Services",
    description:
      "FastAPI services with RBAC and audit logging, talking to other services over gRPC, with tenant isolation across the platform.",
    icon: Server,
    tags: ["FastAPI", "gRPC", "RBAC", "Tenant isolation"],
    flow: [
      { label: "Client", sub: "request", accent: "#60a5fa" },
      { label: "FastAPI", sub: "RBAC · audit logging", accent: "#3b82f6" },
      { label: "gRPC Services", sub: "tenant isolation", accent: "#0ea5e9" },
      { label: "Data Stores", sub: "MongoDB · Qdrant · Pinecone", accent: "#10b981" },
    ],
  },
  {
    id: "workflows",
    title: "Scheduled AI Workflows",
    description:
      "Celery-scheduled AI workflows whose LLM outputs are validated against versioned Pydantic contracts, with traceable execution.",
    icon: Workflow,
    tags: ["Celery", "Pydantic", "Versioned contracts", "Auditability"],
    flow: [
      { label: "Celery", sub: "scheduled run", accent: "#60a5fa" },
      { label: "LLM Call", sub: "structured output", accent: "#3b82f6" },
      { label: "Pydantic", sub: "versioned validation", accent: "#06b6d4" },
      { label: "Trace", sub: "auditable execution", accent: "#10b981" },
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
    domain: "GenAI & LLMs",
    icon: Brain,
    accent: "#22d3ee",
    skills: [
      "LLM APIs", "RAG", "Hybrid retrieval", "Embeddings", "Reranking", "Semantic search",
      "AI agents", "Tool calling", "MCP", "LiteLLM", "Prompt engineering",
    ],
  },
  {
    domain: "Backend",
    icon: Server,
    accent: "#06b6d4",
    skills: ["Python", "FastAPI", "gRPC", "Pydantic", "Celery", "REST APIs", "Microservices", "pytest", "Postman"],
  },
  {
    domain: "Databases",
    icon: Database,
    accent: "#10b981",
    skills: ["MongoDB", "PostgreSQL", "Redis", "Qdrant", "Pinecone"],
  },
  {
    domain: "Frontend",
    icon: Sparkles,
    accent: "#3b82f6",
    skills: ["Next.js", "React.js", "TypeScript", "Tailwind CSS"],
  },
  {
    domain: "Tools",
    icon: Wrench,
    accent: "#9aa6bd",
    skills: ["Git", "GitHub", "Docker"],
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
    title: "Ground AI in Enterprise Data",
    description:
      "Tune prompts and retrieval so responses stay grounded in the organisation's own support and knowledge-base data.",
    icon: Brain,
  },
  {
    title: "Structured, Validated Outputs",
    description:
      "LLM outputs are shaped by Pydantic models and checked against versioned validation contracts.",
    icon: Layers,
  },
  {
    title: "Isolate Every Tenant",
    description:
      "Multi-tenant platforms need tenant isolation and secure service-to-service communication from the start.",
    icon: Lock,
  },
  {
    title: "Guard the Tools",
    description:
      "Tool credentials are encrypted, tools carry risk policies, and write actions through MCP wait for a person's approval.",
    icon: ShieldCheck,
  },
  {
    title: "Make Runs Traceable",
    description:
      "Scheduled AI workflows and API calls are auditable: traceable execution and audit logging.",
    icon: Activity,
  },
  {
    title: "Test the Services",
    description:
      "FastAPI services ship with RBAC, error handling and pytest-based tests.",
    icon: Gauge,
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
    title: "Backend for a Multi-Tenant Enterprise AI Platform",
    description:
      "Built GenX's backend microservices with tenant isolation and secure service-to-service communication, plus an agent runtime across multiple LLM providers.",
    icon: Server,
  },
  {
    title: "RAG-Based Enterprise Assistant",
    description:
      "Delivered the AI Decision Workspace: an LLM assistant grounded in support and knowledge-base data.",
    icon: Brain,
  },
  {
    title: "MCP Tool Integration with Safeguards",
    description:
      "Integrated MCP tool servers with credential encryption, tool-level risk policies and human approval for write actions.",
    icon: ShieldCheck,
  },
  {
    title: "B.Tech in Computer Science and Engineering",
    description:
      "Karunya Institute of Technology and Sciences — graduated May 2025.",
    icon: Rocket,
  },
  {
    title: "Certified — Cloud & Data",
    description:
      "Microsoft Azure Data Fundamentals · Google Data Analytics.",
    icon: Cloud,
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
    title: "Prompt & Retrieval Design",
    description:
      "Start from the prompt and the retrieval setup, tuned so responses stay grounded in enterprise data.",
    icon: Search,
  },
  {
    title: "Structured Outputs",
    description:
      "Shape LLM outputs with Pydantic models and versioned validation contracts.",
    icon: FileText,
  },
  {
    title: "Backend APIs",
    description:
      "Expose the AI feature through FastAPI services with RBAC, audit logging and error handling.",
    icon: Server,
  },
  {
    title: "Tool Integration",
    description:
      "Connect tools and data sources — MCP servers, Jira, SQL, S3, SharePoint — with encrypted credentials and approval for writes.",
    icon: Webhook,
  },
  {
    title: "Tests",
    description:
      "Cover the services with pytest-based tests before they ship.",
    icon: ShieldCheck,
  },
  {
    title: "Deployment",
    description:
      "Take it from design through backend APIs to deployment, containerised with Docker.",
    icon: Rocket,
  },
];

/* ------------------------------------------------------------------ */
/* Marquee tech logos (text)                                          */
/* ------------------------------------------------------------------ */

export const marqueeTech: string[] = [
  "Python", "FastAPI", "gRPC", "Pydantic", "Celery", "LiteLLM", "RAG",
  "MCP", "Embeddings", "Semantic Search", "AI Agents", "MongoDB",
  "PostgreSQL", "Redis", "Qdrant", "Pinecone", "Next.js", "React.js",
  "TypeScript", "Tailwind CSS", "Docker", "Git", "pytest",
];

/* Re-exported icons for convenience in components */
export const icons = {
  Cloud, Server, Container, Boxes, GitBranch, Cpu, Database, Network, Workflow,
  Gauge, Activity, Bot, Sparkles, Code2, Terminal, Layers, ShieldCheck, Lock,
  Wrench, Rocket, Zap, LineChart, Brain, Search, Webhook, FileText, KeyRound, ShoppingCart,
};
