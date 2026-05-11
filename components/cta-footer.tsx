"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";
import { Send } from "lucide-react";
import Image from "next/image";

export function CTASection({ onDownloadClick }: { onDownloadClick: () => void }) {
  const { t, dir } = useLanguage();

  return (
    <section className="relative py-24 overflow-hidden bg-[#0D0A14]" dir={dir}>
      {/* Subtle top border */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-am-violet/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center max-w-3xl mx-auto"
        >
          {/* Logo */}
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            whileInView={{ scale: 1, opacity: 1 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
            className="mb-8"
          >
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ldB3ageBxJQbQRSPcUNXYj7c150YfL.png"
              alt="AM Arena Logo"
              width={200}
              height={100}
              className="mx-auto"
            />
          </motion.div>

          <h2 className="text-4xl md:text-6xl font-bold text-white mb-4">
            {t("ctaTitle")}
          </h2>
          <p className="text-xl text-white/50 mb-8">{t("ctaSubtitle")}</p>

          {/* CTA Button - reduced glow */}
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.97 }}
            onClick={onDownloadClick}
            className="relative px-10 py-5 rounded-2xl font-bold text-white text-lg group"
            style={{
              background: "linear-gradient(135deg, #8B5CF6 0%, #7c3aed 100%)",
              boxShadow: "0 0 20px rgba(139, 92, 246, 0.25)",
            }}
          >
            {t("joinNow")}
            {/* Subtle hover glow */}
            <div className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-white/10" />
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}

export function Footer() {
  const { t, dir } = useLanguage();

  return (
    <footer className="relative py-8 bg-[#0D0A14] border-t border-white/5" dir={dir}>
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4">
          {/* Logo and copyright */}
          <div className="flex items-center gap-3">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ldB3ageBxJQbQRSPcUNXYj7c150YfL.png"
              alt="AM Arena"
              width={100}
              height={50}
              className="h-8 w-auto"
            />
            <span className="text-white/40 text-sm">
              © 2024 {t("copyright")}
            </span>
          </div>

          {/* Telegram link */}
          <motion.a
            href="https://t.me/amarena"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition-colors text-white/60 hover:text-white"
          >
            <Send className="w-4 h-4" />
            <span className="text-sm">{t("joinTelegram")}</span>
          </motion.a>
        </div>
      </div>
    </footer>
  );
}
