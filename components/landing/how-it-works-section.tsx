"use client"

import { motion } from "framer-motion"
import { UserPlus, Gamepad2, Award } from "lucide-react"

const steps = [
  {
    icon: UserPlus,
    step: "01",
    title: "سجّل حسابك",
    description: "أنشئ حسابك مجاناً في دقائق معدودة وأكمل ملفك الشخصي",
    color: "#d946ef",
  },
  {
    icon: Gamepad2,
    step: "02",
    title: "انضم للبطولة",
    description: "اختر البطولة المناسبة لك من بين مئات البطولات المتاحة يومياً",
    color: "#22d3ee",
  },
  {
    icon: Award,
    step: "03",
    title: "تنافس واربح",
    description: "أظهر مهاراتك وتنافس مع أفضل اللاعبين واربح جوائز مميزة",
    color: "#10b981",
  },
]

export function HowItWorksSection() {
  return (
    <section id="how-it-works" className="py-24 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#d946ef]/5 to-transparent pointer-events-none" />

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
            <span className="gradient-text">كيف تشارك؟</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            ثلاث خطوات بسيطة تفصلك عن عالم البطولات والجوائز المثيرة
          </p>
        </motion.div>

        {/* Steps */}
        <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="relative"
            >
              {/* Connector Line */}
              {index < steps.length - 1 && (
                <div className="hidden md:block absolute top-20 -left-4 w-full h-0.5 bg-gradient-to-l from-transparent via-white/20 to-transparent" />
              )}

              <div className="glass-card rounded-2xl p-8 text-center group hover:scale-105 transition-transform">
                {/* Step Number */}
                <motion.div
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.5 }}
                  className="w-20 h-20 mx-auto mb-6 rounded-2xl flex items-center justify-center relative"
                  style={{ backgroundColor: `${step.color}20` }}
                >
                  <span 
                    className="absolute -top-2 -right-2 text-5xl font-black opacity-20"
                    style={{ color: step.color }}
                  >
                    {step.step}
                  </span>
                  <step.icon className="w-10 h-10" style={{ color: step.color }} />
                </motion.div>

                {/* Content */}
                <h3 className="text-2xl font-bold text-white mb-3">{step.title}</h3>
                <p className="text-white/60 leading-relaxed">{step.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
