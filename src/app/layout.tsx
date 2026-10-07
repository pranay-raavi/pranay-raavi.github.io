import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { profile } from "@/lib/data";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${profile.name} — AI Engineer · Generative AI`;
const description = `${profile.name} — AI Engineer building LLM systems for enterprise SaaS: a multi-tenant AI platform (agent runtime, document ingestion, MCP tool integration) and a RAG-based assistant, with Python, FastAPI and MongoDB @ Nainovate Technologies.`;

export const metadata: Metadata = {
  metadataBase: new URL(profile.siteUrl),
  title: {
    default: title,
    template: `%s — ${profile.name}`,
  },
  description,
  applicationName: `${profile.name} — Portfolio`,
  authors: [{ name: profile.name }],
  creator: profile.name,
  keywords: [
    profile.name,
    "Raavi Pranay",
    "AI Engineer",
    "Generative AI",
    "LLM Applications",
    "Python",
    "FastAPI",
    "MongoDB",
    "RAG",
    "AI Agents",
    "MCP",
    "LiteLLM",
    "Semantic Search",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    url: profile.siteUrl,
    title,
    description,
    siteName: `${profile.name} — Portfolio`,
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title,
    description,
    creator: "@pranay-raavi",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  category: "technology",
};

export const viewport: Viewport = {
  themeColor: "#07080c",
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: profile.name,
  jobTitle: "AI Engineer",
  description,
  url: profile.siteUrl,
  email: profile.email,
  worksFor: { "@type": "Organization", name: "Nainovate Technologies Pvt Ltd" },
  sameAs: [profile.socials.github, profile.socials.linkedin],
  knowsAbout: [
    "Python",
    "FastAPI",
    "MongoDB",
    "PostgreSQL",
    "Redis",
    "Retrieval-Augmented Generation",
    "Semantic Search",
    "AI Agents",
    "Tool Calling",
    "Model Context Protocol",
    "LiteLLM",
    "Prompt Engineering",
    "Next.js",
    "TypeScript",
  ],
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${jetbrains.variable}`}>
      <body className="min-h-screen antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
