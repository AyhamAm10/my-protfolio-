"use client";

import { motion, AnimatePresence } from "framer-motion";
import { X, Download, Smartphone } from "lucide-react";
import { useLanguage } from "./language-provider";

interface DownloadPopupProps {
  isOpen: boolean;
  onClose: () => void;
}

export function DownloadPopup({ isOpen, onClose }: DownloadPopupProps) {
  const { t, dir } = useLanguage();

  return (
    <AnimatePresence>
      {isOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={onClose}
            className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50"
          />

          {/* Modal */}
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 300, damping: 25 }}
            className="fixed inset-0 flex items-center justify-center z-50 p-4"
            dir={dir}
          >
            <div className="glass rounded-3xl p-8 max-w-md w-full relative overflow-hidden">
              {/* Glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-am-violet/20 to-transparent pointer-events-none" />
              
              {/* Border beam */}
              <div className="absolute inset-0 rounded-3xl p-[1px] overflow-hidden pointer-events-none">
                <div className="absolute inset-0 animate-border-beam opacity-50" />
              </div>

              {/* Close button */}
              <button
                onClick={onClose}
                className="absolute top-4 right-4 p-2 rounded-full hover:bg-white/10 transition-colors z-10"
              >
                <X className="w-5 h-5 text-white/70" />
              </button>

              {/* Content */}
              <div className="relative z-10 text-center">
                {/* Icon */}
                <motion.div
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ delay: 0.2, type: "spring" }}
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl bg-gradient-to-br from-am-violet to-purple-800 flex items-center justify-center"
                  style={{
                    boxShadow: "0 0 40px rgba(139, 92, 246, 0.5)",
                  }}
                >
                  <Smartphone className="w-10 h-10 text-white" />
                </motion.div>

                <h2 className="text-2xl font-bold text-white mb-2">
                  {t("getApp")}
                </h2>
                
                <p className="text-white/60 mb-8">
                  Android 8.0+
                </p>

                {/* QR Code Placeholder */}
                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.3 }}
                  className="bg-white p-4 rounded-2xl w-40 h-40 mx-auto mb-6 flex items-center justify-center"
                >
                  <div className="w-full h-full bg-gradient-to-br from-gray-200 to-gray-300 rounded-lg flex items-center justify-center">
                    <span className="text-gray-500 text-xs">{t("scanQr")}</span>
                  </div>
                </motion.div>

                {/* Download Button */}
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="relative w-full py-4 px-8 rounded-2xl font-bold text-white overflow-hidden group"
                  style={{
                    background: "linear-gradient(135deg, #8B5CF6 0%, #7c3aed 100%)",
                  }}
                >
                  {/* Shine effect */}
                  <div className="absolute inset-0 w-full h-full">
                    <div
                      className="absolute top-0 h-full w-1/2 bg-gradient-to-r from-transparent via-white/30 to-transparent skew-x-12 group-hover:animate-[shine_0.75s_ease-in-out]"
                      style={{ left: "-100%" }}
                    />
                  </div>
                  
                  <span className="relative flex items-center justify-center gap-2">
                    <Download className="w-5 h-5" />
                    {t("downloadApk")}
                  </span>
                </motion.button>
              </div>
            </div>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
