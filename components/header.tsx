"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";
import Image from "next/image";

export function Header({ onDownloadClick }: { onDownloadClick: () => void }) {
  const { language, setLanguage, t, dir } = useLanguage();

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
      className="fixed top-0 left-0 right-0 z-40"
      dir={dir}
    >
      <div className="container mx-auto px-4">
        <div className="glass rounded-2xl mt-4 px-6 py-3 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-2">
            <Image
              src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-ldB3ageBxJQbQRSPcUNXYj7c150YfL.png"
              alt="AM Arena"
              width={120}
              height={40}
              className="h-8 w-auto"
            />
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <a
              href="#"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              {t("home")}
            </a>
            <a
              href="#features"
              className="text-white/70 hover:text-white transition-colors text-sm font-medium"
            >
              {t("features")}
            </a>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            {/* Language Toggle */}
            <button
              onClick={() => setLanguage(language === "en" ? "ar" : "en")}
              className="px-3 py-1.5 rounded-lg bg-white/5 hover:bg-white/10 transition-colors text-white/70 hover:text-white text-sm font-medium"
            >
              {language === "en" ? "العربية" : "English"}
            </button>

            {/* Download Button */}
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              onClick={onDownloadClick}
              className="px-4 py-2 rounded-xl font-medium text-white text-sm"
              style={{
                background: "linear-gradient(135deg, #8B5CF6 0%, #7c3aed 100%)",
              }}
            >
              {t("download")}
            </motion.button>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
