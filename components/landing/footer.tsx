"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Twitter, Instagram, Youtube, MessageCircle, Facebook } from "lucide-react"

const socialLinks = [
  { icon: Twitter, href: "#", label: "تويتر" },
  { icon: Instagram, href: "#", label: "انستغرام" },
  { icon: Youtube, href: "#", label: "يوتيوب" },
  { icon: MessageCircle, href: "#", label: "ديسكورد" },
  { icon: Facebook, href: "#", label: "فيسبوك" },
]

const footerLinks = [
  {
    title: "الشركة",
    links: [
      { label: "عن AM Arena", href: "#" },
      { label: "فريق العمل", href: "#" },
      { label: "الوظائف", href: "#" },
    ],
  },
  {
    title: "الدعم",
    links: [
      { label: "مركز المساعدة", href: "#" },
      { label: "تواصل معنا", href: "#" },
      { label: "الإبلاغ عن مشكلة", href: "#" },
    ],
  },
  {
    title: "القانوني",
    links: [
      { label: "سياسة الخصوصية", href: "#" },
      { label: "شروط الاستخدام", href: "#" },
      { label: "قواعد المنافسة", href: "#" },
    ],
  },
]

export function Footer() {
  return (
    <footer className="relative pt-24 pb-8 overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-t from-[#0f0a1e] to-transparent pointer-events-none" />
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-l from-transparent via-white/20 to-transparent" />

      <div className="container mx-auto px-4 relative z-10">
        {/* Top Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12 mb-16">
          {/* Brand */}
          <div className="lg:col-span-2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-36 h-14 relative mb-6"
            >
              <Image
                src="/images/logo.png"
                alt="AM Arena"
                fill
                className="object-contain"
              />
            </motion.div>
            <p className="text-white/60 mb-6 max-w-sm leading-relaxed">
              AM Arena هي منصتك الأولى للبطولات والمسابقات الإلكترونية في العالم العربي.
              انضم لمجتمعنا وابدأ رحلتك نحو القمة!
            </p>

            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.href}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.95 }}
                  className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-white/60 group-hover:text-white transition-colors" />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Links */}
          {footerLinks.map((section, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <h3 className="text-white font-bold mb-4">{section.title}</h3>
              <ul className="space-y-3">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}>
                    <a
                      href={link.href}
                      className="text-white/60 hover:text-white transition-colors"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>

        {/* Bottom Section */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/40 text-sm">
            © 2024 AM Arena. جميع الحقوق محفوظة.
          </p>
          <p className="text-white/40 text-sm flex items-center gap-2">
            صُنع بـ <span className="text-red-500">❤️</span> للاعبين العرب
          </p>
        </div>
      </div>
    </footer>
  )
}
