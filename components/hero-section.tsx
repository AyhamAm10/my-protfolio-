"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";
import Image from "next/image";
import { useEffect, useState } from "react";

// Subtle dust particles component
function SubtleParticles() {
  const [particles, setParticles] = useState<Array<{ id: number; x: number; y: number; size: number; duration: number; delay: number }>>([]);

  useEffect(() => {
    const newParticles = [...Array(15)].map((_, i) => ({
      id: i,
      x: Math.random() * 100,
      y: Math.random() * 100,
      size: 1 + Math.random() * 2,
      duration: 8 + Math.random() * 6,
      delay: Math.random() * 4,
    }));
    setParticles(newParticles);
  }, []);

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full bg-white/10"
          style={{
            width: particle.size,
            height: particle.size,
            left: `${particle.x}%`,
            top: `${particle.y}%`,
          }}
          animate={{
            y: [0, -30, 0],
            opacity: [0.1, 0.3, 0.1],
          }}
          transition={{
            duration: particle.duration,
            repeat: Infinity,
            delay: particle.delay,
            ease: "easeInOut",
          }}
        />
      ))}
    </div>
  );
}

export function HeroSection({ onDownloadClick }: { onDownloadClick: () => void }) {
  const { t, dir } = useLanguage();

  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#0D0A14]">
      {/* Solid background with very subtle gradient */}
      <div className="absolute inset-0 z-0">
        <div className="absolute inset-0 bg-[#0D0A14]" />
        {/* Very subtle radial gradient - reduced from /10 to /5 */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-am-violet/5 via-transparent to-transparent" />
      </div>

      {/* Subtle dust particles */}
      <SubtleParticles />

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20" dir={dir}>
        <div className="flex flex-col lg:flex-row items-center justify-between gap-12">
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: dir === "rtl" ? 50 : -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="flex-1 text-center lg:text-start"
          >
            {/* Badge */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-am-violet/10 border border-am-violet/20 mb-6"
            >
              <span className="w-2 h-2 rounded-full bg-am-gold animate-pulse" />
              <span className="text-sm text-white/70">Season Zero Live</span>
            </motion.div>

            <h1 className="text-5xl md:text-7xl font-bold text-white mb-6 leading-tight">
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-white/80">
                {t("heroTitle")}
              </span>
            </h1>

            <p className="text-xl text-white/50 mb-8 max-w-lg mx-auto lg:mx-0 leading-relaxed">
              {t("heroSubtitle")}
            </p>

            {/* Buttons - reduced glow intensity */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                onClick={onDownloadClick}
                className="relative px-8 py-4 rounded-2xl font-bold text-white overflow-hidden group"
                style={{
                  background: "linear-gradient(135deg, #8B5CF6 0%, #7c3aed 100%)",
                  boxShadow: "0 0 20px rgba(139, 92, 246, 0.25)",
                }}
              >
                <span className="relative z-10">{t("enterArena")}</span>
                {/* Subtle hover glow */}
                <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />
              </motion.button>

              <motion.button
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.97 }}
                className="px-8 py-4 rounded-2xl font-bold text-white border border-am-violet/30 hover:border-am-violet/50 transition-colors"
              >
                {t("watchPreview")}
              </motion.button>
            </div>
          </motion.div>

          {/* Phone Mockup */}
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="flex-1 relative"
          >
            <div className="relative max-w-[320px] mx-auto">
              {/* Subtle glow behind phone - reduced intensity */}
              <div
                className="absolute inset-0 blur-3xl opacity-25"
                style={{
                  background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
                }}
              />

              {/* Phone frame */}
              <motion.div
                animate={{ y: [0, -8, 0] }}
                transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
                className="relative"
              >
                <div className="relative rounded-[3rem] border-4 border-gray-800 bg-gray-900 p-2 shadow-2xl">
                  {/* Notch */}
                  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/3 h-6 bg-gray-900 rounded-b-2xl z-10" />
                  
                  {/* Screen */}
                  <div className="rounded-[2.5rem] overflow-hidden">
                    <Image
                      src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2QeDzD7K53ZgmLmRaDmRpjQ0DrSTTe.png"
                      alt="AM Arena App Screenshot"
                      width={320}
                      height={640}
                      className="w-full h-auto"
                      priority
                    />
                  </div>
                </div>

                {/* Floating elements - reduced glow */}
                <motion.div
                  animate={{ y: [0, -10, 0], rotate: [0, 5, 0] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
                  className="absolute -top-8 -right-8 w-16 h-16 rounded-2xl bg-gradient-to-br from-am-gold to-yellow-600 flex items-center justify-center"
                  style={{ boxShadow: "0 0 15px rgba(233, 196, 0, 0.25)" }}
                >
                  <span className="text-2xl font-bold text-white">XP</span>
                </motion.div>

                <motion.div
                  animate={{ y: [0, -8, 0], rotate: [0, -3, 0] }}
                  transition={{ duration: 4.5, repeat: Infinity, delay: 1 }}
                  className="absolute -bottom-4 -left-8 w-14 h-14 rounded-full bg-gradient-to-br from-am-violet to-purple-700 flex items-center justify-center"
                  style={{ boxShadow: "0 0 12px rgba(139, 92, 246, 0.25)" }}
                >
                  <svg className="w-7 h-7 text-white" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" />
                  </svg>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2"
      >
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="w-6 h-10 rounded-full border border-white/20 flex justify-center pt-2"
        >
          <motion.div
            animate={{ y: [0, 10, 0], opacity: [1, 0, 1] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="w-1.5 h-1.5 rounded-full bg-am-violet/70"
          />
        </motion.div>
      </motion.div>
    </section>
  );
}
