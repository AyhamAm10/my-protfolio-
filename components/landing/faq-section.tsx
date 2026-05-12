"use client"

import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { ChevronDown } from "lucide-react"

const faqs = [
  {
    question: "كيف يمكنني التسجيل في AM Arena؟",
    answer:
      "التسجيل سهل جداً! قم بتحميل التطبيق من متجر التطبيقات، ثم أنشئ حسابك باستخدام رقم هاتفك أو بريدك الإلكتروني. بعد تأكيد حسابك، يمكنك البدء بالمشاركة في البطولات فوراً.",
  },
  {
    question: "هل المشاركة في البطولات مجانية؟",
    answer:
      "نعم! لدينا العديد من البطولات المجانية يومياً. كما توجد بطولات مميزة برسوم اشتراك بسيطة مع جوائز أكبر. يمكنك اختيار ما يناسبك.",
  },
  {
    question: "كيف يتم توزيع الجوائز؟",
    answer:
      "يتم توزيع الجوائز النقدية خلال 24-48 ساعة من انتهاء البطولة عبر وسائل الدفع المتاحة في بلدك. أما نقاط XP فتُضاف لحسابك فوراً.",
  },
  {
    question: "ما هي الألعاب المدعومة؟",
    answer:
      "ندعم حالياً أشهر ألعاب الموبايل مثل PUBG Mobile، Free Fire، Call of Duty Mobile، Valorant، وغيرها. ونعمل على إضافة المزيد من الألعاب باستمرار.",
  },
  {
    question: "هل يمكنني المشاركة من أي بلد عربي؟",
    answer:
      "بالتأكيد! AM Arena متاح لجميع اللاعبين في الوطن العربي. لدينا سيرفرات محلية في عدة مناطق لضمان أفضل تجربة لعب.",
  },
  {
    question: "كيف أتواصل مع الدعم الفني؟",
    answer:
      "يمكنك التواصل معنا عبر الدردشة المباشرة في التطبيق، أو عبر حساباتنا الرسمية على وسائل التواصل الاجتماعي. فريق الدعم متاح 24/7.",
  },
]

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section id="faq" className="py-24 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#d946ef]/5 rounded-full blur-[100px]" />
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
            <span className="gradient-text">الأسئلة الشائعة</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto">
            إجابات على أكثر الأسئلة شيوعاً حول AM Arena
          </p>
        </motion.div>

        {/* FAQ Accordion */}
        <div className="max-w-3xl mx-auto space-y-4">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="glass-card rounded-xl overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full p-5 flex items-center justify-between text-right"
              >
                <span className="text-lg font-bold text-white">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="w-8 h-8 rounded-lg bg-white/10 flex items-center justify-center flex-shrink-0 mr-4"
                >
                  <ChevronDown className="w-5 h-5 text-white/60" />
                </motion.div>
              </button>

              <AnimatePresence>
                {openIndex === index && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: "auto", opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                    className="overflow-hidden"
                  >
                    <div className="px-5 pb-5 pt-0">
                      <p className="text-white/60 leading-relaxed">{faq.answer}</p>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  )
}
