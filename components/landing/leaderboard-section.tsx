"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Award, Crown, Crosshair, Medal, Star, Target } from "lucide-react"

import { fetchBestPlayers, type BestPlayer } from "@/lib/api"

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

const getBadgeStyle = (rank: number) => {
  switch (rank) {
    case 1:
      return "from-[#fbbf24] to-[#f59e0b]"
    case 2:
      return "from-[#e5e7eb] to-[#9ca3af]"
    case 3:
      return "from-[#cd7f32] to-[#a0522d]"
    default:
      return "from-white/20 to-white/10"
  }
}

const getTitleIcon = (rank: number) => {
  switch (rank) {
    case 1:
      return Crown
    case 2:
      return Crosshair
    case 3:
      return Target
    default:
      return Star
  }
}

const getPlayerName = (player: BestPlayer) => player.gamer_name || player.full_name || "لاعب"

const getPlayerAvatar = (player: BestPlayer) => player.avatarUrl?.trim() || ""

const getPlayerTitle = (player: BestPlayer, rank: number) => {
  const achievementName = player.selected_achievement?.name || player.achievements?.[0]?.achievement?.name

  if (achievementName) {
    return achievementName
  }

  switch (rank) {
    case 1:
      return "أسطورة الساحة"
    case 2:
      return "نجم التصويب"
    case 3:
      return "سيد النجاة"
    default:
      return "لاعب مميز"
  }
}

const getTitleColor = (player: BestPlayer, rank: number) => {
  const color = player.selected_achievement?.color_theme || player.achievements?.[0]?.achievement?.color_theme

  if (color) {
    return color
  }

  switch (rank) {
    case 1:
      return "#fbbf24"
    case 2:
      return "#c0c0c0"
    case 3:
      return "#cd7f32"
    default:
      return "#22d3ee"
  }
}

export function LeaderboardSection() {
  const [players, setPlayers] = useState<BestPlayer[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const loadPlayers = async () => {
      try {
        const response = await fetchBestPlayers()

        if (!isMounted) {
          return
        }

        setPlayers(response.slice(0, 3))
      } catch (error) {
        if (!isMounted) {
          return
        }

        setErrorMessage(error instanceof Error ? error.message : "تعذر تحميل اللاعبين")
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadPlayers()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section id="leaderboard" className="py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-linear-to-b from-transparent via-[#22d3ee]/5 to-transparent pointer-events-none" />

      <div className="container mx-auto px-4 relative z-10">
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

        {errorMessage && !isLoading && (
          <div className="max-w-3xl mx-auto mb-8 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-white/70">
            {errorMessage}
          </div>
        )}

        <div className="max-w-3xl mx-auto space-y-4">
          {isLoading ? (
            Array.from({ length: 3 }).map((_, index) => (
              <div key={index} className="glass-card rounded-2xl p-5 flex items-center gap-4 animate-pulse">
                <div className="w-12 h-12 rounded-xl bg-white/10" />
                <div className="w-14 h-14 rounded-xl bg-white/10" />
                <div className="flex-1 space-y-3">
                  <div className="h-5 w-2/5 rounded-full bg-white/10" />
                  <div className="h-2 w-full rounded-full bg-white/10" />
                </div>
              </div>
            ))
          ) : players.length > 0 ? (
            players.map((player, index) => {
              const rank = index + 1
              const xpPoints = player.xp_points ?? 0
              const maxXp = Math.max(...players.map((item) => item.xp_points ?? 0), 1)
              const titleColor = getTitleColor(player, rank)
              const TitleIcon = getTitleIcon(rank)

              return (
                <motion.div
                  key={player.id}
                  initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: index * 0.1 }}
                  whileHover={{ scale: 1.02, x: 10 }}
                  className={`glass-card rounded-2xl p-5 flex items-center gap-4 ${rank <= 3 ? "gradient-border" : ""}`}
                >
                  <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center">{getRankIcon(rank)}</div>

                  <div className={`w-14 h-14 rounded-xl bg-linear-to-br ${getBadgeStyle(rank)} overflow-hidden flex items-center justify-center text-2xl`}>
                    {getPlayerAvatar(player) ? (
                      <img
                        src={getPlayerAvatar(player)}
                        alt={getPlayerName(player)}
                        className="h-full w-full object-cover"
                      />
                    ) : (
                      <span className="text-lg font-bold text-white/80">{getPlayerName(player).charAt(0)}</span>
                    )}
                  </div>

                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-lg font-bold text-white">{getPlayerName(player)}</h3>
                      <span
                        className="px-2 py-0.5 rounded-full text-xs font-medium flex items-center gap-1"
                        style={{
                          backgroundColor: `${titleColor}20`,
                          color: titleColor,
                        }}
                      >
                        <TitleIcon className="w-3 h-3" />
                        {getPlayerTitle(player, rank)}
                      </span>
                    </div>

                    <div className="flex items-center gap-3">
                      <div className="flex-1 h-2 bg-white/10 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          whileInView={{ width: `${(xpPoints / maxXp) * 100}%` }}
                          viewport={{ once: true }}
                          transition={{ duration: 1, delay: 0.3 + index * 0.1 }}
                          className={`h-full bg-linear-to-l ${getBadgeStyle(rank)} rounded-full`}
                        />
                      </div>
                      <span className="text-white/60 text-sm font-medium min-w-20 text-left">
                        {xpPoints.toLocaleString()} XP
                      </span>
                    </div>
                  </div>
                </motion.div>
              )
            })
          ) : (
            <div className="rounded-2xl border border-white/10 bg-white/5 px-6 py-10 text-center text-white/60">
              لا يوجد لاعبين حاليًا
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
