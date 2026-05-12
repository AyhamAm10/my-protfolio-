"use client"

import { motion } from "framer-motion"
import { Zap, Trophy, Shield, Headphones } from "lucide-react"

const features = [
  {
    icon: Zap,
    title: "سيرفرات فائقة السرعة",
    description: "استمتع بتجربة لعب سلسة بدون أي تأخير مع سيرفراتنا المحلية المتطورة",
    gradient: "from-[#d946ef] to-[#a855f7]",
  },
  {
    icon: Trophy,
    title: "جوائز مضمونة",
    description: "اربح جوائز حقيقية ونقاط XP مع كل بطولة. كل مشاركة لها قيمتها!",
    gradient: "from-[#22d3ee] to-[#3b82f6]",
  },
  {
    icon: Shield,
    title: "نظام عادل ومحمي",
    description: "نظام مراقبة متقدم يضمن نزاهة المنافسة ويحمي حقوق جميع اللاعبين",
    gradient: "from-[#10b981] to-[#22d3ee]",
  },
  {
    icon: Headphones,
    title: "دعم محلي 24/7",
    description: "فريق دعم عربي متاح على مدار الساعة لمساعدتك في أي وقت",
    gradient: "from-[#f59e0b] to-[#d946ef]",
  },
]

export function FeaturesSection() {
  return (
    <section id="features" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/4 right-0 w-96 h-96 bg-[#d946ef]/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-1/4 left-0 w-96 h-96 bg-[#22d3ee]/10 rounded-full blur-[100px]" />
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
            <span className="gradient-text">لماذا نحن؟</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            نقدم لك تجربة بطولات استثنائية مع أفضل الميزات التي تجعل منافساتك أكثر متعة وإثارة
          </p>
        </motion.div>

        {/* Features Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              whileHover={{ y: -10, scale: 1.02 }}
              className="glass-card rounded-2xl p-6 gradient-border group"
            >
              {/* Icon */}
              <div className={`w-14 h-14 rounded-xl bg-gradient-to-br ${feature.gradient} p-3 mb-5 group-hover:scale-110 transition-transform`}>
                <feature.icon className="w-full h-full text-white" />
              </div>

              {/* Content */}
              <h3 className="text-xl font-bold text-white mb-3">{feature.title}</h3>
              <p className="text-white/60 leading-relaxed">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
