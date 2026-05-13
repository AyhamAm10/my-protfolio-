"use client"

import { useEffect, useState } from "react"
import { motion } from "framer-motion"
import { Users, User, DollarSign, Sparkles, Clock } from "lucide-react"

import { fetchPubgTournaments, type PubgTournament } from "@/lib/api"

const formatNumber = (value: string | number | null | undefined) => {
  if (value === null || value === undefined || value === "") {
    return "0"
  }

  const numericValue = typeof value === "number" ? value : Number(value)

  return Number.isNaN(numericValue) ? String(value) : numericValue.toLocaleString("en-US")
}

const formatDate = (value: string | null | undefined) => {
  if (!value) {
    return "جارية الآن"
  }

  const parsedDate = new Date(value)

  if (Number.isNaN(parsedDate.getTime())) {
    return value
  }

  return parsedDate.toLocaleDateString("ar-EG", {
    day: "numeric",
    month: "short",
    hour: "2-digit",
    minute: "2-digit",
  })
}

const getTournamentTypeLabel = (tournament: PubgTournament) => {
  const typeValue = (tournament.game?.type ?? tournament.game_type ?? "PUBG").toString().toLowerCase()

  if (typeValue.includes("solo")) {
    return { label: "فردي", isSolo: true }
  }

  if (typeValue.includes("duo")) {
    return { label: "ثنائي", isSolo: false }
  }

  if (typeValue.includes("squad") || typeValue.includes("team")) {
    return { label: "سكواد", isSolo: false }
  }

  return { label: typeValue.toUpperCase(), isSolo: false }
}

const getStatusLabel = (tournament: PubgTournament) => (tournament.is_active ? "مباشر الآن" : "قريباً")

const getTournamentImage = (tournament: PubgTournament) => tournament.game?.image?.trim() || "/images/logo.png"

export function TournamentsSection() {
  const [tournaments, setTournaments] = useState<PubgTournament[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [errorMessage, setErrorMessage] = useState<string | null>(null)

  useEffect(() => {
    let isMounted = true

    const loadTournaments = async () => {
      try {
        const response = await fetchPubgTournaments()

        if (!isMounted) {
          return
        }

        setTournaments(response)
      } catch (error) {
        if (!isMounted) {
          return
        }

        setErrorMessage(error instanceof Error ? error.message : "تعذر تحميل البطولات")
      } finally {
        if (isMounted) {
          setIsLoading(false)
        }
      }
    }

    loadTournaments()

    return () => {
      isMounted = false
    }
  }, [])

  return (
    <section id="tournaments" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-0 left-1/4 w-96 h-96 bg-[#22d3ee]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-[#d946ef]/10 rounded-full blur-[100px]" />
      </div>

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
            <span className="gradient-text">المباريات المباشرة</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            انضم الآن إلى أحدث البطولات وتنافس مع أفضل اللاعبين
          </p>
        </motion.div>

        {errorMessage && !isLoading && (
          <div className="max-w-3xl mx-auto mb-8 rounded-2xl border border-white/10 bg-white/5 px-5 py-4 text-center text-white/70">
            {errorMessage}
          </div>
        )}

        {/* Tournaments Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {isLoading ? (
            Array.from({ length: 4 }).map((_, index) => (
              <div key={index} className="glass-card rounded-2xl overflow-hidden animate-pulse">
                <div className="h-40 bg-white/10" />
                <div className="p-6 space-y-4">
                  <div className="h-4 w-24 rounded-full bg-white/10" />
                  <div className="h-6 w-3/4 rounded-full bg-white/10" />
                  <div className="h-4 w-1/2 rounded-full bg-white/10" />
                  <div className="h-2 w-full rounded-full bg-white/10" />
                  <div className="flex gap-3">
                    <div className="h-10 flex-1 rounded-xl bg-white/10" />
                    <div className="h-10 flex-1 rounded-xl bg-white/10" />
                  </div>
                </div>
              </div>
            ))
          ) : tournaments.length > 0 ? (
            tournaments.map((tournament, index) => {
              const registeredCount = tournament.registered_count ?? tournament.participant_count ?? 0
              const maxPlayers = tournament.max_players ?? 0
              const participationRate = maxPlayers > 0 ? Math.min((registeredCount / maxPlayers) * 100, 100) : 0
              const tournamentType = getTournamentTypeLabel(tournament)

              return (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              <div className="relative h-44 overflow-hidden">
                <img
                  src={getTournamentImage(tournament)}
                  alt={tournament.title || "Tournament image"}
                  className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-linear-to-t from-[#0f0a1e] via-[#0f0a1e]/20 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-5">
                  <span
                    className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold ${
                      tournament.is_active
                        ? "bg-red-500/20 text-red-400 animate-pulse"
                        : "bg-[#22d3ee]/20 text-[#22d3ee]"
                    }`}
                  >
                    {tournament.is_active && <span className="inline-block w-2 h-2 bg-red-500 rounded-full animate-pulse" />}
                    {getStatusLabel(tournament)}
                  </span>
                </div>
              </div>

              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {/* Type Badge */}
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 flex items-center gap-1">
                        {tournamentType.isSolo ? (
                          <User className="w-3 h-3" />
                        ) : (
                          <Users className="w-3 h-3" />
                        )}
                        {tournamentType.label}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{tournament.title || "بطولة PUBG"}</h3>
                    <p className="text-white/50 text-sm mt-1">{tournament.description || tournament.game?.type || tournament.game_type || "PUBG Mobile"}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">المسجلين</span>
                    <span className="text-white font-medium">
                      {registeredCount}/{maxPlayers}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${participationRate}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-linear-to-l from-[#d946ef] to-[#22d3ee] rounded-full"
                    />
                  </div>
                </div>

                {/* Rewards */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#10b981]/20">
                    <DollarSign className="w-5 h-5 text-[#10b981]" />
                    <span className="text-[#10b981] font-bold">${formatNumber(tournament.prize_pool)}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f59e0b]/20">
                    <Sparkles className="w-5 h-5 text-[#f59e0b]" />
                    <span className="text-[#f59e0b] font-bold">{tournament.reward_text || `${formatNumber(tournament.Xp_condition)} XP`}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 mr-auto">
                    <Clock className="w-4 h-4 text-white/60" />
                    <span className="text-white/60 text-sm">{formatDate(tournament.start_date)}</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              {/* <div className="px-6 py-4 bg-white/5 border-t border-white/10">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl bg-linear-to-l from-[#d946ef] to-[#22d3ee] text-white font-bold"
                >
                  انضم الآن
                </motion.button>
              </div> */}
            </motion.div>
              )
            })
          ) : (
            <div className="md:col-span-2 max-w-3xl mx-auto rounded-2xl border border-white/10 bg-white/5 px-6 py-10 text-center text-white/60">
              لا توجد بطولات حالياً
            </div>
          )}
        </div>
      </div>
    </section>
  )
}
