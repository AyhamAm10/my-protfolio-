"use client"

import { useEffect, useState } from "react"
import Image from "next/image"
import { motion, AnimatePresence } from "framer-motion"
import { X, Download, Apple, Smartphone, Monitor } from "lucide-react"

interface DownloadModalProps {
  isOpen: boolean
  onClose: () => void
}

const APK_URL = "https://expo.dev/artifacts/eas/nermjesj5uBdNymUYt4EXh.apk"

export function DownloadModal({ isOpen, onClose }: DownloadModalProps) {
  const [isDesktop, setIsDesktop] = useState(false)

  useEffect(() => {
    const checkDesktop = () => {
      setIsDesktop(window.innerWidth >= 1024)
    }
    checkDesktop()
    window.addEventListener("resize", checkDesktop)
    return () => window.removeEventListener("resize", checkDesktop)
  }, [])

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = "hidden"
    } else {
      document.body.style.overflow = ""
    }
    return () => {
      document.body.style.overflow = ""
    }
  }, [isOpen])

  return (
    <AnimatePresence>
      {isOpen && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", damping: 25, stiffness: 300 }}
            className="relative glass-card rounded-3xl p-8 max-w-md w-full gradient-border"
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 left-4 w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center hover:bg-white/20 transition-colors"
            >
              <X className="w-5 h-5 text-white" />
            </button>

            {/* Content */}
            <div className="text-center">
              <motion.div
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: 0.2, type: "spring" }}
                className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-[#d946ef] to-[#22d3ee] flex items-center justify-center"
              >
                <Download className="w-10 h-10 text-white" />
              </motion.div>

              <h2 className="text-2xl font-black text-white mb-2">حمّل التطبيق الآن</h2>
              <p className="text-white/60 mb-8">اختر نظام التشغيل المناسب لجهازك</p>

              {/* Download Options */}
              <div className="space-y-4">
                {/* Android */}
                <motion.a
                  href={APK_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center gap-4 p-4 rounded-2xl bg-[#3DDC84]/20 border border-[#3DDC84]/30 hover:bg-[#3DDC84]/30 transition-colors"
                >
                  <div className="w-12 h-12 rounded-xl bg-[#3DDC84] flex items-center justify-center">
                    <Smartphone className="w-6 h-6 text-white" />
                  </div>
                  <div className="text-right flex-1">
                    <div className="text-white font-bold">Android</div>
                    <div className="text-white/60 text-sm">تحميل ملف APK</div>
                  </div>
                  <Download className="w-5 h-5 text-[#3DDC84]" />
                </motion.a>

                {/* iOS */}
                <div className="relative">
                  <div className="flex items-center gap-4 p-4 rounded-2xl bg-white/5 border border-white/10 opacity-60 cursor-not-allowed">
                    <div className="w-12 h-12 rounded-xl bg-white/20 flex items-center justify-center">
                      <Apple className="w-6 h-6 text-white" />
                    </div>
                    <div className="text-right flex-1">
                      <div className="text-white font-bold">iOS</div>
                      <div className="text-white/60 text-sm">App Store</div>
                    </div>
                  </div>
                  {/* Coming Soon Badge */}
                  <span className="absolute top-1/2 left-4 -translate-y-1/2 px-3 py-1 rounded-full bg-[#d946ef]/20 text-[#d946ef] text-xs font-bold">
                    قريباً
                  </span>
                </div>
              </div>

              {/* QR Code for Desktop */}
              {isDesktop && (
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="mt-8 pt-8 border-t border-white/10"
                >
                  <div className="flex items-center justify-center gap-2 mb-4 text-white/60">
                    <Monitor className="w-5 h-5" />
                    <span className="text-sm">أو امسح رمز QR بهاتفك</span>
                  </div>
                  <div className="w-40 h-40 mx-auto rounded-2xl bg-white p-3">
                    <Image
                      src="/images/qr-code.png"
                      alt="QR Code"
                      width={160}
                      height={160}
                      className="w-full h-full object-contain"
                    />
                  </div>
                </motion.div>
              )}
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  )
}
