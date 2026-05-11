"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";
import Image from "next/image";
import { useState } from "react";

const players = [
  {
    id: 1,
    name: "سيد النجاة",
    nameEn: "Shadow Master",
    avatar: "/avatars/player-1.jpg",
    xp: 12500,
    winRate: 94,
  },
  {
    id: 2,
    name: "الأسطورة",
    nameEn: "The Legend",
    avatar: "/avatars/player-2.jpg",
    xp: 11800,
    winRate: 91,
  },
  {
    id: 3,
    name: "البطل",
    nameEn: "The Champion",
    avatar: "/avatars/player-3.jpg",
    xp: 10200,
    winRate: 88,
  },
];

function PlayerCard({ player, index }: { player: typeof players[0]; index: number }) {
  const { language, t, dir } = useLanguage();
  const [rotateX, setRotateX] = useState(0);
  const [rotateY, setRotateY] = useState(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const card = e.currentTarget;
    const rect = card.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;
    const centerX = rect.width / 2;
    const centerY = rect.height / 2;
    
    setRotateX((y - centerY) / 15);
    setRotateY((centerX - x) / 15);
  };

  const handleMouseLeave = () => {
    setRotateX(0);
    setRotateY(0);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      viewport={{ once: true }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg)`,
        transition: "transform 0.1s ease-out",
      }}
      className="relative group"
      dir={dir}
    >
      {/* Card with subtle border */}
      <div 
        className="relative rounded-3xl overflow-hidden"
        style={{
          background: "#191423",
          border: "1px solid rgba(139, 92, 246, 0.3)",
        }}
      >
        {/* Avatar - dominates top half */}
        <div className="relative h-48 overflow-hidden">
          <Image
            src={player.avatar}
            alt={language === "ar" ? player.name : player.nameEn}
            fill
            className="object-cover object-center"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#191423] via-transparent to-transparent" />
          
          {/* Rank badge */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-gradient-to-br from-am-gold to-yellow-600 flex items-center justify-center font-bold text-white text-sm">
            #{index + 1}
          </div>
        </div>

        {/* Player info */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-white mb-1">
            {language === "ar" ? player.name : player.nameEn}
          </h3>
          <p className="text-am-violet/70 text-sm mb-4">{t("topPlayer")}</p>

          {/* Stats - clean minimalist */}
          <div className="flex justify-between items-center gap-4">
            <div className="flex-1">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{t("xp")}</p>
              <p className="text-am-gold font-semibold text-lg">
                {player.xp.toLocaleString()}
              </p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex-1 text-right">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{t("winRate")}</p>
              <p className="text-green-400 font-semibold text-lg">{player.winRate}%</p>
            </div>
          </div>
        </div>
        
        {/* Subtle hover glow - reduced intensity */}
        <div 
          className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"
          style={{
            background: "radial-gradient(circle at 50% 30%, rgba(139, 92, 246, 0.08) 0%, transparent 60%)",
          }}
        />
      </div>
    </motion.div>
  );
}

export function CompetitorsSection() {
  const { t, dir } = useLanguage();

  return (
    <section className="relative py-24 overflow-hidden" dir={dir}>
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
            {t("competitorsTitle")}
          </h2>
          <p className="text-xl text-white/50">{t("competitorsSubtitle")}</p>
        </motion.div>

        {/* Player cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {players.map((player, index) => (
            <PlayerCard key={player.id} player={player} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
