"use client"

import Image from "next/image"

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

export function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-white/10 bg-[#07050d]">
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(34,211,238,0.08),transparent_38%),radial-gradient(circle_at_bottom,rgba(217,70,239,0.08),transparent_35%)] pointer-events-none" />

      <div className="relative z-10 mx-auto max-w-6xl px-4 py-14 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center gap-10 text-center">
          <div className="flex flex-col items-center gap-5 max-w-2xl">
            <div className="relative h-16 w-40">
              <Image
                src="/images/logo.png"
                alt="AM Arena"
                fill
                className="object-contain"
                priority={false}
              />
            </div>

            <p className="text-sm leading-7 text-white/70 sm:text-base">
              AM Arena: منصتك الأولى للبطولات والمسابقات الإلكترونية في العالم العربي.
            </p>
          </div>

          <div className="flex items-center justify-center gap-3">
            <a
              href="https://t.me/AMArenaApp"
              target="_blank"
              rel="noreferrer"
              aria-label="Telegram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-cyan-400/40 hover:bg-cyan-400/10 hover:text-white"
            >
              <TelegramIcon className="h-5 w-5" />
            </a>

            <a
              href="https://www.instagram.com/am10_arena"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-pink-400/40 hover:bg-pink-400/10 hover:text-white"
            >
              <InstagramIcon className="h-5 w-5" />
            </a>

            <a
              href="https://www.facebook.com/profile.php?id=61582281440243"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/70 transition-all duration-200 hover:-translate-y-0.5 hover:border-blue-400/40 hover:bg-blue-400/10 hover:text-white"
            >
              <FacebookIcon className="h-5 w-5" />
            </a>
          </div>

          <div className="w-full pt-1">
            <p className="text-center text-xs text-white/45 sm:text-sm">
              © 2026 AM Arena. جميع الحقوق محفوظة.
            </p>
          </div>
        </div>
      </div>
    </footer>
  )
}
