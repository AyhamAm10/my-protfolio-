"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";
import { Swords, Vote, TrendingUp, Crown } from "lucide-react";
import Image from "next/image";

const features = [
  {
    key: "compete",
    icon: Swords,
    gradient: "from-red-500 to-orange-500",
  },
  {
    key: "vote",
    icon: Vote,
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    key: "climb",
    icon: TrendingUp,
    gradient: "from-green-500 to-emerald-500",
  },
  {
    key: "dominate",
    icon: Crown,
    gradient: "from-am-gold to-yellow-500",
  },
];

export function FeaturesSection() {
  const { t, dir } = useLanguage();

  return (
    <section className="relative py-24 overflow-hidden bg-[#0D0A14]" dir={dir}>
      <div className="container mx-auto px-4 relative z-10">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            {t("featuresTitle")}
          </h2>
        </motion.div>

        {/* Bento Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-6xl mx-auto">
          {features.map((feature, index) => {
            const Icon = feature.icon;
            return (
              <motion.div
                key={feature.key}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.02, y: -3 }}
                className="relative group"
              >
                <div 
                  className="relative rounded-3xl p-6 h-full overflow-hidden transition-colors"
                  style={{
                    background: "#191423",
                    border: "1px solid rgba(139, 92, 246, 0.15)",
                  }}
                >
                  {/* Icon */}
                  <div
                    className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${feature.gradient} flex items-center justify-center mb-4 relative z-10`}
                  >
                    <Icon className="w-7 h-7 text-white" />
                  </div>

                  {/* Text */}
                  <h3 className="text-xl font-bold text-white mb-2 relative z-10">
                    {t(feature.key)}
                  </h3>
                  <p className="text-white/50 text-sm relative z-10">
                    {t(`${feature.key}Desc`)}
                  </p>
                  
                  {/* Subtle hover state */}
                  <div 
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: "linear-gradient(135deg, rgba(139, 92, 246, 0.05) 0%, transparent 50%)",
                    }}
                  />
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* App screens showcase */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mt-20 relative"
        >
          <div className="flex justify-center items-center gap-4 overflow-hidden">
            {/* Left screen (smaller) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 0.5, ease: "easeInOut" }}
              className="hidden md:block relative w-48 opacity-50"
            >
              <div className="rounded-3xl border-2 border-gray-800 bg-gray-900 p-1 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2QeDzD7K53ZgmLmRaDmRpjQ0DrSTTe.png"
                  alt="App Screen"
                  width={192}
                  height={400}
                  className="rounded-2xl w-full"
                />
              </div>
            </motion.div>

            {/* Center screen (main) */}
            <motion.div
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
              className="relative w-64 z-10"
            >
              {/* Subtle glow - reduced */}
              <div
                className="absolute inset-0 blur-3xl opacity-20"
                style={{
                  background: "radial-gradient(circle, rgba(139, 92, 246, 0.3) 0%, transparent 70%)",
                }}
              />
              <div className="relative rounded-[2rem] border-4 border-gray-800 bg-gray-900 p-1 overflow-hidden shadow-xl">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2QeDzD7K53ZgmLmRaDmRpjQ0DrSTTe.png"
                  alt="AM Arena App"
                  width={256}
                  height={512}
                  className="rounded-[1.5rem] w-full"
                />
              </div>
            </motion.div>

            {/* Right screen (smaller) */}
            <motion.div
              animate={{ y: [0, -8, 0] }}
              transition={{ duration: 5, repeat: Infinity, delay: 1, ease: "easeInOut" }}
              className="hidden md:block relative w-48 opacity-50"
            >
              <div className="rounded-3xl border-2 border-gray-800 bg-gray-900 p-1 overflow-hidden">
                <Image
                  src="https://hebbkx1anhila5yf.public.blob.vercel-storage.com/image-2QeDzD7K53ZgmLmRaDmRpjQ0DrSTTe.png"
                  alt="App Screen"
                  width={192}
                  height={400}
                  className="rounded-2xl w-full"
                />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
