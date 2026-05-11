"use client";

import { useState } from "react";
import { LanguageProvider } from "@/components/language-provider";
import { CustomCursor } from "@/components/custom-cursor";
import { Header } from "@/components/header";
import { HeroSection } from "@/components/hero-section";
import { CompetitorsSection } from "@/components/competitors-section";
import { FeaturesSection } from "@/components/features-section";
import { CTASection, Footer } from "@/components/cta-footer";
import { DownloadPopup } from "@/components/download-popup";

export default function Home() {
  const [isDownloadOpen, setIsDownloadOpen] = useState(false);

  const handleDownloadClick = () => {
    setIsDownloadOpen(true);
  };

  return (
    <LanguageProvider>
      <CustomCursor />
      <main className="min-h-screen bg-[#0D0A14] cursor-none md:cursor-none">
        <Header onDownloadClick={handleDownloadClick} />
        <HeroSection onDownloadClick={handleDownloadClick} />
        <div id="competitors">
          <CompetitorsSection />
        </div>
        <div id="features">
          <FeaturesSection />
        </div>
        <CTASection onDownloadClick={handleDownloadClick} />
        <Footer />
        <DownloadPopup
          isOpen={isDownloadOpen}
          onClose={() => setIsDownloadOpen(false)}
        />
      </main>
    </LanguageProvider>
  );
}
