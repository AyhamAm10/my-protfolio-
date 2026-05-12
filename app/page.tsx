"use client"

import { useState } from "react"
import { Header } from "@/components/landing/header"
import { HeroSection } from "@/components/landing/hero-section"
import { FeaturesSection } from "@/components/landing/features-section"
import { HowItWorksSection } from "@/components/landing/how-it-works-section"
import { TournamentsSection } from "@/components/landing/tournaments-section"
import { LeaderboardSection } from "@/components/landing/leaderboard-section"
import { FAQSection } from "@/components/landing/faq-section"
import { Footer } from "@/components/landing/footer"
import { DownloadModal } from "@/components/landing/download-modal"

export default function Home() {
  const [isDownloadModalOpen, setIsDownloadModalOpen] = useState(false)

  const openDownloadModal = () => setIsDownloadModalOpen(true)
  const closeDownloadModal = () => setIsDownloadModalOpen(false)

  return (
    <main className="min-h-screen bg-[#0f0a1e]">
      {/* Header */}
      <Header onDownloadClick={openDownloadModal} />

      {/* Hero Section */}
      <HeroSection onDownloadClick={openDownloadModal} />

      {/* Features Section */}
      <FeaturesSection />

      {/* How It Works Section */}
      <HowItWorksSection />

      {/* Tournaments Section */}
      <TournamentsSection />

      {/* Leaderboard Section */}
      <LeaderboardSection />

      {/* FAQ Section */}
      <FAQSection />

      {/* Footer */}
      <Footer />

      {/* Download Modal */}
      <DownloadModal isOpen={isDownloadModalOpen} onClose={closeDownloadModal} />
    </main>
  )
}
