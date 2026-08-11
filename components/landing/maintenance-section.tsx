"use client"

import { useState } from "react"
import Image from "next/image"
import { motion } from "framer-motion"
import { Wrench, Shield, Zap, Trophy, Mail, CheckCircle2, Clock, Sparkles } from "lucide-react"

function TelegramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M21.8 4.6a1 1 0 0 0-1.08-.17L2.83 11.94a1 1 0 0 0 .08 1.88l4.86 1.53 1.86 5.72a1 1 0 0 0 1.78.22l2.7-3.56 4.77 3.49a1 1 0 0 0 1.57-.56l2.5-15a1 1 0 0 0-.36-.99ZM9.7 14.82l-.26 3.55-1.06-3.31 10.26-7.35-8.94 7.11Z" />
    </svg>
  )
}

function InstagramIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M7.75 2h8.5A5.75 5.75 0 0 1 22 7.75v8.5A5.75 5.75 0 0 1 16.25 22h-8.5A5.75 5.75 0 0 1 2 16.25v-8.5A5.75 5.75 0 0 1 7.75 2Zm0 2A3.75 3.75 0 0 0 4 7.75v8.5A3.75 3.75 0 0 0 7.75 20h8.5A3.75 3.75 0 0 0 20 16.25v-8.5A3.75 3.75 0 0 0 16.25 4h-8.5ZM12 6.75A5.25 5.25 0 1 1 6.75 12 5.26 5.26 0 0 1 12 6.75Zm0 2A3.25 3.25 0 1 0 15.25 12 3.25 3.25 0 0 0 12 8.75ZM17.5 5.5a1.25 1.25 0 1 1-1.25 1.25A1.25 1.25 0 0 1 17.5 5.5Z" />
    </svg>
  )
}

function FacebookIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true" {...props}>
      <path d="M13.5 22v-8h2.7l.4-3.1h-3.1V9c0-.9.3-1.6 1.7-1.6h1.5V4.6c-.7-.1-1.7-.2-2.9-.2-2.9 0-4.9 1.8-4.9 5.1v2.4H7v3.1h2v8h4.5Z" />
    </svg>
  )
}

export function MaintenanceSection() {
  const [email, setEmail] = useState("")
  const [subscribed, setSubscribed] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    if (email.trim()) {
      setSubscribed(true)
      setEmail("")
    }
  }

  return (
    <div className="relative min-h-screen w-full bg-[#0f0a1e] text-white flex flex-col justify-between overflow-hidden font-sans dir-rtl">
      {/* Background Lighting & Orbs */}
      <div className="absolute top-0 right-1/4 w-[500px] h-[500px] bg-purple-600/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-0 left-1/4 w-[500px] h-[500px] bg-cyan-500/15 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-pink-500/10 rounded-full blur-[160px] pointer-events-none" />

      {/* Grid Pattern Overlay */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:3rem_3rem] pointer-events-none" />

      {/* Top Header Logo */}
      <header className="relative z-10 container mx-auto px-6 pt-8 pb-4 flex justify-between items-center">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="relative w-36 h-14 sm:w-44 sm:h-16"
        >
          <Image
            src="/images/logo.png"
            alt="AM Arena Logo"
            fill
            className="object-contain"
            priority
          />
        </motion.div>

        {/* Live Status Badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full glass-card text-xs sm:text-sm text-cyan-300 border border-cyan-500/30"
        >
          <span className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-500" />
          </span>
          <span className="font-semibold">جاري التحديث والتطوير</span>
        </motion.div>
      </header>

      {/* Main Content */}
      <main className="relative z-10 container mx-auto px-4 py-8 my-auto flex flex-col items-center text-center">

        {/* Animated Gaming Wrench / Gear Graphic */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.7, type: "spring" }}
          className="relative mb-8"
        >
          {/* Glowing ring background */}
          <div className="absolute inset-0 rounded-3xl bg-gradient-to-r from-pink-500 to-cyan-500 blur-xl opacity-60 animate-pulse-glow" />

          <div className="relative glass-card p-6 sm:p-8 rounded-3xl border border-white/15 flex items-center justify-center">
            <motion.div
              animate={{ rotate: [0, 15, -15, 0] }}
              transition={{ repeat: Infinity, duration: 6, ease: "easeInOut" }}
              className="relative"
            >
              <Wrench className="w-14 h-14 sm:w-20 sm:h-20 text-cyan-400 drop-shadow-[0_0_20px_rgba(34,211,238,0.8)]" />
              <Sparkles className="w-6 h-6 text-pink-400 absolute -top-2 -right-2 animate-bounce" />
            </motion.div>
          </div>
        </motion.div>

        {/* Title */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-3xl"
        >
          <h1 className="text-3xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-4 leading-tight">
            الموقع قيد <span className="gradient-text">الصيانة حالياً</span>
          </h1>
          <p className="text-lg sm:text-xl text-white/80 leading-relaxed max-w-2xl mx-auto font-light">
            نقوم حالياً بإجراء تحديثات وأعمال صيانة شاملة للارتقاء بساحة الأبطال وإتاحة أفضل تجربة تنافسية للبطولات والمسابقات الإلكترونية.
          </p>
        </motion.div>

        {/* Sub-features / What's coming */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-10 max-w-4xl w-full"
        >
          <div className="glass-card p-5 rounded-2xl border border-white/10 hover:border-pink-500/40 transition-all text-center flex flex-col items-center">
            <div className="p-3 rounded-xl bg-pink-500/10 text-pink-400 mb-3">
              <Trophy className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white mb-1">بطولات ومسابقات أضخم</h3>
            <p className="text-xs text-white/60">تحسين أنظمة النتائج وتوزيع الجوائز بشكل أسرع وأسهل</p>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-white/10 hover:border-cyan-500/40 transition-all text-center flex flex-col items-center">
            <div className="p-3 rounded-xl bg-cyan-500/10 text-cyan-400 mb-3">
              <Zap className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white mb-1">سرعة وسلاسة أعلى</h3>
            <p className="text-xs text-white/60">رفع كفاءة الخوادم لضمان تصفح م ميز وتجربة بدون انقطاع</p>
          </div>

          <div className="glass-card p-5 rounded-2xl border border-white/10 hover:border-purple-500/40 transition-all text-center flex flex-col items-center">
            <div className="p-3 rounded-xl bg-purple-500/10 text-purple-400 mb-3">
              <Shield className="w-6 h-6" />
            </div>
            <h3 className="font-bold text-white mb-1">حماية وأمان معزز</h3>
            <p className="text-xs text-white/60">ترقية أنظمة الحسابات لضمان بيئة لعب عادلة وآمنة</p>
          </div>
        </motion.div>

        {/* Email Notification Subscription Form */}
        {/* <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          className="mt-10 w-full max-w-md"
        >
          <div className="glass-card p-6 rounded-2xl border border-white/10 relative overflow-hidden">
            <div className="flex items-center justify-center gap-2 text-sm text-cyan-300 font-semibold mb-3">
              <Clock className="w-4 h-4" />
              <span>كن أول من يعلم عند عودة المنصة</span>
            </div>

            {subscribed ? (
              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                className="flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-500/20 text-emerald-300 border border-emerald-500/40 text-sm font-medium"
              >
                <CheckCircle2 className="w-5 h-5 text-emerald-400" />
                <span>تم تسجيل بريدك بنجاح! سنقوم بإعلامك فور انطلاق المنصة.</span>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
                <div className="relative flex-1">
                  <Mail className="w-5 h-5 text-white/40 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
                  <input
                    type="email"
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    placeholder="أدخل بريدك الإلكتروني"
                    className="w-full pr-10 pl-4 py-2.5 rounded-xl bg-white/5 border border-white/15 text-white placeholder:text-white/40 focus:outline-none focus:border-cyan-400 transition-colors text-sm"
                  />
                </div>
                <button
                  type="submit"
                  className="px-5 py-2.5 rounded-xl bg-gradient-to-l from-[#d946ef] to-[#22d3ee] text-white font-bold text-sm hover:opacity-95 transition-opacity whitespace-nowrap shadow-lg shadow-pink-500/20"
                >
                  أشعرني
                </button>
              </form>
            )}
          </div>
        </motion.div> */}
      </main>

      {/* Footer & Socials */}
      <footer className="relative z-10 container mx-auto px-6 py-6 flex flex-col sm:flex-row items-center justify-between gap-4 border-t border-white/10 text-xs text-white/60">
        <p>© {new Date().getFullYear()} AM Arena. جميع الحقوق محفوظة.</p>

        <div className="flex items-center gap-4">
          <span className="text-white/40 text-xs">تابعنا للاطلاع على المستجدات:</span>
          <div className="flex items-center gap-2">
            <a
              href="https://t.me/AMArenaApp"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="p-2 rounded-full glass-card border border-white/10 text-white/70 hover:text-cyan-400 hover:border-cyan-400/40 transition-all"
            >
              <TelegramIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.instagram.com/am10_arena"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="p-2 rounded-full glass-card border border-white/10 text-white/70 hover:text-pink-400 hover:border-pink-400/40 transition-all"
            >
              <InstagramIcon className="w-4 h-4" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61582281440243"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="p-2 rounded-full glass-card border border-white/10 text-white/70 hover:text-blue-400 hover:border-blue-400/40 transition-all"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
