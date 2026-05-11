"use client";

import { motion } from "framer-motion";
import { useLanguage } from "./language-provider";
import Image from "next/image";
import { useEffect, useMemo, useState } from "react";

type TopPlayer = {
  id: number;
  gamer_name: string;
  avatarUrl: string | null;
  xp_points: number;
  tournament_wins: number;
  selected_achievement?: {
    id: number;
    name: string;
  } | null;
};

const API_BASE_URL ="https://am-arena-api-abgpf6egdeanfjc6.uaenorth-01.azurewebsites.net"

async function fetchTopPlayers(): Promise<TopPlayer[]> {
  const response = await fetch(`${API_BASE_URL}/user/best?limit=3&page=1`, {
    cache: "no-store",
  });

  if (!response.ok) {
    throw new Error("Failed to load top players");
  }

  const payload = await response.json();
  const data = Array.isArray(payload) ? payload : payload?.data ?? [];

  return data.slice(0, 3).map((player: any) => ({
    id: player.id,
    gamer_name: player.gamer_name ?? player.full_name ?? `Player ${player.id}`,
    avatarUrl: player.avatarUrl ?? null,
    xp_points: Number(player.xp_points ?? 0),
    tournament_wins: Array.isArray(player.wonTournaments)
      ? player.wonTournaments.length
      : 0,
    selected_achievement: player.selected_achievement
      ? {
          id: player.selected_achievement.id,
          name: player.selected_achievement.name,
        }
      : null,
  }));
}

function PlayerCard({ player, index }: { player: TopPlayer; index: number }) {
  const { t, dir } = useLanguage();
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
            src={player.avatarUrl || "/avatars/player-1.jpg"}
            alt={player.gamer_name}
            fill
            className="object-cover object-center"
          />
          {/* Subtle gradient overlay at bottom */}
          <div className="absolute inset-0 bg-linear-to-t from-[#191423] via-transparent to-transparent" />
          
          {/* Rank badge */}
          <div className="absolute top-4 right-4 w-10 h-10 rounded-full bg-linear-to-br from-am-gold to-yellow-600 flex items-center justify-center font-bold text-white text-sm">
            #{index + 1}
          </div>
        </div>

        {/* Player info */}
        <div className="p-5">
          <h3 className="text-xl font-bold text-white mb-1">
            {player.gamer_name}
          </h3>
          <p className="text-am-violet/70 text-sm mb-4">
            {player.selected_achievement?.name ?? t("topPlayer")}
          </p>

          {/* Stats - clean minimalist */}
          <div className="flex justify-between items-center gap-4">
            <div className="flex-1">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">{t("xp")}</p>
              <p className="text-am-gold font-semibold text-lg">
                {player.xp_points.toLocaleString()}
              </p>
            </div>
            <div className="w-px h-10 bg-white/10" />
            <div className="flex-1 text-right">
              <p className="text-white/40 text-xs uppercase tracking-wider mb-1">Tournament Wins</p>
              <p className="text-green-400 font-semibold text-lg">{player.tournament_wins}</p>
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
  const [players, setPlayers] = useState<TopPlayer[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let cancelled = false;

    async function loadPlayers() {
      try {
        setIsLoading(true);
        setError(null);
        const data = await fetchTopPlayers();
        if (!cancelled) {
          setPlayers(data);
        }
      } catch (err) {
        if (!cancelled) {
          setError(err instanceof Error ? err.message : "Failed to load top players");
          setPlayers([]);
        }
      } finally {
        if (!cancelled) {
          setIsLoading(false);
        }
      }
    }

    void loadPlayers();

    return () => {
      cancelled = true;
    };
  }, []);

  const content = useMemo(() => {
    if (isLoading) {
      return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {[0, 1, 2].map((index) => (
            <div
              key={index}
              className="relative rounded-3xl overflow-hidden bg-[#191423] border border-[rgba(139,92,246,0.3)] animate-pulse"
            >
              <div className="h-48 bg-white/10" />
              <div className="p-5 space-y-4">
                <div className="h-6 w-2/3 rounded bg-white/10" />
                <div className="h-4 w-1/2 rounded bg-white/10" />
                <div className="flex items-center gap-4">
                  <div className="h-12 flex-1 rounded bg-white/10" />
                  <div className="w-px h-10 bg-white/10" />
                  <div className="h-12 flex-1 rounded bg-white/10" />
                </div>
              </div>
            </div>
          ))}
        </div>
      );
    }

    if (error || players.length === 0) {
      return (
        <div className="max-w-4xl mx-auto rounded-3xl border border-[rgba(139,92,246,0.3)] bg-[#191423] px-6 py-12 text-center text-white/70">
          {error ? "Unable to load top players right now." : "No players found."}
        </div>
      );
    }

    return (
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
        {players.map((player, index) => (
          <PlayerCard key={player.id} player={player} index={index} />
        ))}
      </div>
    );
  }, [error, isLoading, players]);

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
        {content}
      </div>
    </section>
  );
}
