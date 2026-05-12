"use client"

import { motion } from "framer-motion"
import { Users, User, DollarSign, Sparkles, Clock } from "lucide-react"

const tournaments = [
  {
    id: 1,
    name: "بطولة PUBG الأسبوعية",
    game: "PUBG Mobile",
    type: "squad",
    typeLabel: "سكواد",
    prize: 500,
    xp: 2500,
    registered: 78,
    maxPlayers: 100,
    status: "live",
    statusLabel: "مباشر الآن",
    startTime: "جارية الآن",
  },
  {
    id: 2,
    name: "تحدي Free Fire Solo",
    game: "Free Fire",
    type: "solo",
    typeLabel: "فردي",
    prize: 200,
    xp: 1000,
    registered: 45,
    maxPlayers: 50,
    status: "live",
    statusLabel: "مباشر الآن",
    startTime: "جارية الآن",
  },
  {
    id: 3,
    name: "دوري Valorant الشهري",
    game: "Valorant",
    type: "squad",
    typeLabel: "فريق",
    prize: 1000,
    xp: 5000,
    registered: 24,
    maxPlayers: 32,
    status: "upcoming",
    statusLabel: "قريباً",
    startTime: "بعد 3 ساعات",
  },
  {
    id: 4,
    name: "بطولة COD Warzone",
    game: "Call of Duty",
    type: "duo",
    typeLabel: "ثنائي",
    prize: 300,
    xp: 1500,
    registered: 40,
    maxPlayers: 64,
    status: "upcoming",
    statusLabel: "قريباً",
    startTime: "بعد 5 ساعات",
  },
]

export function TournamentsSection() {
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

        {/* Tournaments Grid */}
        <div className="grid md:grid-cols-2 gap-6 max-w-5xl mx-auto">
          {tournaments.map((tournament, index) => (
            <motion.div
              key={tournament.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ scale: 1.02 }}
              className="glass-card rounded-2xl overflow-hidden group"
            >
              {/* Header */}
              <div className="p-6 pb-4">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <div className="flex items-center gap-2 mb-2">
                      {/* Status Badge */}
                      <span
                        className={`px-3 py-1 rounded-full text-xs font-bold ${
                          tournament.status === "live"
                            ? "bg-red-500/20 text-red-400 animate-pulse"
                            : "bg-[#22d3ee]/20 text-[#22d3ee]"
                        }`}
                      >
                        {tournament.status === "live" && (
                          <span className="inline-block w-2 h-2 bg-red-500 rounded-full ml-1 animate-pulse" />
                        )}
                        {tournament.statusLabel}
                      </span>
                      {/* Type Badge */}
                      <span className="px-3 py-1 rounded-full text-xs font-medium bg-white/10 text-white/80 flex items-center gap-1">
                        {tournament.type === "solo" ? (
                          <User className="w-3 h-3" />
                        ) : (
                          <Users className="w-3 h-3" />
                        )}
                        {tournament.typeLabel}
                      </span>
                    </div>
                    <h3 className="text-xl font-bold text-white">{tournament.name}</h3>
                    <p className="text-white/50 text-sm mt-1">{tournament.game}</p>
                  </div>
                </div>

                {/* Progress Bar */}
                <div className="mb-4">
                  <div className="flex justify-between text-sm mb-2">
                    <span className="text-white/60">المسجلين</span>
                    <span className="text-white font-medium">
                      {tournament.registered}/{tournament.maxPlayers}
                    </span>
                  </div>
                  <div className="w-full h-2 bg-white/10 rounded-full overflow-hidden">
                    <motion.div
                      initial={{ width: 0 }}
                      whileInView={{ width: `${(tournament.registered / tournament.maxPlayers) * 100}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.5 }}
                      className="h-full bg-gradient-to-l from-[#d946ef] to-[#22d3ee] rounded-full"
                    />
                  </div>
                </div>

                {/* Rewards */}
                <div className="flex items-center gap-4">
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#10b981]/20">
                    <DollarSign className="w-5 h-5 text-[#10b981]" />
                    <span className="text-[#10b981] font-bold">${tournament.prize}</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-[#f59e0b]/20">
                    <Sparkles className="w-5 h-5 text-[#f59e0b]" />
                    <span className="text-[#f59e0b] font-bold">{tournament.xp} XP</span>
                  </div>
                  <div className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/10 mr-auto">
                    <Clock className="w-4 h-4 text-white/60" />
                    <span className="text-white/60 text-sm">{tournament.startTime}</span>
                  </div>
                </div>
              </div>

              {/* Footer */}
              <div className="px-6 py-4 bg-white/5 border-t border-white/10">
                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  className="w-full py-3 rounded-xl bg-gradient-to-l from-[#d946ef] to-[#22d3ee] text-white font-bold"
                >
                  انضم الآن
                </motion.button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
