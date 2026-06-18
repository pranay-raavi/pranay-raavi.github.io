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

const title = `${profile.name} — Software Developer · Full-Stack Engineer`;
const description = `${profile.name} — Software Developer building enterprise-grade SaaS and On-Premise systems with Next.js, React.js, FastAPI, MongoDB and REST APIs. Shipped License Management, BuildX Procurement and the AI Decision Workspace (RAG-powered customer support) @ Nainovate Technologies.`;

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
    "Software Developer",
    "Full-Stack Engineer",
    "Frontend Engineer",
    "Backend Engineer",
    "AI Applications Engineer",
    "Next.js",
    "React.js",
    "FastAPI",
    "MongoDB",
    "REST APIs",
    "RAG",
    "License Management",
    "BuildX",
    "Freshdesk",
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
  jobTitle: "Software Developer, Full-Stack Engineer, AI Applications Engineer",
  description,
  url: profile.siteUrl,
  email: profile.email,
  worksFor: { "@type": "Organization", name: "Nainovate Technologies Pvt Ltd" },
  sameAs: [profile.socials.github, profile.socials.linkedin],
  knowsAbout: [
    "Next.js",
    "React.js",
    "TypeScript",
    "FastAPI",
    "Python",
    "MongoDB",
    "PostgreSQL",
    "REST APIs",
    "License Management",
    "Retrieval-Augmented Generation",
    "Semantic Search",
    "AI Engineering",
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
