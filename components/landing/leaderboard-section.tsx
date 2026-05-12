"use client"

import { motion } from "framer-motion"
import { Crown, Medal, Award, Star, Target, Crosshair } from "lucide-react"

const players = [
  {
    rank: 1,
    name: "أبو محمد",
    avatar: "🎮",
    xp: 125000,
    maxXp: 150000,
    title: "أسطورة الساحة",
    titleIcon: Crown,
    titleColor: "#fbbf24",
    badge: "gold",
  },
  {
    rank: 2,
    name: "النمر الأسود",
    avatar: "🐯",
    xp: 98500,
    maxXp: 150000,
    title: "نجم التصويب",
    titleIcon: Crosshair,
    titleColor: "#c0c0c0",
    badge: "silver",
  },
  {
    rank: 3,
    name: "صقر العرب",
    avatar: "🦅",
    xp: 87200,
    maxXp: 150000,
    title: "سيد النجاة",
    titleIcon: Target,
    titleColor: "#cd7f32",
    badge: "bronze",
  },
  {
    rank: 4,
    name: "الفارس",
    avatar: "⚔️",
    xp: 76800,
    maxXp: 150000,
    title: "محارب شرس",
    titleIcon: Star,
    titleColor: "#d946ef",
    badge: "purple",
  },
  {
    rank: 5,
    name: "ملك الظلام",
    avatar: "👑",
    xp: 65400,
    maxXp: 150000,
    title: "صائد الأرواح",
    titleIcon: Star,
    titleColor: "#22d3ee",
    badge: "cyan",
  },
]

const getRankIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return <Crown className="w-6 h-6 text-[#fbbf24]" />
    case 2:
      return <Medal className="w-6 h-6 text-[#c0c0c0]" />
    case 3:
      return <Award className="w-6 h-6 text-[#cd7f32]" />
    default:
      return <span className="text-white/60 font-bold text-lg">#{rank}</span>
  }
}

const getBadgeStyle = (badge: string) => {
  switch (badge) {
    case "gold":
      return "from-[#fbbf24] to-[#f59e0b]"
    case "silver":
      return "from-[#e5e7eb] to-[#9ca3af]"
    case "bronze":
      return "from-[#cd7f32] to-[#a0522d]"
    case "purple":
      return "from-[#d946ef] to-[#a855f7]"
    case "cyan":
      return "from-[#22d3ee] to-[#3b82f6]"
    default:
      return "from-white/20 to-white/10"
  }
}

export function LeaderboardSection() {
  return (
    <section id="leaderboard" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#22d3ee]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-black mb-4">
            <span className="gradient-text">قاعة الشهرة</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            أفضل اللاعبين الذين أثبتوا جدارتهم في ساحة المنافسة
          </p>
        </motion.div>

        {/* Leaderboard */}
        <div className="max-w-3xl mx-auto space-y-4">
          {players.map((player, index) => (
            <motion.div
              key={player.rank}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02, x: 10 }}
              className={`glass-card rounded-2xl p-5 flex items-center gap-4 ${
                player.rank <= 3 ? "gradient-border" : ""
              }`}
            >
              {/* Rank */}
              <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">
                {getRankIcon(player.rank)}
              </div>

              {/* Avatar */}
              <div
                className={`w-14 h-14 rounded-xl bg-gradient-to-br ${getBadgeStyle(player.badge)} flex items-center justify-center text-2xl`}
              >
                {player.avatar}
              </div>

              {/* Info */}
              <div className="flex-1">
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="text-lg font-bold text-white">{player.name}</h3>
                  {/* Title Badge */}
                  <span
                    className="px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1"
                    style={{
                      backgroundColor: `${player.titleColor}20`,
                      color: player.titleColor,
                    }}
                  >
                    <player.titleIcon className="w-3 h-3" />
                    {player.title}
                  </span>
                </div>

                {/* XP Progress */}
                <div className="flex items-center gap-3">
                  <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(player.xp / player.maxXp) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                      className={`h-full bg-gradient-to-l ${getBadgeStyle(player.badge)} rounded-full`}
                    />
                  </div>
                  <span className="text-white/60 text-sm font-medium min-w-[80px] text-left">
                    {player.xp.toLocaleString()} XP
                  </span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
