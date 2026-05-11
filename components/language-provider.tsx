"use client";

import { createContext, useContext, useState, ReactNode } from "react";

type Language = "en" | "ar";

interface LanguageContextType {
  language: Language;
  setLanguage: (lang: Language) => void;
  t: (key: string) => string;
  dir: "ltr" | "rtl";
}

const translations: Record<Language, Record<string, string>> = {
  en: {
    // Navigation
    home: "Home",
    features: "Features",
    download: "Download",
    
    // Hero
    heroTitle: "The Arena Awaits",
    heroSubtitle: "Enter the ultimate competitive gaming experience. Battle, rise, and dominate.",
    enterArena: "Enter The Arena",
    watchPreview: "Watch Preview",
    
    // Download Popup
    getApp: "Get AM Arena on Android",
    downloadApk: "Download APK",
    scanQr: "Scan QR Code",
    
    // Competitors
    competitorsTitle: "Built For Competitors",
    competitorsSubtitle: "Meet our top players of the season",
    topPlayer: "Top Player",
    xp: "XP",
    winRate: "Win Rate",
    
    // Features
    featuresTitle: "The Ultimate Arena Experience",
    compete: "Compete",
    competeDesc: "Battle against the best players worldwide",
    vote: "Vote",
    voteDesc: "Choose your champions and influence the arena",
    climb: "Climb",
    climbDesc: "Rise through the ranks and earn your place",
    dominate: "Dominate",
    dominateDesc: "Become the legend of the arena",
    
    // CTA
    ctaTitle: "Season Zero Starts Here",
    ctaSubtitle: "Join thousands of players competing for glory",
    joinNow: "Join Now",
    
    // Footer
    copyright: "AM Arena",
    joinTelegram: "Join Telegram",
  },
  ar: {
    // Navigation
    home: "الرئيسية",
    features: "المميزات",
    download: "تحميل",
    
    // Hero
    heroTitle: "الساحة بانتظارك",
    heroSubtitle: "ادخل تجربة الألعاب التنافسية المطلقة. قاتل، ارتقِ، وسيطر.",
    enterArena: "ادخل الساحة",
    watchPreview: "شاهد العرض",
    
    // Download Popup
    getApp: "احصل على AM Arena للأندرويد",
    downloadApk: "تحميل APK",
    scanQr: "امسح رمز QR",
    
    // Competitors
    competitorsTitle: "مصمم للمنافسين",
    competitorsSubtitle: "تعرف على أفضل لاعبينا هذا الموسم",
    topPlayer: "لاعب متميز",
    xp: "نقاط الخبرة",
    winRate: "نسبة الفوز",
    
    // Features
    featuresTitle: "تجربة الساحة المطلقة",
    compete: "تنافس",
    competeDesc: "قاتل ضد أفضل اللاعبين حول العالم",
    vote: "صوّت",
    voteDesc: "اختر أبطالك وأثّر في الساحة",
    climb: "ارتقِ",
    climbDesc: "اصعد في التصنيفات واحصل على مكانتك",
    dominate: "سيطر",
    dominateDesc: "كن أسطورة الساحة",
    
    // CTA
    ctaTitle: "الموسم صفر يبدأ هنا",
    ctaSubtitle: "انضم إلى آلاف اللاعبين المتنافسين على المجد",
    joinNow: "انضم الآن",
    
    // Footer
    copyright: "AM Arena",
    joinTelegram: "انضم لتيليجرام",
  },
};

const LanguageContext = createContext<LanguageContextType | undefined>(undefined);

export function LanguageProvider({ children }: { children: ReactNode }) {
  const [language, setLanguage] = useState<Language>("en");

  const t = (key: string): string => {
    return translations[language][key] || key;
  };

  const dir = language === "ar" ? "rtl" : "ltr";

  return (
    <LanguageContext.Provider value={{ language, setLanguage, t, dir }}>
      <div dir={dir} className={language === "ar" ? "font-arabic" : "font-sans"}>
        {children}
      </div>
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  const context = useContext(LanguageContext);
  if (context === undefined) {
    throw new Error("useLanguage must be used within a LanguageProvider");
  }
  return context;
}
