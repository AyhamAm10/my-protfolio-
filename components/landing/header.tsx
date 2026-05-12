"use client"

import { useState, useEffect } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { Menu, X, Download } from "lucide-react"

interface HeaderProps {
  onDownloadClick: () => void
}

const navLinks = [
  { label: "الرئيسية", href: "#hero" },
  { label: "مميزاتنا", href: "#features" },
  { label: "كيف تشارك", href: "#how-it-works" },
  { label: "البطولات", href: "#tournaments" },
  { label: "قاعة الشهرة", href: "#leaderboard" },
  { label: "الأسئلة الشائعة", href: "#faq" },
]

export function Header({ onDownloadClick }: HeaderProps) {
  const [isScrolled, setIsScrolled] = useState(false)
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled ? "glass-card py-3" : "bg-transparent py-5"
      }`}
    >
      <div className="container mx-auto px-4 flex items-center justify-between">
        {/* Logo */}
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="relative w-32 h-12"
        >
          <Image
            src="/images/logo.png"
            alt="AM Arena"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <motion.a
              key={link.href}
              href={link.href}
              whileHover={{ scale: 1.05 }}
              className="text-white/80 hover:text-white transition-colors relative group"
            >
              {link.label}
              <span className="absolute -bottom-1 right-0 w-0 h-0.5 bg-gradient-to-l from-[#d946ef] to-[#22d3ee] group-hover:w-full transition-all duration-300" />
            </motion.a>
          ))}
        </nav>

        {/* Download Button */}
        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={onDownloadClick}
          className="hidden lg:flex items-center gap-2 px-6 py-2.5 rounded-xl bg-gradient-to-l from-[#d946ef] to-[#22d3ee] text-white font-bold neon-glow-pink"
        >
          <Download className="w-5 h-5" />
          حمل التطبيق
        </motion.button>

        {/* Mobile Menu Button */}
        <button
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          className="lg:hidden text-white p-2"
        >
          {isMobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden glass-card mt-2 mx-4 rounded-xl overflow-hidden"
          >
            <nav className="flex flex-col p-4 gap-4">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="text-white/80 hover:text-white transition-colors py-2 border-b border-white/10 last:border-0"
                >
                  {link.label}
                </a>
              ))}
              <button
                onClick={() => {
                  setIsMobileMenuOpen(false)
                  onDownloadClick()
                }}
                className="flex items-center justify-center gap-2 px-6 py-3 rounded-xl bg-gradient-to-l from-[#d946ef] to-[#22d3ee] text-white font-bold mt-2"
              >
                <Download className="w-5 h-5" />
                حمل التطبيق
              </button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  )
}
