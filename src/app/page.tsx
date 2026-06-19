import { GitHubProvider } from "@/lib/useGitHub";
import { Background } from "@/components/ui/Background";
import { Loader } from "@/components/ui/Loader";
import { ScrollProgress } from "@/components/ui/ScrollProgress";
import { Navbar } from "@/components/Navbar";
import { CommandPalette } from "@/components/CommandPalette";
import { Hero } from "@/components/Hero";
import { TechMarquee } from "@/components/ui/TechMarquee";
import { SystemStatus } from "@/components/SystemStatus";
import { About } from "@/components/About";
import { WhatIBuild } from "@/components/WhatIBuild";
import { Experience } from "@/components/Experience";
import { Architecture } from "@/components/Architecture";
import { Projects } from "@/components/Projects";
import { Skills } from "@/components/Skills";
import { EngineeringPrinciples } from "@/components/EngineeringPrinciples";
import { Achievements } from "@/components/Achievements";
import { ModernWorkflow } from "@/components/Workflow";
import { Contact } from "@/components/Contact";
import { Footer } from "@/components/Footer";

export default function Home() {
  return (
    <GitHubProvider>
      <Loader />
      <Background />
      <ScrollProgress />
      <Navbar />
      <CommandPalette />

      <main>
        <Hero />
        <TechMarquee />
        <SystemStatus />
        <About />
        <WhatIBuild />
        <Experience />
        <Architecture />
        <Projects />
        <Skills />
        <EngineeringPrinciples />
        <Achievements />
        <ModernWorkflow />
        <Contact />
      </main>

      <Footer />
    </GitHubProvider>
  );
}
